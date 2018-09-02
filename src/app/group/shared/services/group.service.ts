import { Injectable } from '@angular/core';

import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  private groups: Group[] = [
    new Group(11, 'Self Actualization', 23),
    new Group(12, 'Computer Architecture', 32),
    new Group(13, 'Student Welfare', 23),
    new Group(14, 'Web Development project', 53),
    new Group(15, 'Corporate world', 65),
    new Group(16, 'iPrimed intership', 350)
  ];

  getGroups() { 
      return this.groups.slice();
  }

}
