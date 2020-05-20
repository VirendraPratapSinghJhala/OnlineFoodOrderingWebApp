

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for a food item with all expected validations 
                 and sends the input data in form of Food_Item type object to the FoodsService
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';
import { ActivatedRoute, Params } from '@angular/router';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class FoodDetailComponent implements OnInit {

  //stores Food_Item type object
  foodItem:Food_Item;

  //stores id of food item in number format
  id:number;
    //constructor used for injecting dependency


  constructor(private foodsService:FoodsService,private route:ActivatedRoute) { }


//ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    //extracting/fetching the url parameter 'id' and storing it in property id
    this.route.params.subscribe(
      (params:Params)=>{this.id= +params['id'];}
      
    );

    //call FoodsService class's getFoodItemById to get food_Item with id and assign it to property foodItem
    this.foodsService.getFoodItemById(this.id).subscribe(
      (response:Food_Item)=>{this.foodItem=response;}
    );
   
  }

  //action to be performed on click of add to cart link in dropdown
 onAddToCart(){
     
 }



onDeleteFoodItem(){

  this.foodsService.deleteFoodItemById(this.id).subscribe(
    
    //handle response
    (response:boolean)=>{if(response==true)
    {}},

    //handle errors
    (error)=>{console.log(error);}
  );
}

}
