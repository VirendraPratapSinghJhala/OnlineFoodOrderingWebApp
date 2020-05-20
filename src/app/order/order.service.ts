

import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';

@Injectable()
export class OrderService implements OnInit{

    foodItemSelected=new Subject<Order>();

    private orderItem1:OrderItem = new OrderItem(2000,50,1);
    private orderItem2:OrderItem = new OrderItem(2000,50,1);
    private orderItem3:OrderItem = new OrderItem(2000,50,3);

    private order:Order = new Order(1 ,100, '27-9-18', 4, 50, 200, 300,[this.orderItem1, this.orderItem2, this.orderItem3]);

    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;

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