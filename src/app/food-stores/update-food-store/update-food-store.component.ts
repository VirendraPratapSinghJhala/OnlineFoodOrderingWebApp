import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodStore } from '../food-store.model';

@Component({
  selector: 'app-update-food-store',
  templateUrl: './update-food-store.component.html',
  styleUrls: ['./update-food-store.component.css']
})
export class UpdateFoodStoreComponent implements OnInit {

  updateForm:FormGroup=null;

  isFormSubmitted=false;

  foodStore:FoodStore=null;

  constructor() { }

  ngOnInit(): void {

    this.updateForm=new FormGroup({

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

   this.foodStore=this.updateForm.value;

   this.foodStore=new FoodStore(this.updateForm.value.foodStoreId,this.updateForm.value.foodStoreName,this.updateForm.value.location,this.updateForm.value.mobileno,this.updateForm.value.email,this.updateForm.value.rating);

  

  alert('Food Item has been added');
   this.updateForm.reset();

  }

}
