import { Component, Input } from '@angular/core';
import { Food_Item } from 'src/app/foods/food-item.model';
import { FoodsService } from 'src/app/foods/foods.service';
import { GlobalService } from 'src/app/shared/global.service';
import { CartService } from 'src/app/cart/cart.service';



@Component({

    selector:'app-search-result',
    templateUrl:'./search-result.component.html',
    styleUrls:['./search-result.component.css']
})
export class SearchResultComponent{

    @Input()
    foodItem:Food_Item=null;

    constructor(private globalService:GlobalService,private cartService:CartService){

    }

    ngOnInit(){
      
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