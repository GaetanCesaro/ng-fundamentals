import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-modal',
    template: `
        <div id="simple-modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-header">
                    <h5 class="modal-title">{{title}}</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
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
    @Input() title: string;
}
