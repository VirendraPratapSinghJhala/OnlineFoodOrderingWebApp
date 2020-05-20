
/*  
  =======================================================================================================
    Developer: Subin Sunu Jacob
    Creation Date: 18th May,2020
    Description: This is a service class for Employee related components helping those components to communicate with each other
                 and also allows those components to send and recieve requests through HttpClient. 
  ==========================================================================================================
*/

//import all the required entities from their respective packages
import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 
//make the class injectable so that it can be injected by HttpClient service's object
@Injectable()
//This is a service class for Employee related components helping those components to communicate with each other
//and also allows those components to send and recieve requests through HttpClient. 
export class EmployeesService implements OnInit{

    employee:Employee[] = [
        new Employee(
            22,
            "Prateek",
            22,
            1212,
            "something",
            "9999999",
            "ad@rerg.com",
            "City")
    ];

    //property will hold prefix of the url present in request to web api
    apiPrefix:string;

    //constructor for injecting dependencies
    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    //initialise properties of class in ngOnInit()
    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }


    getSampleEmployee(){
        return(this.employee[0]);
    }

    // get all the employees by calling GetAllEmployees() in web api controller
    getEmployees():Observable<Employee[]>{

        return this.httpClient.get<Employee[]>(this.apiPrefix +"/api/employee");
    }

    // add the employee by calling AddEmployee() in web api controller and return boolean value indicating whether passed employee is added or not
    postEmployee(employee:Employee):Observable<boolean>{

        return this.httpClient.post<boolean>(this.apiPrefix +"/api/employee",employee);
    }

    //it returns zero or one employee corresponding to the passed id
    getEmployeeById(employeeId:number):Observable<Employee>
    {
        return this.httpClient.get<Employee>(this.apiPrefix +"/api/employee?Employee_Id="+employeeId);
    }

    //returns the boolean value indicating whether passed employee updated or not
    putEmployee(employee:Employee):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/employee",employee);

    }

    //returns an array of employees corresponding to the passed employee name
    getEmployeeByName(employeeName:string):Observable<Employee[]>
    {
        return this.httpClient.get<Employee[]>(this.apiPrefix +"/api/employee?Employee_Name="+employeeName);
    }

    //returns boolean value indicating whether employee with passed employee id is deleted or not
    deleteEmployeeById(employeeId:number):Observable<boolean>
    {
        return this.httpClient.delete<boolean>(this.apiPrefix +"/api/employee?Employee_Id="+employeeId);
    }
}