
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user input as food type for searching for food items having 
                  entered food type
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodsService } from 'src/app/foods/foods.service';
import { Food_Item } from 'src/app/foods/food-item.model';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-search-food-type',
  templateUrl: './search-food-type.component.html',
  styleUrls: ['./search-food-type.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class SearchFoodTypeComponent implements OnInit {

     //declare reactive form of type FormGroup
  searchByTypeForm:FormGroup;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

    //declare foodtype to store string type of food
  foodType:string=null;


  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService) { }

    //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    //initialise searchByTypeForm
    this.searchByTypeForm=new FormGroup({

            //apply all the required validations on all the input controls
       'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)])
    }
    );
  }

      //action to be performed on submitting the form
  onSubmit(){

//make isSubmitted bit true
   this.isFormSubmitted=true;

      //assign the input food type to the declared property 
   this.foodType=this.searchByTypeForm.value.foodType;

   //indicate FoodListComponent to load data according to food type
   this.foodsService.serviceMethodToBeCalled.next({methodName:'getFoodItemsByType',parameter:this.foodType,parameter1:0,parameter2:0}); 

    //reset the form
   this.searchByTypeForm.reset();

  }

}