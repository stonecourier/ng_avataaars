/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { MouthType } from '../../../options';
var CustomAvatarMouthComponent = /** @class */ (function () {
    function CustomAvatarMouthComponent() {
        this.mouthType = MouthType.Concerned;
    }
    CustomAvatarMouthComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kip-custom-avatar-mouth]',
                    template: "<svg:g [ngSwitch]=\"mouthType\">\r\n  <g *ngSwitchCase=\"'Concerned'\" kip-custom-avatar-mouth-concerned />\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-mouth-default />\r\n  <g *ngSwitchCase=\"'Disbelief'\" kip-custom-avatar-mouth-disbelief />\r\n  <g *ngSwitchCase=\"'Eating'\" kip-custom-avatar-mouth-eating />\r\n  <g *ngSwitchCase=\"'Grimace'\" kip-custom-avatar-mouth-grimace />\r\n  <g *ngSwitchCase=\"'Sad'\" kip-custom-avatar-mouth-sad />\r\n  <g *ngSwitchCase=\"'ScreamOpen'\" kip-custom-avatar-mouth-scream-open />\r\n  <g *ngSwitchCase=\"'Serious'\" kip-custom-avatar-mouth-serious />\r\n  <g *ngSwitchCase=\"'Smile'\" kip-custom-avatar-mouth-smile />\r\n  <g *ngSwitchCase=\"'Tongue'\" kip-custom-avatar-mouth-tongue />\r\n  <g *ngSwitchCase=\"'Twinkle'\" kip-custom-avatar-mouth-twinkle />\r\n  <g *ngSwitchCase=\"'Vomit'\" kip-custom-avatar-mouth-vomit />\r\n</svg:g>\r\n"
                }] }
    ];
    CustomAvatarMouthComponent.propDecorators = {
        mouthType: [{ type: Input }]
    };
    return CustomAvatarMouthComponent;
}());
export { CustomAvatarMouthComponent };
if (false) {
    /** @type {?} */
    CustomAvatarMouthComponent.prototype.mouthType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91dGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXZhdGFhYXJzLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWF2YXRhci9hdmF0YXIvZmFjZS9tb3V0aC9tb3V0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFN0M7SUFBQTtRQVFFLGNBQVMsR0FBYyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBRTdDLENBQUM7O2dCQVZBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQywyNEJBQXFDO2lCQUN0Qzs7OzRCQUlFLEtBQUs7O0lBR1IsaUNBQUM7Q0FBQSxBQVZELElBVUM7U0FMWSwwQkFBMEI7OztJQUVyQywrQ0FDMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW91dGhUeXBlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1tb3V0aF0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb3V0aC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyTW91dGhDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1vdXRoVHlwZTogTW91dGhUeXBlID0gTW91dGhUeXBlLkNvbmNlcm5lZDtcclxuXHJcbn1cclxuIl19