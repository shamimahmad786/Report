import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoadBanner]'
})
export class LoadbannerDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
      let img = this.el.nativeElement.getAttribute('data-src');
      this.el.nativeElement.setAttribute('src', img);
      this.el.nativeElement.style.minHeight = 'auto';
  }

}
