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
      this.foodsService.getFoodItems().subscribe(
        (response:Food_Item[])=>{this.foodItems=response}
      );

    }

  }

}
