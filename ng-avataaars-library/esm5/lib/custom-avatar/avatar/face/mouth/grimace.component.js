/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
var CustomAvatarMouthGrimaceComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarMouthGrimaceComponent, _super);
    function CustomAvatarMouthGrimaceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarMouthGrimaceComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-mouth-grimace]',
                    template: "<svg:g id='Mouth/Grimace' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='24' y='9' width='60' height='22' rx='11' />\r\n  </defs>\r\n  <rect id='Mouth' fill-opacity='0.599999964' fill='#000000' fill-rule='evenodd' x='22' y='7' width='64' height='26'\r\n    rx='13' />\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill='#FFFFFF' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <path\r\n    d='M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z'\r\n    id='Grimace-Teeth' fill='#E6E6E6' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" />\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarMouthGrimaceComponent;
}(MouthBaseComponent));
export { CustomAvatarMouthGrimaceComponent };
if (false) {
    /** @type {?} */
    CustomAvatarMouthGrimaceComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthGrimaceComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthGrimaceComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpbWFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL21vdXRoL2dyaW1hY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVEO0lBS3VELDZEQUFrQjtJQUx6RTtRQUFBLHFFQVdDO1FBRkMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztJQUN2QyxDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsNjVCQUF1QztpQkFDeEM7O0lBUUQsd0NBQUM7Q0FBQSxBQVhELENBS3VELGtCQUFrQixHQU14RTtTQU5ZLGlDQUFpQzs7O0lBRTVDLG1EQUEwQjs7SUFFMUIsa0RBQXFDOztJQUNyQyxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IE1vdXRoVHlwZSB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBNb3V0aEJhc2VDb21wb25lbnQgfSBmcm9tICcuL21vdXRoLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLW1vdXRoLWdyaW1hY2VdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3JpbWFjZS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyTW91dGhHcmltYWNlQ29tcG9uZW50IGV4dGVuZHMgTW91dGhCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uOiBNb3V0aFR5cGUuR3JpbWFjZTtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=