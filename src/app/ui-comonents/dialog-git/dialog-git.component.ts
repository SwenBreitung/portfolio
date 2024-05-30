import { Component, Input } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { AnimatetButtonComponent } from "../animatet-button/animatet-button.component";
import { ButtonComponent } from "../button/button.component";
import { ButtonLeftComponent } from "../button-left/button-left.component";
import { ButtonRightComponent } from "../button-right/button-right.component";

@Component({
    selector: 'app-dialog-git',
    standalone: true,
    templateUrl: './dialog-git.component.html',
    styleUrl: './dialog-git.component.scss',
    imports: [AnimatetButtonComponent, ButtonComponent, ButtonLeftComponent, ButtonRightComponent]
})
export class DialogGitComponent {

constructor(
  public layoutService:LayoutService,
){}
stopPropagation(event: Event): void {
  event.stopPropagation();
}
 createLink(https:string) {
  var link = document.createElement('a');
  link.href = https;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Visit Flix Tube Backend Repository";
  document.body.appendChild(link);
}

}
