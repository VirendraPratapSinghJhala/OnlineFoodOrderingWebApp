
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
import { Subscription } from 'rxjs';
import { Food_Item } from './food-item.model';
import { FoodsService } from './foods.service';


//decorator used for storing Component's metadata
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class FoodsComponent implements OnInit {

  //constructor used for injecting dependency
  constructor(private foodsService:FoodsService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

  
  }

  


}
