import { Component } from '@angular/core';
import { Food_Item } from 'src/app/foods/food-item.model';
import { FoodsService } from 'src/app/foods/foods.service';



@Component({

    selector:'app-search-result',
    templateUrl:'./search-result.component.html',
    styleUrls:['./search-result.component.css']
})
export class SearchResultComponent{

    foodItems:Food_Item[]=[];

    constructor(private foodsService:FoodsService){

    }

    ngOnInit(){
       this.foodsService.getFoodItems().subscribe(
           //handle response
           (response:Food_Item[])=>{this.foodItems=response;},

           //handle error
           (error)=>{console.log(error);}
       );
    }
}