
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 18th May,2020
    Description: This component is used to print some instructions that should appear by default when the FoodsComponent 
                 loads first
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component } from '@angular/core';

//decorator used for storing Component's metadata
@Component({
    selector:'app-foods-start',
    templateUrl:'./foods-start.component.html',
    styleUrls:['./foods-start.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class FoodsStartComponent
{

}