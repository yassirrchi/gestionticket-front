import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admin/admins/admins.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { TechniciensComponent } from './admin/techniciens/techniciens.component';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { TraitementsComponent } from './admin/traitements/traitements.component';
import { CreerticketComponent } from './client/creerticket/creerticket.component';
import { LoginComponent } from './client/login/login.component';
import { MesticketsComponent } from './client/mestickets/mestickets.component';
import { NewticketComponent } from './client/newticket/newticket.component';
import { DetailsComponent } from './shared/details/details.component';
import { LoginTechnicienComponent } from './technicien/login-technicien/login-technicien.component';
import { MestraitementsComponent } from './technicien/mestraitements/mestraitements.component';

const routes: Routes = [{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:LoginComponent},{path:"technicien/login",component:LoginTechnicienComponent},
{path:"client/tickets",component:MesticketsComponent},{path:"client/ticket/creer",component:CreerticketComponent},{path:"admin/tickets",component:TicketsComponent}
,{path:"admin/traitements",component:TraitementsComponent},{path:"technicien/login",component:LoginTechnicienComponent},{path:"technicien/traitements",component:MestraitementsComponent}
,{path:"admin/login",component:LoginAdminComponent},{path:"admin/clients",component:ClientsComponent},{path:"client/newticket",component:NewticketComponent},
{path:"admin/admins",component:AdminsComponent},{path:"admin/techniciens",component:TechniciensComponent},
{path:"client/tickets/:id",component:DetailsComponent},{path:"admin/tickets/:id",component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
