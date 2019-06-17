import { SessionListComponent } from './session-list.compopent';
import { UpvoteComponent } from './upvote.component';

import { ISession, CollapsibleWellComponent } from '../../../../shared';

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { DurationPipe } from 'src/app/shared/pipes/duration.pipe';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
   component : SessionListComponent,
   element: HTMLElement,
   debulEl: DebugElement;

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [ SessionListComponent, DurationPipe, CollapsibleWellComponent, UpvoteComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debulEl = fixture.debugElement;
  });

  describe('Initial Display', () => {
    it('should have the correct title', () => {
      component.sessions = <ISession[]>[
        {id: 2, name: 'Session 2', level: 'intermediate', duration: 1, presenter: 'John', abstract: 'abstract', voters: []},
        {id: 1, name: 'Session 1', level: 'intermediate', duration: 2, presenter: 'Jean', abstract: 'abstract',voters: []}
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
      expect(debulEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
    });
  })
})
