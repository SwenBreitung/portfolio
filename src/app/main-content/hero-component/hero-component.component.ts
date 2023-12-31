import { Component } from '@angular/core';
import { ButtonComponent } from './../button/button.component';
import { Routes, RouterModule } from '@angular/router';
// import {ContactComponent} from './../contact/contact.component'

@Component({
  selector: 'app-hero-component',
  standalone: true,
  imports: [
    ButtonComponent,
  ],
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.scss'] // Stellen Sie sicher, dass der Pfad korrekt ist
})

export class HeroComponentComponent {}