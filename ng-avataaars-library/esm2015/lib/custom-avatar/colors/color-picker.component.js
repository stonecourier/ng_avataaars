/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class CustomAvatarColorPickerComponent {
    constructor() {
        this.colorPicked = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pick(value) {
        this.colorPicked.emit(value);
    }
}
CustomAvatarColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-color-picker',
                template: "<span>{{ title }}</span><br />\r\n<div class=\"row\">\r\n  <div [ngClass]=\"{'kip-avatar-pick-color':true,'kip-avatar-selected-color':colorPicked.value==currentColor}\"\r\n    *ngFor=\"let colorPicked of colors\" (click)=\"pick(colorPicked.value)\"\r\n    [style.background-color]=\"colorConverter(colorPicked.value)\">\r\n  </div>\r\n</div>\r\n",
                styles: [".kip-avatar-pick-color{width:40px;height:40px;margin:2px;display:inline-block;cursor:pointer;border:1px solid #000}.kip-avatar-selected-color{border-color:red}"]
            }] }
];
CustomAvatarColorPickerComponent.propDecorators = {
    title: [{ type: Input }],
    currentColor: [{ type: Input }],
    colors: [{ type: Input }],
    colorConverter: [{ type: Input }],
    colorPicked: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CustomAvatarColorPickerComponent.prototype.title;
    /** @type {?} */
    CustomAvatarColorPickerComponent.prototype.currentColor;
    /** @type {?} */
    CustomAvatarColorPickerComponent.prototype.colors;
    /** @type {?} */
    CustomAvatarColorPickerComponent.prototype.colorConverter;
    /** @type {?} */
    CustomAvatarColorPickerComponent.prototype.colorPicked;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvY29sb3JzL2NvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdkUsTUFBTSxPQUFPLGdDQUFnQztJQU43QztRQXFCRSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFLM0MsQ0FBQzs7Ozs7SUFIQyxJQUFJLENBQUMsS0FBYTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBRTFDLHFXQUE0Qzs7YUFDN0M7OztvQkFJRSxLQUFLOzJCQUdMLEtBQUs7cUJBR0wsS0FBSzs2QkFHTCxLQUFLOzBCQUdMLE1BQU07Ozs7SUFaUCxpREFDYzs7SUFFZCx3REFDcUI7O0lBRXJCLGtEQUN3Qzs7SUFFeEMsMERBQzBDOztJQUUxQyx1REFDeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdraXAtY3VzdG9tLWF2YXRhci1jb2xvci1waWNrZXInLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbG9yLXBpY2tlci5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJDb2xvclBpY2tlckNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBjdXJyZW50Q29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvcnM6IHsgdmFsdWU6IHN0cmluZywgbGFiZWw6IGFueSB9W107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3JDb252ZXJ0ZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIGNvbG9yUGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHBpY2sodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb2xvclBpY2tlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19