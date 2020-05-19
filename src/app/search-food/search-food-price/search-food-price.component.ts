import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodsService } from 'src/app/foods/foods.service';
import { Food_Item } from 'src/app/foods/food-item.model';

@Component({
  selector: 'app-search-food-price',
  templateUrl: './search-food-price.component.html',
  styleUrls: ['./search-food-price.component.css']
})
export class SearchFoodPriceComponent implements OnInit {

  searchByPriceRangeForm:FormGroup=null;

  isFormSubmitted=false;
  foodItems:Food_Item[]=null;

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

   //call service
   this.foodsService.getFoodItemByPriceRange(this.minFoodPrice,this.maxFoodPrice).
   subscribe((response:Food_Item[])=>{this.foodItems=response;
                                      if(this.foodItems==null)
                                      {alert('There are no food Items currently available between price range '+this.minFoodPrice+' and '+this.maxFoodPrice);}
                                      else{console.log(this.foodItems);}
                                    }, 
   
  (error)=>{console.log(error);
            alert(error);}
  
  );

   //reset form
   this.searchByPriceRangeForm.reset();

  }

}