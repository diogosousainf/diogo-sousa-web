import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly i18n = inject(LangService);
  readonly facts = () => this.i18n.t().facts;
}
