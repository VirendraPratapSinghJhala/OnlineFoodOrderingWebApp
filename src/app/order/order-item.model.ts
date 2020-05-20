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
