import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  { path: 'logout', redirectTo: '', pathMatch: 'full'},
  { path: 'create', component: NewSurveyComponent, pathMatch: 'full'},
  { path: 'dashboard/:id', component: PollComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
