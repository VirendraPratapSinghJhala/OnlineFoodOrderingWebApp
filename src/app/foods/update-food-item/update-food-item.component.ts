

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

//decorator used for storing Component's metadata
@Component({
  selector: 'app-update-food-item',
  templateUrl: './update-food-item.component.html',
  styleUrls: ['./update-food-item.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class UpdateFoodItemComponent implements OnInit {

  //declare reactive form of type FormGroup
  updateForm: FormGroup;

  //to receive the status whether form is submitted or not
  isFoodItemUpdated: boolean = false;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted = false;

  //to store Food_Item type object
  foodItem: Food_Item = null;

  //constructor used for injecting dependency
  constructor(private foodsService: FoodsService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    //initialise updateForm
    this.updateForm = new FormGroup({

      //apply all the required validations on all the input controls
      'foodName': new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      'foodType': new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      'foodPrice': new FormControl(null, [Validators.required, Validators.min(1)]),
      'imagePath': new FormControl(null, [Validators.required, Validators.maxLength(2000)])
    }
    );
  }

  //action to be performed on submitting the form
  onSubmit() {

        //make isSubmitted bit to true
    this.isFormSubmitted = true;

//make an object of type Food_Item by passing all input values toits constructor
    this.foodItem = new Food_Item(this.updateForm.value.foodName, this.updateForm.value.foodType, this.updateForm.value.foodPrice, this.updateForm.value.imagePath);

   //call the FoodsService's postFoodItem method to put/update the received object to the web api and subscribe to it
    this.foodsService.putFoodItem(this.foodItem).subscribe(

       //handle the respoonse
      (response: boolean) => {
        this.isFoodItemUpdated = response;
        if (this.isFoodItemUpdated) { alert('Food Item Updated') }
        else { alert('Food Item Not Updated') };
      },

      //handle the error
      (error) => {
        alert(error);
        console.log(error);
      }
    );

    //reset the form
    this.updateForm.reset();

  }

}