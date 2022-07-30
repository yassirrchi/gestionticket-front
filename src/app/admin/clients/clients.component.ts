import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  allClients!:any;

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllClients().subscribe(
      (res)=>{
        this.allClients=res;
        console.log(this.allClients)
      }
     )
    
  }

}
