
/*  
  =======================================================================================================
    Developer: Subin Sunu Jacob
    Creation Date: 18th May,2020
    Description: This is a base component which shows the list of employees and shows add and update feature.
  ==========================================================================================================
*/

                //  What IF WE RELOAD THE APPLICATION ???? Will THE LOGIN BE PERSISTENT ?????
//import all the required entities from their respective packages

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  shoudDisplayList:Boolean=true;

    //constructor used for injecting dependency
  constructor(private router: Router, private employeeService:EmployeesService, private route: ActivatedRoute) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {
    //this.router.events.subscribe(val=>alert(JSON.stringify(val)));  //{this.shoudDisplayList = this.router.url == '/employees' ? true : false}
    this.shoudDisplayList = this.router.url == '/employees' ? true : false;
    //this.employees = 
    this.employeeService.getEmployees().subscribe((val)=>{this.employees=val
      //alert(JSON.stringify(val));
      //console.log(val);
      },(err)=> {console.log(err)
      }
      );
    
  }

  addEmployee(){
    this.router.navigate(['addemployee',{relativeTo:this.route}]);
  }

  gotoupdate(value1){
    this.employeeService.saveId = value1
    this.router.navigate(['updateemployee'])
  }

}
