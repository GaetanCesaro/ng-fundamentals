import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';

import { of } from "rxjs";

describe('EventService', () => {
  let eventService : EventService;
  let mockHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    eventService = new EventService(mockHttp);
  });

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });

  it('should call http.delete with right URL', () => {
    mockHttp.delete.and.returnValue(of(false));

    eventService.deleteEvent(1)

    expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/1');
  });
});
