import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare let alertify:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ClientForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
   this.resetSessionData();
  }
  onsubmit(){
     

    this.authService.clientLogin(this.ClientForm.controls['username'].value,this.ClientForm.controls['password'].value).subscribe((data)=>{
       
       console.log(data) 
       this.setSessionData(data.username,data.id,data.role)
       alertify.success("connexion réussie");
       this.router.navigateByUrl("/client/tickets")
        
      
    },
    (error) => {                              
      console.error('wrong credentials')
      alertify.error("failed");
       

     
    })
        
      
    }

    setSessionData(username:string,userId:string,role:string){
      sessionStorage.setItem("userId",userId)
      sessionStorage.setItem("username",username)
      sessionStorage.setItem("role",role)

    }
    resetSessionData(){
      sessionStorage.setItem("userId","")
      sessionStorage.setItem("username","")
      sessionStorage.setItem("role","")

    }
    
   }


