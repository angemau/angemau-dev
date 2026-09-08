import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);

  currentLang = this.translate.currentLang;

  setLang(lang: 'es' | 'en') {
    this.translate.use(lang);
  }

  isActive(lang: 'es' | 'en'): boolean {
    return this.currentLang() === lang;
  }
}
