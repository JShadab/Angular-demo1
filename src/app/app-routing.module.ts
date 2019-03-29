import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
        
        { path: 'login',  component:LoginComponent},
        { path: 'register',  component:RegisterComponent},
        { path: 'dashboard',  component:DashboardComponent},
        { path: 'project/:name',  component:ProjectComponent},
        { path: '',  component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
