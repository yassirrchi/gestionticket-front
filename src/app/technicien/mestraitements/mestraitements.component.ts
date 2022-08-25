import { Component, OnInit } from '@angular/core';
import { Traitement } from 'src/app/model/Traitement.model';
import { FilesService } from 'src/app/services/files.service';
import { TraitementService } from 'src/app/services/traitement.service';
import { HttpEventType } from '@angular/common/http';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-mestraitements',
  templateUrl: './mestraitements.component.html',
  styleUrls: ['./mestraitements.component.css']
})
export class MestraitementsComponent implements OnInit {

  mestraitements!:Traitement[]
  allTraitements!:Traitement[];
  selectedEtat!:any[];
  userId!:string|null;


  constructor(private traitementService :TraitementService,private fileServices:FilesService) { }

  ngOnInit(): void { 
  this.userId=sessionStorage.getItem("userId");
   this.getTechnicianTraitements();

  }

  getTechnicianTraitements( ){
     this.traitementService.getTechnicienTraitements(this.userId).subscribe(
      (res)=>{
        this.mestraitements=res;
        this.selectedEtat=[]
        this.mestraitements.map(traitement=>{
          this.selectedEtat[traitement.id]="";
        })
        console.log(this.mestraitements)
      }
     ) 
  }
  editTraitementState(traitementId:number){
    console.log(traitementId+" "+this.selectedEtat)
    this.traitementService.EditTraitement(this.selectedEtat[traitementId],traitementId).subscribe(
      (res)=>{
        this.getTechnicianTraitements();
      }
     ) 
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

}
