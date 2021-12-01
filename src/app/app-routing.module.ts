import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetloginComponent } from './components/resetlogin/resetlogin.component';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'resetlogin', component: ResetloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
