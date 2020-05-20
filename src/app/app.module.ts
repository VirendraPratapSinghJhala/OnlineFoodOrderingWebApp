/*  
  =======================================================================================================
    Developer: Virendra Pratap Singh Jhala,Prateek Joshi,Kritika Arora,Mehul Jain,Subin Sunu Jacob
    Creation Date: 16th May- 20th May,2020
    Description: This is the main module of the application which holds the imports of all the defined services in
                 the applications in providers, Components, Directives in declarations
  ==========================================================================================================
*/


//import all the required entities from their respective packages
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
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
import { EmployeesService } from './employees/employees.service';
import { FoodStoreComponent } from './food-stores/food-store.component';
import { EmployeeComponent } from './employees/employee.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebApiService } from './shared/webapi.service';
import { SearchFoodComponent } from './search-food/search-food.component';
import { SearchFoodNameComponent } from './search-food/search-food-name/search-food-name.component';
import { SearchFoodTypeComponent } from './search-food/search-food-type/search-food-type.component';
import {  SearchFoodPriceComponent } from './search-food/search-food-price/search-food-price.component';
import { FoodsStoreService } from './food-stores/food-store.service';
import { OrderService } from './order/order.service';
import { CartService } from './cart/cart.service';
import { SearchResultComponent } from './search-food/search-result/search-result.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { FoodMenuComponent } from './foods/food-menu/food-menu.component';
import { FoodMenuItemComponent } from './foods/food-menu/food-menu-item/food-menu-item.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CustomerService } from './customer/customer.service';
import { CustomerComponent } from './customer/customer.component';
import { AfterCheckoutComponent } from './after-checkout/after-checkout.component';
import { GlobalService } from './shared/global.service';



//decorator that holds the metadata of the whole module
@NgModule({

  //includes all the defined Components and directives in the application
  declarations: [
    AppComponent,
    AdminHomeComponent,
    HeaderComponent,
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
    CartComponent,
    OrderDetailComponent,
    OrderListComponent,
    NotFoundComponent,
    SearchFoodComponent,
    SearchFoodNameComponent,
    SearchFoodTypeComponent,
    SearchFoodPriceComponent,
    SearchResultComponent,
    ContactusComponent,
    FooterComponent,
    FoodMenuComponent,
    FoodMenuItemComponent,
    UserHomeComponent,
    CustomerComponent,
    AfterCheckoutComponent
  ],

  //includes all the other necessary modules required for the smooth execution of the application
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //includes all the services defined in the application to be used application wide
  providers: [GlobalService, CartService, CustomerService, OrderService, FoodsStoreService, FoodsService, WebApiService , EmployeesService, {provide: LocationStrategy, useClass: PathLocationStrategy} ],

  //includes the Component from which the angular starts the execution 
  bootstrap: [AppComponent]
})

//typescript class to be used outside whereever needed 
export class AppModule { }
