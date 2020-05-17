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
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
