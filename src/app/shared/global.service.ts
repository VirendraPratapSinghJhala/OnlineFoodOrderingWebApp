
export class GlobalService{

    private static loggedInRole:string="none";

    constructor(){
        if(localStorage.getItem('loggedInRole') == "" || localStorage.getItem('loggedInRole') == null){
            this.setLoginRole("none");
        }
    }

    setLoginRole(role:string){
        GlobalService.loggedInRole = role;
        localStorage.setItem('loggedInRole', role);
    }

    getLoginRole(){
        return localStorage.loggedInRole.toString();
    }
}
