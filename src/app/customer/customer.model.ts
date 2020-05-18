export class Customer{
    public id?:number;
    public customerName:string;
    public city:string;
    public age:number;
    public email:string;
    public mobileNo:string;
    public password:string;
    

    constructor(id:number,customerName:string,city:string,age:number,email:string,mobileNo:string,password:string){
        this.id=id;
        this.customerName=customerName;
        this.city=city;
        this.age=age;
        this.email=email;
        this.mobileNo=mobileNo;
        this.password=password;
    }
}