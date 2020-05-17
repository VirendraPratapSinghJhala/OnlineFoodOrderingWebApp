import { Component, Input, OnInit } from '@angular/core';
import { Food_Item } from '../../food-item.model';
import { FoodsService } from '../../foods.service';



@Component({
    selector: 'app-food-item',
    templateUrl: './food-item.component.html',
    styleUrls: ['./food-item.component.css']
  })
  export class FoodItemComponent implements OnInit {
  
    @Input()
    item:Food_Item=null;
  
    constructor(private foodsService:FoodsService) { }
  
    ngOnInit(): void {
    }
  
    onFoodItemSelect(){
  
      this.foodsService.foodItemSelected.next(this.item);
  
    }
  }
  