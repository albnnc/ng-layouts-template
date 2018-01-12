import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthServiceStub } from './services/auth.service.stub';
import { AuthGuard } from './guards/auth.guard';
import { debuglog } from 'util';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    {
      provide: AuthService,
      useClass: environment.shouldStub['AuthService'] ? AuthService : AuthServiceStub
    }
  ]
})
export class CoreModule { }
