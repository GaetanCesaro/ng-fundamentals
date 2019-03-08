import { Routes } from "@angular/router";
import { Error404Component } from "./app/shared/errors/404.component";

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from "./app/modules/events/index";

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { routeEvents: EventListResolver }
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren: "./modules/user/user.module#UserModule" }
];
