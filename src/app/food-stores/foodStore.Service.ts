

import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FoodStore} from './food-store.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 

@Injectable()
export class FoodsStoreService implements OnInit{

    foodStoreSelected=new Subject<FoodStore>();

   private food_Stores:FoodStore[]=[
        new FoodStore(1,'Dominos','Jaipur','1234567890','xyz@gmail.com',5)];

    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;

    getFoodStores():Observable<FoodStore[]>{

        return this.httpClient.get<FoodStore[]>(this.apiPrefix +"/api/food");
    }


    postFoodStore(foodStore:FoodStore):Observable<number>{

        return this.httpClient.post<number>(this.apiPrefix +"/api/food",foodStore);
    }


    getFoodStoreById(foodStoreId:boolean):Observable<FoodStore>
    {
        return this.httpClient.get<FoodStore>(this.apiPrefix +"/api/food?Food_Store_Id="+foodStoreId);
    }

    putFoodStore(foodStore:FoodStore):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/food",foodStore);

    }

    getFoodStoreByName(foodStoreName:string):Observable<FoodStore[]>
    {
        return this.httpClient.get<FoodStore[]>(this.apiPrefix +"/api/food?Food_Store_Name="+foodStoreName);
    }

    getFoodStoreByLocation(foodLocation:string):Observable<FoodStore[]>
    {
        return this.httpClient.get<FoodStore[]>(this.apiPrefix +"/api/food?Food_Location="+foodLocation);
    }

    

}