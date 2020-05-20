import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*
=======================================================================================================
    Developer: Kritika Arora
    Creation Date: 18th May,2020
    Description: This is a base component .
  ==========================================================================================================
*/


//decorator used for storing Component's metadata
@Component({
  selector: 'app-food-store',
  templateUrl: './food-store.component.html',
  styleUrls: ['./food-store.component.css']
})
//Component that handles all the tasks in correspondance to the html template
export class FoodStoreComponent implements OnInit {
    //constructor used for injecting dependency
  constructor(private route: Router) { }
  router: Router;
   //ngOnInit used for initialising properties of the class
  ngOnInit(): void {
    this.router = this.route;
  }
}
