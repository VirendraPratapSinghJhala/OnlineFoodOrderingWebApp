
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
  foodItem:Food_Item=null;

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    //initialise addForm
    this.addForm=new FormGroup({

      'foodName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      'imagePath': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  //action to be performed on submitting the form
  onSubmit(){

    //make isSubmitted bit to true
   this.isFormSubmitted=true;

//make an object of type Food_Item by passing all input values toits constructor
   this.foodItem=new Food_Item(this.addForm.value.foodName,this.addForm.value.foodType,this.addForm.value.foodPrice,this.addForm.value.imagePath);
 
   //call the FoodsService's postFoodItem method to post the received object to the web api and subscribe to it
   this.foodsService.postFoodItem(this.foodItem).subscribe(

    //handle the respoonse
     (response:number)=>{this.foodItemId=response;
    console.log('Added Food Item id :' +this.foodItemId);
    if(this.foodItemId!=null)
    {alert('Food Item successfully added, Added food Item id : '+this.foodItemId);}
    else{alert('Food Item Not added successfully');}
    },
    //handle the error
     (error)=>{
         console.log(error);
         alert(error);
     }
   );

   //reset the form
   this.addForm.reset();

  }

}