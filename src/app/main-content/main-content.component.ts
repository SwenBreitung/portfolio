import { Component } from '@angular/core';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {MyProjectsComponent} from './my-projects/my-projects.component'
import {ContactComponent} from './contact/contact.component';
import {HeroComponentComponent} from './hero-component/hero-component.component'
import {ContactInfoComponent} from './contact-info/contact-info.component'
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    MySkillsComponent,
    AboutMeComponent,
    ContactComponent,
    MyProjectsComponent,
    HeroComponentComponent,
    ContactInfoComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
