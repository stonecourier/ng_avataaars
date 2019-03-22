/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { EyeType } from '../../../options';
var CustomAvatarEyesComponent = /** @class */ (function () {
    function CustomAvatarEyesComponent() {
        this.eyeType = EyeType.Close;
    }
    CustomAvatarEyesComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-eyes]',
                    template: "<svg:g [ngSwitch]=\"eyeType\">\r\n  <g *ngSwitchCase=\"'Close'\" kip-custom-avatar-eyes-close />\r\n  <g *ngSwitchCase=\"'Cry'\" kip-custom-avatar-eyes-cry />\r\n  <g *ngSwitchCase=\"'CryMirrored'\" kip-custom-avatar-eyes-cry transform=\"scale(-1, 1) translate(-112, 0)\" />\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-eyes-default />\r\n  <g *ngSwitchCase=\"'Dizzy'\" kip-custom-avatar-eyes-dizzy />\r\n  <g *ngSwitchCase=\"'EyeRoll'\" kip-custom-avatar-eyes-eye-roll />\r\n  <g *ngSwitchCase=\"'Happy'\" kip-custom-avatar-eyes-happy />\r\n  <g *ngSwitchCase=\"'Hearts'\" kip-custom-avatar-eyes-hearts />\r\n  <g *ngSwitchCase=\"'Side'\" kip-custom-avatar-eyes-sides />\r\n  <g *ngSwitchCase=\"'SideMirrored'\" kip-custom-avatar-eyes-sides transform=\"scale(-1, 1) translate(-112, 0)\" />\r\n  <g *ngSwitchCase=\"'Squint'\" kip-custom-avatar-eyes-squint />\r\n  <g *ngSwitchCase=\"'Surprised'\" kip-custom-avatar-eyes-surprised />\r\n  <g *ngSwitchCase=\"'Wink'\" kip-custom-avatar-eyes-wink />\r\n  <g *ngSwitchCase=\"'WinkMirrored'\" kip-custom-avatar-eyes-wink transform=\"scale(-1, 1) translate(-112, 0)\"/>\r\n  <g *ngSwitchCase=\"'WinkWacky'\" kip-custom-avatar-eyes-wink-wacky />\r\n  <g *ngSwitchCase=\"'WinkWackyMirrored'\" kip-custom-avatar-eyes-wink-wacky transform=\"scale(-1, 1) translate(-112, 0)\"/>\r\n</svg:g>\r\n"
                }] }
    ];
    CustomAvatarEyesComponent.propDecorators = {
        eyeType: [{ type: Input }]
    };
    return CustomAvatarEyesComponent;
}());
export { CustomAvatarEyesComponent };
if (false) {
    /** @type {?} */
    CustomAvatarEyesComponent.prototype.eyeType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL2V5ZXMvZXllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0M7SUFBQTtRQVFFLFlBQU8sR0FBWSxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7O2dCQVRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyx5MENBQW9DO2lCQUNyQzs7OzBCQUlFLEtBQUs7O0lBRVIsZ0NBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSx5QkFBeUI7OztJQUVwQyw0Q0FDaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXllVHlwZSB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItZXllc10nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9leWVzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJFeWVzQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBleWVUeXBlOiBFeWVUeXBlID0gRXllVHlwZS5DbG9zZTtcclxufVxyXG4iXX0=