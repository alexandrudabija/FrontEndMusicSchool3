import { Product, Products } from "./product.model";
export interface Order 
{      
  
    idUser: String,
    email: String,
    firstname: String,
    lastname: String,
    country: String,
    street: String,
    zipcode: String,
    city: String,
    card: String,
    ll_aa: String,
    cvc: String,
    idOrder:  String,
    items : Array<Product>,
    Total :number,
   currency : String,
   dateOrder:Date


}

export interface ReceiveOrder
{      
   _id :String,
    idUser: String,
    email: String,
    firstname: String,
    lastname: String,
    country: String,
    street: String,
    zipcode: String,
    city: String,
    card: String,
    ll_aa: String,
    cvc: String,
    idOrder:  String,
    items : Array<Product>,
    Total :number,
   currency : String,
   dateOrder:Date
   __v:number

}

export interface ReceiveOrders
{
    orders:Array<ReceiveOrder>;

}


export interface Orders
{
    orders:Array<Order>;

}