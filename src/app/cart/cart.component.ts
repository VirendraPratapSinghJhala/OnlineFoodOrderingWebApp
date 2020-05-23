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
export class CartComponent implements OnInit {
  @ViewChild('saveCartButton') saveCartButton: ElementRef;
  @ViewChild('f', { static: false }) userForm: NgForm;
  updateCartForm: NgForm;
  showCart: number;
  customerId: number;
  cart: Cart;

  constructor(private cartService: CartService, private router: Router, private globalService: GlobalService) {
    // this.cart = new Cart();
    this.cart = new Cart(null, null, null, null, null, null, []);
    this.showCart = 0;
    this.customerId = parseInt(this.globalService.getLoginObject().id.toString(), 10);
  }

  ngOnInit(): void {
    this.getLatestCart();
    console.log(this.updateCartForm);
  }

  // ngAfterViewInit(): void {
  //   this.updateCartForm = this.userForm;
  //   // this.updateCartForm.valueChanges.subscribe((val)=>{
  //   //   this.saveCartButton.nativeElement.class = "btn btn-primary";
  //   // });
  // }
  onDeleteFromCart(productId: number) {
    this.cartService.deleteFromCart(this.customerId, productId).subscribe(
      (deleteResponse) => {
        this.showCart = 0;
        this.getLatestCart();
      },
      (error) => {
        alert("Couldn't delete that item. Please try again.");
        console.log(error);
      }
    );
  }
  onSaveCart() {
    // this.
    // this.cartService.updateCart(this.customerId, ){
    // }
    //TODO: Get form items from reactive forms
  }

  onSubmitOrder(): void {
    this.cartService.checkout(this.customerId).subscribe(
      (submitResponse) => {
        console.log(submitResponse);
        if (submitResponse) {
          this.router.navigate(['/thankyou']);
        }
      }),
      (error) => {
        alert("Couldn't checkout. Please try again.");
        console.log(error);
      }
  }

  getLatestCart() {
    this.cartService.getCartByCustomerId(this.customerId).subscribe(
      (response) => {
        this.cart = this.cartService.cartValueMapper(response);
        if (
          this.cart && this.cart.cartItemList && this.cart.cartItemList.length == 0) {
          this.showCart = 1;
        } else {
          this.showCart = 2
        }
      },
      (error) => {
        console.log('hello')
        console.log(error);
      }
    );

  }
}
