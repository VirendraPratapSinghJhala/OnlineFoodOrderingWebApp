export class FoodStore{
    public foodStoreId:number;
    public foodStoreName:string;
    public location:string;
    public mobileno:string;
    public email:string;
    public rating:number;
    constructor(foodStoreId:number,foodStoreName:string,location:string,mobileno:string,email:string,rating:number){
          this.foodStoreId=foodStoreId;
          this.foodStoreName=foodStoreName;
          this.location=location;
          this.mobileno=mobileno;
          this.email=email;
          this.rating=rating;
    }
}