import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateForm:FormGroup;

  isEmployeeUpdated:boolean=false;
  isFormSubmitted=false;

  employee:Employee=null;

  constructor(private employeesService:EmployeesService) { }

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

   this.employee=new Employee(this.updateForm.value.employeeId, this.updateForm.value.employeeName,this.updateForm.value.employeeAge,null,this.updateForm.value.password,this.updateForm.value.mobileNumber,this.updateForm.value.email,this.updateForm.value.city);

   this.employeesService.putEmployee(this.employee).subscribe(
    (response:boolean)=>{this.isEmployeeUpdated=response;
    if(this.isEmployeeUpdated)
    {alert('Employee Updated')}
    else{alert('Employee Not Updated') };
  },

  (error)=>{alert(error);
  console.log(error);}
  );

   this.updateForm.reset();
  }


}
