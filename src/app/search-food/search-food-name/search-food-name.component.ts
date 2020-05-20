


/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user input as food name for searching for food items having 
                  entered name 
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Food_Item } from 'src/app/foods/food-item.model';
import { FoodsService } from 'src/app/foods/foods.service';


//decorator used for storing Component's metadata
@Component({
  selector: 'app-search-food-name',
  templateUrl: './search-food-name.component.html',
  styleUrls: ['./search-food-name.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class SearchFoodNameComponent implements OnInit {

  foodItems:Food_Item[]=null;

  @Output()
  foodArray=new EventEmitter<Food_Item[]>();

   //declare reactive form of type FormGroup
  searchByNameForm:FormGroup;

//declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

  //declare foodname to store string type name of food
  foodName:string=null;

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

     //initialise searchByNameForm
    this.searchByNameForm=new FormGroup({

      //apply all the required validations on all the input controls
      'foodName':new FormControl('',[Validators.required,Validators.maxLength(255)])
    }
    );
  }

    //action to be performed on submitting the form
  onSubmit(){
   
//make isSubmitted bit true
   this.isFormSubmitted=true;

   //assign the input food name to the declared property 
   this.foodName=this.searchByNameForm.value.foodName;

  //  this.foodsService.getFoodItemsByName(this.foodName).subscribe(

  //   //handle response
  //    (response:Food_Item[])=>{this.foodItems=response;},

  //    //handle errors
  //    (error)=>{console.log(error);
  //        alert(error);}
  //  );

   this.foodItems= this.foodsService.getByName(this.foodName);
    //reset the form
   this.searchByNameForm.reset();

   this.foodArray.emit(this.foodItems);

  }

}