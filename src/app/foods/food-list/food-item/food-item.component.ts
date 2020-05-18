import { Component, Input, OnInit } from '@angular/core';
import { Food_Item } from '../../food-item.model';


@Component({
    selector: 'app-food-item',
    templateUrl: './food-item.component.html',
    styleUrls: ['./food-item.component.css']
  })
  export class FoodItemComponent implements OnInit {
  
    @Input()
    item:Food_Item=null;
  
    @Input()
    index:number;
    
  
    ngOnInit(): void {
    }
  
   
  }
  