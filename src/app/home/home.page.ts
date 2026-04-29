import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa tudo do Ionic
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // OBRIGATÓRIO no modo Standalone
  imports: [
    IonicModule,  // Já engloba IonHeader, IonToolbar, IonContent, etc.
    CommonModule,
    RouterLink
  ],
})
export class HomePage {
  constructor() { }
}