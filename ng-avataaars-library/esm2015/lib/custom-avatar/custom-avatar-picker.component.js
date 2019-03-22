/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { PickerTemplateDirective } from './custom-avatar-picker-template.directive';
export class CustomAvatarPickerComponent {
    constructor() {
        this.optionPicked = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pick(value) {
        this.optionPicked.emit(value);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.templates.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
            }
        }));
    }
}
CustomAvatarPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-picker',
                template: "<span>{{ title }}</span><br />\r\n<div class=\"row\">\r\n  <div *ngFor=\"let optionPicked of options\" class=\"col-4 col-md-2 py-1 px-1\">\r\n    <div [ngClass]=\"{'kip-avatar-pick':true,'kip-avatar-selected':optionPicked.value==currentOption}\"\r\n      (click)=\"pick(optionPicked.value)\" [title]=\"optionPicked.value\"\r\n      [style.background-color]=\"backgroundColor\">\r\n      <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: optionPicked}\"></ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".kip-avatar-pick{display:inline-block;cursor:pointer;border:1px solid #000}.kip-avatar-selected{border-color:red}"]
            }] }
];
CustomAvatarPickerComponent.propDecorators = {
    title: [{ type: Input }],
    currentOption: [{ type: Input }],
    options: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    optionPicked: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PickerTemplateDirective,] }]
};
if (false) {
    /** @type {?} */
    CustomAvatarPickerComponent.prototype.title;
    /** @type {?} */
    CustomAvatarPickerComponent.prototype.currentOption;
    /** @type {?} */
    CustomAvatarPickerComponent.prototype.options;
    /** @type {?} */
    CustomAvatarPickerComponent.prototype.backgroundColor;
    /** @type {?} */
    CustomAvatarPickerComponent.prototype.optionPicked;
    /** @type {?} */
    CustomAvatarPickerComponent.prototype.itemTemplate;
    /** @type {?} */
    CustomAvatarPickerComponent.prototype.templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWF2YXRhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9jdXN0b20tYXZhdGFyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQVFwRixNQUFNLE9BQU8sMkJBQTJCO0lBTnhDO1FBcUJFLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQW1CNUMsQ0FBQzs7Ozs7SUFiQyxJQUFJLENBQUMsS0FBYTtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDOUIsUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RCLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLE1BQU07YUFDVDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUVwQywyaEJBQW9EOzthQUNyRDs7O29CQUlFLEtBQUs7NEJBR0wsS0FBSztzQkFHTCxLQUFLOzhCQUdMLEtBQUs7MkJBR0wsTUFBTTt3QkFLTixlQUFlLFNBQUMsdUJBQXVCOzs7O0lBakJ4Qyw0Q0FDYzs7SUFFZCxvREFDc0I7O0lBRXRCLDhDQUN5Qzs7SUFFekMsc0RBQ3dCOztJQUV4QixtREFDMEM7O0lBRTFDLG1EQUErQjs7SUFFL0IsZ0RBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2N1c3RvbS1hdmF0YXItcGlja2VyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tpcC1jdXN0b20tYXZhdGFyLXBpY2tlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWF2YXRhci1waWNrZXIuY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1hdmF0YXItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGN1cnJlbnRPcHRpb246IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBvcHRpb25zOiB7IHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBhbnkgfVtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBvcHRpb25QaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFBpY2tlclRlbXBsYXRlRGlyZWN0aXZlKSB0ZW1wbGF0ZXM6IGFueTtcclxuXHJcbiAgcGljayh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm9wdGlvblBpY2tlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgIHRoaXMudGVtcGxhdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgc3dpdGNoIChpdGVtLmdldFR5cGUoKSkge1xyXG4gICAgICAgIGNhc2UgJ2l0ZW0nOlxyXG4gICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=