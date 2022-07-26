import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Technicien } from 'src/app/model/Technicien.model';
import { Ticket } from 'src/app/model/Ticket.model';
import { TechnicienService } from 'src/app/services/technicien.service';
import { TicketService } from 'src/app/services/ticket.service';
import { TraitementService } from 'src/app/services/traitement.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  allTickets!: Ticket[];
  techniciens!:Technicien[];
  seletedTechnicien!:Number;
 
  constructor(private ticketService:TicketService ,private router:Router,private techniciensServices:TechnicienService ,private traitementService:TraitementService) { }

  ngOnInit(): void {


    this.getAllTickets();
   this.techniciensServices.getAllTechniciens().subscribe(
    (res)=>{
      this.techniciens=res;
      console.log(this.techniciens)
    }
   )
   
    console.log(this.allTickets)


  }

  getAllTickets():void{
    this.ticketService.getAllTickets().subscribe(
      (res)=>{
        this.allTickets=res;
        console.log(this.allTickets)
      }
     )

  }

  creerTraitement(TicketId:Number):void{
    
    this.traitementService.CreateTraitement(TicketId,this.seletedTechnicien).subscribe((data)=>{
      console.log(data)
      this.getAllTickets();
      
    })

this.router.navigateByUrl("/admin/tickets")

  }

}
