import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateForm:FormGroup;

  isFormSubmitted=false;

  employee:Employee=null;

  constructor() { }

  ngOnInit(): void {

    this.updateForm=new FormGroup({
      'employeeId': new FormControl(null,[Validators.required]),
      'employeeName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'email':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'city':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'employeeAge': new FormControl(null,[Validators.required,Validators.min(1)]),
      'password':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'mobileNumber': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.employee=this.updateForm.value;

   this.employee=new Employee(this.updateForm.value.employeeId, this.updateForm.value.name,this.updateForm.value.city,this.updateForm.value.age,this.updateForm.value.imagePath,this.updateForm.value.mobileNumber);

  

  alert('Food Item has been added');
   this.updateForm.reset();

  }


}
