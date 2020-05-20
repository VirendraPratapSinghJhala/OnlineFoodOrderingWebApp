
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user input as minimum and maximum food price for searching for food items having 
                 prices between entered inputs
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodsService } from 'src/app/foods/foods.service';
import { Food_Item } from 'src/app/foods/food-item.model';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-search-food-price',
  templateUrl: './search-food-price.component.html',
  styleUrls: ['./search-food-price.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class SearchFoodPriceComponent implements OnInit {

  //declare reactive form of type FormGroup
  searchByPriceRangeForm:FormGroup=null;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

  //declare minFoodPrice to store minimum price of food
  minFoodPrice:number=null;

  //declare maxFoodPrice to store maximum price of food
  maxFoodPrice:number=null;

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

     //initialise searchByPriceRangeForm
    this.searchByPriceRangeForm=new FormGroup({

            //apply all the required validations on all the input controls
      'minPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      'maxPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
    }
    );
  }

  //action to be performed on submitting the form
  onSubmit(){

    //make isSubmitted bit true
   this.isFormSubmitted=true;

   //assign the inputs to the declared properties 
   this.minFoodPrice=this.searchByPriceRangeForm.value.minPrice;
   this.maxFoodPrice=this.searchByPriceRangeForm.value.maxPrice;

   //indicate FoodListComponent to load data according to Food price range
   this.foodsService.serviceMethodToBeCalled.next({methodName:'getFoodItemsByPriceRange',parameter:null,
   parameter1:this.minFoodPrice,parameter2:this.maxFoodPrice}); 

   //reset form
   this.searchByPriceRangeForm.reset();

  }

}