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
import { Cart } from './Cart.model';
import { OrderItem } from '../order/order-item.model';

@Injectable()
export class CartService implements OnInit{

    foodItemSelected=new Subject<any>();

    private cartItem1:OrderItem = new OrderItem(2000,50,1,"Pizza");
    private cartItem2:OrderItem = new OrderItem(2001,70,1,"Burger");
    private cartItem3:OrderItem = new OrderItem(2002,30,3,"Ice Cream");

    private cart:Cart = new Cart(1,100,3,500,200,1000,[this.cartItem1, this.cartItem2, this.cartItem3]);

    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;
    
    get(){
        return this.cart;
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
        return this.httpClient.put<any>("https://localhost:44317/api/order/updatecart",Cart);
    }

    deleteFromCart(customerId:number, foodItemId:number){
        let requestObject = {
            "Customer_Id":customerId,
            "Order_Items":[{"Food_Item_Id":foodItemId, "Quantity":0}]
        };
        return this.httpClient.put<any>("https://localhost:44317/api/order/updatecart",Cart);
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
            "Order_Items":orderItemsList
        };
        return this.httpClient.put<any>("https://localhost:44317/api/order/updatecart", requestObject);
    }



}