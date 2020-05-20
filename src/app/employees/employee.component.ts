
/*  
  =======================================================================================================
    Developer: Subin Sunu Jacob
    Creation Date: 18th May,2020
    Description: This is a base component which shows the list of employees and shows add and update feature.
  ==========================================================================================================
*/


//import all the required entities from their respective packages

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class EmployeeComponent implements OnInit {
  employees:Employee[]=null;

  currentPath:string=null;

    //constructor used for injecting dependency
  constructor(private router: Router, private employeeService:EmployeesService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    this.employees = this.employeeService.getSampleAllEmployees();
    this.currentPath= this.router.url;
  }

}
