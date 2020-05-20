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

    foodItemSelected=new Subject<Cart>();

    private cartItem1:OrderItem = new OrderItem(2000,50,1);
    private cartItem2:OrderItem = new OrderItem(2001,70,1);
    private cartItem3:OrderItem = new OrderItem(2002,30,3);

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
    getCarts():Observable<Cart[]>{

        return this.httpClient.get<Cart[]>(this.apiPrefix +"/api/Cart");
    }


    postCart(Cart:Cart){
        return this.httpClient.post<Cart>(this.apiPrefix +"/api/Cart",Cart);
    }

    getCartByCustomerId(customerId:number):Observable<Cart>
    {
        return this.httpClient.get<Cart>(this.apiPrefix +"/api/getCartbycustomerid/"+customerId);
    }



}