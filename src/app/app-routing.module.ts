import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { TraitementsComponent } from './admin/traitements/traitements.component';
import { LoginComponent } from './client/login/login.component';
import { MesticketsComponent } from './client/mestickets/mestickets.component';
import { LoginTechnicienComponent } from './technicien/login-technicien/login-technicien.component';

const routes: Routes = [{path:"login",component:LoginComponent},{path:"technicien/login",component:LoginTechnicienComponent},
{path:"client/tickets",component:MesticketsComponent},{path:"admin/tickets",component:TicketsComponent}
,{path:"admin/traitements",component:TraitementsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
