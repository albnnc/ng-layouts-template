import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(response => {
      if (response.isLogged === false) {
        this.router.navigate(['/login']);
      }
    });
  }

}
