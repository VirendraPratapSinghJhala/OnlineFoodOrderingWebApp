import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';


@Component({
    selector:'app-search-food',
    templateUrl:'./search-food.component.html',
    styleUrls:['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit{

    currentRoute:string=null;
 constructor(private router:Router){

 }

ngOnInit(){

    console.log('hello');
    this.currentRoute=this.router.url;
    console.log(this.router.url);
}
}