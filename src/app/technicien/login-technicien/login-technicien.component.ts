import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
declare let alertify:any;
@Component({
  selector: 'app-login-technicien',
  templateUrl: './login-technicien.component.html',
  styleUrls: ['./login-technicien.component.css']
})
export class LoginTechnicienComponent implements OnInit {

  AdminForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl('TECHNICIEN')
  })

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {


  }
  onsubmit(){
     

    this.authService.UserLogin(this.AdminForm.controls['username'].value,this.AdminForm.controls['password'].value,this.AdminForm.controls['role'].value).subscribe((data)=>{
       
        
       this.setSessionData(data.username,data.id,data.role)
       alertify.success("connexion réussie");
       this.router.navigateByUrl("/technicien/traitements")
        
      
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
