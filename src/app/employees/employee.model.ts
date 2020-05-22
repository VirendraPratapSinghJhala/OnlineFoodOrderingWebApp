
/*  
  =======================================================================================================
    Developer: Subin Sunu Jacob
    Creation Date: 16th May,2020
    Description: This is a model (indicates a single employee) class of type Employee to be used as a type by the ouside classes/components
 ==========================================================================================================
*/

export class Employee{

    //stores id of the employee
    public Employee_Id :number;
    //stores name of the employee
    public Employee_Name :string;
    //stores age of the employee
    public Age :number;
    //stores storeId of the employee
    public Store_Id :number;
    //stores password of the employee
    public Password :string;
    //stores mobileNumber of the employee
    public Mobile_No :string;
    //stores email of the employee
    public Email :string;
    //stores city of the employee
    public City :string;

    public IsActive:boolean;

    public Creation_Date:Date;

    //initialise properties of the class through constructor
    constructor(Employee_Id:number, Employee_Name:string, Age:number, Store_Id:number, Password:string,
      Mobile_No:string, Email:string, City:string, IsActive:boolean, Creation_Date:Date)
    {
            this.Employee_Name = Employee_Name;
            this.City = City;
            this.Age = Age;
            this.Mobile_No = Mobile_No;
            this.Store_Id = Store_Id;
            this.Password = Password;
            this.Email = Email;
            this.IsActive=IsActive;
            this.Creation_Date=Creation_Date;
    }
}