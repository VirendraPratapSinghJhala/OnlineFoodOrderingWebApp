import { Component, Input } from '@angular/core';
import { Food_Item } from 'src/app/foods/food-item.model';
import { FoodsService } from 'src/app/foods/foods.service';



@Component({

    selector:'app-search-result',
    templateUrl:'./search-result.component.html',
    styleUrls:['./search-result.component.css']
})
export class SearchResultComponent{

    @Input()
    foodItem:Food_Item=null;

    constructor(private foodsService:FoodsService){

    }

    ngOnInit(){
      
    }

    onAddToCart(){
        this.foodsService.addToCart(this.foodItem.Food_Item_Id,1).subscribe((response:boolean)=>{console.log(response)});
          }
}