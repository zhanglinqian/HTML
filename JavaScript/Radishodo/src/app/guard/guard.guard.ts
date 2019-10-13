import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }
  checkLogin(): boolean {
    let login = JSON.parse(sessionStorage.getItem("SignInStatus"))
    let message = JSON.parse(sessionStorage.getItem("login_message"))
    if (message === 'success') {
      console.log('通过登录认证')
      return true;
    }
    this.router.navigate(['../login']);
    return false;
  }

}
