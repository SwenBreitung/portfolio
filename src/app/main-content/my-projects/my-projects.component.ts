import { Component } from '@angular/core';

import { InfoTextComponent } from '../my-projects/info-text/info-text.component'
import { ButtonLeftComponent } from '../../ui-comonents/button-left/button-left.component'
import { ButtonRightComponent } from '../../ui-comonents/button-right/button-right.component'
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [
    InfoTextComponent,
    ButtonRightComponent,
    ButtonLeftComponent,

  ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
constructor(
  public translateService:TranslateService,
){}
}
