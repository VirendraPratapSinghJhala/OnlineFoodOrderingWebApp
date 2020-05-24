/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the typescript logic for handling cart services
  ==========================================================================================================
*/

import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
import { Cart } from './cart.model';
import { OrderItem } from '../order/order-item.model';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class CartService{

    // foodItemSelected=new Subject<any>();

    // private cartItem1:OrderItem = new OrderItem(2000,50,1,"Pizza");
    // private cartItem2:OrderItem = new OrderItem(2001,70,1,"Burger");
    // private cartItem3:OrderItem = new OrderItem(2002,30,3,"Ice Cream");

    // private cart:Cart = new Cart(1,100,3,500,200,1000,[this.cartItem1, this.cartItem2, this.cartItem3]);
    
    // get(){
        //     return this.cart;
        // }
        
    httpOptions: {headers: Object};
    apiPrefix:string;
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){
        this.apiPrefix=this.webapiService.urlPrefix;
        httpOptions.headers = httpOptions.headers.set('Content-Type', 'application/json');
    }
      

    getCartByCustomerId(customerId:number):Observable<any>
    {
        return this.httpClient.get<any>("https://localhost:44317/api/order/getcustomercart?customerId=" + customerId);
    }

    addToCart(customerId:number, foodItemId:number){
        let requestObject = {
            "Customer_Id":customerId,
            "Order_Items":[{"Food_Item_Id":foodItemId, "Quantity":1}]
        };
        return this.httpClient.put<boolean>("https://localhost:44317/api/order/updatecart", requestObject, httpOptions);
    }

    deleteFromCart(customerId:number, foodItemId:number){
        let requestObject = {
            "Customer_Id":customerId,
            "Order_Items":[{"Food_Item_Id":foodItemId, "Quantity":0}]
        };
        return this.httpClient.put<boolean>("https://localhost:44317/api/order/updatecart", requestObject, httpOptions);
    }
    // sample request for /order/updatecart
    // {
    //     "Customer_Id":400001,
    //     "Order_Items":[{"Food_Item_Id":100001, "Quantity":0}, {"Food_Item_Id": 100002, "Quantity":0}]
    // }
    //
    // to add new item to cart simply updateCart with 
    // {
    //     "Customer_Id":400001,
    //     "Order_Items":[{"Food_Item_Id":100001, "Quantity":1}]
    // }
    //
    // Use Quantity: 0 or Quantity -1 to DELETE from Cart

    updateCart(customerId:number, orderItemsList:OrderItem[]){
        let requestObject = {
            "Customer_Id":customerId,
            "Order_Items":this.orderItemValueMapperForRequest(orderItemsList)
        };
        console.log(JSON.stringify(requestObject));
        return this.httpClient.put<boolean>("https://localhost:44317/api/order/updatecart", requestObject, httpOptions);
    }

    checkout(customerId){
        return this.httpClient.get<boolean>("https://localhost:44317/api/order/submitorder?customerid=" + customerId);
    }
    

    cartValueMapper({ Order_Id, Customer_Id, Total_Quantity, Total_Price, Food_Store_Id, Employee_Id, Order_Items }){
        let cart: Cart = new Cart(null,null,null,null,null,null,null);
        cart.cartId = Order_Id,
        cart.customerId = Customer_Id,
        cart.totalQuantity = Total_Quantity,
        cart.totalPrice = Total_Price,
        cart.foodStoreId = Food_Store_Id,
        cart.employeeId = Employee_Id,
        cart.cartItemList = this.cartItemValueMapper(Order_Items);
        return cart;
    }

    private cartItemValueMapper(orderItemsList){
        let cartItemList: OrderItem[] = [];
        orderItemsList.forEach(element => {
            let singleItem = new OrderItem(null, null, null, null, null);
            singleItem.foodItemId = element['Food_Item_Id'];
            singleItem.foodItemName = element['Food_Items']['Food_Name'];
            singleItem.foodItemImagePath = element['Food_Items']['ImagePath'];
            singleItem.quantity = element['Quantity'];
            singleItem.price = element['Price'];
            cartItemList.push(singleItem);
        });
        return cartItemList;
    }

    private orderItemValueMapperForRequest(cartItemsList: OrderItem[]): any[]{
        let Order_Items: { Food_Item_Id: number, Quantity: number }[] = [];
        
        cartItemsList.forEach((singleItem)=>{
            let item: { Food_Item_Id: number, Quantity: number } = { Food_Item_Id: null, Quantity: null };
            item.Food_Item_Id = singleItem.foodItemId;
            item.Quantity = singleItem.quantity;
            Order_Items.push(item);
        });

        return Order_Items;
    }
}
