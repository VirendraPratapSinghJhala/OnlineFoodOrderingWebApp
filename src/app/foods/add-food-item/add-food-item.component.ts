
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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';
import { Router } from '@angular/router';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class AddFoodItemComponent implements OnInit {

  //declare reactive form of type FormGroup
  addForm:FormGroup=null;

  //to store id of added form received from FoodsService
  foodItemId:number=null;

    //declare isSubmitted bit to perform operations after the form isSubmitted
    isFormSubmitted=false;

  //to store Food_Item type object
  foodItem:Food_Item;

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService,private router:Router) {
    this.foodItem=new Food_Item();
   }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    //initialise addForm
    this.addForm=new FormGroup({

      //apply all the required validations on all the input controls
      'foodName':new FormControl('',[Validators.required,Validators.maxLength(255),Validators.pattern("^[a-zA-Z ]+[a-zA-Z0-9 ]*$")]),
      'foodType':new FormControl('',[Validators.required,Validators.maxLength(255),Validators.pattern("^[a-zA-Z ]+[a-zA-Z0-9 ]*$")]),
      'foodPrice': new FormControl('',[Validators.required,Validators.min(1),Validators.pattern("^[-0-9]*$")]),
      'imagePath': new FormControl('',[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  //action to be performed on submitting the form
  onSubmit(){

    //make isSubmitted bit to true
   this.isFormSubmitted=true;

//make an object of type Food_Item by passing all input values toits constructor
   this.foodItem.Food_Name=this.addForm.value.foodName;
   this.foodItem.Food_Type= this.addForm.value.foodType;
   this.foodItem.Price=this.addForm.value.foodPrice;
   this.foodItem.ImagePath= this.addForm.value.imagePath;
 

   //reset the form
   this.addForm.reset();
   
   //call the FoodsService's postFoodItem method to post the received object to the web api and subscribe to it
   this.foodsService.postFoodItem(this.foodItem).subscribe(

    //handle the respoonse
     (response:number)=>{this.foodItemId=response;
    console.log('Added Food Item id :' +this.foodItemId);
    if(this.foodItemId!=null)
    {alert('Food Item successfully added, Added food Item id : '+this.foodItemId);}
    else{alert('Food Item Not added successfully');}

    this.router.navigate(['foodsmenu']);
    },
    //handle the error
     (error)=>{
         console.log(error);
         alert(error);
     }
   );

   


  }

}