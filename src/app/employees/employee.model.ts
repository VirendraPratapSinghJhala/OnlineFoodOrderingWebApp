export class Employee{
    public id?:number;
    public name:string;
    public age:number;
    public storeId:number;
    public password:string;
    public mobileNumber:string;
    public email:string;
    public city:string;
    

    constructor(
        id:number,
        name:string,
        age:number,
        storeId:number,
        password:string,
        mobileNumber:string,
        email:string,
        city:string){
            this.id = id;
            this.name = name;
            this.city = city;
            this.age = age;
            this.mobileNumber = mobileNumber;
            this.storeId = storeId;
            this.password = password;
            this.email = email;
    }
}