

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

  //stores string type method name
  serviceMethodName:string=null;

  //stores 1st parameter in text format
  parameter:string=null;

   //stores 1st parameter in number format
  parameter1:number=null;

   //stores 1st parameter in number format
  parameter2:number=null;

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService) { }


  //ngOnInit used for initialising properties of the class
  ngOnInit(){

    //subscribe to the serviceMethodToBeCalled Subject of FoodsService to get the parameters set in the
    // serviceMethodToBeCalled Subject of FoodsService by either SearchFoodName or SearchFoodType or 
    // SearchFoodPrice component that will decide which type of food items to be loaded in the list. 
    this.foodsService.serviceMethodToBeCalled.subscribe(

      //handle the response and assign it to our declared properties
      ({methodName,parameter,parameter1,parameter2})=>{this.serviceMethodName=methodName;
                                  this.parameter=parameter;
                                this.parameter1=parameter1;
                              this.parameter2=parameter2;}
    );

    //load the list of food items according to following conditions


//if method to be called is getFoodItemsByName
    if(this.serviceMethodName=='getFoodItemsByName')
    {
      //call getFoodItemsByName observable of FoodsService
      this.foodsService.getFoodItemsByName(this.parameter).subscribe(

        //handle the response
        (response:Food_Item[])=>{this.foodItems=response;},

        //handle the error
        (error)=>{console.log(error);
          alert(error);}
      );

     

    }

    //if method to be called is getFoodItemsByType
    else if(this.serviceMethodName=='getFoodItemsByType')
    {
            //call getFoodItemsByType observable of FoodsService
      this.foodsService.getFoodItemsByType(this.parameter).subscribe(

        //handle the response
        (response:Food_Item[])=>{this.foodItems=response},

        //handle the error
        (error)=>{console.log(error);
          alert(error);}
      );
    }

    //if method to be called is getFoodItemsByPriceRange
     else if(this.serviceMethodName=='getFoodItemsByPriceRange')
      {
              //call getFoodItemsByPriceRange observable of FoodsService
        this.foodsService.getFoodItemsByPriceRange(this.parameter1,this.parameter2).subscribe(

          //handle the response
          (response:Food_Item[])=>{this.foodItems=response},

          //handle the error
          (error)=>{console.log(error);
            alert(error);}
        );
      }

      //if no condition matches then execute following code
      else{
              //call getFoodItems observable of FoodsService to load all the food items
        this.foodsService.getFoodItems().subscribe(

          //handle the response
          (response:Food_Item[])=>{this.foodItems=response;},

          //handle the error
          (error)=>{console.log(error);
                    alert(error);}
        );

      }

  }

}
