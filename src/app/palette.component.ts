import { Component, ElementRef, HostListener, ViewChild, computed, inject, signal } from '@angular/core';
import { LangService } from './lang.service';
import { CV, EMAIL, SOCIALS } from './content';
import { copyText } from './clipboard';

interface Command {
  group: string;
  label: string;
  hint: string;
  run: () => void;
}

@Component({
  selector: 'app-palette',
  standalone: true,
  templateUrl: './palette.component.html',
})
export class PaletteComponent {
  readonly i18n = inject(LangService);
  readonly open = signal(false);
  readonly query = signal('');
  readonly active = signal(0);
  @ViewChild('input') input?: ElementRef<HTMLInputElement>;
  private returnFocus: HTMLElement | null = null;

  readonly commands = computed<Command[]>(() => {
    const t = this.i18n.t();
    const p = t.palette;
    const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return [
      { group: p.goto, label: t.nav.work, hint: '01', run: go('work') },
      { group: p.goto, label: t.nav.career, hint: '02', run: go('career') },
      { group: p.goto, label: t.nav.about, hint: '03', run: go('about') },
      { group: p.goto, label: t.nav.contact, hint: '04', run: go('contact') },
      { group: p.goto, label: p.top, hint: '↑', run: go('top') },
      { group: p.actions, label: p.copyEmail, hint: EMAIL, run: () => void copyText(EMAIL) },
      { group: p.actions, label: p.downloadCv, hint: 'PDF', run: () => this.download() },
      { group: p.actions, label: p.switchLang, hint: this.i18n.lang() === 'pt' ? 'EN' : 'PT', run: () => this.i18n.toggle() },
      ...SOCIALS.map(s => ({ group: p.actions, label: s.label, hint: '↗', run: () => void window.open(s.href, '_blank', 'noopener') })),
    ];
  });

  readonly results = computed(() => {
    const q = this.query().trim().toLowerCase();
    return q ? this.commands().filter(c => `${c.label} ${c.group} ${c.hint}`.toLowerCase().includes(q)) : this.commands();
  });

  @HostListener('document:keydown', ['$event'])
  onGlobalKey(e: KeyboardEvent): void {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this.open() ? this.close() : this.show();
    } else if (e.key === 'Escape' && this.open()) {
      this.close();
    }
  }

  show(): void {
    this.returnFocus = document.activeElement as HTMLElement;
    this.query.set('');
    this.active.set(0);
    this.open.set(true);
    setTimeout(() => this.input?.nativeElement.focus());
  }

  close(): void {
    this.open.set(false);
    this.returnFocus?.focus();
  }

  onInput(value: string): void {
    this.query.set(value);
    this.active.set(0);
  }

  onKey(e: KeyboardEvent): void {
    const n = this.results().length;
    if (!n) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); this.active.set((this.active() + 1) % n); }
    if (e.key === 'ArrowUp') { e.preventDefault(); this.active.set((this.active() - 1 + n) % n); }
    if (e.key === 'Enter') { e.preventDefault(); this.exec(this.results()[this.active()]); }
  }

  exec(c: Command | undefined): void {
    if (!c) return;
    this.close();
    c.run();
  }

  private download(): void {
    const a = document.createElement('a');
    a.href = CV;
    a.download = 'DiogoSousaCV.pdf';
    a.click();
  }
}
