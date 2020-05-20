import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';
import {  ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService:CustomerService, private router:Router, private globalService:GlobalService) { }

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
    let loggedIn = this.loginService.sampleLogin(this.loginForm.value.email.toString(), this.loginForm.value.password.toString());

    if(loggedIn){
      //set loggedIn globally user
      this.globalService.setLoginRole("user");
      this.router.navigate(['/']);
    }else{
      alert('Email ID or Password not correct. Please register if you are a new user.');
    }
  }

}
