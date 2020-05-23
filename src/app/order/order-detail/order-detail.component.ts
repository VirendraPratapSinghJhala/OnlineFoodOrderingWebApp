/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the typescript logic for handling order details page
  ==========================================================================================================
*/
import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.model';
import { ActivatedRoute } from '@angular/router';
import { OrderItem } from '../order-item.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input("orderDetail") orderDetail:Order;
  orderItemsList:OrderItem[];
  constructor(private orderService:OrderService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.orderItemsList = this.orderDetail.orderItemList;
    console.log(this.orderItemsList);
  }

}
