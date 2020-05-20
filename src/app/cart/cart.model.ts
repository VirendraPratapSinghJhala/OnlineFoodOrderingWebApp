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
