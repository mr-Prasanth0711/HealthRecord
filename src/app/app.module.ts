import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { BasicdetailsComponent } from './component/basicdetails/basicdetails.component';
import { MatStepperModule } from '@angular/material/stepper'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './component/profile/profile.component';
import { TopbarComponent } from './component/topbar/topbar.component'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DetailstableComponent } from './component/detailstable/detailstable.component'
import { ToastrModule } from 'ngx-toastr'
import { NgToastModule } from 'ng-angular-popup';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { MydoctorComponent } from './mydoctor/mydoctor.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { DashhomeComponent } from './component/dashhome/dashhome.component';
import { EditmydoctorComponent } from './component/editmydoctor/editmydoctor.component';
import { ViewDoctorComponent } from './component/view-doctor/view-doctor.component';
import { AddpatientsComponent } from './component/addpatients/addpatients.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminAddBasicDetailsComponent } from './component/admin-add-basic-details/admin-add-basic-details.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { AdminAddDetailComponent } from './component/admin-add-detail/admin-add-detail.component';
import { RecordByAdminComponent } from './component/record-by-admin/record-by-admin.component';
import { DashboardAdminComponent } from './component/dashboard-admin/dashboard-admin.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    AdminloginComponent,
    BasicdetailsComponent,
    ProfileComponent,
    TopbarComponent,
    DetailstableComponent,
    UserdashboardComponent,
    UserDetailsComponent,
    EditdetailsComponent,
    MydoctorComponent,
    ChangePasswordComponent,
    DashhomeComponent,
    EditmydoctorComponent,
    ViewDoctorComponent,
    AddpatientsComponent,
    AdminAddBasicDetailsComponent,
    UserListComponent,
    AdminAddDetailComponent,
    RecordByAdminComponent,
    DashboardAdminComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
    NgToastModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
