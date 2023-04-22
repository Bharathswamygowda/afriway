import { Component, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/app/services/common-services.service';
import { EventsService } from 'src/app/services/events-service.service';
import { TranslateService } from '@ngx-translate/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailValid = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,25})$/;
  language: any = null;

  loginValues = {
    email : '',
    password: ''
  }


  constructor(
    public serviceProvider : CommonServicesService,
    public translate: TranslateService,
    public events: EventsService,
    public router: Router
  ) { }


  changeLanguage() {
    console.log(this.language);
    if (this.language !== localStorage.getItem('lang')){
    console.log( this.events.publish('language:languageChanged', this.language));
      this.events.publish('language:languageChanged', this.language);
    }
  }

 async submitForm(){

  if(this.loginValues.email === 'ali@afriway.com' && this.loginValues.password === '1234'){
    this.router.navigate(['/1'])
  }

  else{
     this.serviceProvider.errorMessage('invalid Credentials')
  }


}

  ngOnInit(): void {
    this.language = localStorage.getItem('lang');
    console.log(this.language)
  }

}
