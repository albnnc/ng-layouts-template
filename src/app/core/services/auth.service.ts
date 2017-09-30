import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';


@Injectable()
export class AuthService {

  constructor() { }

  login(request: AuthRequest): Observable<AuthResponse> {
    return undefined;
  }

  logout(): Observable<AuthResponse> {
    return undefined;
  }

  get isLogged(): boolean {
    return undefined;
  }

}
