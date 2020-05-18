


import { Component, OnInit } from '@angular/core';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  
  foodItem:Food_Item;
  id:number;
  
  constructor(private foodsService:FoodsService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:Params)=>{this.id= +params['id'], this.foodItem=this.foodsService.getFoodItemById(this.id);}
      
    );
   
  }

 onAddToCart(){
     
 }

}
