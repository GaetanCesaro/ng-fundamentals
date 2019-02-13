import { Component, Input } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {

  events = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '26/09/2036',
      time: '10:00',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    }
  ]

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '26/09/2036',
    time: '10:00',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

}
