import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Traitement } from 'src/app/model/Traitement.model';
import { TraitementService } from 'src/app/services/traitement.service';

@Component({
  selector: 'app-traitements',
  templateUrl: './traitements.component.html',
  styleUrls: ['./traitements.component.css']
})
export class TraitementsComponent implements OnInit {
  allTraitements!:Traitement[];
   

  constructor(private traitementService :TraitementService,private route:Router) { }

  ngOnInit(): void {
   this.getAllTraitements();

  }

  getAllTraitements(){
     this.traitementService.getAllTraitements().subscribe(
      (res)=>{
        this.allTraitements=res;
        console.log(this.allTraitements)
      }
     ) 
  }
  ticketDetail(ticketId:number){
    this.route.navigateByUrl("admin/tickets/"+ticketId);
    
  
    }
    

}
