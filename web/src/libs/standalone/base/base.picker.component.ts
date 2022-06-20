import { Directive, InjectFlags, Injector, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';
import { Entity } from '@libs/model';

export enum PickerMode {
  ReadOnly = 'ReadOnly',
  Single = 'Single',
}

export enum PickerDisplay {
  Always = 'Always',
  InplaceEdit = 'InplaceEdit'
}

export enum PickerFetch {
  Automatic = 'Automatic',
  Manual = 'Manual',
  OnDemand = 'OnDemand'
}

@Directive()
export class BasePickerComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {

  @ViewChild(FormControlDirective, { static: true }) formControlDirective: FormControlDirective;
  @Input() formControl: FormControl;
  @Input() formControlName: string;

  @Input() public mode = PickerMode.Single;
  @Input() public fetch = PickerFetch.Automatic;
  @Input() public display = PickerDisplay.Always;

  @Input() public multiple: boolean = false;
  @Input() public closeOnSelect: boolean = true;
  @Input() public hideSelected: boolean = false;
  @Input() public readonly = false;

  public emptyText = 'Not Set';

  constructor(private injector: Injector) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }


  get control() {
      const control = this.formControl || this.controlContainer?.control?.get(this.formControlName);
      return control;
  }

  get controlContainer() {
      return this.injector.get(ControlContainer, null, InjectFlags.Optional);
  }

  registerOnTouched(fn: any): void {
      //  this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
      //  this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
      //  this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
      // this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }

  public searchFn(term: string, item: Entity) {
      term = term.toLocaleLowerCase();
      const name = item.name ? item.name.toLocaleLowerCase() : '';

      if (!name) return false;

      return name.indexOf(term) > -1 || name.toLocaleLowerCase() === term;
  }

}
