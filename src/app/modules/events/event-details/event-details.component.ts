import { Component } from '@angular/core';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { ISession } from '../../../shared';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
    `]
})
export class EventDetailsComponent {
    addMode: boolean;
    event: any;

    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
      this.addMode = true;
    }

    saveNewSession(session: ISession) {
      const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
      session.id = nextId + 1;
      this.event.sessions.push(session);
      this.eventService.updateEvent(this.event);
      this.addMode = false;
    }

    cancelNewSession() {
      this.addMode = false;
    }

}
