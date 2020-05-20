
/*  
  =======================================================================================================
    Developer: Mehul Jain
    Creation Date: 18th May,2020
    Description: This is a base component
  ==========================================================================================================
*/


//import all the required entities from their respective packages

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

//decorator used for storing Component's metadata
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

//Component that handles all the tasks in correspondance to the html template
export class CustomerComponent implements OnInit {
  customer:Customer[]=null;

  currentPath:string=null;

    //constructor used for injecting dependency
  constructor(private router: Router, private customerService:CustomerService) { }

  //ngOnInit used for initialising properties of the class
  ngOnInit(): void {

    this.customer = this.customerService.getSampleAllCustomers();
    this.currentPath= this.router.url;
  }

}
