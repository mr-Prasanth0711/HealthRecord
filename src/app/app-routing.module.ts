import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpatientsComponent } from './component/addpatients/addpatients.component';
import { AdminAddBasicDetailsComponent } from './component/admin-add-basic-details/admin-add-basic-details.component';
import { AdminAddDetailComponent } from './component/admin-add-detail/admin-add-detail.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { BasicdetailsComponent } from './component/basicdetails/basicdetails.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { DashboardAdminComponent } from './component/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashhomeComponent } from './component/dashhome/dashhome.component';
import { DetailstableComponent } from './component/detailstable/detailstable.component';
import { EditmydoctorComponent } from './component/editmydoctor/editmydoctor.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RecordByAdminComponent } from './component/record-by-admin/record-by-admin.component';
import { RegisterComponent } from './component/register/register.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { ViewDoctorComponent } from './component/view-doctor/view-doctor.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { MydoctorComponent } from './mydoctor/mydoctor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'basicdetail', component: BasicdetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'detailtable', component: DetailstableComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
  { path: 'UserDetails', component: UserDetailsComponent },
  { path: 'UserDetails/editDetail/:firstname', component: EditdetailsComponent },
  { path: 'mydoctor', component: MydoctorComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'homedashboard', component: DashhomeComponent },
  { path: 'mydoctor/editdoctor/:id', component: EditmydoctorComponent },
  { path: 'mydoctor/viewdotor/:id', component: ViewDoctorComponent },
  { path: 'Addpatients', component: AddpatientsComponent },
  { path: 'adminAdddetails', component: AddpatientsComponent },
  { path: 'adminAddBasic', component: AdminAddBasicDetailsComponent },
  { path: 'Userlist', component: UserListComponent },
  { path: 'Adminadduser', component: AdminAddDetailComponent },
  { path: 'RecordAdmin', component: RecordByAdminComponent },
  { path: 'DashboardAdmin', component: DashboardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
