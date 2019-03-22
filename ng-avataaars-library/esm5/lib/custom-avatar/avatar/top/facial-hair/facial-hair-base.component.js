/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { FacialHairType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';
var CustomAvatarFacialHairBaseComponent = /** @class */ (function () {
    function CustomAvatarFacialHairBaseComponent() {
        this.option = FacialHairType.BeardLight;
    }
    Object.defineProperty(CustomAvatarFacialHairBaseComponent.prototype, "facialHairColor", {
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
    Object.defineProperty(CustomAvatarFacialHairBaseComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    CustomAvatarFacialHairBaseComponent.propDecorators = {
        facialHairColor: [{ type: Input }]
    };
    return CustomAvatarFacialHairBaseComponent;
}());
export { CustomAvatarFacialHairBaseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAvatarFacialHairBaseComponent.prototype._hairColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarFacialHairBaseComponent.prototype._color;
    /** @type {?} */
    CustomAvatarFacialHairBaseComponent.prototype.option;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWFsLWhhaXItYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvZmFjaWFsLWhhaXIvZmFjaWFsLWhhaXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFVLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUU5RTtJQUFBO1FBS0UsV0FBTSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFpQnJDLENBQUM7SUFmQyxzQkFDSSxnRUFBZTs7OztRQU9uQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7OztRQVZELFVBQ29CLEtBQWdCO1lBQ2xDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO1FBQ0gsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxzREFBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOztrQ0FkQSxLQUFLOztJQWVSLDBDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0F0QlksbUNBQW1DOzs7Ozs7SUFFOUMseURBQThCOzs7OztJQUM5QixxREFBZTs7SUFFZixxREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPcHRpb24sIEZhY2lhbEhhaXJUeXBlLCBIYWlyQ29sb3IgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgaGFpckNvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xvcnMvaGFpci1jb2xvci10cmFuc2xhdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyRmFjaWFsSGFpckJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPcHRpb248RmFjaWFsSGFpclR5cGU+IHtcclxuXHJcbiAgcHJpdmF0ZSBfaGFpckNvbG9yOiBIYWlyQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3I7XHJcblxyXG4gIG9wdGlvbiA9IEZhY2lhbEhhaXJUeXBlLkJlYXJkTGlnaHQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZhY2lhbEhhaXJDb2xvcih2YWx1ZTogSGFpckNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5faGFpckNvbG9yICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9oYWlyQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY29sb3IgPSBoYWlyQ29sb3JUcmFuc2xhdGlvbih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZmFjaWFsSGFpckNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhaXJDb2xvcjtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcbn1cclxuIl19