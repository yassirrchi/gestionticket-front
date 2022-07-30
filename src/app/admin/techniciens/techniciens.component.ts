import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-techniciens',
  templateUrl: './techniciens.component.html',
  styleUrls: ['./techniciens.component.css']
})
export class TechniciensComponent implements OnInit {
  allTechniciens!:any

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllTechniciens().subscribe(
      (res)=>{
        this.allTechniciens=res;
        console.log(this.allTechniciens)
      }
     )
  }

}
