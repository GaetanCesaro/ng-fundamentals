import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../../../../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filteredSessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy)
      this.sortSessions(this.sortBy)
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === filter;
      });
    }

    console.log('Filtered sessions', this.filteredSessions);
  }

  sortSessions(sort: string) {
    switch (sort) {
      case 'name':
        this.filteredSessions.sort(sortByNameAsc);
        break;

      case 'votes':
      default:
        this.filteredSessions.sort(sortByVotesDesc);
        break;
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
