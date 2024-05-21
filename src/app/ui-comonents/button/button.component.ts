import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button><ng-content></ng-content></button>`,
  styleUrls: ['./button.component.scss'] // Stellen Sie sicher, dass der Pfad korrekt ist
})
export class ButtonComponent {}