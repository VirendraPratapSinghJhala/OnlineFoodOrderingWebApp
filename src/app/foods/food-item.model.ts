

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
    public Food_Item_Id:number;

    //stores name of food item
    public Food_Name:string;

    //stores type of food item
    public Food_Type:string;

    //store the path of image of food item
    public ImagePath:string;

    //stores the price of food item
    public Price:number;

    public IsActive:boolean;

    public Creation_Date:Date;
    
//initialise properties of the class through constructor
    constructor(Food_Item_Id:number,Food_Name:string,Food_Type:string,ImagePath:string,Price:number,IsActive:boolean,Creation_Date:Date){
          this.Food_Name=name;
          this.Food_Type=Food_Type;
          this.ImagePath=ImagePath;
          this.Price=Price;
          this.IsActive=IsActive;
          this.Creation_Date=Creation_Date;
    }
}