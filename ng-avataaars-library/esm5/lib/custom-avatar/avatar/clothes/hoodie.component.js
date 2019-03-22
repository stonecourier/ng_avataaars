/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { randomId } from '../../helper/randomid';
import { CustomAvatarClothesBaseComponent } from './clothes-base.component';
var CustomAvatarClothesHoodieComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarClothesHoodieComponent, _super);
    function CustomAvatarClothesHoodieComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarClothesHoodieComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-clothes-hoodie]',
                    template: "<svg:g id='Clothing/Hoodie' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Hoodie' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <path\r\n    d='M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z'\r\n    id='Straps' [attr.fill]=\"color2\" fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" />\r\n  <path\r\n    d='M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z'\r\n    id='Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" />\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarClothesHoodieComponent;
}(CustomAvatarClothesBaseComponent));
export { CustomAvatarClothesHoodieComponent };
if (false) {
    /** @type {?} */
    CustomAvatarClothesHoodieComponent.prototype.option;
    /** @type {?} */
    CustomAvatarClothesHoodieComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarClothesHoodieComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9vZGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2Nsb3RoZXMvaG9vZGllLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RTtJQUt3RCw4REFBZ0M7SUFMeEY7UUFBQSxxRUFXQztRQUZDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLHF1REFBc0M7aUJBQ3ZDOztJQVFELHlDQUFDO0NBQUEsQUFYRCxDQUt3RCxnQ0FBZ0MsR0FNdkY7U0FOWSxrQ0FBa0M7OztJQUU3QyxvREFBMEI7O0lBRTFCLG1EQUFxQzs7SUFDckMsbURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xvdGhlVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5pbXBvcnQgeyByYW5kb21JZCB9IGZyb20gJy4uLy4uL2hlbHBlci9yYW5kb21pZCc7XHJcbmltcG9ydCB7IEN1c3RvbUF2YXRhckNsb3RoZXNCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jbG90aGVzLWJhc2UuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2tpcC1jdXN0b20tYXZhdGFyLWNsb3RoZXMtaG9vZGllXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2hvb2RpZS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyQ2xvdGhlc0hvb2RpZUNvbXBvbmVudCBleHRlbmRzIEN1c3RvbUF2YXRhckNsb3RoZXNCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgb3B0aW9uOiBDbG90aGVUeXBlLkhvb2RpZTtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=