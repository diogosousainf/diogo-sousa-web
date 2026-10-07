import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { LangService } from './lang.service';
import { PaletteComponent } from './palette.component';
import { HeroComponent } from './sections/hero.component';
import { WorkComponent } from './sections/work.component';
import { CareerComponent } from './sections/career.component';
import { AboutComponent } from './sections/about.component';
import { ContactComponent } from './sections/contact.component';

const SECTIONS = ['work', 'career', 'about', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaletteComponent, HeroComponent, WorkComponent, CareerComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly i18n = inject(LangService);
  readonly sections = SECTIONS;
  readonly isMac = /Mac|iPhone|iPad/.test(navigator.platform);
  @ViewChild(PaletteComponent) palette!: PaletteComponent;

  progress = 0;
  scrolled = false;
  current: SectionId | null = null;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    this.progress = max > 0 ? doc.scrollTop / max : 0;
    this.scrolled = doc.scrollTop > 40;
    const probe = window.innerHeight * 0.35;
    this.current = null;
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= probe) this.current = id;
    }
  }

  label(id: SectionId): string {
    return this.i18n.t().nav[id];
  }
}
