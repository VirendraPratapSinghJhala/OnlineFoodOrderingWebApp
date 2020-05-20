/*  
  =======================================================================================================
    Developer: Subin Sunu Jacob
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for an employee with all expected validations 
                 and sends the input data in form of Employee type object to the employeesService
  ==========================================================================================================
*/

//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})

//Component that handles all the handling of the reactive form in correspondance to the html template
export class UpdateEmployeeComponent implements OnInit {

  //declare reactive form of type FormGroup
  updateForm:FormGroup;

  //to receive the status whether form is submitted or not
  isEmployeeUpdated:boolean=false;
  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

  //to store Employee type object
  employee:Employee=null;

  //constructor used for injecting dependency
  constructor(private employeesService:EmployeesService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    this.employee = this.employeesService.getSampleEmployee();
    //initialise updateForm
    this.updateForm=new FormGroup({
      //apply all the required validations on all the input controls
      'employeeId': new FormControl(this.employee.id,[Validators.required]),
      'employeeName':new FormControl(this.employee.name,[Validators.required,Validators.maxLength(255)]),
      'email':new FormControl(this.employee.email,[Validators.required,Validators.maxLength(255)]),
      'city':new FormControl(this.employee.city,[Validators.required,Validators.maxLength(255)]),
      'employeeAge': new FormControl(this.employee.age,[Validators.required,Validators.min(1)]),
      'password':new FormControl(this.employee.password,[Validators.required,Validators.maxLength(255)]),
      'mobileNumber': new FormControl(this.employee.mobileNumber,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

  //action to be performed on submitting the form
  onSubmit(){

    //make isSubmitted bit to true
   this.isFormSubmitted=true;

   //make an object of type Employee by passing all input values to its constructor
   this.employee=new Employee(this.updateForm.value.employeeId, this.updateForm.value.employeeName,this.updateForm.value.employeeAge,null,this.updateForm.value.password,this.updateForm.value.mobileNumber,this.updateForm.value.email,this.updateForm.value.city);

   //call the employeesService's putEmployee method to put/update the received object to the web api and subscribe to it
   this.employeesService.putEmployee(this.employee).subscribe(
     //handle the response
    (response:boolean)=>{this.isEmployeeUpdated=response;
    if(this.isEmployeeUpdated)
    {alert('Employee Updated')}
    else{alert('Employee Not Updated') };
  },

  //handle the error
  (error)=>{alert(error);
  console.log(error);}
  );

  //reset the form
   this.updateForm.reset();
  }


}
