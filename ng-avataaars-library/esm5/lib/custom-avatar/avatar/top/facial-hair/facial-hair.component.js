/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { FacialHairType, HairColor } from '../../../options';
var CustomAvatarFacialHairComponent = /** @class */ (function () {
    function CustomAvatarFacialHairComponent() {
    }
    CustomAvatarFacialHairComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-facial-hair]',
                    template: "<svg:g [ngSwitch]=\"facialHairType\">\r\n  <g *ngSwitchCase=\"'BeardMajestic'\" kip-custom-avatar-facial-hair-beard-majestic\r\n    [facialHairColor]=\"facialHairColor\" />\r\n  <g *ngSwitchCase=\"'BeardLight'\" kip-custom-avatar-facial-hair-beard-light\r\n    [facialHairColor]=\"facialHairColor\" />\r\n  <g *ngSwitchCase=\"'BeardMedium'\" kip-custom-avatar-facial-hair-beard-medium\r\n    [facialHairColor]=\"facialHairColor\" />\r\n  <g *ngSwitchCase=\"'MoustacheFancy'\" kip-custom-avatar-facial-hair-moustache-fancy\r\n    [facialHairColor]=\"facialHairColor\" />\r\n    <g *ngSwitchCase=\"'MoustacheMagnum'\" kip-custom-avatar-facial-hair-moustache-magnum\r\n    [facialHairColor]=\"facialHairColor\" />\r\n</svg:g>\r\n"
                }] }
    ];
    CustomAvatarFacialHairComponent.propDecorators = {
        facialHairType: [{ type: Input }],
        facialHairColor: [{ type: Input }]
    };
    return CustomAvatarFacialHairComponent;
}());
export { CustomAvatarFacialHairComponent };
if (false) {
    /** @type {?} */
    CustomAvatarFacialHairComponent.prototype.facialHairType;
    /** @type {?} */
    CustomAvatarFacialHairComponent.prototype.facialHairColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWFsLWhhaXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL2ZhY2lhbC1oYWlyL2ZhY2lhbC1oYWlyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFN0Q7SUFBQTtJQVlBLENBQUM7O2dCQVpBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxrdUJBQTJDO2lCQUM1Qzs7O2lDQUlFLEtBQUs7a0NBR0wsS0FBSzs7SUFFUixzQ0FBQztDQUFBLEFBWkQsSUFZQztTQVBZLCtCQUErQjs7O0lBRTFDLHlEQUMrQjs7SUFFL0IsMERBQzJCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhY2lhbEhhaXJUeXBlLCBIYWlyQ29sb3IgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLWZhY2lhbC1oYWlyXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2lhbC1oYWlyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJGYWNpYWxIYWlyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBmYWNpYWxIYWlyVHlwZTogRmFjaWFsSGFpclR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmFjaWFsSGFpckNvbG9yOiBIYWlyQ29sb3I7XHJcbn1cclxuIl19