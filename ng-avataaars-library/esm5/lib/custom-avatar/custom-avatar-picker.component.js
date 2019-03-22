/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { PickerTemplateDirective } from './custom-avatar-picker-template.directive';
var CustomAvatarPickerComponent = /** @class */ (function () {
    function CustomAvatarPickerComponent() {
        this.optionPicked = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CustomAvatarPickerComponent.prototype.pick = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.optionPicked.emit(value);
    };
    /**
     * @return {?}
     */
    CustomAvatarPickerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.templates.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
            }
        }));
    };
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
    return CustomAvatarPickerComponent;
}());
export { CustomAvatarPickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWF2YXRhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9jdXN0b20tYXZhdGFyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWUsZUFBZSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVwRjtJQUFBO1FBcUJFLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQW1CNUMsQ0FBQzs7Ozs7SUFiQywwQ0FBSTs7OztJQUFKLFVBQUssS0FBYTtRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsd0RBQWtCOzs7SUFBbEI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBSTtZQUMxQixRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDdEIsS0FBSyxNQUFNO29CQUNULEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDbEMsTUFBTTthQUNUO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBRXBDLDJoQkFBb0Q7O2lCQUNyRDs7O3dCQUlFLEtBQUs7Z0NBR0wsS0FBSzswQkFHTCxLQUFLO2tDQUdMLEtBQUs7K0JBR0wsTUFBTTs0QkFLTixlQUFlLFNBQUMsdUJBQXVCOztJQWUxQyxrQ0FBQztDQUFBLEFBeENELElBd0NDO1NBbENZLDJCQUEyQjs7O0lBRXRDLDRDQUNjOztJQUVkLG9EQUNzQjs7SUFFdEIsOENBQ3lDOztJQUV6QyxzREFDd0I7O0lBRXhCLG1EQUMwQzs7SUFFMUMsbURBQStCOztJQUUvQixnREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZHJlbiwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaWNrZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vY3VzdG9tLWF2YXRhci1waWNrZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2lwLWN1c3RvbS1hdmF0YXItcGlja2VyJyxcclxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tYXZhdGFyLXBpY2tlci5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWF2YXRhci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY3VycmVudE9wdGlvbjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbnM6IHsgdmFsdWU6IHN0cmluZywgbGFiZWw6IGFueSB9W107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9wdGlvblBpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oUGlja2VyVGVtcGxhdGVEaXJlY3RpdmUpIHRlbXBsYXRlczogYW55O1xyXG5cclxuICBwaWNrKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMub3B0aW9uUGlja2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XHJcbiAgICAgICAgY2FzZSAnaXRlbSc6XHJcbiAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==