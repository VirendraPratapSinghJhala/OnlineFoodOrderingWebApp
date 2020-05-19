
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
  foodItems:Food_Item[]=null;
  isFormSubmitted=false;

  foodName:string=null;

  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.searchByNameForm=new FormGroup({

      'foodName':new FormControl('',[Validators.required,Validators.maxLength(255)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodName=this.searchByNameForm.value.foodName;

    //indicate FoodListComponent to load data according to foodname
    this.foodsService.serviceMethodToBeCalled.next('getFoodItemsByName'); 

   //call service 
   this.foodsService.getFoodItemsByName(this.foodName).subscribe(
     (response:Food_Item[])=>{if(response!=null)
                                 {this.foodItems=response;
                                  console.log(this.foodItems);}
                              else
                              {alert('There are no food Items available at the moment with name '+this.foodName);}
    },
    (error)=>{console.log(error);
     alert(error);}
   );

   this.searchByNameForm.reset();

  }

}