/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { TopType, FacialHairType, HairColor, HatColor, AccessoriesType, AccessoriesColor } from '../../options';
import { hatColorTranslation } from '../../colors/hat-color-translation';
import { hairColorTranslation } from '../../colors/hair-color-translation';
import { urlfix } from '../../helper/urlfix';
var CustomAvatarTopBaseComponent = /** @class */ (function () {
    function CustomAvatarTopBaseComponent() {
        this._color = '';
        this._color2 = '';
        this.option = TopType.Eyepatch;
    }
    Object.defineProperty(CustomAvatarTopBaseComponent.prototype, "hairColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hairColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._hairColor !== value) {
                this._hairColor = value;
                this._color = hairColorTranslation(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarTopBaseComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarTopBaseComponent.prototype, "hatColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hatColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._hatColor !== value) {
                this._hatColor = value;
                this._color2 = hatColorTranslation(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarTopBaseComponent.prototype, "color2", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} path
     * @return {?}
     */
    CustomAvatarTopBaseComponent.prototype.urlFix = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return urlfix(path);
    };
    CustomAvatarTopBaseComponent.propDecorators = {
        hairColor: [{ type: Input }],
        hatColor: [{ type: Input }],
        facialHairType: [{ type: Input }],
        facialHairColor: [{ type: Input }],
        accessoriesType: [{ type: Input }],
        accessoriesColor: [{ type: Input }]
    };
    return CustomAvatarTopBaseComponent;
}());
export { CustomAvatarTopBaseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAvatarTopBaseComponent.prototype._hairColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarTopBaseComponent.prototype._color;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarTopBaseComponent.prototype._hatColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarTopBaseComponent.prototype._color2;
    /** @type {?} */
    CustomAvatarTopBaseComponent.prototype.option;
    /** @type {?} */
    CustomAvatarTopBaseComponent.prototype.facialHairType;
    /** @type {?} */
    CustomAvatarTopBaseComponent.prototype.facialHairColor;
    /** @type {?} */
    CustomAvatarTopBaseComponent.prototype.accessoriesType;
    /** @type {?} */
    CustomAvatarTopBaseComponent.prototype.accessoriesColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL3RvcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQ0csT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUNwRCxlQUFlLEVBQUUsZ0JBQWdCLEVBQ2xDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QztJQUFBO1FBR1UsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFckIsV0FBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFpRDVCLENBQUM7SUEvQ0Msc0JBQ0ksbURBQVM7Ozs7UUFPYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7OztRQVZELFVBQ2MsS0FBZ0I7WUFDNUIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLCtDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxrREFBUTs7OztRQU9aO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBVkQsVUFDYSxLQUFlO1lBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxnREFBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBOzs7OztJQWNELDZDQUFNOzs7O0lBQU4sVUFBTyxJQUFZO1FBQ2pCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OzRCQTlDQSxLQUFLOzJCQWdCTCxLQUFLO2lDQWdCTCxLQUFLO2tDQUdMLEtBQUs7a0NBR0wsS0FBSzttQ0FHTCxLQUFLOztJQU1SLG1DQUFDO0NBQUEsQUF4REQsSUF3REM7U0F4RFksNEJBQTRCOzs7Ozs7SUFFdkMsa0RBQThCOzs7OztJQUM5Qiw4Q0FBb0I7Ozs7O0lBQ3BCLGlEQUE0Qjs7Ozs7SUFDNUIsK0NBQXFCOztJQUVyQiw4Q0FBMEI7O0lBa0MxQixzREFDK0I7O0lBRS9CLHVEQUMyQjs7SUFFM0IsdURBQ2lDOztJQUVqQyx3REFDbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE9wdGlvbiwgVG9wVHlwZSwgRmFjaWFsSGFpclR5cGUsIEhhaXJDb2xvciwgSGF0Q29sb3IsXHJcbiAgQWNjZXNzb3JpZXNUeXBlLCBBY2Nlc3Nvcmllc0NvbG9yXHJcbn0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IGhhdENvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9jb2xvcnMvaGF0LWNvbG9yLXRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgaGFpckNvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9jb2xvcnMvaGFpci1jb2xvci10cmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IHVybGZpeCB9IGZyb20gJy4uLy4uL2hlbHBlci91cmxmaXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPcHRpb248VG9wVHlwZT4ge1xyXG5cclxuICBwcml2YXRlIF9oYWlyQ29sb3I6IEhhaXJDb2xvcjtcclxuICBwcml2YXRlIF9jb2xvciA9ICcnO1xyXG4gIHByaXZhdGUgX2hhdENvbG9yOiBIYXRDb2xvcjtcclxuICBwcml2YXRlIF9jb2xvcjIgPSAnJztcclxuXHJcbiAgb3B0aW9uID0gVG9wVHlwZS5FeWVwYXRjaDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaGFpckNvbG9yKHZhbHVlOiBIYWlyQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9oYWlyQ29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2hhaXJDb2xvciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9jb2xvciA9IGhhaXJDb2xvclRyYW5zbGF0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBoYWlyQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFpckNvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaGF0Q29sb3IodmFsdWU6IEhhdENvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5faGF0Q29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2hhdENvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2NvbG9yMiA9IGhhdENvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGhhdENvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhdENvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yMigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjI7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGZhY2lhbEhhaXJUeXBlOiBGYWNpYWxIYWlyVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBmYWNpYWxIYWlyQ29sb3I6IEhhaXJDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBhY2Nlc3Nvcmllc1R5cGU6IEFjY2Vzc29yaWVzVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBhY2Nlc3Nvcmllc0NvbG9yOiBBY2Nlc3Nvcmllc0NvbG9yO1xyXG5cclxuICB1cmxGaXgocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsZml4KHBhdGgpO1xyXG4gIH1cclxufVxyXG4iXX0=