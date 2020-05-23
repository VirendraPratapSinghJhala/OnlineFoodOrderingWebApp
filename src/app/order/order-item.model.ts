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
    foodItemName: string;
    foodItemImagePath: string;
    constructor(foodItemId: number,price: number,quantity: number, foodItemName: string, foodItemImagePath: string) {
      this.foodItemId = foodItemId;
      this.price = price;
      this.quantity = quantity;
      this.foodItemName = foodItemName;
      this.foodItemImagePath = foodItemImagePath;
    }
}
