import { Component } from '@angular/core';
import { TranslateService } from './../service/translate.service';
import { LayoutService } from '../service/layout.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen:boolean = false;
constructor(
  public translateService:TranslateService,
  public layoutService:LayoutService,
  private router: Router,
){}


switchTranslateToEnglish(){
  this.translateService.de= false;
  this.translateService.en= true;
}

switchTranslateToGerman(){
  this.translateService.de= true;
  this.translateService.en= false;
}

closeMenu(){
  this.isMenuOpen = !this.isMenuOpen;
}
returnToMainSide(){
  this.router.navigate(['/main']);
}

}
