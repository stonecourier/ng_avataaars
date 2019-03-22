/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { FacialHairType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';
var CustomAvatarFacialHairMoustacheMagnumComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarFacialHairMoustacheMagnumComponent, _super);
    function CustomAvatarFacialHairMoustacheMagnumComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.option = FacialHairType.MoustacheMagnum;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarFacialHairMoustacheMagnumComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-facial-hair-moustache-magnum]',
                    template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M83.9980103,74.839711 C83.4569991,75.6087366 82.761047,76.2496937 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C56.459601,77.7739966 53.3405442,79.4153191 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 C71.7310704,62.1893309 81.4972391,63.6024033 83.9980103,66.9380109 C86.4987814,63.6024033 96.2649453,62.1893309 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C114.655476,79.4153191 111.53642,77.7739966 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2349736,76.2496937 84.5390216,75.6087366 83.9980103,74.839711 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use [attr.fill]='color' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarFacialHairMoustacheMagnumComponent;
}(CustomAvatarFacialHairBaseComponent));
export { CustomAvatarFacialHairMoustacheMagnumComponent };
if (false) {
    /** @type {?} */
    CustomAvatarFacialHairMoustacheMagnumComponent.prototype.option;
    /** @type {?} */
    CustomAvatarFacialHairMoustacheMagnumComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarFacialHairMoustacheMagnumComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c3RhY2hlLW1hZ251bS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvZmFjaWFsLWhhaXIvbW91c3RhY2hlLW1hZ251bS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRW5GO0lBS29FLDBFQUFtQztJQUx2RztRQUFBLHFFQVdDO1FBSkMsWUFBTSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFFeEMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztJQUN2QyxDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtEQUFrRDtvQkFDNUQsb2hDQUFnRDtpQkFDakQ7O0lBUUQscURBQUM7Q0FBQSxBQVhELENBS29FLG1DQUFtQyxHQU10RztTQU5ZLDhDQUE4Qzs7O0lBRXpELGdFQUF3Qzs7SUFFeEMsK0RBQXFDOztJQUNyQywrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYWNpYWxIYWlyVHlwZSB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IEN1c3RvbUF2YXRhckZhY2lhbEhhaXJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9mYWNpYWwtaGFpci1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1mYWNpYWwtaGFpci1tb3VzdGFjaGUtbWFnbnVtXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21vdXN0YWNoZS1tYWdudW0uY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckZhY2lhbEhhaXJNb3VzdGFjaGVNYWdudW1Db21wb25lbnQgZXh0ZW5kcyBDdXN0b21BdmF0YXJGYWNpYWxIYWlyQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIG9wdGlvbiA9IEZhY2lhbEhhaXJUeXBlLk1vdXN0YWNoZU1hZ251bTtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=