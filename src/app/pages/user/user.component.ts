import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { ReceiveOrders } from 'src/app/models/order.model';
 import { ReceiveUser } from 'src/app/models/user.model';
import {  Observable } from 'rxjs';


 @Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  user:ReceiveUser={
    _id: new String,
    idUser: new String,
    firstname: new String,
    lastname: new String,
    country: new String,
    email: new String,
    age: new String,
    password: new String,
    dateRegistration: new Date,
    orders: [],
    __v: 0
  };

public  user$ : Observable<any> | undefined 
// public  orders$ : Observable<ReceiveOrders[]> 

  orders$ = new Observable<any>
  orders:ReceiveOrders={orders:[]};

constructor (private UserService :UserService, private OrderService :OrderService) {



   }
 
   ngOnInit(): void 
  {

   this.user$= this.UserService.getUserid(JSON.parse(localStorage.getItem("_id")||''))
   
   this.user$.subscribe((data:any)=>{

      this.UserService.userData =data
      this.user=data
      
     // we request the orders for this id user , all orders have same id user
    //  //  Normalizing Data  in orderService
      this.orders$= this.OrderService.getOrdersEmail(this.user.idUser)

     })
 
  }
   
  





countQty(Array:any):number
{
return Array.map((items:any)=>items.quantityProduct).reduce((prev:any,current:any)=>prev+current,0)

}








}
