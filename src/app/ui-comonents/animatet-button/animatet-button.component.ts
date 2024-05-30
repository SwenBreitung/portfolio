import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animatet-button',
  standalone: true,
  imports: [],
  templateUrl: './animatet-button.component.html',
  styleUrl: './animatet-button.component.scss'
})
export class AnimatetButtonComponent {

   //styles
   @Input() backgroundColor?: string;
   @Input() borderColor?: string;
   @Input() borderWidth?: string;
   @Input() borderRadius?: string;
   @Input() width?: string;
   @Input() height?: string;
   @Input() padding?: string;
   @Input() margin?: string;
   @Input() hoverBackgroundColor?: string;  
 
   //links and co
   @Input() text: string = 'Dummi';
   @Input() linkUrl: string = '/register';
  
  handleClick(event: Event): void {

    if ((event.target as HTMLElement).tagName !== 'A') {
      event.preventDefault();
    }
  }
}
