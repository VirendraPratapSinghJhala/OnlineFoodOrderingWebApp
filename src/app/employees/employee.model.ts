export class Employee{
    public name:string;
    public city:string;
    public age:number;
    public imagePath:string;
    public mobileNumber:string;
    

    constructor(
         name:string,
         city:string,
         age:number,
         imagePath:string,
         mobileNumber:string){
        this.name = name;
        this.city = city;
        this.age = age;
        this.imagePath = imagePath;
        this.mobileNumber = mobileNumber;
    }
}