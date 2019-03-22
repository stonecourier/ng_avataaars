/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
export class CustomAvatarMouthSmileComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthSmileComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-smile]',
                template: "<svg:g id='Mouth/Smile' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5' />\r\n  <g id='Tongue' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" fill='#FF4F6D'>\r\n    <g transform='translate(38.000000, 24.000000)'>\r\n      <circle cx='11' cy='11' r='11' />\r\n      <circle cx='21' cy='11' r='11' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
if (false) {
    /** @type {?} */
    CustomAvatarMouthSmileComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthSmileComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthSmileComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21pbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvZmFjZS9tb3V0aC9zbWlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU81RCxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsa0JBQWtCO0lBTHZFOztRQVNFLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsVUFBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFYQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsOGpDQUFxQzthQUN0Qzs7OztJQUlDLGlEQUF3Qjs7SUFFeEIsZ0RBQXFDOztJQUNyQyxnREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IE1vdXRoVHlwZSB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBNb3V0aEJhc2VDb21wb25lbnQgfSBmcm9tICcuL21vdXRoLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLW1vdXRoLXNtaWxlXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NtaWxlLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJNb3V0aFNtaWxlQ29tcG9uZW50IGV4dGVuZHMgTW91dGhCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uOiBNb3V0aFR5cGUuU21pbGU7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbn1cclxuIl19