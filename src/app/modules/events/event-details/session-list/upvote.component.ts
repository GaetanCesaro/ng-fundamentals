import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISession } from '../../../../shared';

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
              <div class="votingButton">
                <i *ngIf="voted" class="gliphicon gliphicon-heart"></i>
                <i *ngIf="!voted" class="gliphicon gliphicon-heart-empty"></i>
              </div>
              <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
              </div>
            </div>
        </div>
    `,
    styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() voted: boolean;
  @Input() count: number;
  @Output() vote = new EventEmitter();

  onClick() {

  }

}
