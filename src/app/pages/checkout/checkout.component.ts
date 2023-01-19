import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder , Validators  } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { ReceiveUser } from 'src/app/models/user.model';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent   implements OnInit
{

  OrderForm!:FormGroup;
  orderId:any;
  payment:boolean =false
cartCheckout: Cart = { items: [] };
  userData!:ReceiveUser 


constructor (public CartService: CartService ,private Router :Router ,
private OrderBuilder: FormBuilder, private OrderService :OrderService,
private UserService :UserService)
{ }
          


ngOnInit():void 
{ 
  this.userData=this.UserService.userData 
  this.form();


 
  this.CartService.cart.subscribe((_cart: Cart) => {
    this.cartCheckout = _cart;
  
  });

  

this.OrderService.getOrders().subscribe((data:any)=>{

  this.orderId=data.length
  
  this.form()
})

   
      // user cannot have access if the cart is empty !
    if(this.cartCheckout.items.length===0 ||this.UserService.userData==null )
    {
     
      this.Router.navigate(['/shop']);
    
    }


}


form()
{

 const date=new Date();  
this.OrderForm = this.OrderBuilder.group ({
    
          idUser: this.userData.idUser,
          email:['',Validators.required],
          firstname:['',Validators.required],
          lastname:['',Validators.required],
          country:['',Validators.required],
          street:['',Validators.required],
          zipcode:['',Validators.required],
          city:['',Validators.required],
          card:['',Validators.required],
          ll_aa:['',Validators.required],
          cvc:['',Validators.required],
          idOrder:  this.orderId+1,
          items : this.OrderBuilder.array(this.cartCheckout.items),
          Total :this.CartService.getTotal(this.cartCheckout.items) ,
          currency : '$',
          dateOrder : date })

}

back():void{this.Router.navigate(['/shop']);}

  

  createOrder():void
  {
    this.orderId=this.OrderForm.value.idOrder
    this.payment=true;
    // first , we create the new order 
    
    this.OrderService.postData(this.OrderForm.value).subscribe(
      {
              next: (res) => {
              
                if(this.UserService.userLogged)
                {
                  // second , we give all orders from logged user
                      
         
                     
                  const orders  = [...this.userData.orders];
                   const arr  =[...orders,this.OrderForm.value.idOrder];
                  // orders.push(this.OrderForm.value.idOrder)

                 
                       
                      
            
              // and then I add to this user the number of the new order
                  const userData = {...this.UserService.userData,orders:arr}
             
                  
                  
              // update the user with new order 
                          this.UserService.putUser(userData).subscribe(
                        {
                          next: (res) => 
                          {
                            alert('Order added !'); 
                            this.OrderForm.reset();
                            this.CartService.clearCart()


                            },
                                            

                            error: (res) => {  alert('Order added error')
                    
                          
                          }
                             
                              
                          } );
                          
                }


              },
              error: (res) =>  { alert('Order added error')}
              
    }  )

  }

}



