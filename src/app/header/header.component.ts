

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 16th May,2020
    Description: This is the header component that has Home ,About , Menu, Search Food,Contact Us fields that allows the 
                 user to navigate freely in the application
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//decorator used for storing Component's metadata
@Component({

    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class HeaderComponent{

  //property to be used in template for the navigation bar to be collapsed in small devices
    collapsed = true;

    //constructor used for injecting dependency
    constructor(private router:Router,private route:ActivatedRoute){

    }

   
  
}