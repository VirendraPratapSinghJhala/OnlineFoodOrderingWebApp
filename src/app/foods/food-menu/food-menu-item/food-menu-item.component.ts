import { Component, OnInit, Input } from '@angular/core';
import { Food_Item } from '../../food-item.model';
import { GlobalService } from 'src/app/shared/global.service';
import { FoodsService } from '../../foods.service';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.css']
})
export class FoodMenuItemComponent implements OnInit {


  @Input()
  foodItem:Food_Item=null;
  
  constructor(private globalService:GlobalService,private foodssService:FoodsService) { }

  ngOnInit(): void {

  
  }

  onAddToCart(){
this.foodssService.addToCart(this.foodItem.Food_Item_Id,1).subscribe((response:boolean)=>{console.log(response)});;
  }

}
