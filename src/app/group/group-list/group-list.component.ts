import { Component, OnInit } from '@angular/core';

import { Group } from '../shared/models/group.model';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  group: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.group = this.groupService.getGroups();
  }

}
