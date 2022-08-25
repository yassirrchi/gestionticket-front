import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-mestickets',
  templateUrl: './mestickets.component.html',
  styleUrls: ['./mestickets.component.css']
})
export class MesticketsComponent implements OnInit {
  mesTicket!:Ticket[];
  userId!:string|null;

  constructor(private ticketService:TicketService,private route:Router) { }

  ngOnInit(): void {
     
   this.userId=sessionStorage.getItem("userId");
   this.ticketService.getUserTicket(this.userId).subscribe(
    (res)=>{
      this.mesTicket=res;
      console.log(this.mesTicket)
    }
   )

   

   }

   //this.ticketService.getUserTicket(sessionStorage.getItem('userId'))
ticketDetail(ticketId:number){
  this.route.navigateByUrl("client/tickets/"+ticketId);
  

  }

}
