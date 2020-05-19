
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
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

//array of type Food_Item to hold multiple objects of Food_Item type
    foodIems:Food_Item[]=[];

//property will hold prefix of the url present in request to web api
    apiPrefix:string;
    

    foodItemSelected=new Subject<Food_Item>();

    serviceMethodToBeCalled=new Subject<{methodName:string,parameter:string,parameter1:number,parameter2:number}>();
    

    //constructor for injecting dependencies
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

        this.foodIems.push(new Food_Item('Pizza','Fast food','data:image/jpeg;base64,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',400));

    }

    get(){
        return this.foodIems;
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
    deleteFoodItemBy(foodId:number):Observable<boolean>
    {
        return this.httpClient.delete<boolean>(this.apiPrefix +"/api/food?foodItemId="+foodId);

    }

}