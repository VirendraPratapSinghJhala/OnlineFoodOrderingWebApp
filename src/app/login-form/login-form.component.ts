import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private loginService:CustomerService, private router:Router) { }

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
      //set loggedIn globally true
      this.router.navigate(['/home']);
    }else{
      alert('Email ID or Password not correct. Please register if you are a new user.');
    }
  }

}
