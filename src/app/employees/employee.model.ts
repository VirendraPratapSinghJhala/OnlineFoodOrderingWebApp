export class Employee{
    public id?:number;
    public name:string;
    public city:string;
    public age:number;
    public imagePath:string;
    public mobileNumber:string;
    

    constructor(
        id:number,
        name:string,
        city:string,
        age:number,
        imagePath:string,
        mobileNumber:string){
            this.id = id;
            this.name = name;
            this.city = city;
            this.age = age;
            this.imagePath = imagePath;
            this.mobileNumber = mobileNumber;
    }
}