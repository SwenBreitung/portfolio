import { Component } from '@angular/core';
import { TranslateService } from '../../service/translate.service';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(
    public translateService:TranslateService,
  ){}
}
