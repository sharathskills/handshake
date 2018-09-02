import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupListComponent } from './group-list/group-list.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { FeedComponent } from './group-detail/feed/feed.component';
import { ResourceComponent } from './group-detail/resource/resource.component';
import { GoalComponent } from './group-detail/goal/goal.component';
import { AboutComponent } from './group-detail/about/about.component';

const routes: Routes = [
  { path: 'groups', component: GroupListComponent },
  { path: 'groups/:id/:name', component: GroupDetailComponent, children: [
    { path: 'feed', component: FeedComponent },
    { path: 'resource', component: ResourceComponent },
    { path: 'goal', component: GoalComponent },
    { path: 'about', component: AboutComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
