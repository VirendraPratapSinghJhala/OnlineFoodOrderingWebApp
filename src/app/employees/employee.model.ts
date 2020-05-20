
/*  
  =======================================================================================================
    Developer: Subin Sunu Jacob
    Creation Date: 16th May,2020
    Description: This is a model (indicates a single employee) class of type Employee to be used as a type by the ouside classes/components
 ==========================================================================================================
*/

export class Employee{

    //stores id of the employee
    public id?:number;
    //stores name of the employee
    public name:string;
    //stores age of the employee
    public age:number;
    //stores storeId of the employee
    public storeId:number;
    //stores password of the employee
    public password:string;
    //stores mobileNumber of the employee
    public mobileNumber:string;
    //stores email of the employee
    public email:string;
    //stores city of the employee
    public city:string;
    

    //initialise properties of the class through constructor
    constructor(id:number, name:string, age:number, storeId:number, password:string,
                 mobileNumber:string, email:string, city:string)
    {
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