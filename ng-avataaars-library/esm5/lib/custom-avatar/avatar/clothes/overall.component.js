/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';
var CustomAvatarClothesOverallComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarClothesOverallComponent, _super);
    function CustomAvatarClothesOverallComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarClothesOverallComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-clothes-overall]',
                    template: "<svg:g id='Clothing/Overall' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Overall' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n\r\n  <circle id='Button' [attr.fill]=\"color2\" fill-rule='evenodd' cx='81' cy='83' r='5' />\r\n  <circle id='Button' [attr.fill]=\"color2\" fill-rule='evenodd' cx='183' cy='83' r='5' />\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarClothesOverallComponent;
}(CustomAvatarClothesBaseComponent));
export { CustomAvatarClothesOverallComponent };
if (false) {
    /** @type {?} */
    CustomAvatarClothesOverallComponent.prototype.option;
    /** @type {?} */
    CustomAvatarClothesOverallComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarClothesOverallComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9jbG90aGVzL292ZXJhbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVFO0lBS3lELCtEQUFnQztJQUx6RjtRQUFBLHFFQVdDO1FBRkMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztJQUN2QyxDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztvQkFDL0Msc3lCQUF1QztpQkFDeEM7O0lBUUQsMENBQUM7Q0FBQSxBQVhELENBS3lELGdDQUFnQyxHQU14RjtTQU5ZLG1DQUFtQzs7O0lBRTlDLHFEQUEyQjs7SUFFM0Isb0RBQXFDOztJQUNyQyxvREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbG90aGVUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyQ2xvdGhlc0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL2Nsb3RoZXMtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItY2xvdGhlcy1vdmVyYWxsXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJhbGwuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckNsb3RoZXNPdmVyYWxsQ29tcG9uZW50IGV4dGVuZHMgQ3VzdG9tQXZhdGFyQ2xvdGhlc0Jhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb246IENsb3RoZVR5cGUuT3ZlcmFsbDtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=