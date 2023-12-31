import { Component } from '@angular/core';
import {ImgComponent} from '../my-projects/img/img.component'
import {InfoTextComponent} from '../my-projects/info-text/info-text.component'
import {ButtonLeftComponent} from './button-left/button-left.component'
import {ButtonRightComponent} from './button-right/button-right.component'

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    InfoTextComponent,
    ImgComponent,
    ButtonRightComponent,
    ButtonLeftComponent,
    
  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

}
