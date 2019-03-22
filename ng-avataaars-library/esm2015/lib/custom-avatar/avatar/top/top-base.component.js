/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { TopType, FacialHairType, HairColor, HatColor, AccessoriesType, AccessoriesColor } from '../../options';
import { hatColorTranslation } from '../../colors/hat-color-translation';
import { hairColorTranslation } from '../../colors/hair-color-translation';
import { urlfix } from '../../helper/urlfix';
export class CustomAvatarTopBaseComponent {
    constructor() {
        this._color = '';
        this._color2 = '';
        this.option = TopType.Eyepatch;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hairColor(value) {
        if (this._hairColor !== value) {
            this._hairColor = value;
            this._color = hairColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get hairColor() {
        return this._hairColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hatColor(value) {
        if (this._hatColor !== value) {
            this._hatColor = value;
            this._color2 = hatColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get hatColor() {
        return this._hatColor;
    }
    /**
     * @return {?}
     */
    get color2() {
        return this._color2;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarTopBaseComponent.propDecorators = {
    hairColor: [{ type: Input }],
    hatColor: [{ type: Input }],
    facialHairType: [{ type: Input }],
    facialHairColor: [{ type: Input }],
    accessoriesType: [{ type: Input }],
    accessoriesColor: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL3RvcC1iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQ0csT0FBTyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUNwRCxlQUFlLEVBQUUsZ0JBQWdCLEVBQ2xDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QyxNQUFNLE9BQU8sNEJBQTRCO0lBQXpDO1FBR1UsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFckIsV0FBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFpRDVCLENBQUM7Ozs7O0lBL0NDLElBQ0ksU0FBUyxDQUFDLEtBQWdCO1FBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQWU7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBY0QsTUFBTSxDQUFDLElBQVk7UUFDakIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7O3dCQTlDQSxLQUFLO3VCQWdCTCxLQUFLOzZCQWdCTCxLQUFLOzhCQUdMLEtBQUs7OEJBR0wsS0FBSzsrQkFHTCxLQUFLOzs7Ozs7O0lBaEROLGtEQUE4Qjs7Ozs7SUFDOUIsOENBQW9COzs7OztJQUNwQixpREFBNEI7Ozs7O0lBQzVCLCtDQUFxQjs7SUFFckIsOENBQTBCOztJQWtDMUIsc0RBQytCOztJQUUvQix1REFDMkI7O0lBRTNCLHVEQUNpQzs7SUFFakMsd0RBQ21DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBPcHRpb24sIFRvcFR5cGUsIEZhY2lhbEhhaXJUeXBlLCBIYWlyQ29sb3IsIEhhdENvbG9yLFxyXG4gIEFjY2Vzc29yaWVzVHlwZSwgQWNjZXNzb3JpZXNDb2xvclxyXG59IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBoYXRDb2xvclRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vY29sb3JzL2hhdC1jb2xvci10cmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IGhhaXJDb2xvclRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vY29sb3JzL2hhaXItY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1cmxmaXggfSBmcm9tICcuLi8uLi9oZWxwZXIvdXJsZml4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJUb3BCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT3B0aW9uPFRvcFR5cGU+IHtcclxuXHJcbiAgcHJpdmF0ZSBfaGFpckNvbG9yOiBIYWlyQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3IgPSAnJztcclxuICBwcml2YXRlIF9oYXRDb2xvcjogSGF0Q29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3IyID0gJyc7XHJcblxyXG4gIG9wdGlvbiA9IFRvcFR5cGUuRXllcGF0Y2g7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhhaXJDb2xvcih2YWx1ZTogSGFpckNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5faGFpckNvbG9yICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9oYWlyQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fY29sb3IgPSBoYWlyQ29sb3JUcmFuc2xhdGlvbih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaGFpckNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhaXJDb2xvcjtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGhhdENvbG9yKHZhbHVlOiBIYXRDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2hhdENvbG9yICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9oYXRDb2xvciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9jb2xvcjIgPSBoYXRDb2xvclRyYW5zbGF0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBoYXRDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXRDb2xvcjtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcjIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3IyO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBmYWNpYWxIYWlyVHlwZTogRmFjaWFsSGFpclR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmFjaWFsSGFpckNvbG9yOiBIYWlyQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYWNjZXNzb3JpZXNUeXBlOiBBY2Nlc3Nvcmllc1R5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYWNjZXNzb3JpZXNDb2xvcjogQWNjZXNzb3JpZXNDb2xvcjtcclxuXHJcbiAgdXJsRml4KHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHVybGZpeChwYXRoKTtcclxuICB9XHJcbn1cclxuIl19