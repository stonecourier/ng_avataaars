/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
var CustomAvatarMouthConcernedComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarMouthConcernedComponent, _super);
    function CustomAvatarMouthConcernedComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarMouthConcernedComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-mouth-concerned]',
                    template: "<svg:g id='Mouth/Concerned' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'\r\n      [id]=\"path1\"></path>\r\n  </defs>\r\n  <mask [id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"\r\n      transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '></use>\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd'\r\n    transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '\r\n    [attr.xlink:href]=\"'#' + path1\"></use>\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5'></rect>\r\n  <g id='Tongue' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" fill='#FF4F6D'>\r\n    <g transform='translate(38.000000, 24.000000)'>\r\n      <circle id='friend?' cx='11' cy='11' r='11'></circle>\r\n      <circle id='How-you-doing' cx='21' cy='11' r='11'></circle>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarMouthConcernedComponent;
}(MouthBaseComponent));
export { CustomAvatarMouthConcernedComponent };
if (false) {
    /** @type {?} */
    CustomAvatarMouthConcernedComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthConcernedComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthConcernedComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2VybmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2ZhY2UvbW91dGgvY29uY2VybmVkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RDtJQUt5RCwrREFBa0I7SUFMM0U7UUFBQSxxRUFXQztRQUZDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLHUwQ0FBeUM7aUJBQzFDOztJQVFELDBDQUFDO0NBQUEsQUFYRCxDQUt5RCxrQkFBa0IsR0FNMUU7U0FOWSxtQ0FBbUM7OztJQUU5QyxxREFBNEI7O0lBRTVCLG9EQUFxQzs7SUFDckMsb0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBNb3V0aFR5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgTW91dGhCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9tb3V0aC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1tb3V0aC1jb25jZXJuZWRdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29uY2VybmVkLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJNb3V0aENvbmNlcm5lZENvbXBvbmVudCBleHRlbmRzIE1vdXRoQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIG9wdGlvbjogTW91dGhUeXBlLkNvbmNlcm5lZDtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=