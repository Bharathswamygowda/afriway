import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventsService } from './services/events-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afriway';

  language: any;

  constructor(
    public translate: TranslateService,
    public events: EventsService,
  ) {
    this.initTranslate();
    events.subscribe('language:languageChanged', (data) => {
      this.changeLanguage();
    });
    events.subscribe('first:launched', (data) => {
    });
  }







  changeLanguage() {
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
    localStorage.setItem('lang', this.language);
  }


  async initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.language = localStorage.getItem('lang') == null ? 'en' : localStorage.getItem('lang');
    this.language = this.language == null ? 'en' : this.language;
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
    localStorage.setItem('lang', this.language);
  }



}
