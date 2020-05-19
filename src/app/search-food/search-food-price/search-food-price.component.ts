import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodsService } from 'src/app/foods/foods.service';

@Component({
  selector: 'app-search-food-price',
  templateUrl: './search-food-price.component.html',
  styleUrls: ['./search-food-price.component.css']
})
export class SearchFoodPriceComponent implements OnInit {

  searchByPriceRangeForm:FormGroup=null;

  isFormSubmitted=false;

  minFoodPrice:number=null;
  maxFoodPrice:number=null;


  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.searchByPriceRangeForm=new FormGroup({

      
      'minPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      'maxPrice': new FormControl(null,[Validators.required,Validators.min(1)]),

    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.minFoodPrice=this.searchByPriceRangeForm.value.minPrice;
   this.maxFoodPrice=this.searchByPriceRangeForm.value.maxPrice;

   this.searchByPriceRangeForm.reset();

  }

}