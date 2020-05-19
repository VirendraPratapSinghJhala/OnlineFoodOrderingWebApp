

import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Customer } from './customer.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 

@Injectable()
export class CustomerService implements OnInit{

    foodItemSelected=new Subject<Customer>();

   private Customers:Customer[]=[
          
        new Customer(1, 'Ram','Jaipur',20,'ram@gmail.com','9887515453','ram@123'),
        new Customer(2, 'Shyam','Delhi',22,'shyam@gmail.com','9887515454','shyam@123')
		
	];
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;

    getCustomers():Observable<Customer[]>{

        return this.httpClient.get<Customer[]>(this.apiPrefix +"/api/customer");
    }


    postCustomer(customer:Customer){

        return this.httpClient.post<Customer>(this.apiPrefix +"/api/customer",customer);
    }


    getCustomerById(customerId:number):Observable<Customer>
    {
        return this.httpClient.get<Customer>(this.apiPrefix +"/api/customer?Customer_Id="+customerId);
    }

    putCustomer(customer:Customer){

        return this.httpClient.put<Customer>(this.apiPrefix +"/api/customer",customer);

    }

    getCustomerByName(customerName:string):Observable<Customer[]>
    {
        return this.httpClient.get<Customer[]>(this.apiPrefix +"/api/customer?Customer_Name="+customerName);
    }


}