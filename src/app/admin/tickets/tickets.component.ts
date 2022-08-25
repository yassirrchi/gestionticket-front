import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Technicien } from 'src/app/model/Technicien.model';
import { Ticket } from 'src/app/model/Ticket.model';
import { TechnicienService } from 'src/app/services/technicien.service';
import { TicketService } from 'src/app/services/ticket.service';
import { TraitementService } from 'src/app/services/traitement.service';
import { FilesService } from 'src/app/services/files.service';
import { HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  allTickets!: Ticket[];
  techniciens!:Technicien[];
  seletedTechnicien!:any[];
 
  constructor(private ticketService:TicketService,private route:Router,private fileServices :FilesService ,private router:Router,private techniciensServices:TechnicienService ,private traitementService:TraitementService) { }

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
        this.seletedTechnicien=[]
        this.allTickets.map(ticket=>{
          console.log("pl")
          this.seletedTechnicien[ticket.id]=""
           
        })
        console.log(this.seletedTechnicien)
        console.log(this.allTickets)
      }
     )

  }

  creerTraitement(TicketId:number):void{
     

    
    
    this.traitementService.CreateTraitement(TicketId,this.seletedTechnicien[TicketId]).subscribe((data)=>{
      console.log(data)
      this.getAllTickets();
      
    })

this.router.navigateByUrl("/admin/tickets")

  
}

downloadfile(ticketid:number){
  this.fileServices.downloadFile(ticketid).subscribe(event=>{
    if((event.type==HttpEventType.DownloadProgress)&&event.total!=null){
     // alert(event.loaded/event.total)
    }
    else if(event.type==HttpEventType.Response){
      saveAs(new File([event.body!],"ticket#"+ticketid+" doc",{
       type:`${event.headers.get('Content-Type')};charset=utf-8` 
      }
       ));

    }
    


    //alert("ok")
  })
}
progress(){
  
}
ticketDetail(ticketId:number){
  this.route.navigateByUrl("admin/tickets/"+ticketId);
  

  }
}
