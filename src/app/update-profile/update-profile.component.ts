/*  
  =======================================================================================================
    Developer: Mehul Jain
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for a customer with all expected validations 
                 and sends the input data in form of Customer type object to the CustomerService
  ==========================================================================================================
*/

//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../customer/customer.model';
import { CustomerService } from '../customer/customer.service';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class UpdateProfileComponent implements OnInit {

  //declare reactive form of type FormGroup
  updateForm:FormGroup=null;

  //to receive the status whether form is submitted or not
  isCustomerUpdated: boolean = false;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

  //to store Customer type object
  customer:Customer=null;

  //constructor used for injecting dependency
  constructor(private customerService: CustomerService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {
    //apply all the required validations on all the input controls
    this.updateForm=new FormGroup({
      'customerName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'email':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'city':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'age': new FormControl(null,[Validators.required,Validators.min(1)]),
      'password':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'mobileNo': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  //action to be performed on submitting the form
  onSubmit(){

    //make isSubmitted bit to true
   this.isFormSubmitted=true;

   //make an object of type Food_Item by passing all input values toits constructor
   this.customer=new Customer(this.updateForm.value.customerId,this.updateForm.value.customerName,this.updateForm.value.city,this.updateForm.value.age,this.updateForm.value.email,this.updateForm.value.mobileNo,this.updateForm.value.password);

   //call the CustomerService's postCustomer method to put/update the received object to the web api and subscribe to it
   this.customerService.putCustomer(this.customer);

  alert('Customer has been added');
  
  this.updateForm.reset();
  }

}
