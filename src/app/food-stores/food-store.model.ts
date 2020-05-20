
/*  
  =======================================================================================================
    Developer: Kritika Arora
    Creation Date: 16th May,2020
    Description: This is a model (indicates a single foodstore) class of type FoodStore to be used as a type by the ouside classes/components
 ==========================================================================================================
*/




export class FoodStore{
     //stores id of the foodstore
    public foodStoreId:number;
     //stores name of the foodstore
    public foodStoreName:string;
    //stores location of the foodstore
    public location:string;
    //stores mobilenumber of the foodstore
    public mobileno:string;
    //stores email of the foodstore
    public email:string;
    //stores rating of the foodstore
    public rating:number;
    //initialise properties of the class through constructor
    constructor(foodStoreId:number,foodStoreName:string,location:string,mobileno:string,email:string,rating:number){
          this.foodStoreId=foodStoreId;
          this.foodStoreName=foodStoreName;
          this.location=location;
          this.mobileno=mobileno;
          this.email=email;
          this.rating=rating;
    }
}