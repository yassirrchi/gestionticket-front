import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../model/Ticket.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient ) { }
  public getAllTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>("http://localhost:4443/alltickets");

  }

}
