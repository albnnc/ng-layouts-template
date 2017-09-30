import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';
import { AuthService } from './auth.service';

@Injectable()
export class AuthServiceStub extends AuthService {

  constructor() {
    super();
  }

  login(request: AuthRequest): Observable<AuthResponse> {
    localStorage.setItem('activeLogin', request.login);
    return Observable.of({ isLogged: true });
  }

  logout(): Observable<AuthResponse> {
    localStorage.removeItem('activeLogin');
    return Observable.of({ isLogged: false });
  }

  get isLogged(): boolean {
    return localStorage.getItem('activeLogin') !== null;
  }

}
