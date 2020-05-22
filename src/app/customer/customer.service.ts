
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

    customer:Customer[]=[
        new Customer(
            1,
            "Mehul",
            "Jaipu",
            22,
            "mehul@gmail.com",
            "9887515652",
            "m@123"
        ),
        new Customer(
            2,
            "Prateek",
            "Jaipur",
            22,
            "prateek@gmail.com",
            "8696038381",
            "p@123"
        ),
        new Customer(
            400001,
            "Prateek",
            "Jaipur",
            22,
            "customer@gmail.com",
            "8696038381",
            "Customer123"
        )
    ];

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

    getSampleAllCustomers(){
        return(this.customer);
    }

    getSampleCustomer(){
        return(this.customer[0]);
    }

    sampleLogin(email:string, password:string){
        for(let i = 0; i < this.customer.length; i ++){
            console.log(email + this.customer[i].email + "  " + password);
            if(this.customer[i].email == email && this.customer[i].password == password){
                return {status: true, id: this.customer[i].id};
            }
        }
        return { status: false, id: null};
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
    putCustomer(customer:Customer):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/customer",customer);

    }

    //returns boolean value indicating whether customer with passed customer id is deleted or not
    getCustomerByName(customerName:string):Observable<Customer[]>
    {
        return this.httpClient.get<Customer[]>(this.apiPrefix +"/api/customer?Customer_Name="+customerName);
    }

    //returns boolean value indicating whether customer with passed customer id is deleted or not
    deleteCustomerById(customerId:number):Observable<boolean>
    {
        return this.httpClient.delete<boolean>(this.apiPrefix +"/api/customer?customerId="+customerId);
    }

}