import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private element: ElementRef) { 
    element.nativeElement.style.color = '#DB3A2C'
  }

}
