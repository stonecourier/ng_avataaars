/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';
var CustomAvatarClothesGraphicShirtComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarClothesGraphicShirtComponent, _super);
    function CustomAvatarClothesGraphicShirtComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarClothesGraphicShirtComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-clothes-graphic-shirt]',
                    template: "<svg:g id='Clothing/Graphic-Shirt' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <g kip-custom-avatar-graphics [graphicType]=\"graphicType\" [clotheColor2]=\"clotheColor2\" />\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarClothesGraphicShirtComponent;
}(CustomAvatarClothesBaseComponent));
export { CustomAvatarClothesGraphicShirtComponent };
if (false) {
    /** @type {?} */
    CustomAvatarClothesGraphicShirtComponent.prototype.option;
    /** @type {?} */
    CustomAvatarClothesGraphicShirtComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarClothesGraphicShirtComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhpYy1zaGlydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9jbG90aGVzL2dyYXBoaWMtc2hpcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTVFO0lBSzhELG9FQUFnQztJQUw5RjtRQUFBLHFFQVdDO1FBRkMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztJQUN2QyxDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJDQUEyQztvQkFDckQsazFCQUE2QztpQkFDOUM7O0lBUUQsK0NBQUM7Q0FBQSxBQVhELENBSzhELGdDQUFnQyxHQU03RjtTQU5ZLHdDQUF3Qzs7O0lBRW5ELDBEQUFnQzs7SUFFaEMseURBQXFDOztJQUNyQyx5REFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbG90aGVUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyQ2xvdGhlc0Jhc2VDb21wb25lbnQgfSBmcm9tICcuL2Nsb3RoZXMtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItY2xvdGhlcy1ncmFwaGljLXNoaXJ0XScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyYXBoaWMtc2hpcnQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckNsb3RoZXNHcmFwaGljU2hpcnRDb21wb25lbnQgZXh0ZW5kcyBDdXN0b21BdmF0YXJDbG90aGVzQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIG9wdGlvbjogQ2xvdGhlVHlwZS5HcmFwaGljU2hpcnQ7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbn1cclxuIl19