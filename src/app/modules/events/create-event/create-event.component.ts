import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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
      `
    ]
})
export class CreateEventComponent {
  newEvent
  isDirty: boolean = false;

    constructor(private location: Location, private router: Router) {
    }

    saveEvent(formValues) {
      console.log(formValues);
    }

    cancel() {
        //this.location.back();
        this.router.navigate(['/events']);
    }
}
