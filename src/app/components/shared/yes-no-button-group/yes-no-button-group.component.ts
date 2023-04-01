import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from './../../../service/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements ControlValueAccessor, OnInit {
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() valueChange = new EventEmitter<string>();
  onChange = (value: string) => {};
  onTouched = () => {};
  id: string = '';

  options = YesNoButtonGroupOptions;

  constructor(private uniqueIdService: UniqueIdService) {}

  ngOnInit(): void {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix(
      'yes-no-button-group'
    );
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  activate(value: string): void {
    this.writeValue(value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}
