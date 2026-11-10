import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LangService } from '../lang.service';
import { RevealDirective } from '../reveal.directive';

@Component({
    selector: 'app-about',
    imports: [RevealDirective],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly i18n = inject(LangService);
}
