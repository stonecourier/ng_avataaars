/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { TopType } from '../../options';
import { randomId } from '../../helper/randomid';
import { CustomAvatarTopBaseComponent } from './top-base.component';
var CustomAvatarTopLongHairBunComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarTopLongHairBunComponent, _super);
    function CustomAvatarTopLongHairBunComponent() {
        var _this = _super.call(this) || this;
        _this.option = TopType.LongHairBun;
        _this.mask1 = randomId('kip-mask');
        _this.mask2 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        return _this;
    }
    CustomAvatarTopLongHairBunComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-top-long-hair-bun]',
                    template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M114.939716,28.3372418 C113.953527,28.5587334 112.985531,28.7906134 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 95.7648164,43.2055199 133,41.6707324 C170.235184,40.1359449 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 C161.866498,31.8520537 156.438352,29.6874962 151.116597,28.2827668 C154.176091,25.3110645 156,21.5675963 156,17.5 C156,7.83501688 145.702549,0 133,0 C120.297451,0 110,7.83501688 110,17.5 C110,21.5924906 111.846303,25.3568736 114.939716,28.3372418 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Bun' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Short-Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    /** @nocollapse */
    CustomAvatarTopLongHairBunComponent.ctorParameters = function () { return []; };
    return CustomAvatarTopLongHairBunComponent;
}(CustomAvatarTopBaseComponent));
export { CustomAvatarTopLongHairBunComponent };
if (false) {
    /** @type {?} */
    CustomAvatarTopLongHairBunComponent.prototype.option;
    /** @type {?} */
    CustomAvatarTopLongHairBunComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopLongHairBunComponent.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopLongHairBunComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarTopLongHairBunComponent.prototype.path2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1oYWlyLWJ1bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvbG9uZy1oYWlyLWJ1bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRTtJQUt5RCwrREFBNEI7SUFTbkY7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFURCxZQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUU3QixXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztJQUlyQyxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELGlzRUFBNkM7aUJBQzlDOzs7O0lBZUQsMENBQUM7Q0FBQSxBQWxCRCxDQUt5RCw0QkFBNEIsR0FhcEY7U0FiWSxtQ0FBbUM7OztJQUU5QyxxREFBNkI7O0lBRTdCLG9EQUFxQzs7SUFDckMsb0RBQXFDOztJQUNyQyxvREFBcUM7O0lBQ3JDLG9EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvcFR5cGUgfSBmcm9tICcuLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBDdXN0b21BdmF0YXJUb3BCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi90b3AtYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItdG9wLWxvbmctaGFpci1idW5dJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9uZy1oYWlyLWJ1bi5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyVG9wTG9uZ0hhaXJCdW5Db21wb25lbnQgZXh0ZW5kcyBDdXN0b21BdmF0YXJUb3BCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uID0gVG9wVHlwZS5Mb25nSGFpckJ1bjtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIG1hc2syOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgcGF0aDI6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=