
export class GlobalService{

    private static loggedInRole:string;

    constructor(){
        GlobalService.loggedInRole = "none";
        console.log("Global constructor called. loggedInRole = " + GlobalService.loggedInRole);
    }

    setLoginRole(role:string){
        GlobalService.loggedInRole = role;
    }

    getLoginRole(){
        return GlobalService.loggedInRole;
    }
}
