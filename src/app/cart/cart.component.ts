/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the typescript logic for handling cart page
  ==========================================================================================================
*/
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { OrderItem } from '../order/order-item.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {
  @ViewChild('saveCartButton') saveCartButton: ElementRef;
  @ViewChild('f', {static: false}) userForm: NgForm;
  updateCartForm: NgForm;
  showCart = 0;
  customerId = parseInt(this.globalService.getLoginObject().id.toString(), 10);
  cart:any;

  constructor(private cartService: CartService, private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.getLatestCart();
  }

  ngAfterViewInit(): void{
    this.updateCartForm = this.userForm;
    // this.updateCartForm.valueChanges.subscribe((val)=>{
    //   this.saveCartButton.nativeElement.class = "btn btn-primary";
    // });
  }
  onDeleteFromCart(productId: number) {
    this.cartService.deleteFromCart(this.customerId, productId).subscribe(
      (response) => {
        this.showCart = 0;
        this.getLatestCart();
      },
      (error) => {
        console.log("1111111111111");
        console.log(error);
      }
    );
  }
  onSaveCart() {
    // this.
    // this.cartService.updateCart(this.customerId, ){
    // }
  }
  
    onSubmitOrder(): void {
      console.log("Order Submit Req received");
      this.cartService.checkout(this.customerId).subscribe(
      (response)=>{
        console.log(response);
        if(response){
          this.router.navigate(['/thankyou']);
        }
      }),
      (error)=>{

      }
    }
  
  getLatestCart(){
    this.cartService.getCartByCustomerId(this.customerId).subscribe(
      //handle response
      (response) => {
        // this.cart;
        this.cart = {};
          this.cart.cartId = response.Order_Id,
          this.cart.customerId = response.Customer_Id,
          this.cart.totalQuantity = response.Total_Quantity,
          this.cart.totalPrice = response.Total_Price,
          this.cart.foodStoreId = response.Food_Store_Id,
          this.cart.employeeId = response.Employee_Id,
          this.cart.cartItemList = response.Order_Items;
        if (response.Order_Items && response.Order_Items.length == 0) {
          this.showCart = 1;
        } else {
          this.showCart = 2
        }
      },
      //handle error
      (error) => {
        console.log('hello')
        console.log(error);
        alert(error);
      }
    );

  }
}
