
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
import { GlobalService } from '../shared/global.service';
 

//make the class injectable so that it can be injected by HttpClient service's object
@Injectable()
//This is a service class for Food related components helping those components to communicate with each other
//and also allows those components to send and recieve requests through HttpClient. 
export class FoodsService {

//property will hold prefix of the url present in request to web api
    apiPrefix:string="";

    //constructor for injecting dependencies
    constructor(private httpClient:HttpClient,private webapiService:WebApiService,private globalService:GlobalService){

    }

addToCart(foodItemId:number,foodItemQuantity:number){
    let customerId=this.globalService.getLoginObject().id;
return this.httpClient.put<boolean>('https://localhost:44317/api/order/updatecart?customerId='+customerId+'&foodItemId='+foodItemId+'&foodItemQuantity='+foodItemQuantity, {customerId, foodItemId, foodItemQuantity});
}

getData(){

   return this.httpClient.get<any>('https://localhost:44317/api/food/getallfooditems');
}
   

// get all the food items by calling GetAllFoodItems() in web api controller
    getFoodItems():Observable<Food_Item[]>{

        return this.httpClient.get<Food_Item[]>("https://localhost:44317/api/food/getallfooditems");
        
        
    }

// add the food item by calling AddFoodItem() in web api controller and return integer value indicating id of added food item
    postFoodItem(foodItem:Food_Item):Observable<number>{

        return this.httpClient.post<number>(this.apiPrefix +"/api/food/addfooditem",foodItem);
    }

//it returns zero or one food item corresponding to the passed id
    getFoodItemById(foodId:number):Observable<Food_Item>
    {
        return this.httpClient.get<Food_Item>("https://localhost:44317/api/food/getfooditembyid?foodItemId="+foodId);
    }

//returns the boolean value indicating whether passed foodItem updated or not
    putFoodItem(foodItem:Food_Item):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/food/updatefooditem",foodItem);

    }

//returns an array of food items corresponding to the passed food item name
    getFoodItemsByName(foodName:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food/getfooditembyfoodname?foodItemName="+foodName);
    }

//returns an array of food items corresponding to the passed food item type
getFoodItemsByType(foodType:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food/getfooditembyfoodtype?foodItemType="+foodType);
    }

//returns an array of food items corresponding to the passed food item price range
    getFoodItemsByPriceRange(min:number,max:number):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food/getfooditembypricerange?min="+min+"&&max="+max);
    }

//returns boolean value indicating whether food item with passed food id is deleted or not
    deleteFoodItemById(foodId:number):Observable<boolean>
    {
        return this.httpClient.delete<boolean>(this.apiPrefix +"/api/food/deletefooditem?foodItemId="+foodId);

    }

}













// foods:Food_Item[]=[];
//     //constructor for injecting dependencies
//     constructor(private httpClient:HttpClient,private webapiService:WebApiService){

//       this.foods.push(new Food_Item('pizza','fast food','https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946__340.jpg',400));
//       this.foods.push(new Food_Item('burger','fast food','https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',300));
//     }

// getFoods(){
//     return this.foods;
// }

// getByName(foodName:string):Food_Item[]
// {
//     return this.foods;
// }

// getByType(foodType:string):Food_Item[]
// {
//     return this.foods;
// }

// getByPrice(min:number,max:number){
//     return this.foods;
// }

// getById(id:number){
//     return this.foods[id];
// }