import { Component } from '@angular/core';
import { PopUpMessageComponent } from './component/pop-up-message/pop-up-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage: boolean = false; //el default del mensaje emergente es que no se muestra

  constructor(){}

  toggleMessage() {
    this.showMessage = !this.showMessage;
  
  }
}
