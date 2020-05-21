
export class GlobalService{

    constructor(){
        if(localStorage.getItem('loggedInRole') == "" || localStorage.getItem('loggedInRole') == null){
            this.setLoginObject("none", null);
        }
    }

    setLoginObject(role:string, id:number){
        localStorage.setItem('loggedInRole', role);
        localStorage.setItem('id', id?.toString());
    }

    getLoginObject(){
        return { role:localStorage.getItem('loggedInRole').toString(), id:localStorage.getItem('id')?.toString() }
    }
}
