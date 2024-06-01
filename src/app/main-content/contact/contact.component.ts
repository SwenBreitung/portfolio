import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
import { TranslateService } from '../../service/translate.service';
import { ButtonComponent } from '../../ui-comonents/button/button.component';
import { LayoutService } from '../../service/layout.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ButtonComponent,
  ],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {
  constructor(
    public translateService: TranslateService,
    public layoutService: LayoutService,
    private http: HttpClient,
    private router: Router
  ) { }
  [x: string]: any;
  isAgreed: boolean = false;
  mailTest: boolean = false;
  isLoading: boolean = false;
  isSending: boolean = false;
  isError: boolean = false;
  contactData = {
    name: '',
    email: '',
    message: ''
  }

  post = {
    endPoint: 'https://portfolio.swen-breitung.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  navigateToPolicy() {
    this.router.navigate(['/policy']);
  }


  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.valid && !this.mailTest) {
      this.isLoading = true;
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            ngForm.resetForm();
          },
          error: (error: any) => {
            setTimeout(() => {
              console.error(error);
              this.isLoading = false;
              this.isSending = true;
              this.isError = true;
            }, 2000);
          },
          complete: () => {
            console.info('send post complete');
            setTimeout(() => {
              this.isLoading = false;
              this.isSending = true;
              this.isError = false;
            }, 1000);
          },
        });
    } else if (ngForm.submitted && ngForm.valid && this.mailTest) {
      this.isLoading = true;
      console.log('testing erfolgreich')
      setTimeout(() => {
        ngForm.resetForm();
        this.isLoading = false;
      }, 3000);
      ngForm.resetForm();
    }
  }
  torgleIsSending() {
    this.isSending = !this.isSending;
  }
}


function sendEmail() {
  var checkBox = document.getElementById('agreeCheckbox');
  if (checkBox && checkBox instanceof HTMLInputElement) {
    if (!checkBox.checked) {
      return;
    }
  }
}


