
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
import { Router, ActivatedRoute } from '@angular/router';

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
  employee:Employee = {Employee_Id:null, Employee_Name:null, Age:null, Store_Id:null, Password:null,
    Mobile_No:null, Email:null, City:null, IsActive:null, Creation_Date:null};

  //constructor used for injecting dependency
  constructor(private router: Router,private employeesService:EmployeesService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    this.addForm=new FormGroup({

      //apply all the required validations on all the input controls
      'employeeName':new FormControl(null,[Validators.required,Validators.maxLength(40), 
                                    Validators.pattern('^[a-zA-Z ]*$')]),
      'email':new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(40),  
                                  Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      'city':new FormControl(null,[Validators.required,Validators.maxLength(40),  
                                  Validators.pattern('^[a-zA-Z0-9]*$')]),
      'storeId': new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{6}$')]),
      'employeeAge': new FormControl(null,[Validators.required,Validators.min(18),
                                  Validators.max(60),Validators.pattern('^[0-9]*$')]),
      'password':new FormControl(null,[Validators.required,
                                  Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,15})')]),
      'mobileNumber': new FormControl(null,[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')])
    }
    );
  }

   //action to be performed on submitting the form
   onSubmit(){

    //make isSubmitted bit to true
   this.isFormSubmitted=true;
   
   //make an object of type Food_Item by passing all input values to its constructor
   //this.employee=new Employee(null, this.addForm.value.employeeName,this.addForm.value.employeeAge,null,this.addForm.value.password,this.addForm.value.mobileNumber,this.addForm.value.email,this.addForm.value.city);
   this.employee.Employee_Name=this.addForm.value.employeeName;
   this.employee.Age=this.addForm.value.employeeAge;
   this.employee.Password=this.addForm.value.password;
   this.employee.Mobile_No=this.addForm.value.mobileNumber;
   this.employee.Email=this.addForm.value.email;
   this.employee.City=this.addForm.value.city;
   this.employee.Store_Id=this.addForm.value.storeId;


   //alert("hello")
   //alert(this.employee)
   //call the employeesService's postEmployee method to post the received object to the web api and subscribe to it
   this.employeesService.postEmployee(this.employee).subscribe(
    
    //handle the respoonse
    (response:boolean)=>{
      if(response == true)
      {alert('Employee successfully added');
         this.router.navigate(['employees'])
     }
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
