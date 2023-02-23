import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellow]'
})
export class YellowDirective {

  constructor(private element: ElementRef) { 
    element.nativeElement.style.color = '#FFC854'
  }

}
