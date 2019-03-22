/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { FacialHairType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';
export class CustomAvatarFacialHairBaseComponent {
    constructor() {
        this.option = FacialHairType.BeardLight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set facialHairColor(value) {
        if (this._hairColor !== value) {
            this._hairColor = value;
            this._color = hairColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get facialHairColor() {
        return this._hairColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
}
CustomAvatarFacialHairBaseComponent.propDecorators = {
    facialHairColor: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWFsLWhhaXItYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvZmFjaWFsLWhhaXIvZmFjaWFsLWhhaXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFVLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8sbUNBQW1DO0lBQWhEO1FBS0UsV0FBTSxHQUFHLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFpQnJDLENBQUM7Ozs7O0lBZkMsSUFDSSxlQUFlLENBQUMsS0FBZ0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OEJBZEEsS0FBSzs7Ozs7OztJQUxOLHlEQUE4Qjs7Ozs7SUFDOUIscURBQWU7O0lBRWYscURBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3B0aW9uLCBGYWNpYWxIYWlyVHlwZSwgSGFpckNvbG9yIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IGhhaXJDb2xvclRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29sb3JzL2hhaXItY29sb3ItdHJhbnNsYXRpb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckZhY2lhbEhhaXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT3B0aW9uPEZhY2lhbEhhaXJUeXBlPiB7XHJcblxyXG4gIHByaXZhdGUgX2hhaXJDb2xvcjogSGFpckNvbG9yO1xyXG4gIHByaXZhdGUgX2NvbG9yO1xyXG5cclxuICBvcHRpb24gPSBGYWNpYWxIYWlyVHlwZS5CZWFyZExpZ2h0O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmYWNpYWxIYWlyQ29sb3IodmFsdWU6IEhhaXJDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2hhaXJDb2xvciAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5faGFpckNvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2NvbG9yID0gaGFpckNvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZhY2lhbEhhaXJDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9oYWlyQ29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG59XHJcbiJdfQ==