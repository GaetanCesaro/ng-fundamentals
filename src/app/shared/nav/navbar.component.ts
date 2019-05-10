import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ISession } from '../models/event.model';
import { EventService } from '../../modules/events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm {display} }
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private authService: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => { this.foundSessions = sessions; })
    }
}
