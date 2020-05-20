import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private globalService:GlobalService) { }
  shouldShowAdmin:boolean = false;
  ngOnInit(): void {
    this.shouldShowAdmin = this.globalService.getLoginRole() == "admin" ? true : false;
  }

}
