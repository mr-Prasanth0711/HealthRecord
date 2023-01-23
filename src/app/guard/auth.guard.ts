import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { AuthService } from '../services/auth.service';
import { MessagesService } from '../services/messages.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router ,private toast:NgToastService) {

  }
  canActivate(): boolean {
    if (this.auth.isloggedin()) {
      return true;
    } else {
      this.router.navigateByUrl('/login')
     this.toast.error({detail:"ERROR", summary:"Please Login First!"});
    
      return false;
    }
  }

}
