import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  sendEmail(){
    var checkBox = document.getElementById('agreeCheckbox');
    if (checkBox && checkBox instanceof HTMLInputElement) {
      if (!checkBox.checked) {
        return;       
      }
      

      
    }
  }
}



