import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthServiceStub } from './services/auth.service.stub';
import { AuthGuard } from './guards/auth.guard';

const stubbed: Array<any> = [{
  provide: AuthService,
  useClass: (environment.production ? AuthService : AuthServiceStub)
}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: stubbed.concat([
    AuthGuard
  ])
})
export class CoreModule { }
