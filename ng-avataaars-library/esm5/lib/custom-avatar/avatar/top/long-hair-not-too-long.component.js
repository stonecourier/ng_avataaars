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
var CustomAvatarTopLongHairNotTooLongComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarTopLongHairNotTooLongComponent, _super);
    function CustomAvatarTopLongHairNotTooLongComponent() {
        var _this = _super.call(this) || this;
        _this.option = TopType.LongHairNotTooLong;
        _this.mask1 = randomId('kip-mask');
        _this.mask2 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        _this.path3 = randomId('kip-path');
        return _this;
    }
    CustomAvatarTopLongHairNotTooLongComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-top-long-hair-not-too-long]',
                    template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M59,102.340285 C59,118.921045 59,145.474283 59,182 C59,186.418278 62.581722,190 67,190 L109,190 L109,180.610951 C91.4692178,172.282984 78.9518066,155.114792 77.2085808,134.867187 C71.4308707,134.002364 67,129.018625 67,123 L67,110 C67,106.509412 68.4903619,103.366917 70.8694649,101.174135 C82.4088376,98.5552525 94.9706808,93.6376395 107.341516,86.4953343 C119.473269,79.4910638 129.843979,71.2579416 137.820938,62.752196 C134.394107,70.6604321 130.244513,77.5880409 125.372156,83.5350224 C138.047336,78.0120855 146.677812,69.1324394 151.263585,56.8960843 C151.64142,57.8180234 152.034942,58.738913 152.444252,59.6582378 C162.699828,82.6926393 180.317578,99.018563 198.205873,104.403108 C198.718861,106.513486 199,108.48395 199,110 L199,123 C199,129.018625 194.569129,134.002364 188.791419,134.867187 C187.048193,155.114792 174.530782,172.282984 157,180.610951 L157,190 L175,190 C192.673112,190 207,175.673112 207,158 C207,133.944314 207,115.902549 207,103.874706 C207,103.807916 206.990567,103.721208 206.971823,103.615272 C206.82774,91.3536714 206.623862,84.2237818 206.360189,82.2256031 C201.576875,45.9764505 170.555563,18 133,18 C96.9151011,18 66.8627142,43.8282542 60,78 C54.4771525,78 50,83.5964406 50,90.5 C50,95.0507583 51.6949619,99.1431718 54.8534901,101.273154 C55.7582038,101.883256 57.323834,102.197638 58.9999994,102.340287 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Long-but-not-too-long' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Behind' stroke-width='1' fill-rule='evenodd'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Combined-Shape' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <g id='Top' opacity='0.439990942' stroke-width='1' fill-rule='evenodd' transform='translate(50.000000, 18.000000)'\r\n        fill-opacity='0.159999996'>\r\n        <path\r\n          d='M11.8989604,84.7749122 C25.7109099,83.0145308 41.6792969,77.5379209 57.3415164,68.4953343 C69.4732686,61.4910638 79.8439791,53.2579416 87.8209384,44.752196 C84.3941075,52.6604321 80.2445133,59.5880409 75.3721558,65.5350224 C88.0473359,60.0120855 96.6778122,51.1324394 101.263585,38.8960843 C101.64142,39.8180234 102.034942,40.738913 102.444252,41.6582378 C114.38223,68.4713761 136.296003,86.1944823 157,88.1510343 L157,88.1510343 L157,74 C157,33.1309285 123.869071,-7.50752664e-15 83,0 C46.9151011,6.62868839e-15 16.8627142,25.8282542 10.3212729,60.0063288 C10.214595,60.0021202 10.1074956,60 10,60 C4.4771525,60 0,65.5964406 0,72.5 C0,78.9816827 3.9466744,84.3111215 8.99999442,84.9382803 L8.99999434,85.0927525 C9.31629342,85.0638362 9.63387297,85.0328725 9.95270131,84.9998631 C9.96845895,84.9999543 9.98422521,85 10,85 C10.6492988,85 11.2841443,84.9226474 11.8989604,84.7749122 Z'\r\n          id='Combined-Shape' fill='#FFFFFF' />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    /** @nocollapse */
    CustomAvatarTopLongHairNotTooLongComponent.ctorParameters = function () { return []; };
    return CustomAvatarTopLongHairNotTooLongComponent;
}(CustomAvatarTopBaseComponent));
export { CustomAvatarTopLongHairNotTooLongComponent };
if (false) {
    /** @type {?} */
    CustomAvatarTopLongHairNotTooLongComponent.prototype.option;
    /** @type {?} */
    CustomAvatarTopLongHairNotTooLongComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopLongHairNotTooLongComponent.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopLongHairNotTooLongComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarTopLongHairNotTooLongComponent.prototype.path2;
    /** @type {?} */
    CustomAvatarTopLongHairNotTooLongComponent.prototype.path3;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1oYWlyLW5vdC10b28tbG9uZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci90b3AvbG9uZy1oYWlyLW5vdC10b28tbG9uZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRTtJQUtnRSxzRUFBNEI7SUFVMUY7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFWRCxZQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1FBRXBDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFJckMsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO29CQUMxRCwwOUdBQXNEO2lCQUN2RDs7OztJQWdCRCxpREFBQztDQUFBLEFBbkJELENBS2dFLDRCQUE0QixHQWMzRjtTQWRZLDBDQUEwQzs7O0lBRXJELDREQUFvQzs7SUFFcEMsMkRBQXFDOztJQUNyQywyREFBcUM7O0lBQ3JDLDJEQUFxQzs7SUFDckMsMkRBQXFDOztJQUNyQywyREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb3BUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgQ3VzdG9tQXZhdGFyVG9wQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9wLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLXRvcC1sb25nLWhhaXItbm90LXRvby1sb25nXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvbmctaGFpci1ub3QtdG9vLWxvbmcuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclRvcExvbmdIYWlyTm90VG9vTG9uZ0NvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb24gPSBUb3BUeXBlLkxvbmdIYWlyTm90VG9vTG9uZztcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIG1hc2syOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBwYXRoMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgcGF0aDI6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgzOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19