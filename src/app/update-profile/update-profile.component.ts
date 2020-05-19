import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../customer/customer.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateForm:FormGroup=null;

  isFormSubmitted=false;

  customer:Customer=null;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

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

  onSubmit(){

   this.isFormSubmitted=true;

   this.customer=this.updateForm.value;

   this.customer=new Customer(this.updateForm.value.customerId,this.updateForm.value.customerName,this.updateForm.value.city,this.updateForm.value.age,this.updateForm.value.email,this.updateForm.value.mobileNo,this.updateForm.value.password);

   this.customerService.putCustomer(this.customer);

  alert('Food Item has been added');
   this.updateForm.reset();

  }

}
