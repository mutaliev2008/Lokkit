import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSubscribeActiveButton]',
})
export class SubscribeActiveButtonDirective {
  private _buttonState!: boolean;
  @Input()
  set buttonState(value: boolean) {
    this._buttonState = value;
    this.updateColors();
  }
  get buttonState(): boolean {
    return this._buttonState;
  }
  @HostBinding('style.backgroundColor') bgColor: string | null = null;
  @HostBinding('style.color') textColor: string | null = null;
  private updateColors() {
    if (this.buttonState) {
      this.bgColor = '#ECECEC';
      this.textColor = '#F27373';
    } else {
      this.bgColor = '#4F46E5';
      this.textColor = '#fff';
    }
  }
}
