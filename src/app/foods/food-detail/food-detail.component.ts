

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for a food item with all expected validations 
                 and sends the input data in form of Food_Item type object to the FoodsService
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class FoodDetailComponent implements OnInit {

  //stores Food_Item type object
  foodItem:Food_Item=null;

  //stores id of food item in number format
  id:number;
    //constructor used for injecting dependency


  constructor(private foodsService:FoodsService,private route:ActivatedRoute,private router:Router) { }


//ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    //extracting/fetching the url parameter 'id' and storing it in property id
    this.route.params.subscribe(
      (params:Params)=>{this.id= +params['id'];
    
     //call FoodsService class's getFoodItemById to get food_Item with id and assign it to property foodItem
     this.foodsService.getFoodItemById(this.id).subscribe(
      (response:Food_Item)=>{this.foodItem=response;}
    );
    
    }
      
    );
   
  }

  onUpdateFoodItem(){
    this.router.navigate(['updatefooditem',this.id]);
  }

 onDeleteFoodItem(){

   if(window.confirm('Are you sure you want to delete this item ?'))
   {
    this.foodsService.deleteFoodItemById(this.id).subscribe(
    
      //handle response
      (response:boolean)=>{if(response==true)
      {console.log('Food item deleted successfully');
       alert('Food item deleted successfully');}
       else{
          console.log('food item not deleted successfully');
          alert('food item not deleted successfully');
       }
      
       this.router.navigate(['foodsmenu']);
      },
  
      //handle errors
      (error)=>{console.log(error);}
    );
   }

  
}

}
