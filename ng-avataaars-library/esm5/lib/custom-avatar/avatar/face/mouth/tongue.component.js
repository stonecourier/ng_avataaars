/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
var CustomAvatarMouthTongueComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarMouthTongueComponent, _super);
    function CustomAvatarMouthTongueComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarMouthTongueComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-mouth-tongue]',
                    template: "<svg:g id='Mouth/Tongue' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M29,15.6086957 C30.410031,25.2313711 41.062182,33 54,33 C66.9681454,33 77.6461342,25.183301 79,14.7391304 C79.1012093,14.3397326 78.775269,13 76.826087,13 C56.838426,13 41.7395748,13 31.173913,13 C29.3833142,13 28.870211,14.2404669 29,15.6086957 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5' />\r\n  <path\r\n    d='M65.9841079,23.7466656 C65.9945954,23.8296335 66,23.9141856 66,24 L66,33 C66,39.0751322 61.0751322,44 55,44 L54,44 C47.9248678,44 43,39.0751322 43,33 L43,24 L43,24 C43,23.9141856 43.0054046,23.8296335 43.0158921,23.7466656 C43.0053561,23.6651805 43,23.5829271 43,23.5 C43,21.5670034 45.9101491,20 49.5,20 C51.510438,20 53.3076958,20.4914717 54.5,21.2634601 C55.6923042,20.4914717 57.489562,20 59.5,20 C63.0898509,20 66,21.5670034 66,23.5 C66,23.5829271 65.9946439,23.6651805 65.9841079,23.7466656 Z'\r\n    id='Tongue' fill='#FF4F6D' fill-rule='evenodd' />\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarMouthTongueComponent;
}(MouthBaseComponent));
export { CustomAvatarMouthTongueComponent };
if (false) {
    /** @type {?} */
    CustomAvatarMouthTongueComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthTongueComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthTongueComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9uZ3VlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2ZhY2UvbW91dGgvdG9uZ3VlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQUtzRCw0REFBa0I7SUFMeEU7UUFBQSxxRUFXQztRQUZDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLDQxQ0FBc0M7aUJBQ3ZDOztJQVFELHVDQUFDO0NBQUEsQUFYRCxDQUtzRCxrQkFBa0IsR0FNdkU7U0FOWSxnQ0FBZ0M7OztJQUUzQyxrREFBeUI7O0lBRXpCLGlEQUFxQzs7SUFDckMsaURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBNb3V0aFR5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgTW91dGhCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9tb3V0aC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1tb3V0aC10b25ndWVdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9uZ3VlLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJNb3V0aFRvbmd1ZUNvbXBvbmVudCBleHRlbmRzIE1vdXRoQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIG9wdGlvbjogTW91dGhUeXBlLlRvbmd1ZTtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=