import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TOASTR_TOKEN, Toastr } from "./services/toastr.service";
import { JQUERY_TOKEN } from "./services/jquery.service";
import { AuthService } from "./services/auth.service";
import { appRoutes } from "src/routes";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr);

import { NavBarComponent } from './shared/nav/navbar.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventResolver,
  EventListResolver,
  SessionListComponent,
  CreateSessionComponent
} from "./modules/events/index";

import {
  CollapsibleWellComponent,
  Error404Component,
  DurationPipe,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./shared/index";

import { EventsAppComponent } from "./events-app.component";

let toastr: Toastr = window['toastr'];
let jquery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jquery },
    EventResolver,
    EventListResolver,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you really want to cancel ?"
    );
  }
  return true;
}
