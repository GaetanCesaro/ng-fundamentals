import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQUERY_TOKEN } from '../../services/jquery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    @Input('modal-trigger') modalId: string;

    private el: HTMLElement;

    constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
