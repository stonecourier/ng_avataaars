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
var CustomAvatarTopShortHairFrizzleComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarTopShortHairFrizzleComponent, _super);
    function CustomAvatarTopShortHairFrizzleComponent() {
        var _this = _super.call(this) || this;
        _this.option = TopType.ShortHairFrizzle;
        _this.mask1 = randomId('kip-mask');
        _this.mask2 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        _this.path2 = randomId('kip-path');
        _this.filter1 = randomId('kip-filter');
        return _this;
    }
    CustomAvatarTopShortHairFrizzleComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-top-short-hair-frizzle]',
                    template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Frizzle' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Hair-Maks' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
                }] }
    ];
    /** @nocollapse */
    CustomAvatarTopShortHairFrizzleComponent.ctorParameters = function () { return []; };
    return CustomAvatarTopShortHairFrizzleComponent;
}(CustomAvatarTopBaseComponent));
export { CustomAvatarTopShortHairFrizzleComponent };
if (false) {
    /** @type {?} */
    CustomAvatarTopShortHairFrizzleComponent.prototype.option;
    /** @type {?} */
    CustomAvatarTopShortHairFrizzleComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarTopShortHairFrizzleComponent.prototype.mask2;
    /** @type {?} */
    CustomAvatarTopShortHairFrizzleComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarTopShortHairFrizzleComponent.prototype.path2;
    /** @type {?} */
    CustomAvatarTopShortHairFrizzleComponent.prototype.filter1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtaGFpci1mcml6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL3RvcC9zaG9ydC1oYWlyLWZyaXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEU7SUFLOEQsb0VBQTRCO0lBVXhGO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBVkQsWUFBTSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUVsQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxXQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLGFBQU8sR0FBVyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7O0lBSXpDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRDQUE0QztvQkFDdEQsNjFEQUFrRDtpQkFDbkQ7Ozs7SUFnQkQsK0NBQUM7Q0FBQSxBQW5CRCxDQUs4RCw0QkFBNEIsR0FjekY7U0FkWSx3Q0FBd0M7OztJQUVuRCwwREFBa0M7O0lBRWxDLHlEQUFxQzs7SUFDckMseURBQXFDOztJQUNyQyx5REFBcUM7O0lBQ3JDLHlEQUFxQzs7SUFDckMsMkRBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9wVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQgfSBmcm9tICcuL3RvcC1iYXNlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci10b3Atc2hvcnQtaGFpci1mcml6emxlXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3J0LWhhaXItZnJpenpsZS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyVG9wU2hvcnRIYWlyRnJpenpsZUNvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhclRvcEJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb24gPSBUb3BUeXBlLlNob3J0SGFpckZyaXp6bGU7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBtYXNrMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgcGF0aDE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgyOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBmaWx0ZXIxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLWZpbHRlcicpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=