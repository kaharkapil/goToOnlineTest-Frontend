import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class UserDashboradGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("In user-dashboard guard");
      console.log(Cookie.get('authToken'));
      if (Cookie.get('authToken')=== undefined || Cookie.get('authToken')==='' || Cookie.get('authToken')=== null){
        this.router.navigate(['/']);
        return  false;
    }else{
        return true;
    }
  }
  
}
