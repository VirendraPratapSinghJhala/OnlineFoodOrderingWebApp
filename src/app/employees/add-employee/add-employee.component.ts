import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addForm:FormGroup=null;

  isFormSubmitted=false;

  employee:Employee=null;

  constructor() { }

  ngOnInit(): void {

    this.addForm=new FormGroup({

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

   this.employee=this.addForm.value;

   this.employee=new Employee(null, this.addForm.value.name,this.addForm.value.city,this.addForm.value.age,this.addForm.value.mobileNumber);

  

  alert('Food Item has been added');
   this.addForm.reset();

  }

}
