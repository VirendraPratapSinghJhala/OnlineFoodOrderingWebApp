
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Food_Item } from 'src/app/foods/food-item.model';
import { FoodsService } from 'src/app/foods/foods.service';

@Component({
  selector: 'app-search-food-name',
  templateUrl: './search-food-name.component.html',
  styleUrls: ['./search-food-name.component.css']
})
export class SearchFoodNameComponent implements OnInit {

  searchByNameForm:FormGroup;

  isFormSubmitted=false;

  foodName:string=null;

  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.searchByNameForm=new FormGroup({

      'foodName':new FormControl(null,[Validators.required,Validators.maxLength(255)])
      // 'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      // 'foodPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      // 'imagePath': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodName=this.searchByNameForm.value.foodName;

   //this.foodName=new Food_Item(this.searchByNameForm.value.foodName,this.searchByNameForm.value.foodType,this.searchByNameForm.value.foodPrice,this.searchByNameForm.value.imagePath);

//call service

   this.searchByNameForm.reset();

  }

}