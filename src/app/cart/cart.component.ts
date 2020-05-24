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
import { FormGroup, FormControl, Validators, NgForm, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('saveCartButton') saveCartButton: ElementRef;
  updateCartForm: FormGroup;
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
  }

  

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
    this.showCart = 0;
    for(let i = 0; i < this.cart.cartItemList.length; i ++){
      this.cart.cartItemList[i].quantity = this.updateCartForm.get('itemsQuantities').value[i];
    }
    this.cartService.updateCart(this.customerId, this.cart.cartItemList).subscribe(
      (updateCartResponse)=>{
        if(updateCartResponse){
          console.log(updateCartResponse);
          this.getLatestCart();
        }else{
          alert("Couldn't update your cart. Please try again.");
          this.getLatestCart();
        }
      },
      (updateCartError)=>{
        alert("There may be some connectivity issues");
        console.log(updateCartError);
        this.getLatestCart();
      }
    );
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
    this.updateCartForm = new FormGroup({
      'itemsQuantities': new FormArray([])
    });
    this.showCart = 1;
    this.cartService.getCartByCustomerId(this.customerId).subscribe(
      (response) => {
        this.cart = this.cartService.cartValueMapper(response);
        if (this.cart && this.cart.cartItemList && this.cart.cartItemList.length == 0) {
          this.showCart = 1;
        } else {
          this.cart.cartItemList.forEach(itemInCart => {
            // let inputField = {};
            // inputField[itemInCart.foodItemId] =  new FormControl(itemInCart.quantity);
            // console.log(inputField);
            // let quantityInputControl: FormControl = new FormControl(inputField);
            (<FormArray>this.updateCartForm.get('itemsQuantities')).push(new FormControl(itemInCart.quantity));
          });
          this.showCart = 2;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
