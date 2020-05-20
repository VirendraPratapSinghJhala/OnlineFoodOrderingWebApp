

/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala,Prateek Joshi,Kritika Arora,Mehul Jain,Subin Sunu Jacob
    Creation Date: 18th May- 20th May,2020
    Description: This is the routiing module that takes care of all the routing related functionality
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AboutComponent } from './about/about.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodDetailComponent } from './foods/food-detail/food-detail.component';
import { FoodsStartComponent } from './foods/foods-start/foods-start.component';
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
import { CartComponent } from './cart/cart.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchFoodComponent } from './search-food/search-food.component';
import { SearchFoodNameComponent } from './search-food/search-food-name/search-food-name.component';
import { SearchFoodTypeComponent } from './search-food/search-food-type/search-food-type.component';
import { SearchFoodPriceComponent } from './search-food/search-food-price/search-food-price.component';
import { FoodMenuComponent } from './foods/food-menu/food-menu.component';

//defines the routes and their corresponding components and their child components/child routes
const routes: Routes = [
  
  {path:'admin-home',component:AdminHomeComponent},
  {path:'foodsmenu',component:FoodsComponent,
  children:[{path:'',component:FoodsStartComponent,pathMatch:'full'},
  {path:':id',component:FoodDetailComponent}]},
  {path:'about',component:AboutComponent},
  {path:'login', component:LoginFormComponent},
  {path:'register', component:RegisterFormComponent},
  {path:'updateuser', component:UpdateProfileComponent},
  {path:'addfooditem', component:AddFoodItemComponent},
  {path:'userfoodmenu',component:FoodMenuComponent},
  {path:'updatefooditem/:id', component:UpdateFoodItemComponent},
  {path:'cart', component:CartComponent},
  {path:'orderdetail/:id', component:OrderDetailComponent},
  {path:'orderlist', component:OrderListComponent},
  {path:'foodstore', component:FoodStoreComponent,
      children:[{path: 'add', component:AddFoodStoreComponent},
       {path: 'update', component:UpdateFoodStoreComponent}]},
  {path:'searchbyfoodname',component:SearchFoodComponent},
  {path:'searchbyfoodtype',component:SearchFoodComponent},
   {path:'searchbyfoodpricerange',component:SearchFoodComponent},
  {path:'employee', component:EmployeeComponent,
      children:[{path:'add', component:AddEmployeeComponent}, 
      {path:'update', component:UpdateEmployeeComponent}]},
  
  {path:'',redirectTo:'admin-home',pathMatch:'full'},
  {path:'notfound', component:NotFoundComponent},
  {path:'**', redirectTo:'notfound'}

];

//decorator that holds the metadata of the whole module
@NgModule({

   //includes all the other necessary modules required for the smooth execution of the application
  imports: [RouterModule.forRoot(routes,{useHash:true})],

  //includes the parts of this module that should be available to those modules which import the AppRoutingModule
  exports: [RouterModule]
})

//typescript class to be used outside whereever needed 
export class AppRoutingModule { }
