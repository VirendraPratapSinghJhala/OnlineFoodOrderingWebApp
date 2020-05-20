import { Observable } from 'rxjs';

export class AuthService{
    loggedIn = true;
    isAuthenticated():Promise<{}>{
        const promise = new Promise( (resolve, reject) => {
                            setTimeout( ()=>{
                                resolve(this.loggedIn);}, 800 );
                        });
        return promise;
    }

    login() {this.loggedIn = true}
    logout() {this.loggedIn = false}
}
