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
var CustomAvatarTopWinterHat3Component = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarTopWinterHat3Component, _super);
    function CustomAvatarTopWinterHat3Component() {
        var _this = _super.call(this) || this;
        _this.option = TopType.WinterHat3;
        _this.mask1 = randomId('kip-mask');
        _this.mask2 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        _this.path3 = randomId('kip-path');
        _this.filter1 = randomId('kip-filter');
        return _this;
    }
    CustomAvatarTopWinterHat3Component.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-top-winter-hat3]',
                    template: "<svg:g id='Top'>\r\n  <defs>\r\n    <rect [attr.id]=\"path3\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.7%' y='-1.7%' width='101.4%' height='106.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowOffsetOuter1' />\r\n    </filter>\r\n    <path\r\n      d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path3\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accessories/Winter-Hat-3' transform='translate(-1.000000, 0.000000)'>\r\n    <g id='hat' stroke-width='1' fill-rule='evenodd' transform='translate(67.000000, 12.000000)'>\r\n      <circle id='puff' fill='#F4F4F4' cx='66' cy='8' r='20' />\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='hat-mask' [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n    <g id='hat-front'>\r\n      <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(path2)\" [attr.xlink:href]=\"'#' + path2\" />\r\n      <use fill='#F4F4F4' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    /** @nocollapse */
    CustomAvatarTopWinterHat3Component.ctorParameters = function () { return []; };
    return CustomAvatarTopWinterHat3Component;
}(CustomAvatarTopBaseComponent));
export { CustomAvatarTopWinterHat3Component };
if (false) {
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.option;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.path1;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.path2;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.path3;
    /** @type {?} */
    CustomAvatarTopWinterHat3Component.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ludGVyLWhhdDMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvdG9wL3dpbnRlci1oYXQzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBFO0lBS3dELDhEQUE0QjtJQVdsRjtRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQVhELFlBQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBRTVCLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxhQUFPLEdBQVcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDOztJQUl6QyxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLCsrRUFBMkM7aUJBQzVDOzs7O0lBaUJELHlDQUFDO0NBQUEsQUFwQkQsQ0FLd0QsNEJBQTRCLEdBZW5GO1NBZlksa0NBQWtDOzs7SUFFN0Msb0RBQTRCOztJQUU1QixtREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMsbURBQXFDOztJQUNyQyxtREFBcUM7O0lBQ3JDLG1EQUFxQzs7SUFDckMscURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9wVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3RvcC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci10b3Atd2ludGVyLWhhdDNdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vd2ludGVyLWhhdDMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhclRvcFdpbnRlckhhdDNDb21wb25lbnQgZXh0ZW5kcyBDdXN0b21BdmF0YXJUb3BCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uID0gVG9wVHlwZS5XaW50ZXJIYXQzO1xyXG5cclxuICBtYXNrMTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgbWFzazI6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgcGF0aDM6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIGZpbHRlcjE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtZmlsdGVyJyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==