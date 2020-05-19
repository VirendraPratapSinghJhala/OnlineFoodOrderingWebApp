import { Component, OnInit} from '@angular/core';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {


  foodItems:Food_Item[];
  serviceMethodName:string=null;
  constructor(private foodsService:FoodsService) { }

  ngOnInit(){

    this.foodsService.serviceMethodToBeCalled.subscribe(
      (response:string)=>{this.serviceMethodName=response;}
    );

    if(this.serviceMethodName=='getFoodItemsByName')
    {
      // this.foodsService.getFoodItemsByName().subscribe(
      //   (response:Food_Item[])=>{this.foodItems=response}
      // );

    }

    else if(this.serviceMethodName=='getFoodItemsByType')
    {
      // this.foodsService.getFoodItemsByType().subscribe(
      //   (response:Food_Item[])=>{this.foodItems=response}
      // );
    }

     else if(this.serviceMethodName=='getFoodItemsByPriceRange')
      {
        // this.foodsService.getFoodItemsByPriceRange().subscribe(
        //   (response:Food_Item[])=>{this.foodItems=response}
        // );
      }

  }

}
