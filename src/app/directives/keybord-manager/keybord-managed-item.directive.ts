import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appKeyMItem]',
})
export class KeybordManagedItemDirective {
  @Output() focused = new EventEmitter<void>();
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
