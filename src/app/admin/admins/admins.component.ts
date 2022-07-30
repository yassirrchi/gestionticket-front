import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  allAdmins!:any;
  adminId!:any;
  createUserForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
   this.adminId=sessionStorage.getItem("userId")
    this.getAdmins()
    
  }
  onsubmit():void{
    this.usersService.createAdmin(this.createUserForm.controls['username'].value,this.createUserForm.controls['password'].value).subscribe((data)=>{
       this.createUserForm.reset();

      this.getAdmins()
     
   })


  }

  getAdmins(){
    this.usersService.getAllAdmins().subscribe(
      (res)=>{
        this.allAdmins=res;
        console.log(this.allAdmins)
      }
     )


  }
   
   

}
