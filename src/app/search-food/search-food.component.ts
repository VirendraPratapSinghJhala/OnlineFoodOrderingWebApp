

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
    Description: This is a base component that holds three child components search-food-name,search-food-type,
                 and search-food-price and displays one of them in router outlet
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

//decorator used for storing Component's metadata
@Component({
    selector:'app-search-food',
    templateUrl:'./search-food.component.html',
    styleUrls:['./search-food.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class SearchFoodComponent implements OnInit{

    //stroes current path of the Component
    currentRoute:string=null;

      //constructor used for injecting dependency
 constructor(private router:Router){

 }
    //ngOnInit used for initialising properties of the class
ngOnInit(){

    //assign current path of the component to the declared property to be used by template
     this.currentRoute=this.router.url;
}
}