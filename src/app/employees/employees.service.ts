import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';
import { WebApiService } from '../shared/webapi.service';
 

@Injectable()
export class EmployeesService implements OnInit{

    constructor(private httpClient:HttpClient,private webapiService:WebApiService){

    }

    ngOnInit(){
        this.apiPrefix=this.webapiService.urlPrefix;
    }

    apiPrefix:string;

    getEmployees():Observable<Employee[]>{

        return this.httpClient.get<Employee[]>(this.apiPrefix +"/api/employee");
    }


    postEmployee(employee:Employee):Observable<boolean>{

        return this.httpClient.post<boolean>(this.apiPrefix +"/api/employee",employee);
    }


    getEmployeeById(employeeId:number):Observable<Employee>
    {
        return this.httpClient.get<Employee>(this.apiPrefix +"/api/employee?Employee_Id="+employeeId);
    }

    putEmployee(employee:Employee):Observable<boolean>{

        return this.httpClient.put<boolean>(this.apiPrefix +"/api/employee",employee);

    }

    getEmployeeByName(employeeName:string):Observable<Employee[]>
    {
        return this.httpClient.get<Employee[]>(this.apiPrefix +"/api/employee?Employee_Name="+employeeName);
    }


    deleteEmployeeById(employeeId:number):Observable<boolean>
    {
        return this.httpClient.delete<boolean>(this.apiPrefix +"/api/employee?Employee_Id="+employeeId);
    }
}