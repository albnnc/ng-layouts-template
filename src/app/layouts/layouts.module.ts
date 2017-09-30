import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicLayoutModule } from './public-layout/public-layout.module';
import { SecureLayoutModule } from './secure-layout/secure-layout.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    PublicLayoutModule,
    SecureLayoutModule
  ]
})
export class LayoutsModule { }
