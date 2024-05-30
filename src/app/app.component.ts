import { Component } from '@angular/core';
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
 ngOnInit(): void {
  AOS.init();
  }


}

