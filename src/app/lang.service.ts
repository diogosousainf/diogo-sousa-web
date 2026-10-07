import { Injectable, computed, effect, signal } from '@angular/core';
import { CONTENT, Lang } from './content';

const KEY = 'ds-lang';

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>(this.initial());
  readonly t = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
      try { localStorage.setItem(KEY, lang); } catch { /* storage unavailable */ }
    });
  }

  toggle(): void {
    this.lang.update(l => (l === 'pt' ? 'en' : 'pt'));
  }

  private initial(): Lang {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'pt' || saved === 'en') return saved;
    } catch { /* storage unavailable */ }
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
