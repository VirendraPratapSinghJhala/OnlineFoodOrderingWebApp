
export class GlobalService{

    private static loggedInRole:string="none";

    setLoginRole(role:string){
        GlobalService.loggedInRole = role;
    }

    getLoginRole(){
        return GlobalService.loggedInRole;
    }
}
