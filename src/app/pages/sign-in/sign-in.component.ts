import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReceiveUser } from 'src/app/models/user.model';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})



export class SignInComponent implements OnInit {

constructor (private userService :UserService,private UserBuilder :FormBuilder) {}
  

ngOnInit(): void {
  
this.UserForm = this.UserBuilder.group({
  email:["",[Validators.required,Validators.email]],
  password:["",[Validators.required,Validators.minLength(1)]]


})

  }



UserForm!:FormGroup;

getUser():void
{
this.userService.getUser(this.UserForm.value.email).subscribe((data :any)  =>
 {
// to verify the user if he exist in database 
const  userExist:ReceiveUser = data.data.find((a:ReceiveUser)=> {

return a.email === this.UserForm.value.email && a.password===this.UserForm.value.password


    }) ;

    if( userExist !== undefined || null)
    {
     
      localStorage.setItem("_id",JSON.stringify(userExist._id));
      alert("Login Success ")
       
      this.UserForm.reset();
      this.userService.login();



    }    

    else  {alert("Not found user !")
       localStorage.setItem("Login",JSON.stringify(false));

  
  }





  }
  
  )

}

get email ()
{

return this.UserForm.get('email')

}

get password()
{
return this.UserForm.get('password')

}

}
