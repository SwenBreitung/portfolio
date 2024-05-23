import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
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
  
   constructor(){}
  handleClick(event: Event): void {
    // Check if the click event target is an anchor tag
    if ((event.target as HTMLElement).tagName !== 'A') {
      // Prevent the default action if it's not an anchor tag
      event.preventDefault();
      // You can also add your custom behavior here if needed
    }
  }
}