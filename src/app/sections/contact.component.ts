import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LangService } from '../lang.service';
import { RevealDirective } from '../reveal.directive';
import { CV, EMAIL, SOCIALS, STUDIO_EMAIL } from '../content';
import { copyText } from '../clipboard';

@Component({
    selector: 'app-contact',
    imports: [RevealDirective],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly i18n = inject(LangService);
  readonly email = EMAIL;
  readonly studioEmail = STUDIO_EMAIL;
  readonly cv = CV;
  readonly socials = SOCIALS;
  readonly year = new Date().getFullYear();
  copied = false;

  async copy(): Promise<void> {
    this.copied = await copyText(EMAIL);
    setTimeout(() => (this.copied = false), 2000);
  }
}
