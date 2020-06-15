import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Cookie} from 'ng2-cookies/ng2-cookies'

@Injectable()
export class DashboardGuard implements CanActivate {
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot):boolean {
        console.log("In guard service");
        console.log(Cookie.get('authToken'));
        if (Cookie.get('authToken')=== undefined || Cookie.get('authToken')==='' || Cookie.get('authToken')=== null){
            this.router.navigate(['/']);
            return  false;
        }else{
            return true;
        }
        
    }
}
