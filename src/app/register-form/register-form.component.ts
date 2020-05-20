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
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Customer } from '../customer/customer.model';
import { CustomerService } from '../customer/customer.service';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class RegisterFormComponent implements OnInit {

  //declare reactive form of type FormGroup
  addForm:FormGroup=null;

  //to store id of added form received from CustomerService
  customerId:number=null;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

  //to store Customer type object
  customer:Customer=null;

  //constructor used for injecting dependency
  constructor(private customerService: CustomerService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    //initialise addForm
    this.addForm=new FormGroup({
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

   //make an object of type Customer by passing all input values toits constructor
   this.customer=new Customer(null,this.addForm.value.customerName,this.addForm.value.city,this.addForm.value.age,this.addForm.value.email,this.addForm.value.mobileNo,this.addForm.value.password);

   //call the CustomerService's postCustomer method to post the received object to the web api and subscribe to it
   this.customerService.postCustomer(this.customer).subscribe(

    //handle the respoonse
     (response:number)=>{this.customerId=response;
    console.log('Added customer id :' +this.customerId);
    if(this.customerId!=null)
    {alert('Customer successfully added, Added customer id : '+this.customerId);}
    else{alert('Customer Not added successfully');}
    },
    //handle the error
     (error)=>{
         console.log(error);
         alert(error);
     }
   );

  //reset the form
  this.addForm.reset();

  }

}
