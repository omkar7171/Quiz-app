import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'welcome',component:WelcomeComponent},
  {path:'question',component:QuestionComponent},
  {path:'home',component:HomeComponent},
  {path:'tutorial',component:TutorialComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
