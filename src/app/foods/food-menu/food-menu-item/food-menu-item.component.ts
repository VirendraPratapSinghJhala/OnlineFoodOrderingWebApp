import { Component, OnInit, Input } from '@angular/core';
import { Food_Item } from '../../food-item.model';
import { GlobalService } from 'src/app/shared/global.service';
import { FoodsService } from '../../foods.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.css']
})
export class FoodMenuItemComponent implements OnInit {


  @Input()
  foodItem:Food_Item=null;
  
  constructor(private globalService:GlobalService,private cartService:CartService,private foodssService:FoodsService) { }

  ngOnInit(): void {

  
  }

 //action to be performed when user clicks on Add To Cart button 
 onAddToCart(){
  //subscribe to CartService's addToCart method 
  this.cartService.addToCart(this.foodItem.Food_Item_Id,parseInt(this.globalService.getLoginObject().id.toString(),10)).subscribe(
     
      //handle the response
      (response:boolean)=>{console.log(response);
                          if(response){alert('Food item added to cart successfully,you may check your cart ')}
                      else{alert('Food Item not added to cart successfully');}},

                      //handle the error
                      (error)=>{console.log(error);}
  );
    }
}
