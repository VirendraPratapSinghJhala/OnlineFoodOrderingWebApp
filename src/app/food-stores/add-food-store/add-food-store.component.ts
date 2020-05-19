import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodStore } from '../food-store.model';
import { FoodsStoreService } from '../food-store.service';

@Component({
  selector: 'app-add-food-store',
  templateUrl: './add-food-store.component.html',
  styleUrls: ['./add-food-store.component.css']
})
export class AddFoodStoreComponent implements OnInit {

  addForm:FormGroup=null;

  foodStoreId:number=null;

  isFormSubmitted=false;

  foodStore:FoodStore=null;

  constructor(private foodsStoreService:FoodsStoreService) { }

  ngOnInit(): void {

    this.addForm=new FormGroup({

      'foodStoreName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'location':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'mobileno':new FormControl(null,[Validators.required,Validators.maxLength(13)]),
      'email':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'rating': new FormControl(null,[Validators.required,Validators.maxLength(5)]),
     
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodStore=this.addForm.value;

   this.foodStore=new FoodStore(null,this.addForm.value.foodStoreName,this.addForm.value.location,this.addForm.value.mobileno,this.addForm.value.email,this.addForm.value.rating);
 
   this.foodsStoreService.postFoodStore(this.foodStore).subscribe(
     (response:number)=>{this.foodStoreId=response;
    console.log('Added Food Store id :' +this.foodStoreId);
    if(this.foodStoreId!=null)
    {alert('Food Store successfully added, Added food Store id : '+this.foodStoreId);}
    else{alert('Food Store Not added successfully');}
    },
     (error)=>{
         console.log(error);
         alert(error);
     }
   );

   this.addForm.reset();

  }

}