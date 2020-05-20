
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 18th May,2020
    Description: This component denotes the existence of the single food item which will get replicated or 
                iterated by the FoodListComponent
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, Input, OnInit } from '@angular/core';
import { Food_Item } from '../../food-item.model';

//decorator used for storing Component's metadata
@Component({
    selector: 'app-food-item',
    templateUrl: './food-item.component.html',
    styleUrls: ['./food-item.component.css']
  })

  //Component that handles all the tasks in correspondance to the html template
  export class FoodItemComponent implements OnInit {
  
    //declare input property to take the incoming data (single object of type Food_Item ) passed from the parent component (i.e. FoodListComponent) 
    //of FoodItemComponent
    @Input()
    item:Food_Item=null;
     
    //ngOnInit used for initialising properties of the class
    ngOnInit(): void {
    }
  
   
  }
  