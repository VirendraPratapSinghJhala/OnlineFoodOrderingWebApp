import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Customer } from '../customer/customer.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  addForm:FormGroup=null;

  isFormSubmitted=false;

  customer:Customer=null;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

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

  onSubmit(){

   this.isFormSubmitted=true;

   this.customer=this.addForm.value;

   this.customer=new Customer(null,this.addForm.value.customerName,this.addForm.value.city,this.addForm.value.age,this.addForm.value.email,this.addForm.value.mobileNo,this.addForm.value.password);

   this.customerService.postCustomer(this.customer);

  alert('Food Item has been added');
   this.addForm.reset();

  }

}
