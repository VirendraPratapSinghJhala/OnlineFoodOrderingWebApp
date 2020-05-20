
export class GlobalService{

    constructor(){
        if(localStorage.getItem('loggedInRole') == "" || localStorage.getItem('loggedInRole') == null){
            this.setLoginRole("none");
        }
    }

    setLoginRole(role:string){
        localStorage.setItem('loggedInRole', role);
    }

    getLoginRole(){
        return localStorage.loggedInRole.toString();
    }
}
