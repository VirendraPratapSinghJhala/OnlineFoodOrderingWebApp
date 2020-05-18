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

      'foodName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodType':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'foodPrice': new FormControl(null,[Validators.required,Validators.min(1)]),
      'imagePath': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  onSubmit(){

   this.isFormSubmitted=true;

   this.employee=this.updateForm.value;

   this.employee=new Employee(this.updateForm.value.name,this.updateForm.value.city,this.updateForm.value.age,this.updateForm.value.imagePath,this.updateForm.value.mobileNumber);

  

  alert('Food Item has been added');
   this.updateForm.reset();

  }


}
