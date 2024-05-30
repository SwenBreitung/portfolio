import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http'; 
import { HttpClientModule } from '@angular/common/http'; 
 
 import { Router } from '@angular/router';
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-contact',
   standalone: true,
  imports: [   
    FormsModule,
    CommonModule,
    HttpClientModule,  
  ],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
  

export class ContactComponent {
  constructor(
    public translateService:TranslateService,
    private http: HttpClient,
    private router: Router
    ){}
    [x: string]: any;
    isAgreed:boolean = false;
    mailTest:boolean = false;
    isLoading:boolean = false;
    contactData ={
      name:'',
      email:'',
      message:''
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
            next: (response:any) => {
              ngForm.resetForm();
            },
            error: (error: any) => {
              console.error(error);
            },
            complete: () => {
              console.info('send post complete');
              this.isLoading = false; 
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
  }
  

function sendEmail(){
  var checkBox = document.getElementById('agreeCheckbox');
  if (checkBox && checkBox instanceof HTMLInputElement) {
    if (!checkBox.checked) {
      return;       
    } 
  }
}


