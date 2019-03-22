/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../../helper/randomid';
import { MouthBaseComponent } from './mouth-base.component';
var CustomAvatarMouthSmileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarMouthSmileComponent, _super);
    function CustomAvatarMouthSmileComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarMouthSmileComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-mouth-smile]',
                    template: "<svg:g id='Mouth/Smile' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5' />\r\n  <g id='Tongue' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" fill='#FF4F6D'>\r\n    <g transform='translate(38.000000, 24.000000)'>\r\n      <circle cx='11' cy='11' r='11' />\r\n      <circle cx='21' cy='11' r='11' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarMouthSmileComponent;
}(MouthBaseComponent));
export { CustomAvatarMouthSmileComponent };
if (false) {
    /** @type {?} */
    CustomAvatarMouthSmileComponent.prototype.option;
    /** @type {?} */
    CustomAvatarMouthSmileComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarMouthSmileComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21pbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvZmFjZS9tb3V0aC9zbWlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFLcUQsMkRBQWtCO0lBTHZFO1FBQUEscUVBV0M7UUFGQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7O2dCQVhBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyw4akNBQXFDO2lCQUN0Qzs7SUFRRCxzQ0FBQztDQUFBLEFBWEQsQ0FLcUQsa0JBQWtCLEdBTXRFO1NBTlksK0JBQStCOzs7SUFFMUMsaURBQXdCOztJQUV4QixnREFBcUM7O0lBQ3JDLGdEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgTW91dGhUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IE1vdXRoQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbW91dGgtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItbW91dGgtc21pbGVdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc21pbGUuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhck1vdXRoU21pbGVDb21wb25lbnQgZXh0ZW5kcyBNb3V0aEJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb246IE1vdXRoVHlwZS5TbWlsZTtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=