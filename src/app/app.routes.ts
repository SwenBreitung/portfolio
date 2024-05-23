import { Routes,ExtraOptions, RouterModule  } from '@angular/router';
import { ContactComponent } from './main-content/contact/contact.component';
import {AppComponent} from './app.component'
import { PolicyComponent } from './policy/policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import {ImpressumComponent} from './impressum/impressum.component'

export const routes: Routes = [
    { path: 'main', component: MainContentComponent },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'policy', component: PolicyComponent },
    { path: 'impressum', component: ImpressumComponent },
];
const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  };
  

