

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala
    Creation Date: 16th May,2020
    Description: This is a model (indicates a single food item) class of type Food_Item to be used as a type by the ouside classes/components
 ==========================================================================================================
*/

//declare class Food_Item to be used by outside classes/components
export class Food_Item{
    //stores id of food item
    public foodId:number;

    //stores name of food item
    public name:string;

    //stores type of food item
    public type:string;

    //store the path of image of food item
    public imagePath:string;

    //stores the price of food item
    public price:number;
    
//initialise properties of the class through constructor
    constructor(name:string,type:string,imagePath:string,price:number){
          this.name=name;
          this.type=type;
          this.imagePath=imagePath;
          this.price=price;
    }
}