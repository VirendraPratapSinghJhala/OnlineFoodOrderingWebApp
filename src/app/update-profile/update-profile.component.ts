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
  isCustomerUpdated:boolean = false;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

  //to store Customer type object
  customer:Customer=null;

  //constructor used for injecting dependency
  constructor(private customerService: CustomerService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    this.customer = this.customerService.getSampleCustomer();

    //apply all the required validations on all the input controls
    this.updateForm=new FormGroup({
      'customerId': new FormControl(this.customer.id),
      'customerName':new FormControl(this.customer.customerName,[Validators.required,Validators.maxLength(255)]),
      'email':new FormControl(this.customer.email,[Validators.required,Validators.maxLength(255)]),
      'city':new FormControl(this.customer.city,[Validators.required,Validators.maxLength(255)]),
      'age': new FormControl(this.customer.age,[Validators.required,Validators.min(1)]),
      'password':new FormControl(this.customer.password,[Validators.required,Validators.maxLength(255)]),
      'mobileNo': new FormControl(this.customer.mobileNo,[Validators.required,Validators.maxLength(2000)])
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
   this.customerService.putCustomer(this.customer).subscribe(
   //handle the response
   (response:boolean)=>{this.isCustomerUpdated=response;
   if(this.isCustomerUpdated)
   {alert('Customer Updated')}
   else{alert('Customer Not Updated') };
 },

 //handle the error
 (error)=>{alert(error);
 console.log(error);}
 );

 //reset the form
  this.updateForm.reset();
  }

}
