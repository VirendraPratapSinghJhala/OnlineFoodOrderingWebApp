
/*  
  =======================================================================================================
    Developer: Mehul Jain
    Creation Date: 17th May,2020
    Description: This is a service class for Customer related components helping those components to communicate with each other
                 and also allows those components to send and recieve requests through HttpClient. 
  ==========================================================================================================
*/

//import all the required entities from their respective packages
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Customer } from './customer.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 
//make the class injectable so that it can be injected by HttpClient service's object
@Injectable()
//This is a service class for Customer related components helping those components to communicate with each other
//and also allows those components to send and recieve requests through HttpClient.
export class CustomerService implements OnInit{

    //property will hold prefix of the url present in request to web api
    apiPrefix:string;
    
    customerSelected=new Subject<Customer>();

    //constructor for injecting dependencies
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    //initialise properties of class in ngOnInit()
    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    // get all the customers by calling GetAllCustomers() in web api controller
    getAllCustomers():Observable<Customer[]>{

        return this.httpClient.get<Customer[]>(this.apiPrefix +"/api/customer");
    }

    // add the customer by calling AddCustomer() in web api controller and return integer value indicating id of added customer
    postCustomer(customer:Customer):Observable<boolean>{

        return this.httpClient.post<boolean>(this.apiPrefix +"/api/customer",customer);
    }

    //it returns zero or one customer corresponding to the passed id
    getCustomerById(customerId:number):Observable<Customer>
    {
        return this.httpClient.get<Customer>(this.apiPrefix +"/api/customer?Customer_Id="+customerId);
    }

    //returns the boolean value indicating whether passed customer updated or not
    putCustomer(customer:Customer){

        return this.httpClient.put<Customer>(this.apiPrefix +"/api/customer",customer);

    }

    //returns boolean value indicating whether customer with passed customer id is deleted or not
    getCustomerByName(customerName:string):Observable<Customer[]>
    {
        return this.httpClient.get<Customer[]>(this.apiPrefix +"/api/customer?Customer_Name="+customerName);
    }

    //returns boolean value indicating whether customer with passed customer id is deleted or not
    deleteFoodItemBy(customerId:number):Observable<boolean>
    {
        return this.httpClient.delete<boolean>(this.apiPrefix +"/api/customer?customerId="+customerId);
    }

}