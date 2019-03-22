/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Output, EventEmitter } from '@angular/core';
var CustomAvatarIconBaseComponent = /** @class */ (function () {
    function CustomAvatarIconBaseComponent() {
        this.selectTab = new EventEmitter();
    }
    Object.defineProperty(CustomAvatarIconBaseComponent.prototype, "avatarTabFillColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this.currentIndex === this.index ? 'black' : 'gray';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CustomAvatarIconBaseComponent.prototype.select = /**
     * @return {?}
     */
    function () {
        this.selectTab.emit(this.index);
    };
    CustomAvatarIconBaseComponent.propDecorators = {
        index: [{ type: Input }],
        currentIndex: [{ type: Input }],
        selectTab: [{ type: Output }]
    };
    return CustomAvatarIconBaseComponent;
}());
export { CustomAvatarIconBaseComponent };
if (false) {
    /** @type {?} */
    CustomAvatarIconBaseComponent.prototype.index;
    /** @type {?} */
    CustomAvatarIconBaseComponent.prototype.currentIndex;
    /** @type {?} */
    CustomAvatarIconBaseComponent.prototype.selectTab;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvaWNvbnMvaWNvbi1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVEO0lBQUE7UUFTRSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQVN6QyxDQUFDO0lBUEMsc0JBQUksNkRBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdELENBQUM7OztPQUFBOzs7O0lBRUQsOENBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7O3dCQWZBLEtBQUs7K0JBR0wsS0FBSzs0QkFHTCxNQUFNOztJQVVULG9DQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksNkJBQTZCOzs7SUFFeEMsOENBQ2M7O0lBRWQscURBQ3FCOztJQUVyQixrREFDdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJJY29uQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBjdXJyZW50SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0VGFiID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIGdldCBhdmF0YXJUYWJGaWxsQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SW5kZXggPT09IHRoaXMuaW5kZXggPyAnYmxhY2snIDogJ2dyYXknO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KCkge1xyXG4gICAgdGhpcy5zZWxlY3RUYWIuZW1pdCh0aGlzLmluZGV4KTtcclxuICB9XHJcbn1cclxuIl19