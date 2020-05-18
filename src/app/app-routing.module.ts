import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AboutComponent } from './about/about.component';
import { FoodsComponent } from './foods/foods.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddFoodItemComponent } from './foods/add-food-item/add-food-item.component';
import { UpdateFoodItemComponent } from './foods/update-food-item/update-food-item.component';
import { AddFoodStoreComponent } from './add-food-store/add-food-store.component';
import { UpdateFoodStoreComponent } from './update-food-store/update-food-store.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  
  {path:'admin-home',component:AdminHomeComponent},
  {path:'foodsmenu',component:FoodsComponent},
  {path:'about',component:AboutComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'updateuser', component:UpdateProfileComponent},
  {path:'addfooditem', component:AddFoodItemComponent},
  {path:'updatefooditem', component:UpdateFoodItemComponent},
  {path:'addfoodstore', component:AddFoodStoreComponent},
  {path:'updatefoodstore', component:UpdateFoodStoreComponent},
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'updateemployee', component:UpdateEmployeeComponent},
  {path:'',redirectTo:'admin-home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
