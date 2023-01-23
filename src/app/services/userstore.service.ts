import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserstoreService {
private username$=new BehaviorSubject<string>("");
private role$= new BehaviorSubject<string>("");
  constructor() { }
 public getRoleFromStore(){
  return this.role$.asObservable();
 }
 public setRoleForStore(role:string){
  this.role$.next(role)

}
public getUsernameFromeStore(){
  return this.username$.asObservable();
 }
 public setUsernameForStore(username:string){
  this.username$.next(username)

}
}