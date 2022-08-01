import { Component, OnInit } from '@angular/core';
import { Traitement } from 'src/app/model/Traitement.model';
import { TraitementService } from 'src/app/services/traitement.service';
 
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


  constructor(private traitementService :TraitementService) { }

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

}
