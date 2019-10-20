import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  memberStatus :any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.memberStatus = localStorage.getItem('status');
  }

  logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
