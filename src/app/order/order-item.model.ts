/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the Order Item Model class
  ==========================================================================================================
*/
export class OrderItem {
    foodItemId: number;
    price: number;
    quantity: number;
    constructor(foodItemId: number,price: number,quantity: number) {
        this.foodItemId = foodItemId;
        this.price = price;
        this.quantity = quantity;
    }
}
