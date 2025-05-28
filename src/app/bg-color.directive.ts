import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  standalone:false,
  selector: '[appBgColor]'
})
export class BgColorDirective implements OnInit {

  @Input() appBgColor: string;
  @Input() appBorder: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
   @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = this.appBgColor?this.appBgColor :'red';
    this.elementRef.nativeElement.style.color = 'green';
  }

  constructor(private elementRef: ElementRef) {
    this.appBgColor="red";
    elementRef.nativeElement.style.backgroundColor = 'red';
    this.appBorder = '';
  }

  ngOnInit(): void {
    if (this.appBgColor) {
      this.elementRef.nativeElement.style.backgroundColor = this.appBgColor;
    }
    if (this.appBorder) {
      this.elementRef.nativeElement.style.border = this.appBorder;
    } 
    
  }

}
  