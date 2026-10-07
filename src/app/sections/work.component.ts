import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { RevealDirective } from '../reveal.directive';
import { STACK } from '../content';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './work.component.html',
})
export class WorkComponent {
  readonly i18n = inject(LangService);
  readonly stack = [...STACK, ...STACK];

  tilt(e: PointerEvent, el: HTMLElement): void {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`);
  }

  untilt(el: HTMLElement): void {
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }
}
