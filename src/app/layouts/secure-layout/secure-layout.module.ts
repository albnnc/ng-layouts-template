import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SecureLayoutComponent } from './secure-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SecureLayoutComponent],
  exports: [SecureLayoutComponent]
})
export class SecureLayoutModule { }
