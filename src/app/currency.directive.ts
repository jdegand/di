import { Directive, ElementRef, Input } from "@angular/core";
import { currency } from "./currency.service";

@Directive({
    selector: "[currency]",
    standalone: true
})
export class CurrencyDirective {

    @Input() value: string | undefined;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        const val = currency.find(c => c.code === this.value);

        this.el.nativeElement.insertAdjacentHTML("beforeend",
            ` <span>${val?.symbol}</span>`);
    }
}
