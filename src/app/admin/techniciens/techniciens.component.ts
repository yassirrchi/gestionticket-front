import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-techniciens',
  templateUrl: './techniciens.component.html',
  styleUrls: ['./techniciens.component.css']
})
export class TechniciensComponent implements OnInit {
  allTechniciens!:any
   
  adminId!:any;
  createUserForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl('TECHNICIEN')
    
     
  })

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.getAllTechnicians();
    
  }

  getAllTechnicians(){
    this.usersService.getAllTechniciens().subscribe(
      (res)=>{
        this.allTechniciens=res;
        console.log(this.allTechniciens)
      }
     )
  }

  onsubmit():void{
    this.usersService.createUser(this.createUserForm.controls['username'].value,this.createUserForm.controls['password'].value,this.createUserForm.controls['role'].value).subscribe((data)=>{
      this.createUserForm.setValue({username:"",password:"",role:"TECHNICIEN"})

      this.getAllTechnicians()
     
   })


  }

   


 

  deleteUser(id:string,role:string){
    this.usersService.deleteUser(id,role).subscribe(
      (res)=>{
        this.getAllTechnicians();
         
         
      }
     )
  

  }

 
 }