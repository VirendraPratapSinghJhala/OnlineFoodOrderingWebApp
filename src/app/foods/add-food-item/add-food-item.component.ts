import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {

  addForm:FormGroup=null;

  foodItemId:number=null;

  isFormSubmitted=false;

  foodItem:Food_Item=null;

  constructor(private foodsService:FoodsService) { }

  ngOnInit(): void {

    this.addForm=new FormGroup({

      'foodName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      'imagePath': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.foodItem=this.addForm.value;

   this.foodItem=new Food_Item(this.addForm.value.foodName,this.addForm.value.foodType,this.addForm.value.foodPrice,this.addForm.value.imagePath);
 
   this.foodsService.postFoodItem(this.foodItem).subscribe(
     (response:number)=>{this.foodItemId=response;
    console.log('Added Food Item id :' +this.foodItemId);
    if(this.foodItemId!=null)
    {alert('Food Item successfully added, Added food Item id : '+this.foodItemId);}
    else{alert('Food Item Not added successfully');}
    },
     (error)=>{
         console.log(error);
         alert(error);
     }
   );

   this.addForm.reset();

  }

}