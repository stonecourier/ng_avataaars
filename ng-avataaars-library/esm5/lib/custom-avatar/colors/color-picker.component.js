/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CustomAvatarColorPickerComponent = /** @class */ (function () {
    function CustomAvatarColorPickerComponent() {
        this.colorPicked = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CustomAvatarColorPickerComponent.prototype.pick = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.colorPicked.emit(value);
    };
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
    return CustomAvatarColorPickerComponent;
}());
export { CustomAvatarColorPickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvY29sb3JzL2NvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkU7SUFBQTtRQXFCRSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFLM0MsQ0FBQzs7Ozs7SUFIQywrQ0FBSTs7OztJQUFKLFVBQUssS0FBYTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBRTFDLHFXQUE0Qzs7aUJBQzdDOzs7d0JBSUUsS0FBSzsrQkFHTCxLQUFLO3lCQUdMLEtBQUs7aUNBR0wsS0FBSzs4QkFHTCxNQUFNOztJQU1ULHVDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0FwQlksZ0NBQWdDOzs7SUFFM0MsaURBQ2M7O0lBRWQsd0RBQ3FCOztJQUVyQixrREFDd0M7O0lBRXhDLDBEQUMwQzs7SUFFMUMsdURBQ3lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2lwLWN1c3RvbS1hdmF0YXItY29sb3ItcGlja2VyJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb2xvci1waWNrZXIuY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyQ29sb3JQaWNrZXJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY3VycmVudENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3JzOiB7IHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBhbnkgfVtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbG9yQ29udmVydGVyOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBjb2xvclBpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwaWNrKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29sb3JQaWNrZWQuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==