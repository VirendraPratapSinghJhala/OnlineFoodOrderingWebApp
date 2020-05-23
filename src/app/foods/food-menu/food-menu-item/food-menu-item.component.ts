import { Component, OnInit, Input } from '@angular/core';
import { Food_Item } from '../../food-item.model';
import { GlobalService } from 'src/app/shared/global.service';
import { FoodsService } from '../../foods.service';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.css']
})
export class FoodMenuItemComponent implements OnInit {


  @Input()
  foodItem:Food_Item=null;
  
  constructor(private globalService:GlobalService,private foodssService:FoodsService, private cartService: CartService) { }

  ngOnInit(): void {

  
  }

  onAddToCart(){
    this.cartService.addToCart(parseInt(this.globalService.getLoginObject().id.toString()), this.foodItem.Food_Item_Id).subscribe(
      (response)=>{
        if(response){
          alert("Item successfully added to the cart");
        }
      },
      (error)=>{
        alert("Could not add this item to cart for the moment");
      }
    );
  }

}
