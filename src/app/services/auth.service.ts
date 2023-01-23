import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import{JwtHelperService} from '@auth0/angular-jwt'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="http://localhost:39164/api/"
  private userPayload:any;

  constructor(private http :HttpClient, private router:Router) {
    this.userPayload=this.decodeToken();
  }

register(userObject:any){
    return this.http.post<any>(`${this.baseUrl}Users/register`,userObject);
}

login(loginObject:any){
  return this.http.post<any>(`${this.baseUrl}Users/userlogin`,loginObject);
}

forgotpassword(forgotPasswordOTP:any){
  return this.http.post<any>(`${this.baseUrl}Users/sendforgetpasswordOTP`,forgotPasswordOTP)

}

confirmForgotPassword(confirmForgetPasswordOTP:any)
{
    return this.http.post<any>(`${this.baseUrl}Users/confirmforgetpasswordOTP`,confirmForgetPasswordOTP)
}
adminlogin(adminloginObject:any)
{
    return this.http.post<any>(`${this.baseUrl}Users/adminlogin`,adminloginObject)
}
basicdetail(DetailsObject:any){
  return this.http.post<any>(`${this.baseUrl}Basicdetail/Basicdetail`,DetailsObject)
}

getbasicDetails(){
  return this.http.get(`http://localhost:39164/api/Basicdetail/GetDetails`)
}

storeToken(tokenValue : string){
  localStorage.setItem('token',tokenValue)
}
getToken(){
  localStorage.getItem('token')
}

isloggedin():boolean{
  return !!localStorage.getItem('token')
}

logout(){
  localStorage.removeItem('token')
  this.router.navigate(['login'])
}
decodeToken(){
  const jwtHelper=new JwtHelperService();
  const token= this.getToken()!;
  console.log(jwtHelper.decodeToken(token));
  
  return jwtHelper.decodeToken(token);
}
getUsernameFromToken(){
  if(this.userPayload){
    return this.userPayload.username
  }
}
  getRoleFromToken(){
    if(this.userPayload){
      return this.userPayload.role
    }
}

GetDetailUrl:string="http://localhost:39164/api/Users/"
GetDetailApi(name:string):Observable<any>{
  return  this.http.get<any>(this.GetDetailUrl+name)
 }

 GetDetailforDashboardurl:string="http://localhost:39164/api/Users/Details/"

 GetDetailforDashboard(name:string):Observable<any>{
  return  this.http.get<any>(this.GetDetailforDashboardurl+name)
 }

 saveedit(Edit:any){
  return this.http.post<any>(`${this.baseUrl}Users/SaveEdit`,Edit);
 }

 Record(recordObject:any){
  return this.http.post<any>(`${this.baseUrl}Record/Records`,recordObject);
 }


Doctorurl="http://localhost:39164/api/Record/"
doctor(name:string){
  return this.http.get<any>(this.Doctorurl+name);
}
changepasswordurl="http://localhost:39164/api/Users/"
change(name:string){
  return this.http.get<any>(this.changepasswordurl+name);
}

passwordUrl="http://localhost:39164/api/Users/"
   password(newchangePassword:any){
    return this.http.post<any>(`${this.passwordUrl}ChangePassword`,newchangePassword)
   }

   getdoctorforview="http://localhost:39164/api/ViewDoctor/"

   viewdoctor(id:any){
    return this.http.get<any>(this.getdoctorforview+id);
  }
doctoredit="http://localhost:39164/api/ViewDoctor/"

savedoctor(Edit:any){
 return this.http.post<any>(`${this.doctoredit}DoctorEdit`,Edit)
}

uploadfile="http://localhost:39164/api/Record/"
fileupdate(file:any){
  const formData= new FormData();
  formData.append('file',file,file.name);
  return this.http.post<any>(`${this.uploadfile}Uploadfile`,formData)
 }


getRecords(){
  return this.http.get(`http://localhost:39164/api/Record/GetRecords`)
}
getusers(){
  return this.http.get(`http://localhost:39164/api/Users/GetUsers`)
}

downloadfile="http://localhost:39164/api/Record/"

FileDownload(file:any){
  return  this.http.get(this.downloadfile+file,
   {observe:'response',responseType:'blob'}
    )
 }


}
