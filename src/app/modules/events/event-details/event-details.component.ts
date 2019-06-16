import { Component, Inject } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISession, IEvent } from '../../../shared';
import { TOASTR_TOKEN, Toastr } from 'src/app/services/toastr.service';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        h3 { margin: 0px; }
    `]
})
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.event = data['event'];
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }

  addSession() {
    this.addMode = true;
  }

  deleteEvent() {
    let eventName = this.event.name;
    this.eventService.deleteEvent(this.event.id).subscribe((event) => {
      this.toastr.success('Event ' + eventName + ' deleted');
      this.router.navigate(['/events']);
    });
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe(() => {
      this.addMode = false;
    });
  }

  cancelNewSession() {
    this.addMode = false;
  }

}
