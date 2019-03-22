/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable:component-selector */
import { Component } from '@angular/core';
import { FacialHairType } from '../../../options';
import { randomId } from '../../../helper/randomid';
import { CustomAvatarFacialHairBaseComponent } from './facial-hair-base.component';
var CustomAvatarFacialHairMoustacheFancyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomAvatarFacialHairMoustacheFancyComponent, _super);
    function CustomAvatarFacialHairMoustacheFancyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.option = FacialHairType.MoustacheFancy;
        _this.mask1 = randomId('kip-mask');
        _this.path1 = randomId('kip-path');
        return _this;
    }
    CustomAvatarFacialHairMoustacheFancyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-facial-hair-moustache-fancy]',
                    template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
                }] }
    ];
    return CustomAvatarFacialHairMoustacheFancyComponent;
}(CustomAvatarFacialHairBaseComponent));
export { CustomAvatarFacialHairMoustacheFancyComponent };
if (false) {
    /** @type {?} */
    CustomAvatarFacialHairMoustacheFancyComponent.prototype.option;
    /** @type {?} */
    CustomAvatarFacialHairMoustacheFancyComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarFacialHairMoustacheFancyComponent.prototype.path1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c3RhY2hlLWZhbmN5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL3RvcC9mYWNpYWwtaGFpci9tb3VzdGFjaGUtZmFuY3kuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVuRjtJQUttRSx5RUFBbUM7SUFMdEc7UUFBQSxxRUFXQztRQUpDLFlBQU0sR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDO1FBRXZDLFdBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsV0FBSyxHQUFXLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpREFBaUQ7b0JBQzNELHNoQ0FBK0M7aUJBQ2hEOztJQVFELG9EQUFDO0NBQUEsQUFYRCxDQUttRSxtQ0FBbUMsR0FNckc7U0FOWSw2Q0FBNkM7OztJQUV4RCwrREFBdUM7O0lBRXZDLDhEQUFxQzs7SUFDckMsOERBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmFjaWFsSGFpclR5cGUgfSBmcm9tICcuLi8uLi8uLi9vcHRpb25zJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi8uLi8uLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyBDdXN0b21BdmF0YXJGYWNpYWxIYWlyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vZmFjaWFsLWhhaXItYmFzZS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItZmFjaWFsLWhhaXItbW91c3RhY2hlLWZhbmN5XScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21vdXN0YWNoZS1mYW5jeS5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyRmFjaWFsSGFpck1vdXN0YWNoZUZhbmN5Q29tcG9uZW50IGV4dGVuZHMgQ3VzdG9tQXZhdGFyRmFjaWFsSGFpckJhc2VDb21wb25lbnQge1xyXG5cclxuICBvcHRpb24gPSBGYWNpYWxIYWlyVHlwZS5Nb3VzdGFjaGVGYW5jeTtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxufVxyXG4iXX0=