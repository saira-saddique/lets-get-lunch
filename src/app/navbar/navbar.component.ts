import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) { 
    this.authService.loggedIn.subscribe(status => this.isLoggedIn = status);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
