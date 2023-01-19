import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ShopComponent } from 'src/app/pages/shop/shop.component';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from '../../services/cart.service';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';
import { MatSnackBar,MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
})

export class CartComponent implements OnInit {
  @Output() onClose = new EventEmitter<any>();
  cart: Cart = { items: [] };
   public dataSource: Array<CartItem> = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';  
  
  // for the beautiful display in the basket ,it will be displayed in rows and columns !
  // we need to set correct the rows and colums in cart.component 
  displayedColumns: Array<string> = [
    'nameProduct',
    'brandProduct',
    'priceProduct',
    'imgProduct',
    'quantityProduct',
    'total',
    'action',
  ];


  constructor(public shop: ShopComponent, private CartService: CartService,
public Router :Router ,private _snackBar : MatSnackBar,private UserService :UserService)
  {}


// we receive from shopComponents throught  cart.services the items whitch has been add in cart 
  ngOnInit() 
  {
    this.CartService.cart.subscribe((_cart: Cart) => { this.cart = _cart;  this.dataSource = this.cart.items;    });
  }


toggle() { this.onClose.emit(); }
  
// we call total for all elemts in cart 
getTotal(items: Array<CartItem>): number {    return this.CartService.getTotal(items);  }

onClearCart () {   this.CartService.clearCart() }
 
removeOneItem(item:CartItem):void{ this.CartService.removeOneItem(item)}

removeQuantity(item:CartItem):void { this.CartService.removeQuantity(item) }
   
onAddQuantity(item:CartItem):void { this.CartService.addToCart(item)   }





onCheckout():void
{
    if(this.UserService.userLogged){this.Router.navigate(['/checkout']) }
  
    else{ this._snackBar.open('Please  sign  In  or  Register  on  site ','ok',{
      duration:6000,horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,}
    )
    
  
    }

}


 


// for stripe ! 
//   onCheckout():void
//   {
//     // https://backendmusicschool.vercel.app/
//     this.http.post('http://localhost:4242/checkout',{
// items:this.cart.items

//     }).subscribe(async(res:any)=> {
   
// let stripe = await loadStripe('pk_test_51MHWCKLTuCeHnDU5ZLkZLHN4Nt1bN9DT94nc4PFv5JvFzjfnW2Cqkph9ATbtw4IUT8dL2fLd36jRxlev7d70PwHN009QrlF2fh');
// stripe?.redirectToCheckout({
// sessionId:res.id


// })
//     }
//     )


//   }

}

