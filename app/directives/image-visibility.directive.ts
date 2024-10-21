import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appImageVisibility]'
})
export class ImageVisibilityDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 1) {  // Fully visible (100%)
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
        } else {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5');  // Partially visible or not visible
        }
      });
    }, {
      threshold: [1.0]  // Trigger only when 100% visible
    });

    observer.observe(this.el.nativeElement);
  }
}
