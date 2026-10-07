import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './career.component.html',
})
export class CareerComponent {
  readonly i18n = inject(LangService);
  phase = this.i18n.t().career.meiv.phases.length - 1;

  get m() {
    return this.i18n.t().career.meiv;
  }

  onKey(e: KeyboardEvent, count: number, list: HTMLElement): void {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    this.phase = (this.phase + step + count) % count;
    (list.querySelectorAll<HTMLElement>('[role=tab]')[this.phase])?.focus();
  }
}
