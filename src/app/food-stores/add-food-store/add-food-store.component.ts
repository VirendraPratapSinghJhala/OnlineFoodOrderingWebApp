/*  
  =======================================================================================================
    Developer : Kritika Arora
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for a food store with all expected validations 
                 and sends the input data in form of Food_Store type object to the FoodsStoreService
  ==========================================================================================================
*/

//import all the required entities from their respective packages

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodStore } from '../food-store.model';
import { FoodsStoreService } from '../food-store.service';
//decorator used for storing Component's metadata
@Component({
  selector: 'app-add-food-store',
  templateUrl: './add-food-store.component.html',
  styleUrls: ['./add-food-store.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template

export class AddFoodStoreComponent implements OnInit {
//declare reactive form of type FormGroup
  addForm:FormGroup=null;
 //to store id of added form received from FoodsStoreService
  foodStoreId:number=null;
 //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;
 //to store Food_Store type object
  foodStore:FoodStore=null;
//constructor used for injecting dependency
  constructor(private foodsStoreService:FoodsStoreService) { }
//ngOnInit used for initialising properties of the class
  ngOnInit(): void {
   //initialise addForm
    this.addForm=new FormGroup({  
      //apply all the required validations on all the input controls  
      'foodStoreName':new FormControl(null,[Validators.required,Validators.maxLength(40),Validators.pattern('^[a-zA-Z]*$')]),
      'location':new FormControl(null,[Validators.required,Validators.maxLength(40),Validators.pattern('^[a-zA-Z0-9]*$')]),
      'mobileno':new FormControl(null,[Validators.required,Validators.maxLength(13),Validators.pattern('^[7-9][0-9]{9}$')]),
      'email':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(40),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'rating': new FormControl(null,[Validators.required,Validators.pattern('[1-5]{1}$')])
    }
    );
  }
 //action to be performed on submitting the form
  onSubmit(){
//make isSubmitted bit to true
   this.isFormSubmitted=true;

//make an object of type Food_Store by passing all input values toits constructor
   this.foodStore=this.addForm.value;
//call the FoodsStoreService's postFoodStore method to post the received object to the web api and subscribe to it
   this.foodStore=new FoodStore(null,this.addForm.value.foodStoreName,this.addForm.value.location,this.addForm.value.mobileno,this.addForm.value.email,this.addForm.value.rating);
 //handle the respoonse
   this.foodsStoreService.postFoodStore(this.foodStore).subscribe(
     (response:number)=>{this.foodStoreId=response;
    console.log('Added Food Store id :' +this.foodStoreId);
    if(this.foodStoreId!=null)
    {alert('Food Store successfully added, Added food Store id : '+this.foodStoreId);}
    else{alert('Food Store Not added successfully');}
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