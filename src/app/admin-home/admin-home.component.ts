import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({

    selector:'app-admin-home',
    templateUrl:'./admin-home.component.html',
    styleUrls:['./admin-home.component.css']
})
export class AdminHomeComponent{

   constructor(private route:ActivatedRoute,private router:Router){
       
   }

   ngOnInit(){
       
   }

   onSelectManageFoodItems(){
       this.router.navigate(['foodsmenu']);
   }
}