import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanDeactivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'', component: RegisterComponent},
  {path:'nav-bar',component: NavComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
