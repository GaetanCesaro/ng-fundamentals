import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../../../../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListCompoment implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filteredSessions: ISession[];
  @Input() filterBy: string;

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy)
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
  }
}
