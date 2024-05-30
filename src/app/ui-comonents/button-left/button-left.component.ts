import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-left',
  standalone: true,
  imports: [],
  templateUrl: './button-left.component.html',
  styleUrl: './button-left.component.scss'
})
export class ButtonLeftComponent {
  @Input() text: string = 'Live Test';
  @Input() backgroundColor?: string;
}
