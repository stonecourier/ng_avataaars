/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { EyebrowType, HairColor } from '../../../options';
import { hairColorTranslation } from '../../../colors/hair-color-translation';
export class CustomAvatarEyebrowsComponent {
    /**
     * @param {?} value
     * @return {?}
     */
    set eyebrowColor(value) {
        if (this._eyebrowColor !== value) {
            this._eyebrowColor = value;
            this._color = hairColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get eyebrowColor() {
        return this._eyebrowColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
}
CustomAvatarEyebrowsComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brows]',
                template: "<svg:g [attr.fill]=\"color\" [ngSwitch]=\"eyebrowType\">\r\n  <g *ngSwitchCase=\"'AngryNatural'\" kip-custom-avatar-eye-brow-angry-natural />\r\n  <g *ngSwitchCase=\"'Angry'\" kip-custom-avatar-eye-brow-angry />\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-eye-brow-default />\r\n  <g *ngSwitchCase=\"'DefaultNatural'\" kip-custom-avatar-eye-brow-default-natural />\r\n  <g *ngSwitchCase=\"'RaisedExcited'\" kip-custom-avatar-eye-brow-raised-excited />\r\n  <g *ngSwitchCase=\"'RaisedExcitedNatural'\" kip-custom-avatar-eye-brow-raised-excited-natural />\r\n  <g *ngSwitchCase=\"'FlatNatural'\" kip-custom-avatar-eye-brow-flat-natural />\r\n  <g *ngSwitchCase=\"'FrownNatural'\" kip-custom-avatar-eye-brow-frown-natural />\r\n  <g *ngSwitchCase=\"'SadConcernedNatural'\" kip-custom-avatar-eye-brow-sad-concerned-natural />\r\n  <g *ngSwitchCase=\"'SadConcerned'\" kip-custom-avatar-eye-brow-sad-concerned />\r\n  <g *ngSwitchCase=\"'UnibrowNatural'\" kip-custom-avatar-eye-brow-unibrow-natural />\r\n  <g *ngSwitchCase=\"'UpDown'\" kip-custom-avatar-eye-brow-up-down />\r\n  <g *ngSwitchCase=\"'UpDownNatural'\" kip-custom-avatar-eye-brow-up-down-natural />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarEyebrowsComponent.propDecorators = {
    eyebrowType: [{ type: Input }],
    eyebrowColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CustomAvatarEyebrowsComponent.prototype.eyebrowType;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarEyebrowsComponent.prototype._eyebrowColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarEyebrowsComponent.prototype._color;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXllLWJyb3dzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2ZhY2UvZXllLWJyb3dzL2V5ZS1icm93cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBUTlFLE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBUXhDLElBQ0ksWUFBWSxDQUFDLEtBQWdCO1FBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLDBxQ0FBeUM7YUFDMUM7OzswQkFJRSxLQUFLOzJCQU1MLEtBQUs7Ozs7SUFOTixvREFDeUI7Ozs7O0lBRXpCLHNEQUFpQzs7Ozs7SUFDakMsK0NBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXllYnJvd1R5cGUsIEhhaXJDb2xvciB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBoYWlyQ29sb3JUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbG9ycy9oYWlyLWNvbG9yLXRyYW5zbGF0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1leWUtYnJvd3NdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZXllLWJyb3dzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJFeWVicm93c0NvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXllYnJvd1R5cGU6IEV5ZWJyb3dUeXBlO1xyXG5cclxuICBwcml2YXRlIF9leWVicm93Q29sb3I6IEhhaXJDb2xvcjtcclxuICBwcml2YXRlIF9jb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZXllYnJvd0NvbG9yKHZhbHVlOiBIYWlyQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9leWVicm93Q29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2V5ZWJyb3dDb2xvciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9jb2xvciA9IGhhaXJDb2xvclRyYW5zbGF0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBleWVicm93Q29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXllYnJvd0NvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxufVxyXG4iXX0=