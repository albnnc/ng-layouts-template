import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login({
      login: 'admin',
      password: 'admin'
    }).subscribe(response => {
      if (response.isLogged === true) {
        this.router.navigate(['/']);
      }
    });
  }

}
