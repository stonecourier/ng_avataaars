/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
export class CustomAvatarMouthGrimaceComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthGrimaceComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-grimace]',
                template: "<svg:g id='Mouth/Grimace' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='24' y='9' width='60' height='22' rx='11' />\r\n  </defs>\r\n  <rect id='Mouth' fill-opacity='0.599999964' fill='#000000' fill-rule='evenodd' x='22' y='7' width='64' height='26'\r\n    rx='13' />\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill='#FFFFFF' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <path\r\n    d='M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z'\r\n    id='Grimace-Teeth' fill='#E6E6E6' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" />\r\n</svg:g>\r\n"
            }] }
];
if (false) {
    /** @type {?} */
    CustomAvatarMouthGrimaceComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthGrimaceComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthGrimaceComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpbWFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL21vdXRoL2dyaW1hY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFPNUQsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGtCQUFrQjtJQUx6RTs7UUFTRSxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7O1lBWEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLDY1QkFBdUM7YUFDeEM7Ozs7SUFJQyxtREFBMEI7O0lBRTFCLGtEQUFxQzs7SUFDckMsa0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBNb3V0aFR5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgTW91dGhCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9tb3V0aC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1tb3V0aC1ncmltYWNlXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaW1hY2UuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhck1vdXRoR3JpbWFjZUNvbXBvbmVudCBleHRlbmRzIE1vdXRoQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIG9wdGlvbjogTW91dGhUeXBlLkdyaW1hY2U7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbn1cclxuIl19