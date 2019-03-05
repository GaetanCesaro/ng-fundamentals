import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['routeEvents'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.error(eventName);
  }

}
