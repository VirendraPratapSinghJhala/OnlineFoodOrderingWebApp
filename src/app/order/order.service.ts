/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the typescript logic for handling orders services
  ==========================================================================================================
*/
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';

@Injectable()
export class OrderService{
    
    apiPrefix:string;

    // private orderItem1:OrderItem = new OrderItem(2000,50,1,"Pizza");
    // private orderItem2:OrderItem = new OrderItem(2000,50,1,"Burger");
    // private orderItem3:OrderItem = new OrderItem(2000,50,3,"Ice Cream");

    // private order0:Order = new Order(1 ,100, '27-9-18', 4, 50, 200, 300,[this.orderItem1, this.orderItem2, this.orderItem3]);
    // private order1:Order = new Order(22 ,100, '27-9-18', 4, 50, 200, 300,[this.orderItem1, this.orderItem2]);

    // private orderList:Order[] = [this.order0, this.order1];
    // sampleGetOrder():Order[]{
    //     return this.orderList;
    // }
    // sampleGetOrderDetail(orderId):Order{
    //     let order = null;
    //     for(let i = 0; i < this.orderList.length; i ++){
    //         if(this.orderList[i].orderId == orderId){
    //             return this.orderList[i];
    //         }
    //     }
    // }
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){
        this.apiPrefix=this.webapiService.urlPrefix;
    }
    
    getOrdersByCustomerId(customerId:number):Observable<any>
    {
        return this.httpClient.get<any>("https://localhost:44317/api/order/getcustomerorders?customerId="+ customerId +"&fromEntryNo=0&toEntryNo=10");
    }



    getOrders():Observable<Order[]>{

        return this.httpClient.get<Order[]>(this.apiPrefix +"/api/order");
    }


    postOrder(order:Order){
        return this.httpClient.post<Order>(this.apiPrefix +"/api/order",order);
    }


    orderValueMapper(ordersListResponse: Array<any>)
    {
        let resultOrdersList:Order[] = [];
        ordersListResponse.forEach(({ Order_Id, Customer_Id, Total_Quantity, Total_Price, Food_Store_Id, Employee_Id, Order_Items, Order_date })=>{
            let order: Order = new Order(null,null,null,null,null,null,null, null);
            order.orderId = Order_Id,
            order.customerId = Customer_Id,
            order.totalQuantity = Total_Quantity,
            order.totalPrice = Total_Price,
            order.foodStoreId = Food_Store_Id,
            order.employeeId = Employee_Id,
            order.orderDate = Order_date,
            order.orderItemList = this.orderItemValueMapper(Order_Items);
            resultOrdersList.push(order);
        });

        return resultOrdersList;
    }

    orderItemValueMapper(orderItemsListResponse){
        let resultOrderItemList:OrderItem[] = [];
        orderItemsListResponse.forEach(element => {
            let singleItem = new OrderItem(null, null, null, null, null);
            singleItem.foodItemId = element['Food_Item_Id'];
            singleItem.foodItemName = element['Food_Items']['Food_Name'];
            singleItem.quantity = element['Quantity'];
            singleItem.price = element['Price'];
            singleItem.foodItemImagePath = element['Food_Items']['ImagePath'];
            console.log(singleItem);
            resultOrderItemList.push(singleItem);
        });
        return(resultOrderItemList);
    }
}
