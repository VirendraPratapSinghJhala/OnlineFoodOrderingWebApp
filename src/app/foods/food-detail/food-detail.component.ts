


import { Component, OnInit, Input } from '@angular/core';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  @Input()
  foodItem:Food_Item;
  
  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {
  }

 onAddToCart(){
     
 }

}
