import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {
  @HostBinding('style.fontSize') fontSize = '1em';

  @HostListener('mouseenter', ['$event'])

  onHover(){
    this.fontSize = '1.2em';
  }

  @HostListener('mouseleave', ['$event'])

  onLeave(){
    this.fontSize='1em';
  }
  constructor() { }

}
