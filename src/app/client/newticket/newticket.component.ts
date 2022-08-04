import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
 import { TicketService } from 'src/app/services/ticket.service';
 import { FilesService } from 'src/app/services/files.service';
@Component({
  selector: 'app-newticket',
  templateUrl: './newticket.component.html',
  styleUrls: ['./newticket.component.css']
})
export class NewticketComponent implements OnInit {
  selectedFile!:File;
  ticketForm=new FormGroup({
    raison:new FormControl(''),
    message:new FormControl('')
  })

  constructor(private ticketService:TicketService,private router:Router, private filesService:FilesService) { }

  ngOnInit(): void {
  }



  onFileSelected(event:any){
    console.log(event)
    this.selectedFile=<File>event.target.files[0];

  }
  onsubmit(){
    /*this.ticketService.createTicket(this.ticketForm.controls['raison'].value,this.ticketForm.controls['message'].value,sessionStorage.getItem("userId")).subscribe((data)=>{
       this.router.navigateByUrl('client/tickets')
       
      
    })*/
    let fd=new FormData();
    fd.append('file',this.selectedFile)
    fd.append('name',"yassire")
    this.filesService.uploadFile(fd).subscribe((res)=>{
      console.log("uploaded")
    })
    console.log(this.selectedFile)

   }
}
