import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-store',
  templateUrl: './food-store.component.html',
  styleUrls: ['./food-store.component.css']
})
export class FoodStoreComponent implements OnInit {
  constructor(private route: Router) { }
  router: Router;
  ngOnInit(): void {
    this.router = this.route;
  }
}
