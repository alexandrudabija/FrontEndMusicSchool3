import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  constructor (public userService :UserService,private Router : Router) {}

  ngOnInit(): void 
  {

  }
  login():boolean
  {
  return  JSON.parse(localStorage.getItem("Login")||'false')

  }

 
  logout()
  {
  this.userService.logout();
    this.Router.navigate(['/signIn'])
  }

}
