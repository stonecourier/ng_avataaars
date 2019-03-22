/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
var CustomAvatarMouthVomitComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarMouthVomitComponent, _super);
    function CustomAvatarMouthVomitComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        _this.filter1 = randomId('kip-filter');
        return _this;
    }
    CustomAvatarMouthVomitComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-mouth-vomit]',
                    template: "<svg:g id='Mouth/Vomit' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M34.0082051,12.6020819 C35.1280248,23.0929366 38.2345159,31.9944054 53.9961505,31.9999974 C69.757785,32.0055894 72.9169073,23.0424631 73.9942614,12.5047938 C74.0809675,11.6567158 73.1738581,10.9999965 72.0369872,10.9999965 C65.3505138,10.9999965 62.6703194,12.4951994 53.9894323,12.4999966 C45.3085452,12.5047938 40.7567994,10.9999965 36.0924943,10.9999965 C34.9490269,10.9999965 33.8961688,11.5524868 34.0082051,12.6020819 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M59.9170416,36 L60,36 C60,39.3137085 62.6862915,42 66,42 C69.3137085,42 72,39.3137085 72,36 L72,35 L72,31 C72,27.6862915 69.3137085,25 66,25 L66,25 L42,25 L42,25 C38.6862915,25 36,27.6862915 36,31 L36,31 L36,35 L36,38 C36,41.3137085 38.6862915,44 42,44 C45.3137085,44 48,41.3137085 48,38 L48,36 L48.0829584,36 C48.5590365,33.1622867 51.0270037,31 54,31 C56.9729963,31 59.4409635,33.1622867 59.9170416,36 Z'\r\n      [attr.id]=\"path2\" />\r\n    <filter x='-1.4%' y='-2.6%' width='102.8%' height='105.3%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='-1' in='SourceAlpha' result='shadowOffsetInner1' />\r\n      <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1'\r\n        result='shadowInnerInner1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowInnerInner1' />\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"\r\n      transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) ' />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd'\r\n    transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) '\r\n    [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='0' width='31'\r\n    height='16' rx='5' />\r\n  <g id='Vomit-Stuff'>\r\n    <use fill='#88C553' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n    <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(filter1)\" [attr.xlink:href]=\"'#' + path2\" />\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarMouthVomitComponent;
}(MouthBaseComponent));
export { CustomAvatarMouthVomitComponent };
if (false) {
    /** @type {?} */
    CustomAvatarMouthVomitComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthVomitComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthVomitComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarMouthVomitComponent.prototype.path2;
    /** @type {?} */
    CustomAvatarMouthVomitComponent.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm9taXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvZmFjZS9tb3V0aC92b21pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFLcUQsMkRBQWtCO0lBTHZFO1FBQUEscUVBYUM7UUFKQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxhQUFPLEdBQVcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDOztJQUMzQyxDQUFDOztnQkFiQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MscXpFQUFxQztpQkFDdEM7O0lBVUQsc0NBQUM7Q0FBQSxBQWJELENBS3FELGtCQUFrQixHQVF0RTtTQVJZLCtCQUErQjs7O0lBRTFDLGlEQUF3Qjs7SUFFeEIsZ0RBQXFDOztJQUNyQyxnREFBcUM7O0lBQ3JDLGdEQUFxQzs7SUFDckMsa0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBNb3V0aFR5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgTW91dGhCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9tb3V0aC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1tb3V0aC12b21pdF0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92b21pdC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyTW91dGhWb21pdENvbXBvbmVudCBleHRlbmRzIE1vdXRoQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIG9wdGlvbjogTW91dGhUeXBlLlZvbWl0O1xyXG5cclxuICBtYXNrMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgcGF0aDE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgyOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBmaWx0ZXIxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLWZpbHRlcicpO1xyXG59XHJcbiJdfQ==