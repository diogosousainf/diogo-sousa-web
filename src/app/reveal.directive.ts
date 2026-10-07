import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/** Adds `is-in` once the element scrolls into view; CSS handles the motion. */
@Directive({ selector: '[reveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-in');
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('is-in');
          this.observer?.disconnect();
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
