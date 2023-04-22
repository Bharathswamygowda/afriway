import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {
  altLang:any;

  constructor(private translate: TranslateService) { }

  transform(value: any) {
    if (value) {
      const lang = this.translate.getDefaultLang();
      this.altLang = localStorage.getItem('lang') == null ? 'en' : localStorage.getItem('lang');
      return value[lang] ? value[lang] : value[this.altLang];
    } else {
      return value;
    }

  }
}
