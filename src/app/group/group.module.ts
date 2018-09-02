import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';

import { GroupListModule } from './group-list/group-list.module';
import { GroupDetailModule } from './group-detail/group-detail.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    GroupRoutingModule,
    GroupListModule,
    GroupDetailModule,
  ],
  declarations: []
})
export class GroupModule { }
