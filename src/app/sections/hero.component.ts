import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  readonly i18n = inject(LangService);
  private zone = inject(NgZone);

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('name') nameRef!: ElementRef<HTMLElement>;

  readonly first = 'Diogo'.split('');
  readonly last = 'Sousa'.split('');
  time = '';
  roleIndex = 0;

  private raf = 0;
  private timers: number[] = [];
  private pointer = { x: -9999, y: -9999 };
  private cleanup: (() => void)[] = [];
  private reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit(): void {
    this.tick();
    this.timers.push(window.setInterval(() => this.tick(), 15000));
    if (!this.reduced) {
      this.timers.push(window.setInterval(() => {
        this.roleIndex = (this.roleIndex + 1) % this.i18n.t().hero.roles.length;
      }, 2400));
    }
    this.zone.runOutsideAngular(() => this.startCanvas());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    this.timers.forEach(t => clearInterval(t));
    this.cleanup.forEach(fn => fn());
  }

  private tick(): void {
    this.time = new Intl.DateTimeFormat('pt-PT', {
      hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Lisbon',
    }).format(new Date());
  }

  private startCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const host = canvas.parentElement as HTMLElement;
    const letters = Array.from(this.nameRef.nativeElement.querySelectorAll<HTMLElement>('.char'));
    let w = 0, h = 0, dpr = 1;
    const gap = 28;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(0);
    };

    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      this.pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      // Letters closest to the cursor get heavier.
      for (const el of letters) {
        const b = el.getBoundingClientRect();
        const d = Math.hypot(e.clientX - (b.left + b.width / 2), e.clientY - (b.top + b.height / 2));
        const weight = Math.round(300 + 600 * Math.max(0, 1 - d / 420));
        el.style.fontVariationSettings = `'wght' ${weight}`;
      }
    };
    const leave = () => {
      this.pointer = { x: -9999, y: -9999 };
      letters.forEach(el => (el.style.fontVariationSettings = ''));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const { x: px, y: py } = this.pointer;
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          const d = Math.hypot(x - px, y - py);
          const near = Math.max(0, 1 - d / 220);
          const wave = this.reduced ? 0 : (Math.sin(x * 0.012 + t * 0.0009) + Math.cos(y * 0.015 + t * 0.0007)) * 0.5;
          const r = 0.8 + near * 2.2 + Math.max(0, wave) * 0.5;
          ctx.fillStyle = near > 0.02
            ? `rgba(200, 255, 46, ${0.15 + near * 0.85})`
            : `rgba(241, 238, 232, ${0.07 + Math.max(0, wave) * 0.08})`;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      this.raf = requestAnimationFrame(loop);
    };

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(this.raf);
      if (visible && !this.reduced) this.raf = requestAnimationFrame(loop);
    });
    io.observe(host);

    resize();
    window.addEventListener('resize', resize);
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    if (this.reduced) host.addEventListener('pointermove', () => draw(0));
    this.cleanup.push(() => {
      io.disconnect();
      window.removeEventListener('resize', resize);
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
    });
  }
}
