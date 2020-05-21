

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for a food item with all expected validations 
                 and sends the input data in form of Food_Item type object to the FoodsService
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Food_Item } from '../food-item.model';
import { FoodsService } from '../foods.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class UpdateFoodItemComponent implements OnInit {

  //declare reactive form of type FormGroup
  updateForm: FormGroup=null;

  //to receive the status whether form is submitted or not
  isFoodItemUpdated: boolean = false;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted = false;

  //to store Food_Item type object
  foodItem: Food_Item = null;

  foodId:number=null;

  //constructor used for injecting dependency
  constructor(private foodsService: FoodsService,private route:ActivatedRoute,private router:Router) { 
  }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    this.route.params.subscribe(
      (param:Params)=>{this.foodId=+param['id']}
    );

    this.foodsService.getFoodItemById(this.foodId).subscribe(
      (response:Food_Item)=>{this.foodItem=response;
      
      //initialise updateForm
     this.updateForm = new FormGroup({

      //apply all the required validations on all the input controls
      'foodName': new FormControl(this.foodItem.Food_Name , [Validators.required, Validators.maxLength(255),Validators.pattern("^[a-zA-Z ]+[a-zA-Z0-9 ]*$")]),
      'foodType': new FormControl(this.foodItem.Food_Type, [Validators.required, Validators.maxLength(255),Validators.pattern("^[a-zA-Z ]+[a-zA-Z0-9 ]*$")]),
      'foodPrice': new FormControl(this.foodItem.Price , [Validators.required, Validators.min(1),Validators.pattern("^[-0-9]*$")]),
      'imagePath': new FormControl(this.foodItem.ImagePath, [Validators.required, Validators.maxLength(2000)])

    }
    );}
    );

     
  }

  //action to be performed on submitting the form
  onSubmit() {

        //make isSubmitted bit to true
    this.isFormSubmitted = true;

//make an object of type Food_Item by passing all input values toits constructor
    //this.foodItem = new Food_Item(this.updateForm.value.foodName, this.updateForm.value.foodType, this.updateForm.value.foodPrice, this.updateForm.value.imagePath);
    this.foodItem.Food_Name=this.updateForm.value.foodName;
    this.foodItem.Food_Type= this.updateForm.value.foodType;
    this.foodItem.Price=this.updateForm.value.foodPrice;
    this.foodItem.ImagePath= this.updateForm.value.imagePath;


     //reset the form
     this.updateForm.reset();


   //call the FoodsService's postFoodItem method to put/update the received object to the web api and subscribe to it
    this.foodsService.putFoodItem(this.foodItem).subscribe(

       //handle the respoonse
      (response: boolean) => {
        this.isFoodItemUpdated = response;
        if (this.isFoodItemUpdated) { alert('Food Item Updated') }
        else { alert('Food Item Not Updated') };
        
        this.router.navigate(['foodsmenu']);

      },

      //handle the error
      (error) => {
        alert(error);
        console.log('there was an error');
        console.log(error);
      }
    );

   

  }

}