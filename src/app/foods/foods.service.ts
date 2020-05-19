

import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Food_Item } from './food-item.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 

@Injectable()
export class FoodsService implements OnInit{

    foodItemSelected=new Subject<Food_Item>();

   private food_Items:Food_Item[]=[
        new Food_Item('Test Food','Rajasthani','data:image/jpeg;base64,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',1000),
          

        new Food_Item('Test Food 1','American','data:image/jpeg;base64,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',1200)];

    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;

    getFoodItems():Observable<Food_Item[]>{

        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food");
    }


    postFoodItem(foodItem:Food_Item){

        return this.httpClient.post<Food_Item>(this.apiPrefix +"/api/food",foodItem);
    }


    getFoodItemById(foodId:number):Observable<Food_Item>
    {
        return this.httpClient.get<Food_Item>(this.apiPrefix +"/api/food?Food_Item_Id="+foodId);
    }

    putFoodItem(foodItem:Food_Item){

        return this.httpClient.put<Food_Item>(this.apiPrefix +"/api/food",foodItem);

    }

    getFoodItemByName(foodName:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?Food_Name="+foodName);
    }

    getFoodItemByType(foodType:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?Food_Type="+foodType);
    }

    getFoodItemByPriceRange(min:number,max:number):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?Price="+min+"&&Price="+max);
    }

}