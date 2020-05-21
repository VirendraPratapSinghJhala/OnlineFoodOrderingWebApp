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
      'email':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(50),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      'password':new FormControl("",[Validators.required,
        Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6-15})')])
    }
    );
  }

  onSubmit(){
    let loggedInObject:{status:boolean, id:number} = this.loginService.sampleLogin(this.loginForm.value.email.toString(), this.loginForm.value.password.toString());

    if(loggedInObject.status){
      //set loggedIn globally user
      this.globalService.setLoginObject("user",loggedInObject.id);
      this.router.navigate(['/home']);
    }else{
      alert('Email ID or Password not correct. Please register if you are a new user.');
    }
  }

}
