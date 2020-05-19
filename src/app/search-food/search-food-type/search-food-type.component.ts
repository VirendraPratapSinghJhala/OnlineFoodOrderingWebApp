
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodsService } from 'src/app/foods/foods.service';
import { Food_Item } from 'src/app/foods/food-item.model';

@Component({
  selector: 'app-search-food-type',
  templateUrl: './search-food-type.component.html',
  styleUrls: ['./search-food-type.component.css']
})
export class SearchFoodTypeComponent implements OnInit {

  searchByTypeForm:FormGroup;

  isFormSubmitted=false;

  foodType:string=null;
  foodItems:Food_Item[]=null;

  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.searchByTypeForm=new FormGroup({

       'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodType=this.searchByTypeForm.value.foodType;

   //indicate FoodListComponent to load data according to food type
   this.foodsService.serviceMethodToBeCalled.next('call getFoodItemsByType'); 

//call service
   //call service 
   this.foodsService.getFoodItemsByType(this.foodType).subscribe(
    (response:Food_Item[])=>{if(response!=null)
                                {this.foodItems=response;
                                console.log(this.foodItems);}
                             else
                             {alert('There are no food Items available at the moment with name '+this.foodType);}
   },
   (error)=>{console.log(error);
    alert(error);}
  );

   this.searchByTypeForm.reset();

  }

}