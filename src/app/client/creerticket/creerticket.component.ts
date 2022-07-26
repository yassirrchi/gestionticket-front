import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TicketService } from 'src/app/services/ticket.service';
@Component({
  selector: 'app-creerticket',
  templateUrl: './creerticket.component.html',
  styleUrls: ['./creerticket.component.css']
})
export class CreerticketComponent implements OnInit {
  ticketForm=new FormGroup({
    raison:new FormControl(''),
    message:new FormControl('')
  })


  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
  }
  onsubmit(){
    this.ticketService.createTicket(this.ticketForm.controls['raison'].value,this.ticketForm.controls['message'].value,sessionStorage.getItem("userId")).subscribe((data)=>{
       
       
      
    })
   }

}
