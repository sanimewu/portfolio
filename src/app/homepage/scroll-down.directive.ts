import {Directive, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appScrollDown]'
})
export class ScrollDownDirective{
  @Input('appScrollDown') target!: string;

  @HostListener('click') onClick() {
    const targetElement = document.querySelector(this.target);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
