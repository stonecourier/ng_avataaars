import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[kipPickerTemplate]'
})
export class PickerTemplateDirective {

  @Input() type: string;

  @Input('kipPickerTemplate') name: string;

  constructor(public template: TemplateRef<any>) { }

  getType(): string {
    return this.name;
  }
}
