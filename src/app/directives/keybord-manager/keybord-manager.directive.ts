import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeybordManagedItemDirective } from './keybord-managed-item.directive';

@Directive({
  selector: '[appKeyM]',
})
export class KeybordManagerDirective {
  constructor() {}

  @ContentChildren(KeybordManagedItemDirective)
  public items!: QueryList<KeybordManagedItemDirective>;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log(this.items);
        console.log('up');
        break;
      case 'ArrowDown':
        console.log('down');
        break;
      case 'ArrowLeft':
        console.log('left');
        break;
      case 'ArrowRight':
        console.log('right');
        break;
    }
  }
}
