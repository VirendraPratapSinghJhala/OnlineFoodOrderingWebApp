/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the Order Model class
  ==========================================================================================================
*/
import { OrderItem } from './order-item.model';

export class Order{
    orderId?: number;
    customerId:number;
    orderDate: string;
    totalQuantity: number;
    totalPrice: number;
    foodStoreId: number;
    employeeId: number;
    orderItemList?: OrderItem[];

    constructor(orderId: number,customerId:number,orderDate: string,totalQuantity: number,totalPrice: number,foodStoreId: number,employeeId: number,orderItemList: OrderItem[]){
        this.orderId = orderId;
        this.customerId = customerId;
        this.orderDate = orderDate;
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalPrice;
        this.foodStoreId = foodStoreId;
        this.employeeId = employeeId;
        this.orderItemList = orderItemList;
    }
}
