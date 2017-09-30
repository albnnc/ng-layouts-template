import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    HomeModule
  ]
})
export class SecureModule { }
