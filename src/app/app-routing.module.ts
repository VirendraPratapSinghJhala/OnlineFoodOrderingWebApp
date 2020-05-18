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
import { AddFoodStoreComponent } from './food-stores/add-food-store/add-food-store.component';
import { UpdateFoodStoreComponent } from './food-stores/update-food-store/update-food-store.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { FoodStoreComponent } from './food-stores/food-store.component';
import { EmployeeComponent } from './employees/employee.component';


const routes: Routes = [
  
  {path:'admin-home',component:AdminHomeComponent},
  {path:'foodsmenu',component:FoodsComponent},
  {path:'about',component:AboutComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'updateuser', component:UpdateProfileComponent},
  {path:'addfooditem', component:AddFoodItemComponent},
  {path:'updatefooditem', component:UpdateFoodItemComponent},
  {path:'foodstore', component:FoodStoreComponent,
      children:[{path: 'add', component:AddFoodStoreComponent}, {path: 'update', component:UpdateFoodStoreComponent}]},
  {path:'employee', component:EmployeeComponent,
      children:[{path:'add', component:AddEmployeeComponent}, {path:'update', component:UpdateEmployeeComponent}]},
  {path:'',redirectTo:'admin-home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
