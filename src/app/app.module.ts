import { DisableControlModule } from 'src/app/directives/disable-control/disable-control.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { YesNoButtonGroupModule } from './components/shared/yes-no-button-group/yes-no-button-group.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
