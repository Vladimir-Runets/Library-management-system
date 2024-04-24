import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: "login", component: LoginPageComponent, canActivate: [AuthGuard]},
  { path: "dashboard", component: DashboardComponent},
  { path: "administration", component: AdministrationComponent},
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
