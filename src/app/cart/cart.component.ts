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

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('saveCartButton') saveCartButton:ElementRef; 
  public cart:Cart = null;
  public productList:OrderItem[];
  updateForm:FormGroup;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.updateForm=new FormGroup({
      'anyQuantity':new FormControl(1)
    }
    );
    this.cart = this.cartService.get();
    this.productList = this.cart.cartItemList;
    this.updateForm.valueChanges.subscribe(selectedValue  => {
      this.saveCartButton.nativeElement.className = "btn-primary bton";
      this.saveCartButton.nativeElement.disabled = false;
    });
  }
  onSubmitOrder(): void{
    console.log("Order Submit Req received");
  }
  onDeleteFromCart(productId: number){
    console.log("Deleteing from cart: " + productId);
  }
  onSaveCart(){
    console.log("Cart is saved");
  }
}
