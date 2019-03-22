/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { AvatarStyle, NoseType, MouthType, EyeType, EyebrowType, SkinColor, AccessoriesType, FacialHairType, HairColor, TopType, ClotheType, BackgroundColor, ClotheColor, GraphicType, PetType, AwardType, HatColor, AccessoriesColor } from '../options';
import { randomId } from '../helper/randomid';
import { urlfix } from '../helper/urlfix';
import { backgroundColorTranslation } from '../colors/background-color-translation';
import { skinColorTranslation } from '../colors/skin-color-translation';
var CustomAvatarBaseComponent = /** @class */ (function () {
    function CustomAvatarBaseComponent() {
        this._backColor = '';
        this.transform = '';
        this.viewBox = '';
        this.noFeatures = false;
        this.noPet = false;
        this.noAward = false;
        this.avatarStyle = AvatarStyle.Transparent;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.mask3 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.path5 = randomId('kip-path');
    }
    Object.defineProperty(CustomAvatarBaseComponent.prototype, "backgroundColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._backgroundColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._backgroundColor !== value) {
                this._backgroundColor = value;
                this._backColor = backgroundColorTranslation(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarBaseComponent.prototype, "backColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._backColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarBaseComponent.prototype, "skinColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._skinColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._skinColor !== value) {
                this._skinColor = value;
                this._color = skinColorTranslation(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarBaseComponent.prototype, "color", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarBaseComponent.prototype, "petTypeVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.noFeatures && this.petType !== PetType.None && !this.noPet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomAvatarBaseComponent.prototype, "awardTypeVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.noFeatures && this.awardType !== AwardType.None && !this.noAward;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} path
     * @return {?}
     */
    CustomAvatarBaseComponent.prototype.urlFix = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return urlfix(path);
    };
    CustomAvatarBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kip-custom-avatar-base',
                    template: "<svg [attr.width]=\"width\" [attr.height]=\"height\" [attr.viewBox]=\"viewBox\" version='1.1'\r\n  xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' [ngClass]=\"svgClass\"\r\n  [style.width]=\"widthFull?'100%':''\">\r\n  <defs>\r\n    <circle [attr.id]=\"path1\" cx='120' cy='120' r='120' />\r\n    <path\r\n      d='M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z'\r\n      [attr.id]=\"path3\" />\r\n    <path\r\n      d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'\r\n      [attr.id]=\"path5\" />\r\n  </defs>\r\n  <g id='Avataaar' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' [attr.transform]=\"transform\">\r\n    <g transform='translate(-825.000000, -1100.000000)' id='Avataaar/Circle'>\r\n      <g transform='translate(825.000000, 1100.000000)'>\r\n        <g *ngIf=\"avatarStyle=='Circle'\" id='Circle' stroke-width='1' fill-rule='evenodd'\r\n          transform='translate(12.000000, 40.000000)'>\r\n          <mask [attr.id]=\"mask2\" fill='white'>\r\n            <use [attr.xlink:href]=\"'#' + path1\" />\r\n          </mask>\r\n          <use id='Circle-Background' fill='#E6E6E6' [attr.xlink:href]=\"'#' + path1\" />\r\n          <g id='Color/Palette/Blue-01' [attr.mask]=\"urlFix(mask2)\" [attr.fill]='backColor'>\r\n            <rect id='\uD83D\uDD8DColor' x='0' y='0' width='240' height='240' />\r\n          </g>\r\n        </g>\r\n        <mask *ngIf=\"avatarStyle=='Circle'\" [attr.id]=\"mask3\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <g id='Mask' />\r\n        <g id='Avataaar' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"avatarStyle=='Circle'?urlFix(mask3):''\">\r\n          <g id='Body' transform='translate(32.000000, 36.000000)'>\r\n            <mask id='mask-6' fill='white'>\r\n              <use [attr.xlink:href]=\"'#' + path5\" />\r\n            </mask>\r\n            <use [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path5\" />\r\n            <path\r\n              d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'\r\n              id='Neck-Shadow' fill-opacity='0.100000001' fill='#000000' mask='url(#mask-6)' />\r\n          </g>\r\n          <g *ngIf=\"!noFeatures\" kip-custom-avatar-clothes [clotheType]=\"clotheType\" [clotheColor]=\"clotheColor\"\r\n            [graphicType]=\"graphicType\" [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\" />\r\n          <g *ngIf=\"!noFeatures\" kip-custom-avatar-face [mouthType]=\"mouthType\" [eyeType]=\"eyeType\"\r\n            [eyebrowType]=\"eyebrowType\" [eyebrowColor]=\"eyebrowColor\" [noseType]=\"noseType\" />\r\n          <g *ngIf=\"!noFeatures\" kip-custom-avatar-top [topType]=\"topType\" [accessoriesType]=\"accessoriesType\"\r\n            [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n            [hatColor]=\"hatColor\" [accessoriesColor]=\"accessoriesColor\" />\r\n        </g>\r\n        <g *ngIf=\"petTypeVisible\" kip-custom-avatar-pet transform=\"scale(0.15) translate(0,1350)\" [petType]=\"petType\" />\r\n        <g *ngIf=\"awardTypeVisible\" kip-custom-avatar-award transform=\"scale(0.15) translate(1200,1350)\"\r\n          [awardType]=\"awardType\" [skinColor]=\"skinColor\" [clotheColor]=\"clotheColor\" [clotheColor2]=\"clotheColor2\" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
                }] }
    ];
    CustomAvatarBaseComponent.propDecorators = {
        width: [{ type: Input }],
        widthFull: [{ type: Input }],
        height: [{ type: Input }],
        transform: [{ type: Input }],
        viewBox: [{ type: Input }],
        noFeatures: [{ type: Input }],
        noPet: [{ type: Input }],
        noAward: [{ type: Input }],
        avatarStyle: [{ type: Input }],
        svgClass: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        clotheType: [{ type: Input }],
        graphicType: [{ type: Input }],
        clotheColor: [{ type: Input }],
        clotheColor2: [{ type: Input }],
        clotheColor3: [{ type: Input }],
        topType: [{ type: Input }],
        skinColor: [{ type: Input }],
        noseType: [{ type: Input }],
        mouthType: [{ type: Input }],
        eyeType: [{ type: Input }],
        eyebrowType: [{ type: Input }],
        eyebrowColor: [{ type: Input }],
        accessoriesType: [{ type: Input }],
        facialHairType: [{ type: Input }],
        facialHairColor: [{ type: Input }],
        hairColor: [{ type: Input }],
        petType: [{ type: Input }],
        awardType: [{ type: Input }],
        hatColor: [{ type: Input }],
        accessoriesColor: [{ type: Input }]
    };
    return CustomAvatarBaseComponent;
}());
export { CustomAvatarBaseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAvatarBaseComponent.prototype._backColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarBaseComponent.prototype._backgroundColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarBaseComponent.prototype._skinColor;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarBaseComponent.prototype._color;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.width;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.widthFull;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.height;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.transform;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.viewBox;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.noFeatures;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.noPet;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.noAward;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.avatarStyle;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.svgClass;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.clotheType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.graphicType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.clotheColor;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.clotheColor2;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.clotheColor3;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.topType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.noseType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.mouthType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.eyeType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.eyebrowType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.eyebrowColor;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.accessoriesType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.facialHairType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.facialHairColor;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.hairColor;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.petType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.awardType;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.hatColor;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.accessoriesColor;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.mask1;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.mask2;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.mask3;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.path1;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.path3;
    /** @type {?} */
    CustomAvatarBaseComponent.prototype.path5;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUN0RCxTQUFTLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUM5RCxVQUFVLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFDekUsUUFBUSxFQUFFLGdCQUFnQixFQUMzQixNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXhFO0lBQUE7UUFPVSxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBZXhCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFHZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR2QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixnQkFBVyxHQUFnQixXQUFXLENBQUMsV0FBVyxDQUFDO1FBc0duRCxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFD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OztJQUVoQixnREFDbUQ7O0lBRW5ELDZDQUNpQjs7SUFrQmpCLCtDQUN1Qjs7SUFFdkIsZ0RBQ3lCOztJQUV6QixnREFDeUI7O0lBRXpCLGlEQUMwQjs7SUFFMUIsaURBQzBCOztJQUUxQiw0Q0FDaUI7O0lBa0JqQiw2Q0FDbUI7O0lBRW5CLDhDQUNxQjs7SUFFckIsNENBQ2lCOztJQUVqQixnREFDeUI7O0lBRXpCLGlEQUN3Qjs7SUFFeEIsb0RBQ2lDOztJQUVqQyxtREFDK0I7O0lBRS9CLG9EQUMyQjs7SUFFM0IsOENBQ3FCOztJQUVyQiw0Q0FDaUI7O0lBTWpCLDhDQUNxQjs7SUFNckIsNkNBQ21COztJQUVuQixxREFDbUM7O0lBRW5DLDBDQUFxQzs7SUFDckMsMENBQXFDOztJQUNyQywwQ0FBcUM7O0lBQ3JDLDBDQUFxQzs7SUFDckMsMENBQXFDOztJQUNyQywwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQXZhdGFyU3R5bGUsIE5vc2VUeXBlLCBNb3V0aFR5cGUsIEV5ZVR5cGUsIEV5ZWJyb3dUeXBlLFxyXG4gIFNraW5Db2xvciwgQWNjZXNzb3JpZXNUeXBlLCBGYWNpYWxIYWlyVHlwZSwgSGFpckNvbG9yLCBUb3BUeXBlLFxyXG4gIENsb3RoZVR5cGUsIEJhY2tncm91bmRDb2xvciwgQ2xvdGhlQ29sb3IsIEdyYXBoaWNUeXBlLCBQZXRUeXBlLCBBd2FyZFR5cGUsXHJcbiAgSGF0Q29sb3IsIEFjY2Vzc29yaWVzQ29sb3JcclxufSBmcm9tICcuLi9vcHRpb25zJztcclxuaW1wb3J0IHsgcmFuZG9tSWQgfSBmcm9tICcuLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5pbXBvcnQgeyB1cmxmaXggfSBmcm9tICcuLi9oZWxwZXIvdXJsZml4JztcclxuaW1wb3J0IHsgYmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuLi9jb2xvcnMvYmFja2dyb3VuZC1jb2xvci10cmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IHNraW5Db2xvclRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vY29sb3JzL3NraW4tY29sb3ItdHJhbnNsYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdraXAtY3VzdG9tLWF2YXRhci1iYXNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21BdmF0YXJCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgcHJpdmF0ZSBfYmFja0NvbG9yID0gJyc7XHJcbiAgcHJpdmF0ZSBfYmFja2dyb3VuZENvbG9yOiBCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgcHJpdmF0ZSBfc2tpbkNvbG9yOiBTa2luQ29sb3I7XHJcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICB3aWR0aDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHdpZHRoRnVsbDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICB0cmFuc2Zvcm0gPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICB2aWV3Qm94ID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbm9GZWF0dXJlcyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vUGV0ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbm9Bd2FyZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGF2YXRhclN0eWxlOiBBdmF0YXJTdHlsZSA9IEF2YXRhclN0eWxlLlRyYW5zcGFyZW50O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHN2Z0NsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogQmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5fYmFja2dyb3VuZENvbG9yICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fYmFja0NvbG9yID0gYmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGJhY2tncm91bmRDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgYmFja0NvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JhY2tDb2xvcjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xvdGhlVHlwZTogQ2xvdGhlVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBncmFwaGljVHlwZTogR3JhcGhpY1R5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xvdGhlQ29sb3I6IENsb3RoZUNvbG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZUNvbG9yMjogQ2xvdGhlQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY2xvdGhlQ29sb3IzOiBDbG90aGVDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICB0b3BUeXBlOiBUb3BUeXBlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBza2luQ29sb3IodmFsdWU6IFNraW5Db2xvcikge1xyXG4gICAgaWYgKHRoaXMuX3NraW5Db2xvciAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fc2tpbkNvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2NvbG9yID0gc2tpbkNvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNraW5Db2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9za2luQ29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgY29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vc2VUeXBlOiBOb3NlVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBtb3V0aFR5cGU6IE1vdXRoVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBleWVUeXBlOiBFeWVUeXBlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV5ZWJyb3dUeXBlOiBFeWVicm93VHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBleWVicm93Q29sb3I6IEhhaXJDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBhY2Nlc3Nvcmllc1R5cGU6IEFjY2Vzc29yaWVzVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBmYWNpYWxIYWlyVHlwZTogRmFjaWFsSGFpclR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmFjaWFsSGFpckNvbG9yOiBIYWlyQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGFpckNvbG9yOiBIYWlyQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGV0VHlwZTogUGV0VHlwZTtcclxuXHJcbiAgZ2V0IHBldFR5cGVWaXNpYmxlKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLm5vRmVhdHVyZXMgJiYgdGhpcy5wZXRUeXBlICE9PSBQZXRUeXBlLk5vbmUgJiYgIXRoaXMubm9QZXQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGF3YXJkVHlwZTogQXdhcmRUeXBlO1xyXG5cclxuICBnZXQgYXdhcmRUeXBlVmlzaWJsZSgpIHtcclxuICAgIHJldHVybiAhdGhpcy5ub0ZlYXR1cmVzICYmIHRoaXMuYXdhcmRUeXBlICE9PSBBd2FyZFR5cGUuTm9uZSAmJiAhdGhpcy5ub0F3YXJkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBoYXRDb2xvcjogSGF0Q29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYWNjZXNzb3JpZXNDb2xvcjogQWNjZXNzb3JpZXNDb2xvcjtcclxuXHJcbiAgbWFzazE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIG1hc2syOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBtYXNrMzogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgcGF0aDE6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG4gIHBhdGgzOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoNTogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcblxyXG4gIHVybEZpeChwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB1cmxmaXgocGF0aCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==