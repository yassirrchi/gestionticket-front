import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  allClients!:any;
  adminId!:any;
  createUserForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl('CLIENT')
     
  })

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllClients().subscribe(
      (res)=>{
        this.allClients=res;
        console.log(this.allClients)
      }
     )
    
  }

  onsubmit():void{
    this.usersService.createUser(this.createUserForm.controls['username'].value,this.createUserForm.controls['password'].value,this.createUserForm.controls['role'].value).subscribe((data)=>{
       this.createUserForm.reset();

      this.getClients()
     
   })


  }

  getClients(){
    this.usersService.getAllClients().subscribe(
      (res)=>{
        this.allClients=res;
         
      }
     )


  }
  deleteUser(id:string,role:string){
    this.usersService.deleteUser(id,role).subscribe(
      (res)=>{
        this.getClients();
         
         
      }
     )
  

  }

}
