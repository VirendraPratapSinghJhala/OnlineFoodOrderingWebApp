
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 18th May,2020
    Description: This is a base component which holds FoodStart, FoodList and FoodDetail Components to show the list of
                 food items on one side and detail of selected food item on the other side
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food_Item } from './food-item.model';
import { FoodsService } from './foods.service';


//decorator used for storing Component's metadata
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  
})

//Component that handles all the tasks in correspondance to the html template
export class FoodsComponent implements OnInit {

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

  
  }

  


}
