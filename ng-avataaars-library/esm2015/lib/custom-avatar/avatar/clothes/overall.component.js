/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';
export class CustomAvatarClothesOverallComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesOverallComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-overall]',
                template: "<svg:g id='Clothing/Overall' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Overall' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n\r\n  <circle id='Button' [attr.fill]=\"color2\" fill-rule='evenodd' cx='81' cy='83' r='5' />\r\n  <circle id='Button' [attr.fill]=\"color2\" fill-rule='evenodd' cx='183' cy='83' r='5' />\r\n</svg:g>\r\n"
            }] }
];
if (false) {
    /** @type {?} */
    CustomAvatarClothesOverallComponent.prototype.option;
    /** @type {?} */
    CustomAvatarClothesOverallComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarClothesOverallComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9jbG90aGVzL292ZXJhbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPNUUsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLGdDQUFnQztJQUx6Rjs7UUFTRSxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBWEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLHN5QkFBdUM7YUFDeEM7Ozs7SUFJQyxxREFBMkI7O0lBRTNCLG9EQUFxQzs7SUFDckMsb0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xvdGhlVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IEN1c3RvbUF2YXRhckNsb3RoZXNCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jbG90aGVzLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLWNsb3RoZXMtb3ZlcmFsbF0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9vdmVyYWxsLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJDbG90aGVzT3ZlcmFsbENvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhckNsb3RoZXNCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uOiBDbG90aGVUeXBlLk92ZXJhbGw7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbn1cclxuIl19