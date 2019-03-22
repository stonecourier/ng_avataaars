/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Output, EventEmitter } from '@angular/core';
export class CustomAvatarIconBaseComponent {
    constructor() {
        this.selectTab = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get avatarTabFillColor() {
        return this.currentIndex === this.index ? 'black' : 'gray';
    }
    /**
     * @return {?}
     */
    select() {
        this.selectTab.emit(this.index);
    }
}
CustomAvatarIconBaseComponent.propDecorators = {
    index: [{ type: Input }],
    currentIndex: [{ type: Input }],
    selectTab: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CustomAvatarIconBaseComponent.prototype.index;
    /** @type {?} */
    CustomAvatarIconBaseComponent.prototype.currentIndex;
    /** @type {?} */
    CustomAvatarIconBaseComponent.prototype.selectTab;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvaWNvbnMvaWNvbi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE1BQU0sT0FBTyw2QkFBNkI7SUFBMUM7UUFTRSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQVN6QyxDQUFDOzs7O0lBUEMsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdELENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztvQkFmQSxLQUFLOzJCQUdMLEtBQUs7d0JBR0wsTUFBTTs7OztJQU5QLDhDQUNjOztJQUVkLHFEQUNxQjs7SUFFckIsa0RBQ3VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFySWNvbkJhc2VDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY3VycmVudEluZGV4OiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNlbGVjdFRhYiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBnZXQgYXZhdGFyVGFiRmlsbENvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLmluZGV4ID8gJ2JsYWNrJyA6ICdncmF5JztcclxuICB9XHJcblxyXG4gIHNlbGVjdCgpIHtcclxuICAgIHRoaXMuc2VsZWN0VGFiLmVtaXQodGhpcy5pbmRleCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==