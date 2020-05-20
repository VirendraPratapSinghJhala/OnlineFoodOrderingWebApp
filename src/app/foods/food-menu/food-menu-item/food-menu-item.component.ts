import { Component, OnInit, Input } from '@angular/core';
import { Food_Item } from '../../food-item.model';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.css']
})
export class FoodMenuItemComponent implements OnInit {


  @Input()
  foodItem:Food_Item=null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
