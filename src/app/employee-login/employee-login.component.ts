import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';
import {  ReactiveFormsModule} from '@angular/forms';
import { EmployeesService } from '../employees/employees.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private loginService:EmployeesService, private router:Router, private globalService:GlobalService) { }

  loginForm:FormGroup=null;

  ngOnInit(): void {
    
    //initialise loginForm
    this.loginForm=new FormGroup({
      'email':new FormControl("",[Validators.required,Validators.maxLength(255)]),
      'password':new FormControl("",[Validators.required,Validators.maxLength(255)])
    }
    );
  }

  onSubmit(){
    //"something","ad@rerg.com",
    let loggedIn = this.loginService.sampleLogin(this.loginForm.value.email.toString(), this.loginForm.value.password.toString());

    if(loggedIn){
      //set loggedIn globally user
      this.globalService.setLoginRole("admin");
      this.router.navigate(['/']);
    }else{
      alert('Email ID or Password not correct. Please try again.');
    }
  }

}
