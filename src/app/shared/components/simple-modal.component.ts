import { Component, Input, Inject} from '@angular/core';
import { JQUERY_TOKEN } from '../../services/jquery.service';

@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-header">
                    <h5 class="modal-title">{{title}}</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body { height: 250px; overflox-y: scroll; padding: 0px; }
    `]
})
export class SimpleModalComponent {
  @Input() elementId: string;
  @Input() title: string;
  @Input() closeOnBodyClick: string;

  constructor(@Inject(JQUERY_TOKEN) private $: any) {

  }

  closeModal() {
    if (this.closeOnBodyClick === 'true') {
      this.$(`#${this.elementId}`).modal('hide');
    }
  }
}
