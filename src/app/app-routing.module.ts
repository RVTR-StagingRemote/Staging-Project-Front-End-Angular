import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetloginComponent } from './components/resetlogin/resetlogin.component';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompanyComponent } from './pages/register/company/company.component';
import { IndividualComponent } from './pages/register/individual/individual.component';
import { ClientSkillsComponent } from './pages/client-skills/client-skills.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'client-skills', component: ClientSkillsComponent},
  {path: 'resetlogin', component: ResetloginComponent},
  {path: 'register/company', component: CompanyComponent},
  {path: 'register/individual', component: IndividualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
