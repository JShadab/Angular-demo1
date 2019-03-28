import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProjectComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
