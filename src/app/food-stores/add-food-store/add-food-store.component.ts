import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodStore } from '../food-store.model';

@Component({
  selector: 'app-add-food-store',
  templateUrl: './add-food-store.component.html',
  styleUrls: ['./add-food-store.component.css']
})
export class AddFoodStoreComponent implements OnInit {

  addForm:FormGroup=null;

  isFormSubmitted=false;

  foodStore:FoodStore=null;

  constructor() { }

  ngOnInit(): void {

    this.addForm=new FormGroup({

      'foodStoreName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'email':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'location':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'rating': new FormControl(null,[Validators.required,Validators.min(1)]),
      'mobileno': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodStore=this.addForm.value;

   this.foodStore=new FoodStore(null,this.addForm.value.foodStoreName,this.addForm.value.location,this.addForm.value.mobileno,this.addForm.value.email,this.addForm.value.rating);

  

  alert('Food Item has been added');
   this.addForm.reset();

  }

}
