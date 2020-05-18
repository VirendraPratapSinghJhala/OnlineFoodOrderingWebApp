import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AboutComponent } from './about/about.component';
import { FoodsService } from './foods/foods.service';
import { FoodItemComponent } from './foods/food-list/food-item/food-item.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { FoodDetailComponent } from './foods/food-detail/food-detail.component';
import { FoodsStartComponent } from './foods/foods-start/foods-start.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddFoodStoreComponent } from './food-stores/add-food-store/add-food-store.component';
import { AddFoodItemComponent } from './foods/add-food-item/add-food-item.component';
import { UpdateFoodItemComponent } from './foods/update-food-item/update-food-item.component';
import { UpdateFoodStoreComponent } from './food-stores/update-food-store/update-food-store.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';
import { FoodStoreComponent } from './food-stores/food-store.component';
import { EmployeeComponent } from './employees/employee.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    HeaderComponent,
    DropdownDirective,
    AboutComponent,
    FoodsComponent,
    FoodListComponent,
    FoodDetailComponent,
    FoodItemComponent,
    FoodsStartComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UpdateProfileComponent,
    AddFoodStoreComponent,
    AddFoodItemComponent,
    UpdateFoodItemComponent,
    UpdateFoodStoreComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    FoodStoreComponent,
    EmployeeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
