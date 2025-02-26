import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appActiveButtonColor]',
})
export class ActiveButtonColorDirective {
  private _isActive!: boolean;

  @Input()
  set isActive(value: boolean) {
    this._isActive = value;
    this.updateColors();
  }
  get isActive(): boolean {
    return this._isActive;
  }
  @HostBinding('style.backgroundColor') bgColor: string | null = null;
  @HostBinding('style.color') textColor: string | null = null;
  private updateColors() {
    if (this.isActive) {
      this.bgColor = '#ECECEC';
      this.textColor = '#F27373';
    } else {
      this.bgColor = '#4F46E5';
      this.textColor = '#fff';
    }
  }
}
