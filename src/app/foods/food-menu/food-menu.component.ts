/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 19th May,2020
    Description: This is a base component that holds three child components search-food-name,search-food-type,
                 and search-food-price and displays one of them in router outlet
  ==========================================================================================================
*/


//decorator used for storing Component's metadata
import { Component, OnInit } from '@angular/core';
import { Food_Item } from '../food-item.model';
import { Router } from '@angular/router';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {


  foodItems: Food_Item[] = null;

  //constructor used for injecting dependency
  constructor(private foodsService: FoodsService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit() {

     this.foodsService.getFoodItems().subscribe(

       //handle response
      (response:Food_Item[])=>{this.foodItems=response;
                                console.log(response);}


     );

    //  this.foodsService.getData().subscribe(
    //    data=>{console.log(data);},
    //    (error)=>{console.log( error );}
    //  );

   // this.foodItems= this.foodsService.getFoods();
 

}
}