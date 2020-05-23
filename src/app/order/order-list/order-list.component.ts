import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../shared/global.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public customerId: number;
  public currentPath: string;
  public orderList: Order[];
  constructor(private orderService: OrderService, private router: Router, private globalService: GlobalService) {
    this.orderList = [];
    this.customerId = parseInt(this.globalService.getLoginObject().id.toString(), 10);
  }

  ngOnInit(): void {
    this.orderService.getOrdersByCustomerId(this.customerId).subscribe(
      (orderListResponse) => {
        this.orderList = this.orderService.orderValueMapper(orderListResponse);
      },
      (orderListError) => {

      }
    );
    this.currentPath = this.router.url;
  }

}
