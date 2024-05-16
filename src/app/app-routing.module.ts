import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BookReviewComponent } from './components/book-review/book-review.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '', component: MainPageComponent, children: [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'administration', component: AdministrationComponent},
    { path: 'book/:id', component: BookReviewComponent}
  ]},
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard]}
  // { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
