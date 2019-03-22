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
export class CustomAvatarBaseComponent {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set backgroundColor(value) {
        if (this._backgroundColor !== value) {
            this._backgroundColor = value;
            this._backColor = backgroundColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get backgroundColor() {
        return this._backgroundColor;
    }
    /**
     * @return {?}
     */
    get backColor() {
        return this._backColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set skinColor(value) {
        if (this._skinColor !== value) {
            this._skinColor = value;
            this._color = skinColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get skinColor() {
        return this._skinColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @return {?}
     */
    get petTypeVisible() {
        return !this.noFeatures && this.petType !== PetType.None && !this.noPet;
    }
    /**
     * @return {?}
     */
    get awardTypeVisible() {
        return !this.noFeatures && this.awardType !== AwardType.None && !this.noAward;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWF2YXRhYWFycy1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1hdmF0YXIvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUN0RCxTQUFTLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUM5RCxVQUFVLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFDekUsUUFBUSxFQUFFLGdCQUFnQixFQUMzQixNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT3hFLE1BQU0sT0FBTyx5QkFBeUI7SUFMdEM7UUFPVSxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBZXhCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFHZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR2QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixnQkFBVyxHQUFnQixXQUFXLENBQUMsV0FBVyxDQUFDO1FBc0duRCxVQUFLLEdBQVcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLFVBQUssR0FBVyxRQUFRLENBQUMs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SUFFMUIsNENBQ2lCOztJQWtCakIsNkNBQ21COztJQUVuQiw4Q0FDcUI7O0lBRXJCLDRDQUNpQjs7SUFFakIsZ0RBQ3lCOztJQUV6QixpREFDd0I7O0lBRXhCLG9EQUNpQzs7SUFFakMsbURBQytCOztJQUUvQixvREFDMkI7O0lBRTNCLDhDQUNxQjs7SUFFckIsNENBQ2lCOztJQU1qQiw4Q0FDcUI7O0lBTXJCLDZDQUNtQjs7SUFFbkIscURBQ21DOztJQUVuQywwQ0FBcUM7O0lBQ3JDLDBDQUFxQzs7SUFDckMsMENBQXFDOztJQUNyQywwQ0FBcUM7O0lBQ3JDLDBDQUFxQzs7SUFDckMsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEF2YXRhclN0eWxlLCBOb3NlVHlwZSwgTW91dGhUeXBlLCBFeWVUeXBlLCBFeWVicm93VHlwZSxcclxuICBTa2luQ29sb3IsIEFjY2Vzc29yaWVzVHlwZSwgRmFjaWFsSGFpclR5cGUsIEhhaXJDb2xvciwgVG9wVHlwZSxcclxuICBDbG90aGVUeXBlLCBCYWNrZ3JvdW5kQ29sb3IsIENsb3RoZUNvbG9yLCBHcmFwaGljVHlwZSwgUGV0VHlwZSwgQXdhcmRUeXBlLFxyXG4gIEhhdENvbG9yLCBBY2Nlc3Nvcmllc0NvbG9yXHJcbn0gZnJvbSAnLi4vb3B0aW9ucyc7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi4vaGVscGVyL3JhbmRvbWlkJztcclxuaW1wb3J0IHsgdXJsZml4IH0gZnJvbSAnLi4vaGVscGVyL3VybGZpeCc7XHJcbmltcG9ydCB7IGJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vY29sb3JzL2JhY2tncm91bmQtY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBza2luQ29sb3JUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2NvbG9ycy9za2luLWNvbG9yLXRyYW5zbGF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2lwLWN1c3RvbS1hdmF0YXItYmFzZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F2YXRhci5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gIHByaXZhdGUgX2JhY2tDb2xvciA9ICcnO1xyXG4gIHByaXZhdGUgX2JhY2tncm91bmRDb2xvcjogQmFja2dyb3VuZENvbG9yO1xyXG4gIHByaXZhdGUgX3NraW5Db2xvcjogU2tpbkNvbG9yO1xyXG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgd2lkdGg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICB3aWR0aEZ1bGw6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdHJhbnNmb3JtID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdmlld0JveCA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vRmVhdHVyZXMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBub1BldCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vQXdhcmQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBhdmF0YXJTdHlsZTogQXZhdGFyU3R5bGUgPSBBdmF0YXJTdHlsZS5UcmFuc3BhcmVudDtcclxuXHJcbiAgQElucHV0KClcclxuICBzdmdDbGFzczogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBiYWNrZ3JvdW5kQ29sb3IodmFsdWU6IEJhY2tncm91bmRDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2JhY2tncm91bmRDb2xvciAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuX2JhY2tDb2xvciA9IGJhY2tncm91bmRDb2xvclRyYW5zbGF0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBiYWNrZ3JvdW5kQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJhY2tDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9iYWNrQ29sb3I7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZVR5cGU6IENsb3RoZVR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ3JhcGhpY1R5cGU6IEdyYXBoaWNUeXBlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZUNvbG9yOiBDbG90aGVDb2xvcjtcclxuXHJcbiAgQElucHV0KClcclxuICBjbG90aGVDb2xvcjI6IENsb3RoZUNvbG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNsb3RoZUNvbG9yMzogQ2xvdGhlQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdG9wVHlwZTogVG9wVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2tpbkNvbG9yKHZhbHVlOiBTa2luQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9za2luQ29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3NraW5Db2xvciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9jb2xvciA9IHNraW5Db2xvclRyYW5zbGF0aW9uKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBza2luQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2tpbkNvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBub3NlVHlwZTogTm9zZVR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbW91dGhUeXBlOiBNb3V0aFR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXllVHlwZTogRXllVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBleWVicm93VHlwZTogRXllYnJvd1R5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXllYnJvd0NvbG9yOiBIYWlyQ29sb3I7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYWNjZXNzb3JpZXNUeXBlOiBBY2Nlc3Nvcmllc1R5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZmFjaWFsSGFpclR5cGU6IEZhY2lhbEhhaXJUeXBlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGZhY2lhbEhhaXJDb2xvcjogSGFpckNvbG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGhhaXJDb2xvcjogSGFpckNvbG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHBldFR5cGU6IFBldFR5cGU7XHJcblxyXG4gIGdldCBwZXRUeXBlVmlzaWJsZSgpIHtcclxuICAgIHJldHVybiAhdGhpcy5ub0ZlYXR1cmVzICYmIHRoaXMucGV0VHlwZSAhPT0gUGV0VHlwZS5Ob25lICYmICF0aGlzLm5vUGV0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBhd2FyZFR5cGU6IEF3YXJkVHlwZTtcclxuXHJcbiAgZ2V0IGF3YXJkVHlwZVZpc2libGUoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMubm9GZWF0dXJlcyAmJiB0aGlzLmF3YXJkVHlwZSAhPT0gQXdhcmRUeXBlLk5vbmUgJiYgIXRoaXMubm9Bd2FyZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaGF0Q29sb3I6IEhhdENvbG9yO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGFjY2Vzc29yaWVzQ29sb3I6IEFjY2Vzc29yaWVzQ29sb3I7XHJcblxyXG4gIG1hc2sxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLW1hc2snKTtcclxuICBtYXNrMjogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1tYXNrJyk7XHJcbiAgbWFzazM6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtbWFzaycpO1xyXG4gIHBhdGgxOiBzdHJpbmcgPSByYW5kb21JZCgna2lwLXBhdGgnKTtcclxuICBwYXRoMzogc3RyaW5nID0gcmFuZG9tSWQoJ2tpcC1wYXRoJyk7XHJcbiAgcGF0aDU6IHN0cmluZyA9IHJhbmRvbUlkKCdraXAtcGF0aCcpO1xyXG5cclxuICB1cmxGaXgocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdXJsZml4KHBhdGgpO1xyXG4gIH1cclxufVxyXG4iXX0=