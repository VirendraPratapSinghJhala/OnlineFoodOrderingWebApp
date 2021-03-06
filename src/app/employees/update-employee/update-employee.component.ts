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
import { ActivatedRoute, Params } from '@angular/router';

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
  employee:Employee = {Employee_Id:null, Employee_Name:null, Age:null, Store_Id:null, Password:null,
    Mobile_No:null, Email:null, City:null, IsActive:null, Creation_Date:null};

  employeeId:number=null;

  //constructor used for injecting dependency
  constructor(private employeesService:EmployeesService,private route:ActivatedRoute) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    /*this.route.params.subscribe(
      (param:Params)=>{this.employeeId=+param['id']}
    );*/
    this.employeesService.getEmployeeById(this.employeesService.saveId).subscribe(
      (response:Employee)=>{this.employee=response;}
    );

    this.employeesService.getEmployeeById(this.employeeId).subscribe(
      (response:Employee)=>{this.employee=response;}
    );


    //this.employee = this.employeesService.getSampleEmployee();
    //initialise updateForm
    this.updateForm=new FormGroup({
      //apply all the required validations on all the input controls
      'employeeName':new FormControl(this.employee.Employee_Name,[Validators.required,Validators.maxLength(40), 
                                    Validators.pattern('^[a-zA-Z ]*$')]),
      'email':new FormControl(this.employee.Email,[Validators.required,Validators.minLength(5),Validators.maxLength(40),  
                                    Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      'city':new FormControl(this.employee.City,[Validators.required,Validators.maxLength(40),  
                                  Validators.pattern('^[a-zA-Z0-9]*$')]),
      'employeeAge': new FormControl(this.employee.Age,[Validators.required,Validators.min(18),
                                  Validators.max(60),Validators.pattern('^[0-9]*$')]),
      'password':new FormControl(this.employee.Password,[Validators.required,
                                  Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,15})')]),
      'mobileNumber': new FormControl(this.employee.Mobile_No,[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')])
    }
    );
  }

  //action to be performed on submitting the form
  onSubmit(){

    //make isSubmitted bit to true
   this.isFormSubmitted=true;

   //make an object of type Employee by passing all input values to its constructor
   //this.employee=new Employee(this.updateForm.value.employeeId, this.updateForm.value.employeeName,this.updateForm.value.employeeAge,null,this.updateForm.value.password,this.updateForm.value.mobileNumber,this.updateForm.value.email,this.updateForm.value.city);
   this.employee.Employee_Name=this.updateForm.value.employeeName;
   this.employee.Age= this.updateForm.value.employeeAge;
   this.employee.Employee_Name=this.updateForm.value.employeeName;
   this.employee.Password=this.updateForm.value.password;
   this.employee.Mobile_No=this.updateForm.value.mobileNumber;
   this.employee.Email=this.updateForm.value.email;
   this.employee.City=this.updateForm.value.city;

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
