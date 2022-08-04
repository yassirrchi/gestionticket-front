import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MesticketsComponent } from './client/mestickets/mestickets.component';
import { CreerticketComponent } from './client/creerticket/creerticket.component';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { TraitementsComponent } from './admin/traitements/traitements.component';
import { TechniciensComponent } from './admin/techniciens/techniciens.component';
import { ClientsComponent } from './admin/clients/clients.component';
import { AdminsComponent } from './admin/admins/admins.component';
import { MestraitementsComponent } from './technicien/mestraitements/mestraitements.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './client/login/login.component';
import { LoginTechnicienComponent } from './technicien/login-technicien/login-technicien.component';
import { SignupComponent } from './client/signup/signup.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { NewticketComponent } from './client/newticket/newticket.component';
 

@NgModule({
  declarations: [
    AppComponent,
    MesticketsComponent,
    CreerticketComponent,
    TicketsComponent,
    TraitementsComponent,
    TechniciensComponent,
    ClientsComponent,
    AdminsComponent,
    MestraitementsComponent,
    NavbarComponent,
    LoginComponent,
    LoginTechnicienComponent,
    SignupComponent,
    LoginAdminComponent,
    NewticketComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
