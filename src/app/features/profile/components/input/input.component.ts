import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  inputState: boolean = false;
  @Input() inputPlaceHolder!: string;
  @Input() inputIcons?: string;
  @ViewChild('label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;

  ngAfterViewInit(): void {
    this.updateState();
  }

  toggleInputState(): void {
    this.inputState = !this.inputState;
    this.updateState();
  }

  checkIcon(): void {
    if (!this.inputIcons) {
      this.inputState = true;
    }
  }

  updateState(): void {
    this.checkIcon();
    if (this.inputState) {
      this.labelRef.nativeElement.classList.remove('input-label-disabled');
      this.inputRef.nativeElement.classList.remove('input-disabled');
      this.inputRef.nativeElement.removeAttribute('disabled');
    } else {
      this.labelRef.nativeElement.classList.add('input-label-disabled');
      this.inputRef.nativeElement.classList.add('input-disabled');
      this.inputRef.nativeElement.setAttribute('disabled', 'disabled');
    }
  }
}
