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
var CustomAvatarTopShortHairShortRoundComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarTopShortHairShortRoundComponent, _super);
    function CustomAvatarTopShortHairShortRoundComponent() {
        var _this = _super.call(this) || this;
        _this.option = TopType.ShortHairShortRound;
        _this.mask1 = randomId('kip-mask');
        _this.mask2 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        _this.filter1 = randomId('kip-filter');
        return _this;
    }
    CustomAvatarTopShortHairShortRoundComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-top-short-hair-short-round]',
                    template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M167.308863,35.006118 C147.121091,23.3065109 127.128954,25.2219854 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 102.268658,60.045883 111.066257,55.4635848 C110.302881,56.8686624 107.359637,59.1432635 108.379389,60.7268592 C109.083576,61.8207003 111.749474,61.4890712 113.022219,61.4539693 C116.370996,61.3623702 119.734993,60.7796791 123.042844,60.306974 C128.255923,59.5618115 133.140585,58.0517626 138.046555,56.2181078 C142.06299,54.7164165 146.650012,53.3257139 149.66868,50.1404701 C154.539813,55.1881187 160.809849,59.9345599 167.070414,63.1428706 C172.68835,66.0222267 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Short-Round' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Short-Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    /** @nocollapse */
    CustomAvatarTopShortHairShortRoundComponent.ctorParameters = function () { return []; };
    return CustomAvatarTopShortHairShortRoundComponent;
}(CustomAvatarTopBaseComponent));
export { CustomAvatarTopShortHairShortRoundComponent };
if (false) {
    /** @type {?} */
    CustomAvatarTopShortHairShortRoundComponent.prototype.option;
    /** @type {?} */
    CustomAvatarTopShortHairShortRoundComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopShortHairShortRoundComponent.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopShortHairShortRoundComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarTopShortHairShortRoundComponent.prototype.path2;
    /** @type {?} */
    CustomAvatarTopShortHairShortRoundComponent.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtaGFpci1zaG9ydC1yb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3Avc2hvcnQtaGFpci1zaG9ydC1yb3VuZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRTtJQUtpRSx1RUFBNEI7SUFVM0Y7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFWRCxZQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1FBRXJDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsYUFBTyxHQUFXLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7SUFJekMsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO29CQUMxRCwyMkZBQXNEO2lCQUN2RDs7OztJQWdCRCxrREFBQztDQUFBLEFBbkJELENBS2lFLDRCQUE0QixHQWM1RjtTQWRZLDJDQUEyQzs7O0lBRXRELDZEQUFxQzs7SUFFckMsNERBQXFDOztJQUNyQyw0REFBcUM7O0lBQ3JDLDREQUFxQzs7SUFDckMsNERBQXFDOztJQUNyQyw4REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3BUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyVG9wQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLXRvcC1zaG9ydC1oYWlyLXNob3J0LXJvdW5kXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3J0LWhhaXItc2hvcnQtcm91bmQuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclRvcFNob3J0SGFpclNob3J0Um91bmRDb21wb25lbnQgZXh0ZW5kcyBDdXN0b21BdmF0YXJUb3BCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uID0gVG9wVHlwZS5TaG9ydEhhaXJTaG9ydFJvdW5kO1xyXG5cclxuICBtYXNrMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgbWFzazI6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgZmlsdGVyMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1maWx0ZXInKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19