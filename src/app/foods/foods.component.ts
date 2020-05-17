import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food_Item } from './food-item.model';
import { FoodsService } from './foods.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  
})
export class FoodsComponent implements OnInit {

   selectedFoodItem:Food_Item;
   foodItemSubscription:Subscription;
   
  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.foodItemSubscription= this.foodsService.foodItemSelected.subscribe(
      (foodItem:Food_Item)=>{this.selectedFoodItem=foodItem}
    );
  }

  ngOnDestroy(){
    this.foodItemSubscription.unsubscribe();
  }


}
