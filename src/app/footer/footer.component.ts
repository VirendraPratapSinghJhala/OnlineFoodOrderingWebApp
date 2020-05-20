import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private globalService:GlobalService, private router:Router) { }

  isLoggedIn:boolean = false;
  ngOnInit(): void {
    this.isLoggedIn = this.globalService.getLoginRole() == 'none' ? false : true
    this.router.events.subscribe(val=>{this.isLoggedIn = this.globalService.getLoginRole() == 'none' ? false : true});
  }
}
