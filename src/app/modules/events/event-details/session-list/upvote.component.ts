import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISession } from '../../../../shared';

@Component({
  selector: 'upvote',
  template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
              <div *ngIf="currentUser" class="votingButton">
                <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
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
  @Input() currentUser: string;
  @Input() voted: boolean;
  @Input() count: number;
  @Output() vote = new EventEmitter();

  onClick() {
    //this.voted = !this.voted;
    this.vote.emit();
  }

}
