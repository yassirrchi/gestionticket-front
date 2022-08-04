import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
 import { TicketService } from 'src/app/services/ticket.service';
 import { FilesService } from 'src/app/services/files.service';
 import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.css']
})
export class NewticketComponent implements OnInit {
  selectedFile!:File;
  clientid=sessionStorage.getItem("userId");
  progress:number=0;
  ticketForm=new FormGroup({
    sujet:new FormControl(''),
    description:new FormControl('')
  })

  constructor(private ticketService:TicketService,private router:Router, private filesService:FilesService) { }

  ngOnInit(): void {
  }



  onFileSelected(event:any){
    console.log(event)
    this.selectedFile=<File>event.target.files[0];
    this.progress=0;

  }
  onsubmit(){
    /*this.ticketService.createTicket(this.ticketForm.controls['raison'].value,this.ticketForm.controls['message'].value,sessionStorage.getItem("userId")).subscribe((data)=>{
       this.router.navigateByUrl('client/tickets')
       
      
    })*/
    let fd=new FormData();
    fd.append('file',this.selectedFile)
    fd.append('sujet',this.ticketForm.controls['sujet'].value)
    fd.append('description',this.ticketForm.controls['sujet'].value)
    if(this.clientid!=null)
    fd.append('clientid',this.clientid)

    this.filesService.uploadFile(fd).subscribe((events)=>{
      if(events.type===HttpEventType.UploadProgress&& events.total!=undefined){
        this.progress=Math.round(events.loaded/events.total)*100;
console.log("progress:"+Math.round(events.loaded/events.total)*100+" %")

      }
      
      else if(events.type==HttpEventType.Response){
        
        console.log("uploaded")
        this.router.navigateByUrl('client/tickets')
      }
    })
    console.log(this.selectedFile)

   }
}
