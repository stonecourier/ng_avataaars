/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { AccessoriesType, AccessoriesColor } from '../../../options';
import { accessoriesColorTranslation } from '../../../colors/accessories-color-translation';
import { urlfix } from '../../../helper/urlfix';
var CustomAvatarAccessoriesBaseComponent = /** @class */ (function () {
    function CustomAvatarAccessoriesBaseComponent() {
        this.option = AccessoriesType.Blank;
    }
    Object.defineProperty(CustomAvatarAccessoriesBaseComponent.prototype, "accessoriesColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._accessoriesColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._accessoriesColor !== value) {
                this._accessoriesColor = value;
                this._color = accessoriesColorTranslation(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarAccessoriesBaseComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} path
     * @return {?}
     */
    CustomAvatarAccessoriesBaseComponent.prototype.urlFix = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return urlfix(path);
    };
    CustomAvatarAccessoriesBaseComponent.propDecorators = {
        accessoriesColor: [{ type: Input }]
    };
    return CustomAvatarAccessoriesBaseComponent;
}());
export { CustomAvatarAccessoriesBaseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAvatarAccessoriesBaseComponent.prototype._accessoriesColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarAccessoriesBaseComponent.prototype._color;
    /** @type {?} */
    CustomAvatarAccessoriesBaseComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3JpZXMtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXMtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFVLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVoRDtJQUFBO1FBS0UsV0FBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFxQmpDLENBQUM7SUFuQkMsc0JBQ0ksa0VBQWdCOzs7O1FBT3BCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDaEMsQ0FBQzs7Ozs7UUFWRCxVQUNxQixLQUF1QjtZQUMxQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLHVEQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQscURBQU07Ozs7SUFBTixVQUFPLElBQVk7UUFDakIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7bUNBbEJBLEtBQUs7O0lBbUJSLDJDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksb0NBQW9DOzs7Ozs7SUFFL0MsaUVBQTRDOzs7OztJQUM1QyxzREFBZTs7SUFFZixzREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcHRpb24sIEFjY2Vzc29yaWVzVHlwZSwgQWNjZXNzb3JpZXNDb2xvciB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBhY2Nlc3Nvcmllc0NvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xvcnMvYWNjZXNzb3JpZXMtY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1cmxmaXggfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvdXJsZml4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJBY2Nlc3Nvcmllc0Jhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPcHRpb248QWNjZXNzb3JpZXNUeXBlPiB7XHJcblxyXG4gIHByaXZhdGUgX2FjY2Vzc29yaWVzQ29sb3I6IEFjY2Vzc29yaWVzQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3I7XHJcblxyXG4gIG9wdGlvbiA9IEFjY2Vzc29yaWVzVHlwZS5CbGFuaztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYWNjZXNzb3JpZXNDb2xvcih2YWx1ZTogQWNjZXNzb3JpZXNDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2FjY2Vzc29yaWVzQ29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2FjY2Vzc29yaWVzQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY29sb3IgPSBhY2Nlc3Nvcmllc0NvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGFjY2Vzc29yaWVzQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzb3JpZXNDb2xvcjtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIHVybEZpeChwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmxmaXgocGF0aCk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=