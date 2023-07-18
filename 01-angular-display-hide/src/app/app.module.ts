import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopUpMessageComponent } from './component/pop-up-message/pop-up-message.component';


@NgModule({
  declarations: [
    AppComponent,
    PopUpMessageComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
