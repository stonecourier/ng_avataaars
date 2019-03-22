/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';
import { NoseType, MouthType, EyeType, EyebrowType, HairColor } from '../../options';
var CustomAvatarFaceComponent = /** @class */ (function () {
    function CustomAvatarFaceComponent() {
        this.noseType = NoseType.Default;
        this.mouthType = MouthType.Concerned;
        this.eyeType = EyeType.Cry;
        this.eyebrowType = EyebrowType.Angry;
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
    return CustomAvatarFaceComponent;
}());
export { CustomAvatarFaceComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2F2YXRhci9mYWNlL2ZhY2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckY7SUFBQTtRQVFFLGFBQVEsR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBR3RDLGNBQVMsR0FBYyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRzNDLFlBQU8sR0FBWSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRy9CLGdCQUFXLEdBQWdCLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFJL0MsQ0FBQzs7Z0JBckJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyw0WEFBb0M7aUJBQ3JDOzs7MkJBSUUsS0FBSzs0QkFHTCxLQUFLOzBCQUdMLEtBQUs7OEJBR0wsS0FBSzsrQkFHTCxLQUFLOztJQUVSLGdDQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FoQlkseUJBQXlCOzs7SUFFcEMsNkNBQ3NDOztJQUV0Qyw4Q0FDMkM7O0lBRTNDLDRDQUMrQjs7SUFFL0IsZ0RBQzZDOztJQUU3QyxpREFDd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpjb21wb25lbnQtc2VsZWN0b3IgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTm9zZVR5cGUsIE1vdXRoVHlwZSwgRXllVHlwZSwgRXllYnJvd1R5cGUsIEhhaXJDb2xvciB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdba2lwLWN1c3RvbS1hdmF0YXItZmFjZV0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNlLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJGYWNlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KClcclxuICBub3NlVHlwZTogTm9zZVR5cGUgPSBOb3NlVHlwZS5EZWZhdWx0O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG1vdXRoVHlwZTogTW91dGhUeXBlID0gTW91dGhUeXBlLkNvbmNlcm5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBleWVUeXBlOiBFeWVUeXBlID0gRXllVHlwZS5Dcnk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXllYnJvd1R5cGU6IEV5ZWJyb3dUeXBlID0gRXllYnJvd1R5cGUuQW5ncnk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXllYnJvd0NvbG9yOiBIYWlyQ29sb3I7XHJcbn1cclxuIl19