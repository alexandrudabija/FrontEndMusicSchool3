import {  } from "./product.model";

export interface  ReceiveUser 
{


    _id :String,
    idUser: String,
    firstname: String,
    lastname: String,
    country:String,
    email: String,
    age :String,
    password :String,
    dateRegistration:Date,
    orders : Array<any>,
    __v :number



}

export interface SendUser 
{


   
    idUser: String,
    firstname: String,
    lastname: String,
    country:String,
    email: String,
    age :String,
    password :String,
    dateRegistration:Date,
    orders : Array<any>,
    



}

export interface SendUser
{
    SendUser:Array<SendUser>;

}

export interface ReceiveUsers
{
    ReceiveUsers:Array<ReceiveUser>;

}