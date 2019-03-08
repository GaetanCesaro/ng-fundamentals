import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    isDirty: boolean = false;

    constructor(private location: Location, private router: Router) {
    }

    cancel() {
        //this.location.back();
        this.router.navigate(['/events']);
    }
}