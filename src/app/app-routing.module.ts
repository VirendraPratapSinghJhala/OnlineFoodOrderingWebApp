import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AboutComponent } from './about/about.component';
import { FoodsComponent } from './foods/foods.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';


const routes: Routes = [
  
  {path:'admin-home',component:AdminHomeComponent},
  {path:'foodsmenu',component:FoodsComponent},
  {path:'about',component:AboutComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'',redirectTo:'admin-home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
