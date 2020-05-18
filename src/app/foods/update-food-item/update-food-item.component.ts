import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.css']
})
export class UpdateFoodItemComponent implements OnInit {

  updateForm:FormGroup=null;

  isFormSubmitted=false;

  foodItem:Food_Item=null;

  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.updateForm=new FormGroup({

      'foodName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      'imagePath': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodItem=this.updateForm.value;

   this.foodItem=new Food_Item(this.updateForm.value.foodName,this.updateForm.value.foodType,this.updateForm.value.foodPrice,this.updateForm.value.imagePath);

  this.foodsService.addFoodItem(this.foodItem);

  alert('Food Item has been updated');
   this.updateForm.reset();

  }

}
