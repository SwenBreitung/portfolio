import { Component } from '@angular/core';
import { ButtonComponent } from './../../ui-comonents/button/button.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateService } from '../../service/translate.service';
import { LayoutService } from '../../service/layout.service';
// import {ContactComponent} from './../contact/contact.component'
import AOS from 'aos';
import { AnimatetButtonComponent } from "../../ui-comonents/animatet-button/animatet-button.component";
@Component({
    selector: 'app-hero-component',
    standalone: true,
    templateUrl: './hero-component.component.html',
    styleUrls: ['./hero-component.component.scss'] // Stellen Sie sicher, dass der Pfad korrekt ist
    ,
    imports: [
        ButtonComponent,
        AnimatetButtonComponent
    ]
})

export class HeroComponentComponent {
  router: any;
  constructor(
    public translateService:TranslateService,
    public layoutService:LayoutService,
  ){}


}