import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable  } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ReceiveUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {


  UserForm!: FormGroup;
public users$!:Observable<any>;

users :any=[]



  constructor(private userService: UserService, private UserBuilder: FormBuilder ) {}
    




 
  ngOnInit(): void {
     this.form()


            this.users$ = this.userService.getUsers()


          this.users$.subscribe
              (
              data=>this.users=data,
              err =>console.log(err),
              ()=>{
            
                
                this.form()
                

              }
            )
    


  }


  form():void
  {
          const date=new Date();  
      this.UserForm = this.UserBuilder.group({

        idUser: this.users.length+1 ,
        firstname: ['', [Validators.required,Validators.minLength(2)]],
        lastname: ['',[ Validators.required,Validators.minLength(2)]],
        country: ['',[ Validators.required,Validators.minLength(3)]],
        email:["",[Validators.required,Validators.email]],
         age: ['', [Validators.required,Validators.minLength(4)]],
         password:["",[Validators.required,Validators.minLength(4)]],
        dateRegistration: date,
        orders: this.UserBuilder.array
      })

  }


  get email ()
  {
  
  return this.UserForm.get('email')
  
  }
  
  get password()
  {
  return this.UserForm.get('password')
  
  }


  
  get firstname()
  {
  return this.UserForm.get('firstname')
  
  }

    
  get lastname()
  {
  return this.UserForm.get('lastname')
  
  }

    
  get country()
  {
  return this.UserForm.get('country')
  
  }

  get age()
  {
  return this.UserForm.get('age')
  
  }




  getUser(): void {


    this.userService.getUser(this.UserForm.value.email).subscribe((data: any) => {

      // to verify the user if he exist in database 

      const userExist: ReceiveUser = data.data.find((user: any) => {

        // this check is performed at the end
    if (user.email === this.UserForm.value.email || user.password == this.UserForm.value.password) 
    { return user; }  })

      if (userExist === undefined || null) this.postUser();
      else alert('This email already Exist , please choose another email ');
  
    }

    )


  }


  postUser(): void {

    // first we verify if the user exist in us database , if doesn't exist with this email we create a new user




    this.userService.postUser(this.UserForm.value).subscribe({

      next: (res) => {

        alert('User added Successfully ');
        // after register we make immediately login
        
        this.verify()

      }
      ,
      error: () => {
        alert('User added error');
      }


    });


  

  }



  verify():void
  {
  this.userService.getUser(this.UserForm.value.email).subscribe((data :any)  =>
   {
  // to verify the user if he exist in database 
  const userExist: ReceiveUser = data.data.find((a:ReceiveUser)=> {
  
  return a.email === this.UserForm.value.email && a.password===this.UserForm.value.password
  
  
      }) ;
  
      if(userExist !== undefined || null)
      {
       
        
        alert("Login Success ")
        localStorage.setItem("_id",JSON.stringify(userExist._id));
        this.UserForm.reset();
        this.userService.login();
  
  
  
      }    
  
      else  {alert("Not found user !")
         localStorage.setItem("Login",JSON.stringify(false));
  
    
    }
  
  
  
  
  
    }
    
    )
  
  }



}
