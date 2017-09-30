import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicLayoutComponent } from './public-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PublicLayoutComponent],
  exports: [PublicLayoutComponent]
})
export class PublicLayoutModule { }
