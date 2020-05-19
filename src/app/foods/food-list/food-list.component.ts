import { Component, OnInit} from '@angular/core';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {


  foodItems:Food_Item[]=[];
  serviceMethodName:string=null;
  parameter:string=null;
  parameter1:number=null;
  parameter2:number=null;
  constructor(private foodsService:FoodsService) { }

  ngOnInit(){

    this.foodsService.serviceMethodToBeCalled.subscribe(
      ({methodName,parameter,parameter1,parameter2})=>{this.serviceMethodName=methodName;
                                  this.parameter=parameter;
                                this.parameter1=parameter1;
                              this.parameter2=parameter2;}
    );


    if(this.serviceMethodName=='getFoodItemsByName')
    {
      this.foodsService.getFoodItemsByName(this.parameter).subscribe(
        (response:Food_Item[])=>{this.foodItems=response;},
        (error)=>{console.log(error);
          alert(error);}
      );

     

    }

    else if(this.serviceMethodName=='getFoodItemsByType')
    {
      this.foodsService.getFoodItemsByType(this.parameter).subscribe(
        (response:Food_Item[])=>{this.foodItems=response},
        (error)=>{console.log(error);
          alert(error);}
      );
    }

     else if(this.serviceMethodName=='getFoodItemsByPriceRange')
      {
        this.foodsService.getFoodItemsByPriceRange(this.parameter1,this.parameter2).subscribe(
          (response:Food_Item[])=>{this.foodItems=response},
          (error)=>{console.log(error);
            alert(error);}
        );
      }

      else{
        this.foodsService.getFoodItems().subscribe(
          (response:Food_Item[])=>{this.foodItems=response;},
          (error)=>{console.log(error);
                    alert(error);}
        );

      }

  }

}
