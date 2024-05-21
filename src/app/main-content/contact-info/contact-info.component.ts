import { Component } from '@angular/core';
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
constructor(
  public translateService:TranslateService,
){}
}
