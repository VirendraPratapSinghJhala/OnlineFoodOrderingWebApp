/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the Model class for Cart
  ==========================================================================================================
*/
import { OrderItem } from '../order/order-item.model';
export class Cart{
    cartId?: number;
    customerId:number;
    totalQuantity: number;
    totalPrice: number;
    foodStoreId: number;
    employeeId: number;
    cartItemList?: OrderItem[];

    constructor(cartId: number,customerId:number,totalQuantity: number,totalPrice: number,foodStoreId: number,employeeId: number,cartItemList: OrderItem[]){
        this.cartId = cartId;
        this.customerId = customerId;
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalPrice;
        this.foodStoreId = foodStoreId;
        this.employeeId = employeeId;
        this.cartItemList = cartItemList;
    }

}
