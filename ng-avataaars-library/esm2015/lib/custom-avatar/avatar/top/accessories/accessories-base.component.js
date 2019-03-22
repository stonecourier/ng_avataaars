/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { AccessoriesType, AccessoriesColor } from '../../../options';
import { accessoriesColorTranslation } from '../../../colors/accessories-color-translation';
import { urlfix } from '../../../helper/urlfix';
export class CustomAvatarAccessoriesBaseComponent {
    constructor() {
        this.option = AccessoriesType.Blank;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set accessoriesColor(value) {
        if (this._accessoriesColor !== value) {
            this._accessoriesColor = value;
            this._color = accessoriesColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get accessoriesColor() {
        return this._accessoriesColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarAccessoriesBaseComponent.propDecorators = {
    accessoriesColor: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzb3JpZXMtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvYWNjZXNzb3JpZXMvYWNjZXNzb3JpZXMtYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFVLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVoRCxNQUFNLE9BQU8sb0NBQW9DO0lBQWpEO1FBS0UsV0FBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFxQmpDLENBQUM7Ozs7O0lBbkJDLElBQ0ksZ0JBQWdCLENBQUMsS0FBdUI7UUFDMUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssS0FBSyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDakIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7OytCQWxCQSxLQUFLOzs7Ozs7O0lBTE4saUVBQTRDOzs7OztJQUM1QyxzREFBZTs7SUFFZixzREFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcHRpb24sIEFjY2Vzc29yaWVzVHlwZSwgQWNjZXNzb3JpZXNDb2xvciB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBhY2Nlc3Nvcmllc0NvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xvcnMvYWNjZXNzb3JpZXMtY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1cmxmaXggfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvdXJsZml4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJBY2Nlc3Nvcmllc0Jhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPcHRpb248QWNjZXNzb3JpZXNUeXBlPiB7XHJcblxyXG4gIHByaXZhdGUgX2FjY2Vzc29yaWVzQ29sb3I6IEFjY2Vzc29yaWVzQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3I7XHJcblxyXG4gIG9wdGlvbiA9IEFjY2Vzc29yaWVzVHlwZS5CbGFuaztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYWNjZXNzb3JpZXNDb2xvcih2YWx1ZTogQWNjZXNzb3JpZXNDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2FjY2Vzc29yaWVzQ29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2FjY2Vzc29yaWVzQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY29sb3IgPSBhY2Nlc3Nvcmllc0NvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGFjY2Vzc29yaWVzQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzb3JpZXNDb2xvcjtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIHVybEZpeChwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmxmaXgocGF0aCk7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=