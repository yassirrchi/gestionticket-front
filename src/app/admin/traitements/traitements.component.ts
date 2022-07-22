import { Component, OnInit } from '@angular/core';
import { Traitement } from 'src/app/model/Traitement.model';
import { TraitementService } from 'src/app/services/traitement.service';

@Component({
  selector: 'app-traitements',
  templateUrl: './traitements.component.html',
  styleUrls: ['./traitements.component.css']
})
export class TraitementsComponent implements OnInit {
  allTraitements!:Traitement[];
  selectedEtat!:string;

  constructor(private traitementService :TraitementService) { }

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
  editTraitementState(traitementId:Number){
    console.log(traitementId+" "+this.selectedEtat)
    this.traitementService.EditTraitement(this.selectedEtat,traitementId).subscribe(
      (res)=>{
        this.getAllTraitements();
      }
     ) 
  }

}
