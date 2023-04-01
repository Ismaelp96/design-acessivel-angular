import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appKeyMItem]',
})
export class KeybordManagedItemDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  focus(): void {
    this.elementRef.nativeElement.focus();
  }

  isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
