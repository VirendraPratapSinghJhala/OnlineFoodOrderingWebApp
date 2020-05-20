
/*  
  =======================================================================================================
    Developer: Subin Sunu Jacob
    Creation Date: 17th May,2020
    Description: This is a reactive form to take user's all inputs for an employee with all expected validations 
                 and sends the input data in form of Employee type object to the EmployeesService
  ==========================================================================================================
*/

//import all the required entities from their respective packages
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
//Component that handles all the handling of the reactive form in correspondance to the html template
export class AddEmployeeComponent implements OnInit {

   //declare reactive form of type FormGroup
  addForm:FormGroup=null;

  //declare isSubmitted bit to perform operations after the form isSubmitted
  isFormSubmitted=false;

  //to store Employee type object
  employee:Employee=null;

  //constructor used for injecting dependency
  constructor(private employeesService:EmployeesService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    this.addForm=new FormGroup({

      //apply all the required validations on all the input controls
      'employeeName':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'email':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'city':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'employeeAge': new FormControl(null,[Validators.required,Validators.min(1)]),
      'password':new FormControl(null,[Validators.required,Validators.maxLength(255)]),
      'mobileNumber': new FormControl(null,[Validators.required,Validators.maxLength(2000)])
    }
    );
  }

   //action to be performed on submitting the form
  onSubmit(){

    //make isSubmitted bit to true
   this.isFormSubmitted=true;
   
   //make an object of type Food_Item by passing all input values to its constructor
   this.employee=new Employee(null, this.addForm.value.employeeName,this.addForm.value.employeeAge,null,this.addForm.value.password,this.addForm.value.mobileNumber,this.addForm.value.email,this.addForm.value.city);
  
   //call the employeesService's postEmployee method to post the received object to the web api and subscribe to it
   this.employeesService.postEmployee(this.employee).subscribe(
    
    //handle the respoonse
    (response:boolean)=>{
   if(response = true)
   {alert('Employee successfully added');}
   else{alert('Employee Not added successfully');}
   },
   //handle the error
    (error)=>{
        console.log(error);
        alert(error);
    }
  );

   //reset the form
   this.addForm.reset();

  }

}
