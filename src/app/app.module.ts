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
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddFoodStoreComponent } from './add-food-store/add-food-store.component';
import { AddFoodItemComponent } from './foods/add-food-item/add-food-item.component';
import { UpdateFoodItemComponent } from './foods/update-food-item/update-food-item.component';

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
    LoginFormComponent,
    RegisterFormComponent,
    UpdateProfileComponent,
    AddFoodStoreComponent,
    AddFoodItemComponent,
    UpdateFoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
