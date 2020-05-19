export class Employee{
    public id?:number;
    public name:string;
    public city:string;
    public age:number;
    public mobileNumber:string;
    

    constructor(
        id:number,
        name:string,
        city:string,
        age:number,
        mobileNumber:string){
            this.id = id;
            this.name = name;
            this.city = city;
            this.age = age;
            this.mobileNumber = mobileNumber;
    }
}