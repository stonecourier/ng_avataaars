/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { NoseType, MouthType, EyeType, EyebrowType, HairColor } from '../../options';
export class CustomAvatarFaceComponent {
    constructor() {
        this.noseType = NoseType.Default;
        this.mouthType = MouthType.Concerned;
        this.eyeType = EyeType.Cry;
        this.eyebrowType = EyebrowType.Angry;
    }
}
CustomAvatarFaceComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-face]',
                template: "<svg:g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>\r\n  <g kip-custom-avatar-nose [noseType]=\"noseType\" />\r\n  <g kip-custom-avatar-mouth [mouthType]=\"mouthType\" />\r\n  <g kip-custom-avatar-eyes [eyeType]=\"eyeType\" />\r\n  <g kip-custom-avatar-eye-brows [eyebrowType]=\"eyebrowType\" [eyebrowColor]=\"eyebrowColor\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarFaceComponent.propDecorators = {
    noseType: [{ type: Input }],
    mouthType: [{ type: Input }],
    eyeType: [{ type: Input }],
    eyebrowType: [{ type: Input }],
    eyebrowColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CustomAvatarFaceComponent.prototype.noseType;
    /** @type {?} */
    CustomAvatarFaceComponent.prototype.mouthType;
    /** @type {?} */
    CustomAvatarFaceComponent.prototype.eyeType;
    /** @type {?} */
    CustomAvatarFaceComponent.prototype.eyebrowType;
    /** @type {?} */
    CustomAvatarFaceComponent.prototype.eyebrowColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL2ZhY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPckYsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQVFFLGFBQVEsR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBR3RDLGNBQVMsR0FBYyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRzNDLFlBQU8sR0FBWSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRy9CLGdCQUFXLEdBQWdCLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFJL0MsQ0FBQzs7O1lBckJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyw0WEFBb0M7YUFDckM7Ozt1QkFJRSxLQUFLO3dCQUdMLEtBQUs7c0JBR0wsS0FBSzswQkFHTCxLQUFLOzJCQUdMLEtBQUs7Ozs7SUFaTiw2Q0FDc0M7O0lBRXRDLDhDQUMyQzs7SUFFM0MsNENBQytCOztJQUUvQixnREFDNkM7O0lBRTdDLGlEQUN3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvciAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3NlVHlwZSwgTW91dGhUeXBlLCBFeWVUeXBlLCBFeWVicm93VHlwZSwgSGFpckNvbG9yIH0gZnJvbSAnLi4vLi4vb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1traXAtY3VzdG9tLWF2YXRhci1mYWNlXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2UuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUF2YXRhckZhY2VDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vc2VUeXBlOiBOb3NlVHlwZSA9IE5vc2VUeXBlLkRlZmF1bHQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbW91dGhUeXBlOiBNb3V0aFR5cGUgPSBNb3V0aFR5cGUuQ29uY2VybmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV5ZVR5cGU6IEV5ZVR5cGUgPSBFeWVUeXBlLkNyeTtcclxuXHJcbiAgQElucHV0KClcclxuICBleWVicm93VHlwZTogRXllYnJvd1R5cGUgPSBFeWVicm93VHlwZS5BbmdyeTtcclxuXHJcbiAgQElucHV0KClcclxuICBleWVicm93Q29sb3I6IEhhaXJDb2xvcjtcclxufVxyXG4iXX0=