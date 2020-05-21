

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 18th May,2020
    Description: This component loads the food items array by calling the FoodsService respective observables and 
                 uses this array to iterate over FoodItemComponent to print the list of all the food items
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit} from '@angular/core';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';
import { Router, ActivatedRoute } from '@angular/router';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})


//Component that handles all the tasks in correspondance to the html template
export class FoodListComponent implements OnInit {

 //stores array of Food_Item type objects
  foodItems:Food_Item[]=[];

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService,private router:Router,private route:ActivatedRoute) { }


  //ngOnInit used for initialising properties of the class
  ngOnInit(){
console.log('foodlist');
    this.foodsService.getFoodItems().subscribe(

      //handle response
      (response:Food_Item[])=>{this.foodItems=response;
                               console.log(response);},

     //handle error
      (error)=>{console.log('hello')
        console.log(error);
                alert(error);}

    );

    //  this.foodItems= this.foodsService.getFoods();
  }

  onAddFoodItem(){
    this.router.navigate(['addfooditem',{relativeTo:this.route}]);
  }

}
