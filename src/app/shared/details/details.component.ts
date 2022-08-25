import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/model/Ticket.model';
import { FilesService } from 'src/app/services/files.service';
import { TicketService } from 'src/app/services/ticket.service';
import { HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   
   ticket!:Ticket;
   progress!:number;

  constructor(private route: ActivatedRoute,private ticketService:TicketService,private fileServices:FilesService  ) { }

  ngOnInit(): void {
    this.getTicketDetails();
  }
  getTicketDetails(){
    const routeParams = this.route.snapshot.paramMap;
      
    this.ticketService.getTicketById(Number(routeParams.get('id'))).subscribe(
      (res)=>{
        this.ticket=res;
         
        
      }
     )
  }
  downloadfile(ticketid:number){
     
     
    this.fileServices.downloadFile(ticketid).subscribe(event=>{
      if((event.type==HttpEventType.DownloadProgress)&&event.total!=null){
        this.progress=event.loaded/event.total
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

}
