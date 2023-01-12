import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; //todo enrutamiento debe importar RouterModule y Routes
import { ProfilingComponent } from './profiling/profiling.component';
import { LearningPathComponent } from './LearningPath/learning-path.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MainPageComponent } from './mainPage/main-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  //aqui se indican las rutas
  { path: '', component: MainPageComponent},
  { path: 'mainpage', component: MainPageComponent},
  { path: 'profiling', component: ProfilingComponent},
  { path: 'learning', component: LearningPathComponent },
  { path: 'userinfo', component: UserInfoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'feedback', component: FeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
