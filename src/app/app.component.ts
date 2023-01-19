import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { enableProdMode } from '@angular/core';
import {UserService} from '../app/services/user.service'
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'FrontEndMusicSchool';





constructor (private router : Router, private UserService :UserService , private  ProductService:ProductService ) {}



ngOnInit():void 
{ 
  
  if (JSON.parse(localStorage.getItem("_id")||'null') !== null)
{  this.UserService.getUserid(JSON.parse(localStorage.getItem("_id")||'null')).subscribe((data:any)=>{

   
    this.UserService.userData =data
    
      
   })

}
   enableProdMode();
 this.router.navigate(['/index']);


if (JSON.parse(localStorage.getItem("_id")||'null') === null ||undefined || this.UserService.userLogged===false ||undefined )
{
this.UserService.logout();


}




}


}
