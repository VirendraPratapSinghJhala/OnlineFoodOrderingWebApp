import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Customer } from '../customer/customer.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  addForm:FormGroup=null;

  isFormSubmitted=false;

  employee:Customer=null;

  constructor() { }

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

   this.employee=this.addForm.value;

   this.employee=new Customer(null,this.addForm.value.customerName,this.addForm.value.city,this.addForm.value.age,this.addForm.value.email,this.addForm.value.mobileNo,this.addForm.value.password);

  

  alert('Food Item has been added');
   this.addForm.reset();

  }

}
