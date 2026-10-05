import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[plaidExtHref]'
})
export class ExtHrefDirective {
  private _plaidExtHref: string;

  @Input()
  set plaidExtHref(value: string) {
    this._plaidExtHref = value;
    this.el.nativeElement.style.cursor = value != null ? 'pointer' : undefined;
  }

  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  onClick(): void {
    if (this._plaidExtHref != null) {
      window.plaid.openExternal(this._plaidExtHref);
    }
  }

}
