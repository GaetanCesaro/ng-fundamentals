import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { IEvent } from 'src/app/shared/models';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styles: [
    `
        em {
          float: right;
          color: #e05c65;
          padding-left: 10px;
        }
        .error input {
          background-color: #e3c3c5;
        }
        .error ::-webkit-input-placeholder {
          color: #999;
        }
        .error ::-moz-placeholder {
          color: #999;
        }
        .error :-moz-placeholder {
          color: #999;
        }
        .error :ms-input-placeholder {
          color: #999;
        }
        .event-image { height: 100px; }
      `
  ]
})
export class CreateEventComponent implements OnInit {
  newEvent: any
  isDirty: boolean = false;

  constructor(private location: Location, private router: Router, private eventService: EventService) {
  }

  ngOnInit() {
    this.newEvent = {
      name: 'Pot de départ !',
      date: '04/15/2019',
      time: '5pm',
      price: 0,
      location: {
        address: 'Le Fronton',
        city: 'Nouméa',
        country: 'Nouvelle Calédonie'
      },
      onlineUrl: 'https://www.facebook.com/frontonetchekhan/',
      imageUrl: 'https://www.lebonsiropderable.com/wp-content/uploads/2015/07/biere-quebec_Molson-Export_le-bon-sirop-d-erable.jpg'
    }

    console.log(this.newEvent)
  }

  saveEvent(formValues: IEvent) {
    console.log("saveEvent: ", formValues);
    this.isDirty = false;
    this.eventService.saveEvent(formValues);
    this.router.navigate(['/events']);
  }

  cancel() {
    //this.location.back();
    this.router.navigate(['/events']);
  }
}
