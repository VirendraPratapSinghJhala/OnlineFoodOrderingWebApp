import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable() export class AuthGuard implements CanActivate{
    router:Router;
    constructor (private autService:AuthService){}
    canActivate():Observable<boolean>|Promise<boolean>|boolean{
        return this.autService.isAuthenticated().then((authenticated:boolean) => {
            if(authenticated){ return true; }else{ this.router.navigate(['/']) }
        });
    }
}
