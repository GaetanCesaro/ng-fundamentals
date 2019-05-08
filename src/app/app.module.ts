import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TOASTR_TOKEN, Toastr } from "./services/toastr.service";
import { AuthService } from "./services/auth.service";
import { appRoutes } from "src/routes";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

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
  NavBarComponent,
  DurationPipe
} from "./shared/index";

import { EventsAppComponent } from "./events-app.component";

declare let toastr: Toastr

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
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
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
