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
import { ActivatedRoute, Params } from '@angular/router';

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
  customerAdded:boolean=false;

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
      'customerName':new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern('^[a-zA-Z]*$')]),
      'email':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(50),
                                    Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      'city':new FormControl(null,[Validators.required,Validators.maxLength(50),
                                    Validators.pattern("^[a-zA-Z0-9]*$")]),
      'age': new FormControl(null,[Validators.required,Validators.min(15),Validators.max(65),
                                    Validators.pattern('^[0-9]*$')]),
      'password':new FormControl(null,[Validators.required,
                                    Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6-15})')]),
      'mobileNo': new FormControl(null,[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')])
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
     (response:boolean)=>{this.customerAdded=response;
    console.log('Added customer id :' +this.customerAdded);
    if(this.customerAdded)
    {alert('Customer successfully added');}
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
