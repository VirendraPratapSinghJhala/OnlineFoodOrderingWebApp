/*  
  =======================================================================================================
    Developer: Kritika Arora
    Creation Date: 17th May,2020
    Description: This is a service class for Food Store related components helping those components to communicate with each other
                 and also allows those components to send and recieve requests through HttpClient. 
  ==========================================================================================================
*/
//import all the required entities from their respective packages
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FoodStore} from './food-store.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 
//make the class injectable so that it can be injected by HttpClient service's object
@Injectable()
//This is a service class for Food Store related components helping those components to communicate with each other
//and also allows those components to send and recieve requests through HttpClient.
export class FoodsStoreService implements OnInit{

    foodStoreSelected=new Subject<FoodStore>();

   private food_Stores:FoodStore[]=[
        new FoodStore(1,'Dominos','Jaipur','1234567890','xyz@gmail.com',5),
        new FoodStore(2,'McDonalds','Jaipur','1234567890','mac@gmail.com',5)];


  //constructor for injecting dependencies
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }
//initialise properties of class in ngOnInit()
    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }
    getSammpleAllFoodStore(){
        return(this.food_Stores);
    }


    getSammpleFoodStore(){
        return(this.food_Stores[0]);
    }

    //property will hold prefix of the url present in request to web api
    apiPrefix:string;
 // get all the food stores by calling GetFoodStores() in web api controller
    getFoodStores():Observable<FoodStore[]>{

        return this.httpClient.get<FoodStore[]>(this.apiPrefix +"/api/food");
    }

 // add the food store by calling postFoodStore() in web api controller and return integer value indicating id of added food store
    postFoodStore(foodStore:FoodStore):Observable<number>{

        return this.httpClient.post<number>(this.apiPrefix +"/api/food",foodStore);
    }

//it returns zero or one food store corresponding to the passed id
    getFoodStoreById(foodStoreId:boolean):Observable<FoodStore>
    {
        return this.httpClient.get<FoodStore>(this.apiPrefix +"/api/food?Food_Store_Id="+foodStoreId);
    }
    //returns the boolean value indicating whether passed customer updated or not,if updated 1 will return otherwise 0 will return

    putFoodStore(foodStore:FoodStore):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/food",foodStore);

    }
 // get all the food stores by calling getFoodStoreByName() by passing foodStoreName as argument
    getFoodStoreByName(foodStoreName:string):Observable<FoodStore[]>
    {
        return this.httpClient.get<FoodStore[]>(this.apiPrefix +"/api/food?Food_Store_Name="+foodStoreName);
    }
 // get all the food stores by calling getFoodStoreByName() by passing Location as argument
    getFoodStoreByLocation(foodLocation:string):Observable<FoodStore[]>
    {
        return this.httpClient.get<FoodStore[]>(this.apiPrefix +"/api/food?Food_Location="+foodLocation);
    }

    

}