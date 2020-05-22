/*  
  =======================================================================================================
    Developer: Prateek Joshi
    Creation Date: 16th May- 20th May,2020
    Description: This is the typescript logic for handling cart page
  ==========================================================================================================
*/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart.model';
import { OrderItem } from '../order/order-item.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('saveCartButton') saveCartButton: ElementRef;
  public cart: Cart = null;
  public productList: OrderItem[];
  updateForm: FormGroup;
  customerId = parseInt(this.globalService.getLoginObject().id.toString(), 10);
  constructor(private cartService: CartService, private router: Router, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      'anyQuantity': new FormControl(1)
    }
    );
    this.cartService.getCartByCustomerId(this.customerId).subscribe(
      //handle response
      (response) => {
        // this.productList;
        // this.cart;
        this.cart = response;
        console.log(response);
      },
      //handle error
      (error) => {
        console.log('hello')
        console.log(error);
        alert(error);
      }

    );
    this.updateForm.valueChanges.subscribe(selectedValue => {
      this.saveCartButton.nativeElement.className = "btn-primary bton";
      this.saveCartButton.nativeElement.disabled = false;
    });
  }
  onSubmitOrder(): void {
    console.log("Order Submit Req received");
    this.router.navigate(['/thankyou']);
  }
  onDeleteFromCart(productId: number) {
    this.cartService.deleteFromCart(this.customerId, productId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log("1111111111111");
        console.log(error);
      }
    );
  }
  onSaveCart() {
    console.log("Cart is saved");
  }
}
