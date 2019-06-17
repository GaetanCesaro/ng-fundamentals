import { SessionListComponent } from './session-list.compopent';
import { ISession } from '../../../../shared';

describe('SessionListComponent', () => {
  let component : SessionListComponent;

  beforeEach(() => {
    component = new SessionListComponent();
  });

  describe('OnChange', () => {
    it('should filter sessions correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'Session 2', level: 'intermediate'},
        {name: 'Session 1', level: 'intermediate'},
        {name: 'Session 3', level: 'beginner'},
        {name: 'Session 4', level: 'advanced'}
      ];

      component.filterBy = 'intermediate';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.filteredSessions.length).toBe(2);


      component.filterBy = 'all';

      component.ngOnChanges();

      expect(component.filteredSessions.length).toBe(4);
    });

    it('should sort sessions correctly', () => {
      component.sessions = <ISession[]>[
        {name: 'Session 2', level: 'intermediate'},
        {name: 'Session 1', level: 'intermediate'},
        {name: 'Session 3', level: 'beginner'},
        {name: 'Session 4', level: 'advanced'}
      ];

      component.filterBy = 'all';
      component.sortBy = 'name';

      component.ngOnChanges();

      expect(component.filteredSessions[0].name).toBe('Session 1');
      expect(component.filteredSessions[1].name).toBe('Session 2');
      expect(component.filteredSessions[2].name).toBe('Session 3');
      expect(component.filteredSessions[3].name).toBe('Session 4');

    });
  })
})
