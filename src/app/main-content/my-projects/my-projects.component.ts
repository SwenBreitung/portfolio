import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { InfoTextComponent } from '../my-projects/info-text/info-text.component'
import { ButtonLeftComponent } from '../../ui-comonents/button-left/button-left.component'
import { ButtonRightComponent } from '../../ui-comonents/button-right/button-right.component'
import { TranslateService } from '../../service/translate.service';
import {LayoutService} from './../../service/layout.service'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    InfoTextComponent,
    ButtonRightComponent,
    ButtonLeftComponent,
    CommonModule
  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  backgroundColor: string;
constructor(
  public translateService:TranslateService,
  public layoutService:LayoutService,
){
  this.backgroundColor = 'grey';
}

torgleDialog(){

}
}
