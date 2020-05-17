


export class Food_Item{
    public name:string;
    public type:string;
    public imagePath:string;
    public price:number;
    

    constructor(name:string,type:string,imagePath:string,price:number){
          this.name=name;
          this.type=type;
          this.imagePath=imagePath;
          this.price=price;
    }
}