import { Component,Renderer2  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{MainContentComponent} from './main-content/main-content.component';
import * as AOS from 'aos';
import { PolicyComponent } from "./policy/policy.component";
import { DialogGitComponent } from "./ui-comonents/dialog-git/dialog-git.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        FooterComponent,
        HeaderComponent,
        MainContentComponent,
        PolicyComponent,
        DialogGitComponent
    ]
})

export class AppComponent {
  title = 'portfolio';
  router: any;
  constructor(private renderer: Renderer2){}
 ngOnInit(): void {
  // AOS.init();
  AOS.init({
    offset: 200, // Change offset to 200px
    easing: 'ease-in-sine', // Easing function
    delay: 100, // Delay in ms
    mirror: false, // Whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
});
  this.applyBrowserSpecificClasses();
  }


  applyBrowserSpecificClasses() {
    // Detect WebKit browser
    if ('WebkitAppearance' in document.documentElement.style) {
      this.renderer.addClass(document.body, 'webkit-scrollbar');
    } else if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      // Detect Firefox
      this.renderer.addClass(document.body, 'firefox-scrollbar');
    }
  }

}

