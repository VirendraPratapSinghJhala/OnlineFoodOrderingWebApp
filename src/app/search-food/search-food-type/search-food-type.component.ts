
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodsService } from 'src/app/foods/foods.service';

@Component({
  selector: 'app-search-food-type',
  templateUrl: './search-food-type.component.html',
  styleUrls: ['./search-food-type.component.css']
})
export class SearchFoodTypeComponent implements OnInit {

  searchByTypeForm:FormGroup;

  isFormSubmitted=false;

  foodType:string=null;

  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.searchByTypeForm=new FormGroup({

      //'foodName':new FormControl(null,[Validators.required,Validators.maxLength(255)])
       'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)])
      // 'foodPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      // 'imagePath': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodType=this.searchByTypeForm.value.foodType;

   //this.foodName=new Food_Item(this.searchByTypeForm.value.foodName,this.searchByTypeForm.value.foodType,this.searchByTypeForm.value.foodPrice,this.searchByTypeForm.value.imagePath);

//call service

   this.searchByTypeForm.reset();

  }

}