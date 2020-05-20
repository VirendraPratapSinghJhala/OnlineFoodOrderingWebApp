import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public currentPath:string;
  constructor(private orderService:OrderService, private router:Router) { }

  public orderList:Order[]=[];
  ngOnInit(): void {
    this.orderList = this.orderService.sampleGetOrder();
    console.log(this.orderList);
    this.currentPath = this.router.url;
  }

}
