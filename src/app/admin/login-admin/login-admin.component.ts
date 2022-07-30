import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare let alertify:any;
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  AdminForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {


  }
  onsubmit(){
     

    this.authService.AdminLogin(this.AdminForm.controls['username'].value,this.AdminForm.controls['password'].value).subscribe((data)=>{
       
       console.log(data) 
       this.setSessionData(data.username,data.id,data.role)
       alertify.success("connexion réussie");
       this.router.navigateByUrl("/admin/tickets")
        
      
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
