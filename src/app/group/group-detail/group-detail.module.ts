import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GroupDetailComponent } from './group-detail.component';

import { FeedModule } from './feed/feed.module';
import { AboutModule } from './about/about.module';
import { GoalModule } from './goal/goal.module';
import { ResourceModule } from './resource/resource.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AboutModule,
    FeedModule,
    GoalModule,
    ResourceModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  declarations: [GroupDetailComponent]
})
export class GroupDetailModule { }
