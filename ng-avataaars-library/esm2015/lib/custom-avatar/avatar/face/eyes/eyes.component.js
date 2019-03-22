/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { EyeType } from '../../../options';
export class CustomAvatarEyesComponent {
    constructor() {
        this.eyeType = EyeType.Close;
    }
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
if (false) {
    /** @type {?} */
    CustomAvatarEyesComponent.prototype.eyeType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXllcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL2V5ZXMvZXllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPM0MsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQVFFLFlBQU8sR0FBWSxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7OztZQVRBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyx5MENBQW9DO2FBQ3JDOzs7c0JBSUUsS0FBSzs7OztJQUFOLDRDQUNpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFeWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1leWVzXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V5ZXMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckV5ZXNDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV5ZVR5cGU6IEV5ZVR5cGUgPSBFeWVUeXBlLkNsb3NlO1xyXG59XHJcbiJdfQ==