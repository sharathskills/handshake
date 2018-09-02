import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatButtonModule,
  ],
  declarations: [HomeComponent]
})
export class CoreModule { }
