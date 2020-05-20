
/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 19th May,2020
    Description: This component takes care of the admin home page when the admin logins and shows various options 
                 for the management of all parts of the application
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//decorator used for storing Component's metadata
@Component({

    selector:'app-admin-home',
    templateUrl:'./admin-home.component.html',
    styleUrls:['./admin-home.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class AdminHomeComponent{

      //constructor used for injecting dependency
   constructor(private route:ActivatedRoute,private router:Router){
       
   }
    //ngOnInit used for initialising properties of the class
   ngOnInit(){
       
   }

   //action to be performed when user clicks on Manage food items button
   onSelectManageFoodItems(){

    //go to Component whose router path is 'foodsmenu'
       this.router.navigate(['foodsmenu']);
   }
}