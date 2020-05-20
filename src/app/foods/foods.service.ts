
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 18th May,2020
    Description: This is a service class for Food related components helping those components to communicate with each other
                 and also allows those components to send and recieve requests through HttpClient. 
  ==========================================================================================================
*/

//import all the required entities from their respective packages
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Food_Item } from './food-item.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 

//make the class injectable so that it can be injected by HttpClient service's object
@Injectable()
//This is a service class for Food related components helping those components to communicate with each other
//and also allows those components to send and recieve requests through HttpClient. 
export class FoodsService implements OnInit{

//property will hold prefix of the url present in request to web api
    apiPrefix:string;
    


    serviceMethodToBeCalled=new Subject<{methodName:string,parameter:string,parameter1:number,parameter2:number}>();
    

    //constructor for injecting dependencies
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){


    }


    //initialise properties of class in ngOnInit()
    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

   
// get all the food items by calling GetAllFoodItems() in web api controller
    getFoodItems():Observable<Food_Item[]>{

        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food");
    }

// add the food item by calling AddFoodItem() in web api controller and return integer value indicating id of added food item
    postFoodItem(foodItem:Food_Item):Observable<number>{

        return this.httpClient.post<number>(this.apiPrefix +"/api/food",foodItem);
    }

//it returns zero or one food item corresponding to the passed id
    getFoodItemById(foodId:number):Observable<Food_Item>
    {
        return this.httpClient.get<Food_Item>(this.apiPrefix +"/api/food?foodItemId="+foodId);
    }

//returns the boolean value indicating whether passed foodItem updated or not
    putFoodItem(foodItem:Food_Item):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/food",foodItem);

    }

//returns an array of food items corresponding to the passed food item name
    getFoodItemsByName(foodName:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?foodItemName="+foodName);
    }

//returns an array of food items corresponding to the passed food item type
getFoodItemsByType(foodType:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?foodItemType="+foodType);
    }

//returns an array of food items corresponding to the passed food item price range
    getFoodItemsByPriceRange(min:number,max:number):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?min="+min+"&&max="+max);
    }

//returns boolean value indicating whether food item with passed food id is deleted or not
    deleteFoodItemById(foodId:number):Observable<boolean>
    {
        return this.httpClient.delete<boolean>(this.apiPrefix +"/api/food?foodItemId="+foodId);

    }

}