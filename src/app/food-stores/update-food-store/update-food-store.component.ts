/*  
  =======================================================================================================
    Developer: Kritika Arora
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for food store with all expected validations 
                 and sends the input data in form of Food_Store type object to the foodStoreService
  ==========================================================================================================
*/

//import all the required entities from their respective packages


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodStore } from '../food-store.model';
import { FoodsStoreService } from '../food-store.service';
//decorator used for storing Component's metadata

@Component({
  selector: 'app-update-food-store',
  templateUrl: './update-food-store.component.html',
  styleUrls: ['./update-food-store.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class UpdateFoodStoreComponent implements OnInit {
  //declare reactive form of type FormGroup
  updateForm:FormGroup=null;
//to receive the status whether form is submitted or not
  isFormSubmitted=false;

  //to store foodStore type object
  foodStore:FoodStore=null;
//constructor used for injecting dependency
  constructor(private foodStoreService: FoodsStoreService) { }
  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {
//initialise updateForm
    this.updateForm=new FormGroup({
        
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

   this.foodStore=this.updateForm.value;
//make an object of type foodStore by passing all input values to its constructor
   this.foodStore=new FoodStore(this.updateForm.value.foodStoreId,this.updateForm.value.foodStoreName,this.updateForm.value.location,this.updateForm.value.mobileno,this.updateForm.value.email,this.updateForm.value.rating);
//call the foodStoresService's putFoodStore method to put/update the received object to the web api and subscribe to it
   this.foodStoreService.putFoodStore(this.foodStore);
  

  alert('Food Item has been added');
  //reset the form
   this.updateForm.reset();

  }

}