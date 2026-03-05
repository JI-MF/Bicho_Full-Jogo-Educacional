import { Component, forwardRef, Input } from '@angular/core';
import { ControlEvent, ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input-one',
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputOne),
      multi: true
    }
  ],
  templateUrl: './input-one.html',
  styleUrl: './input-one.scss',
})
export class InputOne implements ControlValueAccessor {
  @Input() type: InputTypes="text";
  @Input() placeholder: string="";
  @Input() label: string="";
   @Input() inputName: string="";

  value: string =""
  OnChange: any =() => {}
  OnTouched: any = () => {}

  OnInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.OnChange(value)
  }

  writeValue(value: any): void {
    this.value=value
  }

  registerOnChange(fn: any): void {
    this.OnChange=fn
  }

  registerOnTouched(fn: any): void {
    this.OnTouched=fn
  }

  setDisabledState(isDisabled: boolean): void {}
}
