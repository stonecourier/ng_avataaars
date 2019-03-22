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
var CustomAvatarTopShortHairShaggyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarTopShortHairShaggyComponent, _super);
    function CustomAvatarTopShortHairShaggyComponent() {
        var _this = _super.call(this) || this;
        _this.option = TopType.ShortHairShaggy;
        _this.mask1 = randomId('kip-mask');
        _this.mask2 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        _this.filter1 = randomId('kip-filter');
        return _this;
    }
    CustomAvatarTopShortHairShaggyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-top-short-hair-shaggy]',
                    template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <path\r\n      d='M198.74696,37.856181 C193.606255,34.0244119 187.528383,30.7396605 181.187893,29.4782789 C174.741035,28.1960616 170.829392,27.8846292 164.483286,29.4052984 C162.85043,29.796545 162.299428,30.1854765 160.862131,29.2568033 C159.651446,28.4743102 151.200134,19.7668788 125.441738,24.5998777 C99.4069464,29.4847361 91.6728211,68.675365 82.0154166,70.1662691 C78.5349852,70.703365 74.2336661,69.781637 74.0992189,67.6388757 C70.1355043,73.6726057 69.0913088,81.6460323 70.7717335,88.7129442 C72.2186099,94.7989286 75.2686121,100.517478 80.7607964,103.849523 C85.4865987,106.716901 92.0203357,107.966046 97.4817987,107.437218 C99.9669245,107.196782 102.227091,106.673576 104.513684,105.671152 C107.272659,104.461694 109.470722,102.280238 112.177835,101.127995 C109.351471,103.576015 106.275372,105.735312 103.001731,107.546357 C101.362599,108.452872 99.6980301,109.07761 97.8887739,109.570058 C96.6533133,109.906073 94.127556,111.05104 92.9327267,110.752066 C100.740244,112.148383 108.093217,110.931649 115.252282,107.589351 C118.483309,106.08125 121.59079,104.256976 124.44325,102.112561 C127.276221,99.9826977 130.537639,97.8062025 132.753871,95.0036468 C131.823641,96.2071517 133.450882,94.4169423 133.665931,94.1980029 C134.274082,93.578226 134.869349,92.9458816 135.453055,92.302954 C136.455298,91.1993278 137.450603,90.0751967 138.383805,88.9120401 C140.37772,86.426318 142.234875,83.8298033 143.891185,81.1086057 C145.568637,78.352682 152.249704,67.2357231 154.266412,64.6190342 C152.361358,70.327001 150.286511,76.0372828 147.858864,81.5445 C152.572444,80.0744315 157.142657,76.0002417 160.15401,72.2035294 C163.545911,67.9275978 165.554691,62.9359795 166.262273,57.5379012 C170.087576,67.953725 179.047309,76.1675881 188.294435,81.8328914 C186.29094,78.1026546 183.238626,74.9478777 181.242068,71.1548033 C190.433037,80.4838679 205.809898,85.0481908 209.837367,98.7289227 C210.869671,93.9714569 214.189889,90.1482867 215.184533,85.2955724 C216.28885,79.9070851 217.081329,74.1868816 216.90592,68.6796644 C216.508524,56.4379129 208.273882,44.9574883 198.74696,37.856181 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Shaggy' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" transform='scale(-1, 1)' />\r\n      </mask>\r\n      <use id='Shaggy-Hair' stroke='none' [attr.fill]='color' fill-rule='evenodd'\r\n        transform='translate(143.465161, 67.234158) scale(-1, 1) translate(-143.465161, -67.234158) '\r\n        [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    /** @nocollapse */
    CustomAvatarTopShortHairShaggyComponent.ctorParameters = function () { return []; };
    return CustomAvatarTopShortHairShaggyComponent;
}(CustomAvatarTopBaseComponent));
export { CustomAvatarTopShortHairShaggyComponent };
if (false) {
    /** @type {?} */
    CustomAvatarTopShortHairShaggyComponent.prototype.option;
    /** @type {?} */
    CustomAvatarTopShortHairShaggyComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopShortHairShaggyComponent.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopShortHairShaggyComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarTopShortHairShaggyComponent.prototype.path2;
    /** @type {?} */
    CustomAvatarTopShortHairShaggyComponent.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtaGFpci1zaGFnZ3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL3Nob3J0LWhhaXItc2hhZ2d5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBSzZELG1FQUE0QjtJQVV2RjtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQVZELFlBQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBRWpDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsYUFBTyxHQUFXLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7SUFJekMsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkNBQTJDO29CQUNyRCx3b0hBQWlEO2lCQUNsRDs7OztJQWdCRCw4Q0FBQztDQUFBLEFBbkJELENBSzZELDRCQUE0QixHQWN4RjtTQWRZLHVDQUF1Qzs7O0lBRWxELHlEQUFpQzs7SUFFakMsd0RBQXFDOztJQUNyQyx3REFBcUM7O0lBQ3JDLHdEQUFxQzs7SUFDckMsd0RBQXFDOztJQUNyQywwREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3BUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyVG9wQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLXRvcC1zaG9ydC1oYWlyLXNoYWdneV0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG9ydC1oYWlyLXNoYWdneS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyVG9wU2hvcnRIYWlyU2hhZ2d5Q29tcG9uZW50IGV4dGVuZHMgQ3VzdG9tQXZhdGFyVG9wQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIG9wdGlvbiA9IFRvcFR5cGUuU2hvcnRIYWlyU2hhZ2d5O1xyXG5cclxuICBtYXNrMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgbWFzazI6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgZmlsdGVyMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1maWx0ZXInKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19