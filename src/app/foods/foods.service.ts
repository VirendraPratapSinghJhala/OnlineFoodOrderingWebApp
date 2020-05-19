

import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Food_Item } from './food-item.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 

@Injectable()
export class FoodsService implements OnInit{

    foodItemSelected=new Subject<Food_Item>();

    serviceMethodToBeCalled=new Subject<string>();

    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;

    getFoodItems():Observable<Food_Item[]>{

        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food");
    }


    postFoodItem(foodItem:Food_Item):Observable<number>{

        return this.httpClient.post<number>(this.apiPrefix +"/api/food",foodItem);
    }


    getFoodItemById(foodId:number):Observable<Food_Item>
    {
        return this.httpClient.get<Food_Item>(this.apiPrefix +"/api/food?Food_Item_Id="+foodId);
    }

    putFoodItem(foodItem:Food_Item):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/food",foodItem);

    }

    getFoodItemsByName(foodName:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?Food_Name="+foodName);
    }

    getFoodItemsByType(foodType:string):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?Food_Type="+foodType);
    }

    getFoodItemsByPriceRange(min:number,max:number):Observable<Food_Item[]>
    {
        return this.httpClient.get<Food_Item[]>(this.apiPrefix +"/api/food?Price="+min+"&&Price="+max);
    }

}