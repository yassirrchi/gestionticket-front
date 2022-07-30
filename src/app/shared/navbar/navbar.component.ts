import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUrl!:string
  userRole!:string|null
  userName!:string|null
  logoutLink!:string

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userRole=sessionStorage.getItem('role')
    this.userName=sessionStorage.getItem('username')


   this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.currentUrl = event.url;
    }
  });
  }
  logout():void{

   // 
     if(this.userRole==="CLIENT")
     this.logoutLink="login"
     else
    this.logoutLink=this.userRole?.toLowerCase()+"/login";
     
     

     this.router.navigateByUrl(this.logoutLink)
  }

}
