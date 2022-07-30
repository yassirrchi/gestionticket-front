import { Component, OnInit } from '@angular/core';
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

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
     
   this.userId=sessionStorage.getItem("userId");
   this.ticketService.getUserTicket(this.userId).subscribe(
    (res)=>{
      this.mesTicket=res;
      console.log(this.mesTicket)
    }
   )

   //this.ticketService.getUserTicket(sessionStorage.getItem('userId'))


  }

}
