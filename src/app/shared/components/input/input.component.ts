import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  inputState: boolean = false;
  @Input() inputPlaceHolder!: string;
  @Input() inputIcons?: string;
  @ViewChild('label') labelRef!: ElementRef;
  @ViewChild('input') inputRef!: ElementRef;
  value: any = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (target) {
      this.value = target.value;
      this.onChange(target.value);
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

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
      this.inputRef.nativeElement.focus();
    } else {
      this.labelRef.nativeElement.classList.add('input-label-disabled');
      this.inputRef.nativeElement.classList.add('input-disabled');
      this.inputRef.nativeElement.setAttribute('disabled', 'disabled');
      this.inputRef.nativeElement.blur();
    }
  }
}
