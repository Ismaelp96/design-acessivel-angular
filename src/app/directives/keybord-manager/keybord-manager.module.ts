import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeybordManagerDirective } from './keybord-manager.directive';
import { KeybordManagedItemDirective } from './keybord-managed-item.directive';

@NgModule({
  declarations: [KeybordManagerDirective, KeybordManagedItemDirective],
  imports: [CommonModule],
  exports: [KeybordManagerDirective, KeybordManagedItemDirective],
})
export class KeybordManagerModule {}
