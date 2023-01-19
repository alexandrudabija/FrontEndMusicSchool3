import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendUser,ReceiveUser } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userLogged:boolean=JSON.parse(localStorage.getItem("Login")||'false') || false;
  userData:ReceiveUser={
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


readonly baseUrl = 'https://backend-music-school.vercel.app/Users';
readonly baseUrlEmail= 'https://backend-music-school.vercel.app/email';


  constructor(private http :HttpClient , private router: Router) { }


// get user with email !
getUser(email : String):Observable<any>
{
return this.http.get<any>(this.baseUrlEmail+`/${email}`);

}

// get all users 
getUsers():Observable<any>
{

return this.http.get<any>(this.baseUrl);

}

// get user with id 
getUserid(_id : String):Observable<any>
{
  return this.http.get<any>(this.baseUrl +`/${_id}`);


}

// Create
postUser(data :SendUser):Observable<any>
{
 return this.http.post<any>(this.baseUrl,data)
}
// Update
putUser(data:ReceiveUser)
{
  

  
return this.http.put(this.baseUrl +`/${data._id}`,data,{responseType:'text'})

}



login()
{ 
  localStorage.setItem("Login",JSON.stringify(true));
   this.userLogged=true;
   this.router.navigate(['/user'])
}
logout()
{
 
  localStorage.setItem("_id",JSON.stringify(null));

  localStorage.setItem("Login",JSON.stringify(false));
  this.userLogged=false;

}



}

