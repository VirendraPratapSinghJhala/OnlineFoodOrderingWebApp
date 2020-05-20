import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodStore } from './food-store.model';
import { FoodsStoreService } from './food-store.service';
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
  foodstores:FoodStore[]=null;
  shoudDisplayList:Boolean=true;

    //constructor used for injecting dependency
  constructor(private router:Router ,private route: Router ,private foodStoreService:FoodsStoreService) { }
   //ngOnInit used for initialising properties of the class
  ngOnInit(): void {
    this.router.events.subscribe(val=>{this.shoudDisplayList = this.router.url == '/foodstores' ? true : false});
    this.shoudDisplayList = this.router.url == '/foodstores' ? true : false;
    this.foodstores = this.foodStoreService.getSammpleAllFoodStore();
    this.router = this.route;
  }
}
