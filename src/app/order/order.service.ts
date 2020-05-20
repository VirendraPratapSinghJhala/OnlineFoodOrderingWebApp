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
export class OrderService implements OnInit{

    foodItemSelected=new Subject<Order>();

    private orderItem1:OrderItem = new OrderItem(2000,50,1,"Pizza");
    private orderItem2:OrderItem = new OrderItem(2000,50,1,"Burger");
    private orderItem3:OrderItem = new OrderItem(2000,50,3,"Ice Cream");

    private order0:Order = new Order(1 ,100, '27-9-18', 4, 50, 200, 300,[this.orderItem1, this.orderItem2, this.orderItem3]);
    private order1:Order = new Order(22 ,100, '27-9-18', 4, 50, 200, 300,[this.orderItem1, this.orderItem2]);

    private orderList:Order[] = [this.order0, this.order1];
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){
    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;

    sampleGetOrder():Order[]{
        return this.orderList;
    }

    sampleGetOrderDetail(orderId):Order{
        let order = null;
        for(let i = 0; i < this.orderList.length; i ++){
            if(this.orderList[i].orderId == orderId){
                return this.orderList[i];
            }
        }
    }

    getOrders():Observable<Order[]>{

        return this.httpClient.get<Order[]>(this.apiPrefix +"/api/order");
    }


    postOrder(order:Order){
        return this.httpClient.post<Order>(this.apiPrefix +"/api/order",order);
    }

    getOrderByCustomerId(customerId:number):Observable<Order>
    {
        return this.httpClient.get<Order>(this.apiPrefix +"/api/getorderbycustomerid/"+customerId);
    }



}