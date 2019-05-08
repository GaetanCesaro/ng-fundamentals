import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrService } from "./services/toastr.service";
import { AuthService } from "./services/auth.service";
import { appRoutes } from "src/routes";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

import { NavBarComponent } from './shared/nav/navbar.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  SessionListCompoment,
  CreateSessionComponent
} from "./modules/events/index";

import {
  CollapsibleWellComponent,
  Error404Component,
  DurationPipe
} from "./shared/index";

import { EventsAppComponent } from "./events-app.component";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListCompoment,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    },
    AuthService
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
