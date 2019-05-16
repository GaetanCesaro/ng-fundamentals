import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ISession } from '../models/event.model';
import { EventService } from '../../modules/events';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        .navbar-form { padding: 0px; }
        @media (max-width: 1200px) { #searchForm {display} }
        li > a.active { color: #F97924; }
        .search-input { max-width: 150px;}
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
