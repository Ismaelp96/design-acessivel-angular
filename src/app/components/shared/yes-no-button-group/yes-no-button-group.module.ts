import { KeybordManagerModule } from './../../../directives/keybord-manager/keybord-manager.module';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule, KeybordManagerModule],
  exports: [YesNoButtonGroupComponent],
})
export class YesNoButtonGroupModule {}
