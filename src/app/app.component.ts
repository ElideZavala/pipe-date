import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fecha1 = new Date();
  idFormatoFecha = true; // true === shortDate; false == fullDate

  get formatoFecha() {
    return this.idFormatoFecha ? 'shortDate' : 'fullDate';
  }

  cambiarFormatoFecha() {
    this.idFormatoFecha = !this.idFormatoFecha;
  }
}
