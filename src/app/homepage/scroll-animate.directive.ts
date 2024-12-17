import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements OnInit {
  @Input() animationClass: string = 'zoom-on-reload';
  @Input() threshold: number = 0.1;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          observer.disconnect();
        }
      },
      { threshold: this.threshold }
    );

    observer.observe(this.el.nativeElement);
  }
}
