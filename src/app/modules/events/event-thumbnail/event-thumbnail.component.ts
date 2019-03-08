import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
      .pad-left { margin-left: 50px; }
      .well div { color: #bbb; }
      .green { color: #003300 !important; }
      .bold { font-weight: bold; }
      .event-image { height: 100px; }
    `]
})
export class EventThumbnailComponent {
  @Input() event: any;

  hideDetails: boolean;

  hideShowDetails() {
    this.hideDetails = !this.hideDetails;
    return this.hideDetails;
  }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold'];
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am')
      return { color: '#003300', 'font-weight': 'bold' }
    return {}
  }
}