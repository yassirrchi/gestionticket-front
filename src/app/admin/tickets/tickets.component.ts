import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Technicien } from 'src/app/model/Technicien.model';
import { Ticket } from 'src/app/model/Ticket.model';
import { TechnicienService } from 'src/app/services/technicien.service';
import { TicketService } from 'src/app/services/ticket.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  allTickets!: Ticket[];
  techniciens!:Technicien[];
  seletedTechnicien!:String;

  constructor(private ticketService:TicketService ,private techniciensServices:TechnicienService ) { }

  ngOnInit(): void {


   this.ticketService.getAllTickets().subscribe(
    (res)=>{
      this.allTickets=res;
      console.log(this.allTickets)
    }
   ) 
   this.techniciensServices.getAllTechniciens().subscribe(
    (res)=>{
      this.techniciens=res;
      console.log(this.techniciens)
    }
   )
   
    console.log(this.allTickets)


  }

}
