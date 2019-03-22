/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:forin */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AvatarStyle, TopType, AccessoriesType, HairColor, FacialHairType, ClotheType, ClotheColor, EyeType, EyebrowType, MouthType, SkinColor, BackgroundColor, GraphicType, PetType, AwardType, HatColor, AccessoriesColor, NoseType } from './options';
import { accessoriesColorTranslation } from './colors/accessories-color-translation';
import { hairColorTranslation } from './colors/hair-color-translation';
import { skinColorTranslation } from './colors/skin-color-translation';
import { clotheColorTranslation } from './colors/clothe-color-translation';
import { backgroundColorTranslation } from './colors/background-color-translation';
import { hatColorTranslation } from './colors/hat-color-translation';
import { randomId } from './helper/randomid';
/**
 * @record
 */
export function KeyValue() { }
if (false) {
    /** @type {?} */
    KeyValue.prototype.value;
    /** @type {?} */
    KeyValue.prototype.label;
}
/**
 * @record
 */
export function SaveAvatar() { }
if (false) {
    /** @type {?} */
    SaveAvatar.prototype.avatarSelection;
    /** @type {?} */
    SaveAvatar.prototype.svg;
}
/**
 * @record
 */
export function AvatarText() { }
if (false) {
    /** @type {?} */
    AvatarText.prototype.save;
    /** @type {?} */
    AvatarText.prototype.random;
    /** @type {?} */
    AvatarText.prototype.revert;
    /** @type {?} */
    AvatarText.prototype.svg;
    /** @type {?} */
    AvatarText.prototype.background;
    /** @type {?} */
    AvatarText.prototype.backgroundColor;
    /** @type {?} */
    AvatarText.prototype.eyes;
    /** @type {?} */
    AvatarText.prototype.eyebrows;
    /** @type {?} */
    AvatarText.prototype.eyebrowColors;
    /** @type {?} */
    AvatarText.prototype.accessories;
    /** @type {?} */
    AvatarText.prototype.accessoryColors;
    /** @type {?} */
    AvatarText.prototype.facialHairs;
    /** @type {?} */
    AvatarText.prototype.facialHairColors;
    /** @type {?} */
    AvatarText.prototype.noses;
    /** @type {?} */
    AvatarText.prototype.mouths;
    /** @type {?} */
    AvatarText.prototype.pets;
    /** @type {?} */
    AvatarText.prototype.awards;
    /** @type {?} */
    AvatarText.prototype.hatsAndHairStyles;
    /** @type {?} */
    AvatarText.prototype.hairColors;
    /** @type {?} */
    AvatarText.prototype.hatColors;
    /** @type {?} */
    AvatarText.prototype.clothes;
    /** @type {?} */
    AvatarText.prototype.clotheColors1;
    /** @type {?} */
    AvatarText.prototype.clotheColors2;
    /** @type {?} */
    AvatarText.prototype.clotheColors3;
    /** @type {?} */
    AvatarText.prototype.graphics;
    /** @type {?} */
    AvatarText.prototype.skinColors;
}
/** @enum {number} */
const tabIndexes = {
    background: 1,
    top: 2,
    eyes: 3,
    eyebrows: 4,
    accessory: 5,
    nose: 6,
    mouth: 7,
    facialHair: 8,
    clothes: 9,
    pet: 10,
    award: 11,
};
export { tabIndexes };
tabIndexes[tabIndexes.background] = 'background';
tabIndexes[tabIndexes.top] = 'top';
tabIndexes[tabIndexes.eyes] = 'eyes';
tabIndexes[tabIndexes.eyebrows] = 'eyebrows';
tabIndexes[tabIndexes.accessory] = 'accessory';
tabIndexes[tabIndexes.nose] = 'nose';
tabIndexes[tabIndexes.mouth] = 'mouth';
tabIndexes[tabIndexes.facialHair] = 'facialHair';
tabIndexes[tabIndexes.clothes] = 'clothes';
tabIndexes[tabIndexes.pet] = 'pet';
tabIndexes[tabIndexes.award] = 'award';
export class CustomAvatarComponent {
    /**
     * @param {?} changeDetectorRef
     */
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._currentAvatar = {
            avatarStyle: AvatarStyle.Transparent,
            topType: TopType.LongHairFro,
            accessoriesType: AccessoriesType.Prescription01,
            hairColor: HairColor.SilverGray,
            facialHairType: FacialHairType.Blank,
            facialHairColor: HairColor.Black,
            eyebrowColor: HairColor.SilverGray,
            clotheType: ClotheType.GraphicShirt,
            clotheColor: ClotheColor.PastelOrange,
            clotheColor2: ClotheColor.Blue01,
            clotheColor3: ClotheColor.Black,
            eyeType: EyeType.Cry,
            eyebrowType: EyebrowType.UpDownNatural,
            mouthType: MouthType.Serious,
            skinColor: SkinColor.Brown,
            backgroundColor: BackgroundColor.ColorA,
            graphicType: GraphicType.Bat,
            petType: PetType.None,
            awardType: AwardType.None,
            hatColor: HatColor.Black,
            accessoriesColor: AccessoriesColor.Black,
            noseType: NoseType.Default
        };
        this.tabIndex = tabIndexes.background;
        this.tabIndexes = tabIndexes;
        this.id = randomId('avatar');
        this.svgId = randomId('svgId');
        // All the texts for avatar localization
        this.avatarText = {
            random: 'Random',
            save: 'Save',
            revert: 'Revert',
            svg: 'Svg',
            background: 'Backgrounds',
            backgroundColor: 'Background colours',
            eyes: 'Eyes',
            eyebrows: 'Eyebrows',
            eyebrowColors: 'Eyebrow colours',
            accessories: 'Accessories',
            accessoryColors: 'Accessory colours',
            facialHairs: 'Facial hair',
            facialHairColors: 'Facial hair colours',
            noses: 'Noses',
            mouths: 'Mouths',
            pets: 'Pets',
            awards: 'Awards',
            hatsAndHairStyles: 'Hats/Hair Styles',
            hairColors: 'Hair colours',
            hatColors: 'Hat colours',
            clothes: 'Clothes',
            clotheColors1: 'Clothe colours',
            clotheColors2: 'Clothe colours (Secondary)',
            clotheColors3: 'Clothe colours (Tertiary)',
            graphics: 'Graphics',
            skinColors: 'Skin colours'
        };
        // Controls whether noses can be selected
        this.noNose = true;
        // Controls whether pets can be selected
        this.noPet = true;
        // Controls whether awards can be selected
        this.noAward = true;
        // Controls whether an svg output button is available
        this.noSvgOutput = true;
        // Controls whether a random button is available
        this.noRandom = false;
        // Controls whethter saving is available
        this.noSave = false;
        // Controls whether facial hair is available (for kids/females etc)
        this.noFacialHair = false;
        // Controls whether the circle background and setting color for it is available
        this.noColorBackground = false;
        this.avatarSaved = new EventEmitter();
        // Optional parameter allowing choices to be turned off (for example may not want vomit as a choice for mouth options)
        this.avatarExclusion = {
            mouthTypes: [MouthType.Vomit],
            graphicTypes: [GraphicType.Hola],
            topTypes: [TopType.Eyepatch],
            eyeTypes: [EyeType.Dizzy]
        };
        this.refreshAvatar();
    }
    // Current Avatar options
    /**
     * @param {?} value
     * @return {?}
     */
    set avatarSelection(value) {
        if (value !== null) {
            this._currentAvatar = {
                avatarStyle: this.noColorBackground ? AvatarStyle.Transparent : value.avatarStyle,
                backgroundColor: value.backgroundColor,
                topType: value.topType,
                hairColor: value.hairColor,
                facialHairType: this.noFacialHair ? FacialHairType.Blank : value.facialHairType,
                facialHairColor: value.facialHairColor,
                clotheType: value.clotheType,
                graphicType: value.graphicType,
                clotheColor: value.clotheColor,
                clotheColor2: value.clotheColor2,
                clotheColor3: value.clotheColor3,
                eyeType: value.eyeType,
                eyebrowType: value.eyebrowType,
                eyebrowColor: value.eyebrowColor,
                mouthType: value.mouthType,
                skinColor: value.skinColor,
                petType: value.petType,
                awardType: value.awardType,
                hatColor: value.hatColor,
                accessoriesColor: value.accessoriesColor,
                accessoriesType: value.accessoriesType,
                noseType: value.noseType ? value.noseType : this._currentAvatar.noseType
            };
            this._lastSaved = value;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    get avatarSelection() {
        return this._currentAvatar;
    }
    // #region Background Color
    /**
     * @param {?} value
     * @return {?}
     */
    set backgroundColor(value) {
        if (this._currentAvatar.backgroundColor !== value) {
            this._currentAvatar.backgroundColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get backgroundColor() {
        return this._currentAvatar.backgroundColor;
    }
    /**
     * @return {?}
     */
    get backgroundColors() {
        return this.getKeyValues(BackgroundColor);
    }
    // #endregion
    // #region Avatar Style
    /**
     * @param {?} value
     * @return {?}
     */
    set avatarStyle(value) {
        if (this._currentAvatar.avatarStyle !== value) {
            this._currentAvatar.avatarStyle = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get avatarStyle() {
        return this._currentAvatar.avatarStyle;
    }
    /**
     * @return {?}
     */
    get avatarStyles() {
        return this.getKeyValuesWithExclusions(AvatarStyle, this.avatarExclusion &&
            this.avatarExclusion.avatarStyles ? this.avatarExclusion.avatarStyles : []);
    }
    // #endregion
    // #region Top Type
    /**
     * @param {?} value
     * @return {?}
     */
    set topType(value) {
        if (this._currentAvatar.topType !== value) {
            this._currentAvatar.topType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get topType() {
        return this._currentAvatar.topType;
    }
    /**
     * @return {?}
     */
    get topTypes() {
        return this.getKeyValuesWithExclusions(TopType, this.avatarExclusion &&
            this.avatarExclusion.topTypes ? this.avatarExclusion.topTypes : []);
    }
    // #endregion
    // #region Accessories Type and Color
    /**
     * @param {?} value
     * @return {?}
     */
    set accessoriesType(value) {
        if (this._currentAvatar.accessoriesType !== value) {
            this._currentAvatar.accessoriesType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get accessoriesType() {
        return this._currentAvatar.accessoriesType;
    }
    /**
     * @return {?}
     */
    get accessoriesTypes() {
        return this.getKeyValuesWithExclusions(AccessoriesType, this.avatarExclusion &&
            this.avatarExclusion.accessoriesTypes ? this.avatarExclusion.accessoriesTypes : []);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set accessoriesColor(value) {
        if (this._currentAvatar.accessoriesColor !== value) {
            this._currentAvatar.accessoriesColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get accessoriesColor() {
        return this._currentAvatar.accessoriesColor;
    }
    /**
     * @return {?}
     */
    get accessoriesColors() {
        return this.getKeyValues(AccessoriesColor);
    }
    // #endregion
    // #region Hair Color
    /**
     * @param {?} value
     * @return {?}
     */
    set hairColor(value) {
        if (this._currentAvatar.hairColor !== value) {
            this._currentAvatar.hairColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get hairColor() {
        return this._currentAvatar.hairColor;
    }
    // #endregion
    // #region Hat Color
    /**
     * @return {?}
     */
    get hairColors() {
        return this.getKeyValues(HairColor);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hatColor(value) {
        if (this._currentAvatar.hatColor !== value) {
            this._currentAvatar.hatColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get hatColor() {
        return this._currentAvatar.hatColor;
    }
    /**
     * @return {?}
     */
    get hatColors() {
        return this.getKeyValues(HatColor);
    }
    /**
     * @return {?}
     */
    get hatColorVisible() {
        return this._currentAvatar.topType === TopType.Turban ||
            this._currentAvatar.topType === TopType.WinterHat1 ||
            this._currentAvatar.topType === TopType.WinterHat2 ||
            this._currentAvatar.topType === TopType.WinterHat3 ||
            this._currentAvatar.topType === TopType.WinterHat4 ||
            this._currentAvatar.topType === TopType.Eyepatch ||
            this._currentAvatar.topType === TopType.Hat ||
            this._currentAvatar.topType === TopType.Hijab;
    }
    // #endregion
    // #region Facial Hair Type and Color
    /**
     * @param {?} value
     * @return {?}
     */
    set facialHairType(value) {
        if (this._currentAvatar.facialHairType !== value) {
            this._currentAvatar.facialHairType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get facialHairType() {
        return this._currentAvatar.facialHairType;
    }
    /**
     * @return {?}
     */
    get facialHairTypes() {
        return this.getKeyValuesWithExclusions(FacialHairType, this.avatarExclusion &&
            this.avatarExclusion.facialHairTypes ? this.avatarExclusion.facialHairTypes : []);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set facialHairColor(value) {
        if (this._currentAvatar.facialHairColor !== value) {
            this._currentAvatar.facialHairColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get facialHairColor() {
        return this._currentAvatar.facialHairColor;
    }
    // #endregion
    // #region Clothe Type, Colors and Graphics
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheType(value) {
        if (this._currentAvatar.clotheType !== value) {
            this._currentAvatar.clotheType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get clotheType() {
        return this._currentAvatar.clotheType;
    }
    /**
     * @return {?}
     */
    get clotheTypes() {
        return this.getKeyValuesWithExclusions(ClotheType, this.avatarExclusion &&
            this.avatarExclusion.clotheTypes ? this.avatarExclusion.clotheTypes : []);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set graphicType(value) {
        if (this._currentAvatar.graphicType !== value) {
            this._currentAvatar.graphicType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get graphicType() {
        return this._currentAvatar.graphicType;
    }
    /**
     * @return {?}
     */
    get graphicTypes() {
        return this.getKeyValuesWithExclusions(GraphicType, this.avatarExclusion &&
            this.avatarExclusion.graphicTypes ? this.avatarExclusion.graphicTypes : []);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor(value) {
        if (this._currentAvatar.clotheColor !== value) {
            this._currentAvatar.clotheColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get clotheColor() {
        return this._currentAvatar.clotheColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor2(value) {
        if (this._currentAvatar.clotheColor2 !== value) {
            this._currentAvatar.clotheColor2 = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get clotheColor2() {
        return this._currentAvatar.clotheColor2;
    }
    /**
     * @return {?}
     */
    get clotheColor2Visible() {
        return !(this.clotheType === ClotheType.ShirtScoopNeck || this.clotheType === ClotheType.ShirtVNeck);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor3(value) {
        if (this._currentAvatar.clotheColor3 !== value) {
            this._currentAvatar.clotheColor3 = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get clotheColor3() {
        return this._currentAvatar.clotheColor3;
    }
    /**
     * @return {?}
     */
    get clotheColor3Visible() {
        return this.clotheType === ClotheType.BlazerShirt || this.clotheType === ClotheType.BlazerSweater;
    }
    /**
     * @return {?}
     */
    get clotheColors() {
        return this.getKeyValues(ClotheColor);
    }
    /**
     * @return {?}
     */
    get clotheColors2() {
        return this.getKeyValues(ClotheColor).filter((/**
         * @param {?} s
         * @return {?}
         */
        s => this.clotheColor !== s.value));
    }
    /**
     * @return {?}
     */
    get clotheColors3() {
        return this.getKeyValues(ClotheColor).filter((/**
         * @param {?} s
         * @return {?}
         */
        s => this.clotheColor !== s.value && this.clotheColor2 !== s.value));
    }
    // #endregion
    // #region Eye Types
    /**
     * @param {?} value
     * @return {?}
     */
    set eyeType(value) {
        if (this._currentAvatar.eyeType !== value) {
            this._currentAvatar.eyeType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get eyeType() {
        return this._currentAvatar.eyeType;
    }
    /**
     * @return {?}
     */
    get eyeTypes() {
        return this.getKeyValuesWithExclusions(EyeType, this.avatarExclusion &&
            this.avatarExclusion.eyeTypes ? this.avatarExclusion.eyeTypes : []);
    }
    // #endregion
    // #region Nose Type
    /**
     * @param {?} value
     * @return {?}
     */
    set noseType(value) {
        if (this._currentAvatar.noseType !== value) {
            this._currentAvatar.noseType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get noseType() {
        return this._currentAvatar.noseType;
    }
    /**
     * @return {?}
     */
    get noseTypes() {
        return this.getKeyValuesWithExclusions(NoseType, this.avatarExclusion &&
            this.avatarExclusion.noseTypes ? this.avatarExclusion.noseTypes : []);
    }
    // #endregion
    // #region Eyebrow Type and Color
    /**
     * @param {?} value
     * @return {?}
     */
    set eyebrowType(value) {
        if (this._currentAvatar.eyebrowType !== value) {
            this._currentAvatar.eyebrowType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get eyebrowType() {
        return this._currentAvatar.eyebrowType;
    }
    /**
     * @return {?}
     */
    get eyebrowTypes() {
        return this.getKeyValuesWithExclusions(EyebrowType, this.avatarExclusion &&
            this.avatarExclusion.eyebrowTypes ? this.avatarExclusion.eyebrowTypes : []);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set eyebrowColor(value) {
        if (this._currentAvatar.eyebrowColor !== value) {
            this._currentAvatar.eyebrowColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get eyebrowColor() {
        return this._currentAvatar.eyebrowColor;
    }
    /**
     * @return {?}
     */
    get eyebrowColors() {
        return this.getKeyValues(HairColor);
    }
    // #endregion
    // #region Mouth Types
    /**
     * @param {?} value
     * @return {?}
     */
    set mouthType(value) {
        if (this._currentAvatar.mouthType !== value) {
            this._currentAvatar.mouthType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get mouthType() {
        return this._currentAvatar.mouthType;
    }
    /**
     * @return {?}
     */
    get mouthTypes() {
        return this.getKeyValuesWithExclusions(MouthType, this.avatarExclusion &&
            this.avatarExclusion.mouthTypes ? this.avatarExclusion.mouthTypes : []);
    }
    // #endregion
    // #region Pet Types
    /**
     * @param {?} value
     * @return {?}
     */
    set petType(value) {
        if (this._currentAvatar.petType !== value) {
            this._currentAvatar.petType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get petType() {
        return this._currentAvatar.petType;
    }
    /**
     * @return {?}
     */
    get petTypes() {
        return this.getKeyValuesWithExclusions(PetType, this.avatarExclusion &&
            this.avatarExclusion.petTypes ? this.avatarExclusion.petTypes : []);
    }
    // #endregion
    // #region Award Type
    /**
     * @param {?} value
     * @return {?}
     */
    set awardType(value) {
        if (this._currentAvatar.awardType !== value) {
            this._currentAvatar.awardType = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get awardType() {
        return this._currentAvatar.awardType;
    }
    /**
     * @return {?}
     */
    get awardTypes() {
        return this.getKeyValuesWithExclusions(AwardType, this.avatarExclusion &&
            this.avatarExclusion.awardTypes ? this.avatarExclusion.awardTypes : []);
    }
    // #endregion
    // #region Skin Colors
    /**
     * @param {?} value
     * @return {?}
     */
    set skinColor(value) {
        if (this._currentAvatar.skinColor !== value) {
            this._currentAvatar.skinColor = value;
            this.refreshAvatar();
        }
    }
    /**
     * @return {?}
     */
    get skinColor() {
        return this._currentAvatar.skinColor;
    }
    /**
     * @return {?}
     */
    get skinColors() {
        return this.getKeyValues(SkinColor);
    }
    // #endregion
    // #region Color Converters
    /**
     * @param {?} value
     * @return {?}
     */
    accessoriesColorConvert(value) {
        return accessoriesColorTranslation(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    hairColorConvert(value) {
        return hairColorTranslation(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    skinColorConvert(value) {
        return skinColorTranslation(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    clotheColorConvert(value) {
        return clotheColorTranslation(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    backgroundColorConvert(value) {
        return backgroundColorTranslation(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    hatColorConvert(value) {
        return hatColorTranslation(value);
    }
    // #endregion
    /**
     * @return {?}
     */
    selectSvg() {
        /** @type {?} */
        const element = (/** @type {?} */ (document.getElementById(this.svgId)));
        if (element !== null) {
            element.style.display = '';
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (element !== null) {
                element.select();
                document.execCommand('copy');
                element.style.display = 'none';
            }
        }), 100);
    }
    /**
     * @return {?}
     */
    get saveAvatarEnabled() {
        if (this._lastSaved === undefined) {
            return true;
        }
        if (this.isEqual(this._currentAvatar, this._lastSaved)) {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    saveAvatar() {
        if (this.svg !== '') {
            /** @type {?} */
            const saveAvatar = {
                avatarStyle: this.avatarSelection.avatarStyle,
                backgroundColor: this.avatarSelection.backgroundColor,
                topType: this.avatarSelection.topType,
                hairColor: this.avatarSelection.hairColor,
                facialHairType: this.avatarSelection.facialHairType,
                facialHairColor: this.avatarSelection.facialHairColor,
                clotheType: this.avatarSelection.clotheType,
                graphicType: this.avatarSelection.graphicType,
                clotheColor: this.avatarSelection.clotheColor,
                clotheColor2: this.avatarSelection.clotheColor2,
                clotheColor3: this.avatarSelection.clotheColor3,
                eyeType: this.avatarSelection.eyeType,
                eyebrowType: this.avatarSelection.eyebrowType,
                eyebrowColor: this.avatarSelection.eyebrowColor,
                mouthType: this.avatarSelection.mouthType,
                skinColor: this.avatarSelection.skinColor,
                petType: this.avatarSelection.petType,
                awardType: this.avatarSelection.awardType,
                hatColor: this.avatarSelection.hatColor,
                accessoriesColor: this.avatarSelection.accessoriesColor,
                accessoriesType: this.avatarSelection.accessoriesType,
                noseType: this.avatarSelection.noseType
            };
            this.avatarSaved.emit({ avatarSelection: saveAvatar, svg: this.svg });
            this._lastSaved = saveAvatar;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    revert() {
        if (this._lastSaved) {
            this._currentAvatar = {
                avatarStyle: this._lastSaved.avatarStyle,
                backgroundColor: this._lastSaved.backgroundColor,
                topType: this._lastSaved.topType,
                hairColor: this._lastSaved.hairColor,
                facialHairType: this._lastSaved.facialHairType,
                facialHairColor: this._lastSaved.facialHairColor,
                clotheType: this._lastSaved.clotheType,
                graphicType: this._lastSaved.graphicType,
                clotheColor: this._lastSaved.clotheColor,
                clotheColor2: this._lastSaved.clotheColor2,
                clotheColor3: this._lastSaved.clotheColor3,
                eyeType: this._lastSaved.eyeType,
                eyebrowType: this._lastSaved.eyebrowType,
                eyebrowColor: this._lastSaved.eyebrowColor,
                mouthType: this._lastSaved.mouthType,
                skinColor: this._lastSaved.skinColor,
                petType: this._lastSaved.petType,
                awardType: this._lastSaved.awardType,
                hatColor: this._lastSaved.hatColor,
                accessoriesColor: this._lastSaved.accessoriesColor,
                accessoriesType: this._lastSaved.accessoriesType,
                noseType: this._lastSaved.noseType
            };
        }
    }
    /**
     * @return {?}
     */
    randomAvatar() {
        if (!this.noColorBackground) {
            this._currentAvatar.avatarStyle = this.randomEnumValueWithExclusions(AvatarStyle, this.avatarStyles);
            this._currentAvatar.backgroundColor = this.randomEnumValue(BackgroundColor);
        }
        this._currentAvatar.topType = this.randomEnumValueWithExclusions(TopType, this.topTypes);
        this._currentAvatar.hairColor = this.randomEnumValue(HairColor);
        if (!this.noFacialHair) {
            this._currentAvatar.facialHairType = this.randomEnumValueWithExclusions(FacialHairType, this.facialHairTypes);
            this._currentAvatar.facialHairColor = this.randomEnumValue(HairColor);
        }
        this._currentAvatar.clotheType = this.randomEnumValueWithExclusions(ClotheType, this.clotheTypes);
        this._currentAvatar.graphicType = this.randomEnumValueWithExclusions(GraphicType, this.graphicTypes);
        this._currentAvatar.clotheColor = this.randomEnumValue(ClotheColor);
        this._currentAvatar.clotheColor2 = this.randomEnumValue(ClotheColor);
        this._currentAvatar.clotheColor3 = this.randomEnumValue(ClotheColor);
        this._currentAvatar.eyeType = this.randomEnumValueWithExclusions(EyeType, this.eyeTypes);
        this._currentAvatar.eyebrowType = this.randomEnumValueWithExclusions(EyebrowType, this.eyebrowTypes);
        this._currentAvatar.eyebrowColor = this.randomEnumValue(HairColor);
        this._currentAvatar.mouthType = this.randomEnumValueWithExclusions(MouthType, this.mouthTypes);
        this._currentAvatar.skinColor = this.randomEnumValue(SkinColor);
        this._currentAvatar.petType = this.randomEnumValueWithExclusions(PetType, this.petTypes);
        this._currentAvatar.awardType = this.randomEnumValueWithExclusions(AwardType, this.awardTypes);
        this._currentAvatar.hatColor = this.randomEnumValue(HatColor);
        this._currentAvatar.accessoriesType = this.randomEnumValueWithExclusions(AccessoriesType, this.accessoriesTypes);
        this._currentAvatar.accessoriesColor = this.randomEnumValue(AccessoriesColor);
        if (!this.noNose) {
            this._currentAvatar.noseType = this.randomEnumValueWithExclusions(NoseType, this.noseTypes);
        }
        this.refreshAvatar();
    }
    /**
     * @private
     * @param {?} objA
     * @param {?} objB
     * @return {?}
     */
    isEqual(objA, objB) {
        // Create arrays of property names
        /** @type {?} */
        const aProps = Object.getOwnPropertyNames(objA);
        /** @type {?} */
        const bProps = Object.getOwnPropertyNames(objB);
        // If count of properties is different,
        // objects are not equivalent
        if (aProps.length !== bProps.length) {
            return false;
        }
        for (let i = 0; i < aProps.length; i++) {
            /** @type {?} */
            const propName = aProps[i];
            // If values of same property are not equal,
            // objects are not equivalent
            if (objA[propName] !== objB[propName]) {
                return false;
            }
        }
        // If we made it this far, objects
        // are considered equivalent
        return true;
    }
    /**
     * @private
     * @template T
     * @param {?} object
     * @return {?}
     */
    randomKey(object) {
        /** @type {?} */
        const arrayValues = Object.keys(object);
        /** @type {?} */
        const arrayValue = arrayValues[Math.floor(Math.random() * arrayValues.length)];
        return object[arrayValue];
    }
    /**
     * @private
     * @template T
     * @param {?} enumObject
     * @return {?}
     */
    randomEnumValue(enumObject) {
        return enumObject[this.randomKey(enumObject)];
    }
    /**
     * @private
     * @template T
     * @param {?} enumObject
     * @param {?} values
     * @return {?}
     */
    randomEnumValueWithExclusions(enumObject, values) {
        /** @type {?} */
        const value = values[Math.floor(Math.random() * values.length)];
        return enumObject[value.value];
    }
    /**
     * @private
     * @template T
     * @param {?} enumObject
     * @return {?}
     */
    getKeyValues(enumObject) {
        return Object.keys(enumObject).map((/**
         * @param {?} key
         * @return {?}
         */
        key => ({ value: key, label: enumObject[key] })));
    }
    /**
     * @private
     * @template T
     * @param {?} enumObject
     * @param {?} excludedValues
     * @return {?}
     */
    getKeyValuesWithExclusions(enumObject, excludedValues) {
        return Object.keys(enumObject).filter((/**
         * @param {?} s
         * @return {?}
         */
        s => excludedValues.indexOf(s) === -1)).map((/**
         * @param {?} key
         * @return {?}
         */
        key => ({ value: key, label: enumObject[key] })));
    }
    /**
     * @private
     * @return {?}
     */
    refreshAvatar() {
        /** @type {?} */
        const svgElement = document.getElementById(this.id);
        if (svgElement) {
            // remove current url from url(#) - this is a hack to get svg
            // filters to work in safari and angular
            /** @type {?} */
            let svg = svgElement.innerHTML.replace(new RegExp(window.location.href, 'g'), '');
            // remove comments
            svg = svg.replace(/<!--[^>]*-->/g, '');
            // remove angular additions
            svg = svg.replace(/ng-reflect.+?=".*?"/g, '');
            // remove kip elements
            svg = svg.replace(/kip-custom-.+?=".*?"/g, '');
            // fix xlink
            svg = svg.replace('xmlnsXlink', 'xmlns:xlink');
            this.svg = svg;
        }
        else {
            this.svg = '';
        }
        // this.url = this.domSanitizer.bypassSecurityTrustUrl(url);
        this.changeDetectorRef.markForCheck();
    }
}
CustomAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar',
                template: "<div class=\"kip-xl-container container-fluid mx-auto p-3\">\r\n  <div class=\"row\">\r\n    <div class=\"card p-2 w-100\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 p-2\" style=\"text-align:center\">\r\n          <kip-custom-avatar-base width=\"264\" height=\"280\" viewBox=\"0 0 264 280\" [attr.id]=\"id\"\r\n            [graphicType]=\"graphicType\" [clotheColor]=\"clotheColor\" [backgroundColor]=\"backgroundColor\"\r\n            [avatarStyle]=\"avatarStyle\" [clotheType]=\"clotheType\" [mouthType]=\"mouthType\" [eyeType]=\"eyeType\"\r\n            [eyebrowType]=\"eyebrowType\" [skinColor]=\"skinColor\" [topType]=\"topType\" [hairColor]=\"hairColor\"\r\n            [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" [eyebrowColor]=\"eyebrowColor\"\r\n            [petType]=\"petType\" [awardType]=\"awardType\" [hatColor]=\"hatColor\" [accessoriesType]=\"accessoriesType\"\r\n            [accessoriesColor]=\"accessoriesColor\" [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\"\r\n            [noPet]=\"noPet\" [noAward]=\"noAward\" [noseType]=\"noseType\">\r\n          </kip-custom-avatar-base>\r\n          <textarea [id]=\"svgId\" style=\"display:none\">{{ svg }}</textarea>\r\n        </div>\r\n        <div class=\"col-sm-8 p-2\">\r\n          <ul class=\"nav nav-tabs\">\r\n            <li class=\"nav-item\">\r\n              <kip-custom-avatar-icon-background [index]=\"tabIndexes.background\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-background>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <kip-custom-avatar-icon-top [index]=\"tabIndexes.top\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-top>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <kip-custom-avatar-icon-eye [index]=\"tabIndexes.eyes\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-eye>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <kip-custom-avatar-icon-eye-brow [index]=\"tabIndexes.eyebrows\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-eye-brow>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <kip-custom-avatar-icon-accessories [index]=\"tabIndexes.accessory\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-accessories>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!noNose\">\r\n              <kip-custom-avatar-icon-nose [index]=\"tabIndexes.nose\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-nose>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <kip-custom-avatar-icon-mouth [index]=\"tabIndexes.mouth\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-mouth>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!noFacialHair\">\r\n              <kip-custom-avatar-icon-facial-hair [index]=\"tabIndexes.facialHair\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-facial-hair>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <kip-custom-avatar-icon-clothes [index]=\"tabIndexes.clothes\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-clothes>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!noPet\">\r\n              <kip-custom-avatar-icon-pet [index]=\"tabIndexes.pet\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-pet>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!noAward\">\r\n              <kip-custom-avatar-icon-award [index]=\"tabIndexes.award\" [currentIndex]=\"tabIndex\" (selectTab)=\"tabIndex = $event\">\r\n              </kip-custom-avatar-icon-award>\r\n            </li>\r\n          </ul>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"tab-content col-12\" [ngSwitch]=\"tabIndex\">\r\n                <div *ngSwitchCase=\"tabIndexes.background\">\r\n                  <kip-custom-avatar-picker *ngIf=\"!noColorBackground\" [title]=\"avatarText.background\"\r\n                    [options]=\"avatarStyles\" [currentOption]=\"avatarStyle\" (optionPicked)=\"avatarStyle=$event\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <kip-custom-avatar-base widthFull=\"true\" transform=\"scale(0.4) translate(-5,-33)\"\r\n                        viewBox=\"0 0 100 100\" [noFeatures]=\"true\" [avatarStyle]=\"item.value\"\r\n                        [backgroundColor]=\"backgroundColor\" [skinColor]=\"skinColor\">\r\n                      </kip-custom-avatar-base>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                  <kip-custom-avatar-color-picker *ngIf=\"!noColorBackground\" [title]=\"avatarText.backgroundColor\"\r\n                    [colors]=\"backgroundColors\" [colorConverter]=\"backgroundColorConvert\"\r\n                    [currentColor]=\"backgroundColor\" (colorPicked)=\"backgroundColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                  <kip-custom-avatar-color-picker [title]=\"avatarText.skinColors\" [colors]=\"skinColors\"\r\n                    [colorConverter]=\"skinColorConvert\" [currentColor]=\"skinColor\" (colorPicked)=\"skinColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.eyebrows\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.eyebrows\" [options]=\"eyebrowTypes\"\r\n                    [currentOption]=\"eyebrowType\" (optionPicked)=\"eyebrowType=$event\"\r\n                    [backgroundColor]=\"skinColorConvert(skinColor)\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 85 85\">\r\n                        <g transform=\"translate(-3,30) scale(0.8)\" kip-custom-avatar-eye-brows\r\n                          [eyebrowType]=\"item.value\" [eyebrowColor]=\"eyebrowColor\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                  <kip-custom-avatar-color-picker [title]=\"avatarText.eyebrowColors\" [colors]=\"eyebrowColors\"\r\n                    [colorConverter]=\"hairColorConvert\" [currentColor]=\"eyebrowColor\"\r\n                    (colorPicked)=\"eyebrowColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.accessory\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.accessories\" [options]=\"accessoriesTypes\"\r\n                    [currentOption]=\"accessoriesType\" (optionPicked)=\"accessoriesType=$event\"\r\n                    [backgroundColor]=\"skinColorConvert(skinColor)\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 200 200\">\r\n                        <g transform=\"translate(-35,0)\" kip-custom-avatar-accessories [accessoriesType]=\"item.value\"\r\n                          [accessoriesColor]=\"accessoriesColor\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                  <kip-custom-avatar-color-picker [title]=\"avatarText.accessoryColors\" [colors]=\"accessoriesColors\"\r\n                    [colorConverter]=\"accessoriesColorConvert\" [currentColor]=\"accessoriesColor\"\r\n                    (colorPicked)=\"accessoriesColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.facialHair\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.facialHairs\" [options]=\"facialHairTypes\"\r\n                    [currentOption]=\"facialHairType\" (optionPicked)=\"facialHairType=$event\"\r\n                    [backgroundColor]=\"skinColorConvert(skinColor)\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 200 200\">\r\n                        <g transform=\"translate(-40,-40)\" kip-custom-avatar-facial-hair [facialHairType]=\"item.value\"\r\n                          [facialHairColor]=\"facialHairColor\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                  <kip-custom-avatar-color-picker [title]=\"avatarText.facialHairColors\" [colors]=\"eyebrowColors\"\r\n                    [colorConverter]=\"hairColorConvert\" [currentColor]=\"facialHairColor\"\r\n                    (colorPicked)=\"facialHairColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.nose\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.noses\" [options]=\"noseTypes\" [currentOption]=\"noseType\"\r\n                    (optionPicked)=\"noseType=$event\" [backgroundColor]=\"skinColorConvert(skinColor)\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 100 100\">\r\n                        <g transform=\"translate(-5,0)\" kip-custom-avatar-nose [noseType]=\"item.value\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.mouth\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.mouths\" [options]=\"mouthTypes\"\r\n                    [currentOption]=\"mouthType\" (optionPicked)=\"mouthType=$event\"\r\n                    [backgroundColor]=\"skinColorConvert(skinColor)\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 100 100\">\r\n                        <g transform=\"translate(-5,-20)\" kip-custom-avatar-mouth [mouthType]=\"item.value\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.eyes\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.eyes\" [options]=\"eyeTypes\" [currentOption]=\"eyeType\"\r\n                    (optionPicked)=\"eyeType=$event\" [backgroundColor]=\"skinColorConvert(skinColor)\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 100 100\">\r\n                        <g transform=\"translate(-5,20)\" kip-custom-avatar-eyes [eyeType]=\"item.value\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.pet\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.pets\" [options]=\"petTypes\" [currentOption]=\"petType\"\r\n                    (optionPicked)=\"petType=$event\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 100 100\">\r\n                        <g transform=\"scale(0.18) translate(20,20)\" kip-custom-avatar-pet [petType]=\"item.value\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.award\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.awards\" [options]=\"awardTypes\"\r\n                    [currentOption]=\"awardType\" (optionPicked)=\"awardType=$event\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 100 100\">\r\n                        <g transform=\"scale(0.18) translate(20,20)\" kip-custom-avatar-award [awardType]=\"item.value\"\r\n                          [skinColor]=\"skinColor\" [clotheColor]=\"clotheColor\" [clotheColor2]=\"clotheColor2\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.top\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.hatsAndHairStyles\" [options]=\"topTypes\"\r\n                    [currentOption]=\"topType\" (optionPicked)=\"topType=$event\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 200 200\">\r\n                        <g transform=\"translate(-10,10) scale(0.9)\" kip-custom-avatar-top [hairColor]=\"hairColor\"\r\n                          [hatColor]=\"hatColor\" [topType]=\"item.value\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                  <kip-custom-avatar-color-picker *ngIf=\"!hatColorVisible\" [title]=\"avatarText.hairColors\"\r\n                    [colors]=\"hairColors\" [colorConverter]=\"hairColorConvert\" [currentColor]=\"hairColor\"\r\n                    (colorPicked)=\"hairColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                  <kip-custom-avatar-color-picker *ngIf=\"hatColorVisible\" [title]=\"avatarText.hatColors\"\r\n                    [colors]=\"hatColors\" [colorConverter]=\"hatColorConvert\" [currentColor]=\"hatColor\"\r\n                    (colorPicked)=\"hatColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                </div>\r\n                <div *ngSwitchCase=\"tabIndexes.clothes\" class=\"kip-avatar-pick-svg\">\r\n                  <kip-custom-avatar-picker [title]=\"avatarText.clothes\" [options]=\"clotheTypes\"\r\n                    [currentOption]=\"clotheType\" (optionPicked)=\"clotheType=$event\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 200 200\">\r\n                        <g transform=\"translate(-32,-130)\" kip-custom-avatar-clothes [clotheType]=\"item.value\"\r\n                          [clotheColor]=\"clotheColor\" [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\"\r\n                          [graphicType]=\"graphicType\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                  <kip-custom-avatar-color-picker [title]=\"avatarText.clotheColors1\" [colors]=\"clotheColors\"\r\n                    [colorConverter]=\"clotheColorConvert\" [currentColor]=\"clotheColor\"\r\n                    (colorPicked)=\"clotheColor=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                  <kip-custom-avatar-color-picker *ngIf=\"clotheColor2Visible\" [title]=\"avatarText.clotheColors2\"\r\n                    [colors]=\"clotheColors2\" [colorConverter]=\"clotheColorConvert\" [currentColor]=\"clotheColor2\"\r\n                    (colorPicked)=\"clotheColor2=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                  <kip-custom-avatar-color-picker *ngIf=\"clotheColor3Visible\" [title]=\"avatarText.clotheColors3\"\r\n                    [colors]=\"clotheColors3\" [colorConverter]=\"clotheColorConvert\" [currentColor]=\"clotheColor3\"\r\n                    (colorPicked)=\"clotheColor3=$event\">\r\n                  </kip-custom-avatar-color-picker>\r\n                  <kip-custom-avatar-picker *ngIf=\"clotheType == 'GraphicShirt'\" [title]=\"avatarText.graphics\"\r\n                    [options]=\"graphicTypes\" [currentOption]=\"graphicType\" (optionPicked)=\"graphicType=$event\"\r\n                    [backgroundColor]=\"clotheColorConvert(clotheColor)\">\r\n                    <ng-template let-item kipPickerTemplate=\"item\">\r\n                      <svg viewBox=\"0 0 200 200\">\r\n                        <g transform=\"translate(-30, 20)\" kip-custom-avatar-graphics [graphicType]=\"item.value\"\r\n                          [clotheColor2]=\"clotheColor2\" />\r\n                      </svg>\r\n                    </ng-template>\r\n                  </kip-custom-avatar-picker>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"kip-footer fixed-bottom\">\r\n    <div class=\"kip-xl-container d-flex flex-row align-items-center justify-content-between mx-auto py-2 px-3\">\r\n      <div class=\"flex\">\r\n        <button *ngIf=\"!noSave\" type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"saveAvatar()\"\r\n          [disabled]='saveAvatarEnabled?null:true'>\r\n          {{ avatarText.save }}\r\n        </button>\r\n        <button *ngIf=\"!noRandom\" type=\"button\" class=\"btn btn-secondary mr-2\" (click)=\"randomAvatar()\">\r\n          {{ avatarText.random }}\r\n        </button>\r\n        <button *ngIf=\"!noSvgOutput\" type=\"button\" class=\"btn btn-secondary mr-2\" (click)=\"selectSvg()\">\r\n          {{ avatarText.svg }}\r\n        </button>\r\n        <button *ngIf=\"!noSave\" type=\"button\" class=\"btn btn-secondary\" (click)=\"revert()\"\r\n          [disabled]='saveAvatarEnabled?null:true'>\r\n          {{ avatarText.revert }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".kip-footer{background-color:#fff;border-top:1px solid gray}.kip-avatar-pick-svg svg{width:100%}"]
            }] }
];
/** @nocollapse */
CustomAvatarComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
CustomAvatarComponent.propDecorators = {
    avatarText: [{ type: Input }],
    noNose: [{ type: Input }],
    noPet: [{ type: Input }],
    noAward: [{ type: Input }],
    noSvgOutput: [{ type: Input }],
    noRandom: [{ type: Input }],
    noSave: [{ type: Input }],
    noFacialHair: [{ type: Input }],
    noColorBackground: [{ type: Input }],
    avatarSaved: [{ type: Output }],
    avatarSelection: [{ type: Input }],
    avatarExclusion: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CustomAvatarComponent.prototype._currentAvatar;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarComponent.prototype._lastSaved;
    /** @type {?} */
    CustomAvatarComponent.prototype.tabIndex;
    /** @type {?} */
    CustomAvatarComponent.prototype.tabIndexes;
    /** @type {?} */
    CustomAvatarComponent.prototype.id;
    /** @type {?} */
    CustomAvatarComponent.prototype.svgId;
    /** @type {?} */
    CustomAvatarComponent.prototype.svg;
    /** @type {?} */
    CustomAvatarComponent.prototype.avatarText;
    /** @type {?} */
    CustomAvatarComponent.prototype.noNose;
    /** @type {?} */
    CustomAvatarComponent.prototype.noPet;
    /** @type {?} */
    CustomAvatarComponent.prototype.noAward;
    /** @type {?} */
    CustomAvatarComponent.prototype.noSvgOutput;
    /** @type {?} */
    CustomAvatarComponent.prototype.noRandom;
    /** @type {?} */
    CustomAvatarComponent.prototype.noSave;
    /** @type {?} */
    CustomAvatarComponent.prototype.noFacialHair;
    /** @type {?} */
    CustomAvatarComponent.prototype.noColorBackground;
    /** @type {?} */
    CustomAvatarComponent.prototype.avatarSaved;
    /** @type {?} */
    CustomAvatarComponent.prototype.avatarExclusion;
    /**
     * @type {?}
     * @private
     */
    CustomAvatarComponent.prototype.changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWF2YXRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hdmF0YWFhcnMtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b20tYXZhdGFyL2N1c3RvbS1hdmF0YXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLFdBQVcsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUM1RSxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQ3JGLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUM5QyxRQUFRLEVBQ1QsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTdDLDhCQUdDOzs7SUFGQyx5QkFBYzs7SUFDZCx5QkFBYzs7Ozs7QUFHaEIsZ0NBR0M7OztJQUZDLHFDQUFp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bUNBQWdDOztJQUNoQyxzQ0FBa0M7O0lBQ2xDLG9DQUFZOztJQUlaLDJDQTRCRTs7SUFJRix1Q0FDYzs7SUFJZCxzQ0FDYTs7SUFJYix3Q0FDZTs7SUFJZiw0Q0FDbUI7O0lBSW5CLHlDQUNpQjs7SUFJakIsdUNBQ2U7O0lBSWYsNkNBQ3FCOztJQUlyQixrREFDMEI7O0lBRTFCLDRDQUN1RTs7SUEwQ3ZFLGdEQU1FOzs7OztJQW5JVSxrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpmb3JpbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQXZhdGFyU3R5bGUsIFRvcFR5cGUsIEFjY2Vzc29yaWVzVHlwZSwgSGFpckNvbG9yLCBGYWNpYWxIYWlyVHlwZSwgQ2xvdGhlVHlwZSxcclxuICBDbG90aGVDb2xvciwgRXllVHlwZSwgRXllYnJvd1R5cGUsIE1vdXRoVHlwZSwgU2tpbkNvbG9yLCBCYWNrZ3JvdW5kQ29sb3IsIEdyYXBoaWNUeXBlLFxyXG4gIFBldFR5cGUsIEF3YXJkVHlwZSwgSGF0Q29sb3IsIEFjY2Vzc29yaWVzQ29sb3IsIEF2YXRhclNlbGVjdGlvbiwgQXZhdGFyRXhjbHVzaW9uLFxyXG4gIE5vc2VUeXBlXHJcbn0gZnJvbSAnLi9vcHRpb25zJztcclxuaW1wb3J0IHsgYWNjZXNzb3JpZXNDb2xvclRyYW5zbGF0aW9uIH0gZnJvbSAnLi9jb2xvcnMvYWNjZXNzb3JpZXMtY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBoYWlyQ29sb3JUcmFuc2xhdGlvbiB9IGZyb20gJy4vY29sb3JzL2hhaXItY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBza2luQ29sb3JUcmFuc2xhdGlvbiB9IGZyb20gJy4vY29sb3JzL3NraW4tY29sb3ItdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBjbG90aGVDb2xvclRyYW5zbGF0aW9uIH0gZnJvbSAnLi9jb2xvcnMvY2xvdGhlLWNvbG9yLXRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgYmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb24gfSBmcm9tICcuL2NvbG9ycy9iYWNrZ3JvdW5kLWNvbG9yLXRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgaGF0Q29sb3JUcmFuc2xhdGlvbiB9IGZyb20gJy4vY29sb3JzL2hhdC1jb2xvci10cmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IHJhbmRvbUlkIH0gZnJvbSAnLi9oZWxwZXIvcmFuZG9taWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlWYWx1ZSB7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhdmVBdmF0YXIge1xyXG4gIGF2YXRhclNlbGVjdGlvbjogQXZhdGFyU2VsZWN0aW9uO1xyXG4gIHN2Zzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF2YXRhclRleHQge1xyXG4gIHNhdmU6IHN0cmluZztcclxuICByYW5kb206IHN0cmluZztcclxuICByZXZlcnQ6IHN0cmluZztcclxuICBzdmc6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgZXllczogc3RyaW5nO1xyXG4gIGV5ZWJyb3dzOiBzdHJpbmc7XHJcbiAgZXllYnJvd0NvbG9yczogc3RyaW5nO1xyXG4gIGFjY2Vzc29yaWVzOiBzdHJpbmc7XHJcbiAgYWNjZXNzb3J5Q29sb3JzOiBzdHJpbmc7XHJcbiAgZmFjaWFsSGFpcnM6IHN0cmluZztcclxuICBmYWNpYWxIYWlyQ29sb3JzOiBzdHJpbmc7XHJcbiAgbm9zZXM6IHN0cmluZztcclxuICBtb3V0aHM6IHN0cmluZztcclxuICBwZXRzOiBzdHJpbmc7XHJcbiAgYXdhcmRzOiBzdHJpbmc7XHJcbiAgaGF0c0FuZEhhaXJTdHlsZXM6IHN0cmluZztcclxuICBoYWlyQ29sb3JzOiBzdHJpbmc7XHJcbiAgaGF0Q29sb3JzOiBzdHJpbmc7XHJcbiAgY2xvdGhlczogc3RyaW5nO1xyXG4gIGNsb3RoZUNvbG9yczE6IHN0cmluZztcclxuICBjbG90aGVDb2xvcnMyOiBzdHJpbmc7XHJcbiAgY2xvdGhlQ29sb3JzMzogc3RyaW5nO1xyXG4gIGdyYXBoaWNzOiBzdHJpbmc7XHJcbiAgc2tpbkNvbG9yczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSB0YWJJbmRleGVzIHtcclxuICBiYWNrZ3JvdW5kID0gMSxcclxuICB0b3AgPSAyLFxyXG4gIGV5ZXMgPSAzLFxyXG4gIGV5ZWJyb3dzID0gNCxcclxuICBhY2Nlc3NvcnkgPSA1LFxyXG4gIG5vc2UgPSA2LFxyXG4gIG1vdXRoID0gNyxcclxuICBmYWNpYWxIYWlyID0gOCxcclxuICBjbG90aGVzID0gOSxcclxuICBwZXQgPSAxMCxcclxuICBhd2FyZCA9IDExXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2lwLWN1c3RvbS1hdmF0YXInLFxyXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbS1hdmF0YXIuY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbS1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tQXZhdGFyQ29tcG9uZW50IHtcclxuXHJcbiAgcHJpdmF0ZSBfY3VycmVudEF2YXRhcjogQXZhdGFyU2VsZWN0aW9uID1cclxuICAgIHtcclxuICAgICAgYXZhdGFyU3R5bGU6IEF2YXRhclN0eWxlLlRyYW5zcGFyZW50LFxyXG4gICAgICB0b3BUeXBlOiBUb3BUeXBlLkxvbmdIYWlyRnJvLFxyXG4gICAgICBhY2Nlc3Nvcmllc1R5cGU6IEFjY2Vzc29yaWVzVHlwZS5QcmVzY3JpcHRpb24wMSxcclxuICAgICAgaGFpckNvbG9yOiBIYWlyQ29sb3IuU2lsdmVyR3JheSxcclxuICAgICAgZmFjaWFsSGFpclR5cGU6IEZhY2lhbEhhaXJUeXBlLkJsYW5rLFxyXG4gICAgICBmYWNpYWxIYWlyQ29sb3I6IEhhaXJDb2xvci5CbGFjayxcclxuICAgICAgZXllYnJvd0NvbG9yOiBIYWlyQ29sb3IuU2lsdmVyR3JheSxcclxuICAgICAgY2xvdGhlVHlwZTogQ2xvdGhlVHlwZS5HcmFwaGljU2hpcnQsXHJcbiAgICAgIGNsb3RoZUNvbG9yOiBDbG90aGVDb2xvci5QYXN0ZWxPcmFuZ2UsXHJcbiAgICAgIGNsb3RoZUNvbG9yMjogQ2xvdGhlQ29sb3IuQmx1ZTAxLFxyXG4gICAgICBjbG90aGVDb2xvcjM6IENsb3RoZUNvbG9yLkJsYWNrLFxyXG4gICAgICBleWVUeXBlOiBFeWVUeXBlLkNyeSxcclxuICAgICAgZXllYnJvd1R5cGU6IEV5ZWJyb3dUeXBlLlVwRG93bk5hdHVyYWwsXHJcbiAgICAgIG1vdXRoVHlwZTogTW91dGhUeXBlLlNlcmlvdXMsXHJcbiAgICAgIHNraW5Db2xvcjogU2tpbkNvbG9yLkJyb3duLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IEJhY2tncm91bmRDb2xvci5Db2xvckEsXHJcbiAgICAgIGdyYXBoaWNUeXBlOiBHcmFwaGljVHlwZS5CYXQsXHJcbiAgICAgIHBldFR5cGU6IFBldFR5cGUuTm9uZSxcclxuICAgICAgYXdhcmRUeXBlOiBBd2FyZFR5cGUuTm9uZSxcclxuICAgICAgaGF0Q29sb3I6IEhhdENvbG9yLkJsYWNrLFxyXG4gICAgICBhY2Nlc3Nvcmllc0NvbG9yOiBBY2Nlc3Nvcmllc0NvbG9yLkJsYWNrLFxyXG4gICAgICBub3NlVHlwZTogTm9zZVR5cGUuRGVmYXVsdFxyXG4gICAgfTtcclxuXHJcbiAgcHJpdmF0ZSBfbGFzdFNhdmVkOiBBdmF0YXJTZWxlY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLnJlZnJlc2hBdmF0YXIoKTtcclxuICB9XHJcblxyXG4gIHRhYkluZGV4OiB0YWJJbmRleGVzID0gdGFiSW5kZXhlcy5iYWNrZ3JvdW5kO1xyXG4gIHRhYkluZGV4ZXMgPSB0YWJJbmRleGVzO1xyXG4gIGlkOiBzdHJpbmcgPSByYW5kb21JZCgnYXZhdGFyJyk7XHJcbiAgc3ZnSWQ6IHN0cmluZyA9IHJhbmRvbUlkKCdzdmdJZCcpO1xyXG4gIHN2Zzogc3RyaW5nO1xyXG5cclxuICAvLyBBbGwgdGhlIHRleHRzIGZvciBhdmF0YXIgbG9jYWxpemF0aW9uXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYXZhdGFyVGV4dDogQXZhdGFyVGV4dCA9IHtcclxuICAgIHJhbmRvbTogJ1JhbmRvbScsXHJcbiAgICBzYXZlOiAnU2F2ZScsXHJcbiAgICByZXZlcnQ6ICdSZXZlcnQnLFxyXG4gICAgc3ZnOiAnU3ZnJyxcclxuICAgIGJhY2tncm91bmQ6ICdCYWNrZ3JvdW5kcycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdCYWNrZ3JvdW5kIGNvbG91cnMnLFxyXG4gICAgZXllczogJ0V5ZXMnLFxyXG4gICAgZXllYnJvd3M6ICdFeWVicm93cycsXHJcbiAgICBleWVicm93Q29sb3JzOiAnRXllYnJvdyBjb2xvdXJzJyxcclxuICAgIGFjY2Vzc29yaWVzOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgYWNjZXNzb3J5Q29sb3JzOiAnQWNjZXNzb3J5IGNvbG91cnMnLFxyXG4gICAgZmFjaWFsSGFpcnM6ICdGYWNpYWwgaGFpcicsXHJcbiAgICBmYWNpYWxIYWlyQ29sb3JzOiAnRmFjaWFsIGhhaXIgY29sb3VycycsXHJcbiAgICBub3NlczogJ05vc2VzJyxcclxuICAgIG1vdXRoczogJ01vdXRocycsXHJcbiAgICBwZXRzOiAnUGV0cycsXHJcbiAgICBhd2FyZHM6ICdBd2FyZHMnLFxyXG4gICAgaGF0c0FuZEhhaXJTdHlsZXM6ICdIYXRzL0hhaXIgU3R5bGVzJyxcclxuICAgIGhhaXJDb2xvcnM6ICdIYWlyIGNvbG91cnMnLFxyXG4gICAgaGF0Q29sb3JzOiAnSGF0IGNvbG91cnMnLFxyXG4gICAgY2xvdGhlczogJ0Nsb3RoZXMnLFxyXG4gICAgY2xvdGhlQ29sb3JzMTogJ0Nsb3RoZSBjb2xvdXJzJyxcclxuICAgIGNsb3RoZUNvbG9yczI6ICdDbG90aGUgY29sb3VycyAoU2Vjb25kYXJ5KScsXHJcbiAgICBjbG90aGVDb2xvcnMzOiAnQ2xvdGhlIGNvbG91cnMgKFRlcnRpYXJ5KScsXHJcbiAgICBncmFwaGljczogJ0dyYXBoaWNzJyxcclxuICAgIHNraW5Db2xvcnM6ICdTa2luIGNvbG91cnMnXHJcbiAgfTtcclxuXHJcbiAgLy8gQ29udHJvbHMgd2hldGhlciBub3NlcyBjYW4gYmUgc2VsZWN0ZWRcclxuXHJcbiAgQElucHV0KClcclxuICBub05vc2UgPSB0cnVlO1xyXG5cclxuICAvLyBDb250cm9scyB3aGV0aGVyIHBldHMgY2FuIGJlIHNlbGVjdGVkXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbm9QZXQgPSB0cnVlO1xyXG5cclxuICAvLyBDb250cm9scyB3aGV0aGVyIGF3YXJkcyBjYW4gYmUgc2VsZWN0ZWRcclxuXHJcbiAgQElucHV0KClcclxuICBub0F3YXJkID0gdHJ1ZTtcclxuXHJcbiAgLy8gQ29udHJvbHMgd2hldGhlciBhbiBzdmcgb3V0cHV0IGJ1dHRvbiBpcyBhdmFpbGFibGVcclxuXHJcbiAgQElucHV0KClcclxuICBub1N2Z091dHB1dCA9IHRydWU7XHJcblxyXG4gIC8vIENvbnRyb2xzIHdoZXRoZXIgYSByYW5kb20gYnV0dG9uIGlzIGF2YWlsYWJsZVxyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vUmFuZG9tID0gZmFsc2U7XHJcblxyXG4gIC8vIENvbnRyb2xzIHdoZXRodGVyIHNhdmluZyBpcyBhdmFpbGFibGVcclxuXHJcbiAgQElucHV0KClcclxuICBub1NhdmUgPSBmYWxzZTtcclxuXHJcbiAgLy8gQ29udHJvbHMgd2hldGhlciBmYWNpYWwgaGFpciBpcyBhdmFpbGFibGUgKGZvciBraWRzL2ZlbWFsZXMgZXRjKVxyXG5cclxuICBASW5wdXQoKVxyXG4gIG5vRmFjaWFsSGFpciA9IGZhbHNlO1xyXG5cclxuICAvLyBDb250cm9scyB3aGV0aGVyIHRoZSBjaXJjbGUgYmFja2dyb3VuZCBhbmQgc2V0dGluZyBjb2xvciBmb3IgaXQgaXMgYXZhaWxhYmxlXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbm9Db2xvckJhY2tncm91bmQgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgYXZhdGFyU2F2ZWQ6IEV2ZW50RW1pdHRlcjxTYXZlQXZhdGFyPiA9IG5ldyBFdmVudEVtaXR0ZXI8U2F2ZUF2YXRhcj4oKTtcclxuXHJcbiAgLy8gQ3VycmVudCBBdmF0YXIgb3B0aW9uc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdmF0YXJTZWxlY3Rpb24odmFsdWU6IEF2YXRhclNlbGVjdGlvbikge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIgPSB7XHJcbiAgICAgICAgYXZhdGFyU3R5bGU6IHRoaXMubm9Db2xvckJhY2tncm91bmQgPyBBdmF0YXJTdHlsZS5UcmFuc3BhcmVudCA6IHZhbHVlLmF2YXRhclN0eWxlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdmFsdWUuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIHRvcFR5cGU6IHZhbHVlLnRvcFR5cGUsXHJcbiAgICAgICAgaGFpckNvbG9yOiB2YWx1ZS5oYWlyQ29sb3IsXHJcbiAgICAgICAgZmFjaWFsSGFpclR5cGU6IHRoaXMubm9GYWNpYWxIYWlyID8gRmFjaWFsSGFpclR5cGUuQmxhbmsgOiB2YWx1ZS5mYWNpYWxIYWlyVHlwZSxcclxuICAgICAgICBmYWNpYWxIYWlyQ29sb3I6IHZhbHVlLmZhY2lhbEhhaXJDb2xvcixcclxuICAgICAgICBjbG90aGVUeXBlOiB2YWx1ZS5jbG90aGVUeXBlLFxyXG4gICAgICAgIGdyYXBoaWNUeXBlOiB2YWx1ZS5ncmFwaGljVHlwZSxcclxuICAgICAgICBjbG90aGVDb2xvcjogdmFsdWUuY2xvdGhlQ29sb3IsXHJcbiAgICAgICAgY2xvdGhlQ29sb3IyOiB2YWx1ZS5jbG90aGVDb2xvcjIsXHJcbiAgICAgICAgY2xvdGhlQ29sb3IzOiB2YWx1ZS5jbG90aGVDb2xvcjMsXHJcbiAgICAgICAgZXllVHlwZTogdmFsdWUuZXllVHlwZSxcclxuICAgICAgICBleWVicm93VHlwZTogdmFsdWUuZXllYnJvd1R5cGUsXHJcbiAgICAgICAgZXllYnJvd0NvbG9yOiB2YWx1ZS5leWVicm93Q29sb3IsXHJcbiAgICAgICAgbW91dGhUeXBlOiB2YWx1ZS5tb3V0aFR5cGUsXHJcbiAgICAgICAgc2tpbkNvbG9yOiB2YWx1ZS5za2luQ29sb3IsXHJcbiAgICAgICAgcGV0VHlwZTogdmFsdWUucGV0VHlwZSxcclxuICAgICAgICBhd2FyZFR5cGU6IHZhbHVlLmF3YXJkVHlwZSxcclxuICAgICAgICBoYXRDb2xvcjogdmFsdWUuaGF0Q29sb3IsXHJcbiAgICAgICAgYWNjZXNzb3JpZXNDb2xvcjogdmFsdWUuYWNjZXNzb3JpZXNDb2xvcixcclxuICAgICAgICBhY2Nlc3Nvcmllc1R5cGU6IHZhbHVlLmFjY2Vzc29yaWVzVHlwZSxcclxuICAgICAgICBub3NlVHlwZTogdmFsdWUubm9zZVR5cGUgPyB2YWx1ZS5ub3NlVHlwZSA6IHRoaXMuX2N1cnJlbnRBdmF0YXIubm9zZVR5cGVcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fbGFzdFNhdmVkID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYXZhdGFyU2VsZWN0aW9uKCk6IEF2YXRhclNlbGVjdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhcjtcclxuICB9XHJcblxyXG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlciBhbGxvd2luZyBjaG9pY2VzIHRvIGJlIHR1cm5lZCBvZmYgKGZvciBleGFtcGxlIG1heSBub3Qgd2FudCB2b21pdCBhcyBhIGNob2ljZSBmb3IgbW91dGggb3B0aW9ucylcclxuXHJcbiAgQElucHV0KClcclxuICBhdmF0YXJFeGNsdXNpb246IEF2YXRhckV4Y2x1c2lvbiA9IHtcclxuICAgIG1vdXRoVHlwZXM6IFtNb3V0aFR5cGUuVm9taXRdLFxyXG4gICAgZ3JhcGhpY1R5cGVzOiBbR3JhcGhpY1R5cGUuSG9sYV0sXHJcbiAgICB0b3BUeXBlczogW1RvcFR5cGUuRXllcGF0Y2hdLFxyXG4gICAgZXllVHlwZXM6IFtFeWVUeXBlLkRpenp5XVxyXG4gIH07XHJcblxyXG4gIC8vICNyZWdpb24gQmFja2dyb3VuZCBDb2xvclxyXG5cclxuICBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBCYWNrZ3JvdW5kQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50QXZhdGFyLmJhY2tncm91bmRDb2xvciAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEF2YXRhci5iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYmFja2dyb3VuZENvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBdmF0YXIuYmFja2dyb3VuZENvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJhY2tncm91bmRDb2xvcnMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXMoQmFja2dyb3VuZENvbG9yKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBBdmF0YXIgU3R5bGVcclxuXHJcbiAgc2V0IGF2YXRhclN0eWxlKHZhbHVlOiBBdmF0YXJTdHlsZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuYXZhdGFyU3R5bGUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuYXZhdGFyU3R5bGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYXZhdGFyU3R5bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5hdmF0YXJTdHlsZTtcclxuICB9XHJcblxyXG4gIGdldCBhdmF0YXJTdHlsZXMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXNXaXRoRXhjbHVzaW9ucyhBdmF0YXJTdHlsZSwgdGhpcy5hdmF0YXJFeGNsdXNpb24gJiZcclxuICAgICAgdGhpcy5hdmF0YXJFeGNsdXNpb24uYXZhdGFyU3R5bGVzID8gdGhpcy5hdmF0YXJFeGNsdXNpb24uYXZhdGFyU3R5bGVzIDogW10pO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIFRvcCBUeXBlXHJcblxyXG4gIHNldCB0b3BUeXBlKHZhbHVlOiBUb3BUeXBlKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEF2YXRhci50b3BUeXBlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wVHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgdG9wVHlwZXMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXNXaXRoRXhjbHVzaW9ucyhUb3BUeXBlLCB0aGlzLmF2YXRhckV4Y2x1c2lvbiAmJlxyXG4gICAgICB0aGlzLmF2YXRhckV4Y2x1c2lvbi50b3BUeXBlcyA/IHRoaXMuYXZhdGFyRXhjbHVzaW9uLnRvcFR5cGVzIDogW10pO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIEFjY2Vzc29yaWVzIFR5cGUgYW5kIENvbG9yXHJcblxyXG4gIHNldCBhY2Nlc3Nvcmllc1R5cGUodmFsdWU6IEFjY2Vzc29yaWVzVHlwZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuYWNjZXNzb3JpZXNUeXBlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmFjY2Vzc29yaWVzVHlwZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnJlZnJlc2hBdmF0YXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBhY2Nlc3Nvcmllc1R5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5hY2Nlc3Nvcmllc1R5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgYWNjZXNzb3JpZXNUeXBlcygpOiBLZXlWYWx1ZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEtleVZhbHVlc1dpdGhFeGNsdXNpb25zKEFjY2Vzc29yaWVzVHlwZSwgdGhpcy5hdmF0YXJFeGNsdXNpb24gJiZcclxuICAgICAgdGhpcy5hdmF0YXJFeGNsdXNpb24uYWNjZXNzb3JpZXNUeXBlcyA/IHRoaXMuYXZhdGFyRXhjbHVzaW9uLmFjY2Vzc29yaWVzVHlwZXMgOiBbXSk7XHJcbiAgfVxyXG5cclxuICBzZXQgYWNjZXNzb3JpZXNDb2xvcih2YWx1ZTogQWNjZXNzb3JpZXNDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuYWNjZXNzb3JpZXNDb2xvciAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEF2YXRhci5hY2Nlc3Nvcmllc0NvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGFjY2Vzc29yaWVzQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5hY2Nlc3Nvcmllc0NvbG9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFjY2Vzc29yaWVzQ29sb3JzKCk6IEtleVZhbHVlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzKEFjY2Vzc29yaWVzQ29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIEhhaXIgQ29sb3JcclxuXHJcbiAgc2V0IGhhaXJDb2xvcih2YWx1ZTogSGFpckNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEF2YXRhci5oYWlyQ29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuaGFpckNvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGhhaXJDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QXZhdGFyLmhhaXJDb2xvcjtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBIYXQgQ29sb3JcclxuXHJcbiAgZ2V0IGhhaXJDb2xvcnMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXMoSGFpckNvbG9yKTtcclxuICB9XHJcblxyXG4gIHNldCBoYXRDb2xvcih2YWx1ZTogSGF0Q29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50QXZhdGFyLmhhdENvbG9yICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmhhdENvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGhhdENvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBdmF0YXIuaGF0Q29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgaGF0Q29sb3JzKCk6IEtleVZhbHVlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzKEhhdENvbG9yKTtcclxuICB9XHJcblxyXG4gIGdldCBoYXRDb2xvclZpc2libGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci50b3BUeXBlID09PSBUb3BUeXBlLlR1cmJhbiB8fFxyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPT09IFRvcFR5cGUuV2ludGVySGF0MSB8fFxyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPT09IFRvcFR5cGUuV2ludGVySGF0MiB8fFxyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPT09IFRvcFR5cGUuV2ludGVySGF0MyB8fFxyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPT09IFRvcFR5cGUuV2ludGVySGF0NCB8fFxyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPT09IFRvcFR5cGUuRXllcGF0Y2ggfHxcclxuICAgICAgdGhpcy5fY3VycmVudEF2YXRhci50b3BUeXBlID09PSBUb3BUeXBlLkhhdCB8fFxyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPT09IFRvcFR5cGUuSGlqYWI7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gRmFjaWFsIEhhaXIgVHlwZSBhbmQgQ29sb3JcclxuXHJcbiAgc2V0IGZhY2lhbEhhaXJUeXBlKHZhbHVlOiBGYWNpYWxIYWlyVHlwZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuZmFjaWFsSGFpclR5cGUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuZmFjaWFsSGFpclR5cGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZmFjaWFsSGFpclR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5mYWNpYWxIYWlyVHlwZTtcclxuICB9XHJcblxyXG4gIGdldCBmYWNpYWxIYWlyVHlwZXMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXNXaXRoRXhjbHVzaW9ucyhGYWNpYWxIYWlyVHlwZSwgdGhpcy5hdmF0YXJFeGNsdXNpb24gJiZcclxuICAgICAgdGhpcy5hdmF0YXJFeGNsdXNpb24uZmFjaWFsSGFpclR5cGVzID8gdGhpcy5hdmF0YXJFeGNsdXNpb24uZmFjaWFsSGFpclR5cGVzIDogW10pO1xyXG4gIH1cclxuXHJcbiAgc2V0IGZhY2lhbEhhaXJDb2xvcih2YWx1ZTogSGFpckNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEF2YXRhci5mYWNpYWxIYWlyQ29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuZmFjaWFsSGFpckNvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZhY2lhbEhhaXJDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QXZhdGFyLmZhY2lhbEhhaXJDb2xvcjtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBDbG90aGUgVHlwZSwgQ29sb3JzIGFuZCBHcmFwaGljc1xyXG5cclxuICBzZXQgY2xvdGhlVHlwZSh2YWx1ZTogQ2xvdGhlVHlwZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuY2xvdGhlVHlwZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEF2YXRhci5jbG90aGVUeXBlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNsb3RoZVR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5jbG90aGVUeXBlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsb3RoZVR5cGVzKCk6IEtleVZhbHVlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzV2l0aEV4Y2x1c2lvbnMoQ2xvdGhlVHlwZSwgdGhpcy5hdmF0YXJFeGNsdXNpb24gJiZcclxuICAgICAgdGhpcy5hdmF0YXJFeGNsdXNpb24uY2xvdGhlVHlwZXMgPyB0aGlzLmF2YXRhckV4Y2x1c2lvbi5jbG90aGVUeXBlcyA6IFtdKTtcclxuICB9XHJcblxyXG4gIHNldCBncmFwaGljVHlwZSh2YWx1ZTogR3JhcGhpY1R5cGUpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50QXZhdGFyLmdyYXBoaWNUeXBlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmdyYXBoaWNUeXBlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGdyYXBoaWNUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBdmF0YXIuZ3JhcGhpY1R5cGU7XHJcbiAgfVxyXG5cclxuICBnZXQgZ3JhcGhpY1R5cGVzKCk6IEtleVZhbHVlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzV2l0aEV4Y2x1c2lvbnMoR3JhcGhpY1R5cGUsIHRoaXMuYXZhdGFyRXhjbHVzaW9uICYmXHJcbiAgICAgIHRoaXMuYXZhdGFyRXhjbHVzaW9uLmdyYXBoaWNUeXBlcyA/IHRoaXMuYXZhdGFyRXhjbHVzaW9uLmdyYXBoaWNUeXBlcyA6IFtdKTtcclxuICB9XHJcblxyXG4gIHNldCBjbG90aGVDb2xvcih2YWx1ZTogQ2xvdGhlQ29sb3IpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50QXZhdGFyLmNsb3RoZUNvbG9yICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmNsb3RoZUNvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNsb3RoZUNvbG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBdmF0YXIuY2xvdGhlQ29sb3I7XHJcbiAgfVxyXG5cclxuICBzZXQgY2xvdGhlQ29sb3IyKHZhbHVlOiBDbG90aGVDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuY2xvdGhlQ29sb3IyICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmNsb3RoZUNvbG9yMiA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnJlZnJlc2hBdmF0YXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjbG90aGVDb2xvcjIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5jbG90aGVDb2xvcjI7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xvdGhlQ29sb3IyVmlzaWJsZSgpIHtcclxuICAgIHJldHVybiAhKHRoaXMuY2xvdGhlVHlwZSA9PT0gQ2xvdGhlVHlwZS5TaGlydFNjb29wTmVjayB8fCB0aGlzLmNsb3RoZVR5cGUgPT09IENsb3RoZVR5cGUuU2hpcnRWTmVjayk7XHJcbiAgfVxyXG5cclxuICBzZXQgY2xvdGhlQ29sb3IzKHZhbHVlOiBDbG90aGVDb2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuY2xvdGhlQ29sb3IzICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmNsb3RoZUNvbG9yMyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnJlZnJlc2hBdmF0YXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjbG90aGVDb2xvcjMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5jbG90aGVDb2xvcjM7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xvdGhlQ29sb3IzVmlzaWJsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNsb3RoZVR5cGUgPT09IENsb3RoZVR5cGUuQmxhemVyU2hpcnQgfHwgdGhpcy5jbG90aGVUeXBlID09PSBDbG90aGVUeXBlLkJsYXplclN3ZWF0ZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xvdGhlQ29sb3JzKCk6IEtleVZhbHVlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzKENsb3RoZUNvbG9yKTtcclxuICB9XHJcbiAgZ2V0IGNsb3RoZUNvbG9yczIoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXMoQ2xvdGhlQ29sb3IpLmZpbHRlcihzID0+IHRoaXMuY2xvdGhlQ29sb3IgIT09IHMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNsb3RoZUNvbG9yczMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXMoQ2xvdGhlQ29sb3IpLmZpbHRlcihzID0+IHRoaXMuY2xvdGhlQ29sb3IgIT09IHMudmFsdWUgJiYgdGhpcy5jbG90aGVDb2xvcjIgIT09IHMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIEV5ZSBUeXBlc1xyXG5cclxuICBzZXQgZXllVHlwZSh2YWx1ZTogRXllVHlwZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuZXllVHlwZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEF2YXRhci5leWVUeXBlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGV5ZVR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5leWVUeXBlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGV5ZVR5cGVzKCk6IEtleVZhbHVlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzV2l0aEV4Y2x1c2lvbnMoRXllVHlwZSwgdGhpcy5hdmF0YXJFeGNsdXNpb24gJiZcclxuICAgICAgdGhpcy5hdmF0YXJFeGNsdXNpb24uZXllVHlwZXMgPyB0aGlzLmF2YXRhckV4Y2x1c2lvbi5leWVUeXBlcyA6IFtdKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBOb3NlIFR5cGVcclxuXHJcbiAgc2V0IG5vc2VUeXBlKHZhbHVlOiBOb3NlVHlwZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIubm9zZVR5cGUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIubm9zZVR5cGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbm9zZVR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5ub3NlVHlwZTtcclxuICB9XHJcblxyXG4gIGdldCBub3NlVHlwZXMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXNXaXRoRXhjbHVzaW9ucyhOb3NlVHlwZSwgdGhpcy5hdmF0YXJFeGNsdXNpb24gJiZcclxuICAgICAgdGhpcy5hdmF0YXJFeGNsdXNpb24ubm9zZVR5cGVzID8gdGhpcy5hdmF0YXJFeGNsdXNpb24ubm9zZVR5cGVzIDogW10pO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIEV5ZWJyb3cgVHlwZSBhbmQgQ29sb3JcclxuXHJcbiAgc2V0IGV5ZWJyb3dUeXBlKHZhbHVlOiBFeWVicm93VHlwZSkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuZXllYnJvd1R5cGUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuZXllYnJvd1R5cGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZXllYnJvd1R5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5leWVicm93VHlwZTtcclxuICB9XHJcblxyXG4gIGdldCBleWVicm93VHlwZXMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXNXaXRoRXhjbHVzaW9ucyhFeWVicm93VHlwZSwgdGhpcy5hdmF0YXJFeGNsdXNpb24gJiZcclxuICAgICAgdGhpcy5hdmF0YXJFeGNsdXNpb24uZXllYnJvd1R5cGVzID8gdGhpcy5hdmF0YXJFeGNsdXNpb24uZXllYnJvd1R5cGVzIDogW10pO1xyXG4gIH1cclxuXHJcbiAgc2V0IGV5ZWJyb3dDb2xvcih2YWx1ZTogSGFpckNvbG9yKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEF2YXRhci5leWVicm93Q29sb3IgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuZXllYnJvd0NvbG9yID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGV5ZWJyb3dDb2xvcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QXZhdGFyLmV5ZWJyb3dDb2xvcjtcclxuICB9XHJcblxyXG4gIGdldCBleWVicm93Q29sb3JzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzKEhhaXJDb2xvcik7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gTW91dGggVHlwZXNcclxuXHJcbiAgc2V0IG1vdXRoVHlwZSh2YWx1ZTogTW91dGhUeXBlKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudEF2YXRhci5tb3V0aFR5cGUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIubW91dGhUeXBlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaEF2YXRhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1vdXRoVHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QXZhdGFyLm1vdXRoVHlwZTtcclxuICB9XHJcblxyXG4gIGdldCBtb3V0aFR5cGVzKCk6IEtleVZhbHVlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0S2V5VmFsdWVzV2l0aEV4Y2x1c2lvbnMoTW91dGhUeXBlLCB0aGlzLmF2YXRhckV4Y2x1c2lvbiAmJlxyXG4gICAgICB0aGlzLmF2YXRhckV4Y2x1c2lvbi5tb3V0aFR5cGVzID8gdGhpcy5hdmF0YXJFeGNsdXNpb24ubW91dGhUeXBlcyA6IFtdKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBQZXQgVHlwZXNcclxuXHJcbiAgc2V0IHBldFR5cGUodmFsdWU6IFBldFR5cGUpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50QXZhdGFyLnBldFR5cGUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIucGV0VHlwZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnJlZnJlc2hBdmF0YXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBwZXRUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBdmF0YXIucGV0VHlwZTtcclxuICB9XHJcblxyXG4gIGdldCBwZXRUeXBlcygpOiBLZXlWYWx1ZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEtleVZhbHVlc1dpdGhFeGNsdXNpb25zKFBldFR5cGUsIHRoaXMuYXZhdGFyRXhjbHVzaW9uICYmXHJcbiAgICAgIHRoaXMuYXZhdGFyRXhjbHVzaW9uLnBldFR5cGVzID8gdGhpcy5hdmF0YXJFeGNsdXNpb24ucGV0VHlwZXMgOiBbXSk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gQXdhcmQgVHlwZVxyXG5cclxuICBzZXQgYXdhcmRUeXBlKHZhbHVlOiBBd2FyZFR5cGUpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50QXZhdGFyLmF3YXJkVHlwZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEF2YXRhci5hd2FyZFR5cGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYXdhcmRUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRBdmF0YXIuYXdhcmRUeXBlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF3YXJkVHlwZXMoKTogS2V5VmFsdWVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRLZXlWYWx1ZXNXaXRoRXhjbHVzaW9ucyhBd2FyZFR5cGUsIHRoaXMuYXZhdGFyRXhjbHVzaW9uICYmXHJcbiAgICAgIHRoaXMuYXZhdGFyRXhjbHVzaW9uLmF3YXJkVHlwZXMgPyB0aGlzLmF2YXRhckV4Y2x1c2lvbi5hd2FyZFR5cGVzIDogW10pO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIFNraW4gQ29sb3JzXHJcblxyXG4gIHNldCBza2luQ29sb3IodmFsdWU6IFNraW5Db2xvcikge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRBdmF0YXIuc2tpbkNvbG9yICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnNraW5Db2xvciA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnJlZnJlc2hBdmF0YXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBza2luQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEF2YXRhci5za2luQ29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgc2tpbkNvbG9ycygpOiBLZXlWYWx1ZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmdldEtleVZhbHVlcyhTa2luQ29sb3IpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIENvbG9yIENvbnZlcnRlcnNcclxuXHJcbiAgYWNjZXNzb3JpZXNDb2xvckNvbnZlcnQodmFsdWU6IEFjY2Vzc29yaWVzQ29sb3IpIHtcclxuICAgIHJldHVybiBhY2Nlc3Nvcmllc0NvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaGFpckNvbG9yQ29udmVydCh2YWx1ZTogSGFpckNvbG9yKSB7XHJcbiAgICByZXR1cm4gaGFpckNvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2tpbkNvbG9yQ29udmVydCh2YWx1ZTogU2tpbkNvbG9yKSB7XHJcbiAgICByZXR1cm4gc2tpbkNvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvdGhlQ29sb3JDb252ZXJ0KHZhbHVlOiBDbG90aGVDb2xvcikge1xyXG4gICAgcmV0dXJuIGNsb3RoZUNvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYmFja2dyb3VuZENvbG9yQ29udmVydCh2YWx1ZTogQmFja2dyb3VuZENvbG9yKSB7XHJcbiAgICByZXR1cm4gYmFja2dyb3VuZENvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaGF0Q29sb3JDb252ZXJ0KHZhbHVlOiBIYXRDb2xvcikge1xyXG4gICAgcmV0dXJuIGhhdENvbG9yVHJhbnNsYXRpb24odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBzZWxlY3RTdmcoKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zdmdJZCk7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICBlbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNhdmVBdmF0YXJFbmFibGVkKCkge1xyXG4gICAgaWYgKHRoaXMuX2xhc3RTYXZlZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzRXF1YWwodGhpcy5fY3VycmVudEF2YXRhciwgdGhpcy5fbGFzdFNhdmVkKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBzYXZlQXZhdGFyKCkge1xyXG4gICAgaWYgKHRoaXMuc3ZnICE9PSAnJykge1xyXG4gICAgICBjb25zdCBzYXZlQXZhdGFyOiBBdmF0YXJTZWxlY3Rpb24gPSB7XHJcbiAgICAgICAgYXZhdGFyU3R5bGU6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLmF2YXRhclN0eWxlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5hdmF0YXJTZWxlY3Rpb24uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgIHRvcFR5cGU6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLnRvcFR5cGUsXHJcbiAgICAgICAgaGFpckNvbG9yOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5oYWlyQ29sb3IsXHJcbiAgICAgICAgZmFjaWFsSGFpclR5cGU6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLmZhY2lhbEhhaXJUeXBlLFxyXG4gICAgICAgIGZhY2lhbEhhaXJDb2xvcjogdGhpcy5hdmF0YXJTZWxlY3Rpb24uZmFjaWFsSGFpckNvbG9yLFxyXG4gICAgICAgIGNsb3RoZVR5cGU6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLmNsb3RoZVR5cGUsXHJcbiAgICAgICAgZ3JhcGhpY1R5cGU6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLmdyYXBoaWNUeXBlLFxyXG4gICAgICAgIGNsb3RoZUNvbG9yOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5jbG90aGVDb2xvcixcclxuICAgICAgICBjbG90aGVDb2xvcjI6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLmNsb3RoZUNvbG9yMixcclxuICAgICAgICBjbG90aGVDb2xvcjM6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLmNsb3RoZUNvbG9yMyxcclxuICAgICAgICBleWVUeXBlOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5leWVUeXBlLFxyXG4gICAgICAgIGV5ZWJyb3dUeXBlOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5leWVicm93VHlwZSxcclxuICAgICAgICBleWVicm93Q29sb3I6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLmV5ZWJyb3dDb2xvcixcclxuICAgICAgICBtb3V0aFR5cGU6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLm1vdXRoVHlwZSxcclxuICAgICAgICBza2luQ29sb3I6IHRoaXMuYXZhdGFyU2VsZWN0aW9uLnNraW5Db2xvcixcclxuICAgICAgICBwZXRUeXBlOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5wZXRUeXBlLFxyXG4gICAgICAgIGF3YXJkVHlwZTogdGhpcy5hdmF0YXJTZWxlY3Rpb24uYXdhcmRUeXBlLFxyXG4gICAgICAgIGhhdENvbG9yOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5oYXRDb2xvcixcclxuICAgICAgICBhY2Nlc3Nvcmllc0NvbG9yOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5hY2Nlc3Nvcmllc0NvbG9yLFxyXG4gICAgICAgIGFjY2Vzc29yaWVzVHlwZTogdGhpcy5hdmF0YXJTZWxlY3Rpb24uYWNjZXNzb3JpZXNUeXBlLFxyXG4gICAgICAgIG5vc2VUeXBlOiB0aGlzLmF2YXRhclNlbGVjdGlvbi5ub3NlVHlwZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmF2YXRhclNhdmVkLmVtaXQoeyBhdmF0YXJTZWxlY3Rpb246IHNhdmVBdmF0YXIsIHN2ZzogdGhpcy5zdmcgfSk7XHJcbiAgICAgIHRoaXMuX2xhc3RTYXZlZCA9IHNhdmVBdmF0YXI7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXZlcnQoKSB7XHJcbiAgICBpZiAodGhpcy5fbGFzdFNhdmVkKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIgPSB7XHJcbiAgICAgICAgYXZhdGFyU3R5bGU6IHRoaXMuX2xhc3RTYXZlZC5hdmF0YXJTdHlsZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuX2xhc3RTYXZlZC5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgdG9wVHlwZTogdGhpcy5fbGFzdFNhdmVkLnRvcFR5cGUsXHJcbiAgICAgICAgaGFpckNvbG9yOiB0aGlzLl9sYXN0U2F2ZWQuaGFpckNvbG9yLFxyXG4gICAgICAgIGZhY2lhbEhhaXJUeXBlOiB0aGlzLl9sYXN0U2F2ZWQuZmFjaWFsSGFpclR5cGUsXHJcbiAgICAgICAgZmFjaWFsSGFpckNvbG9yOiB0aGlzLl9sYXN0U2F2ZWQuZmFjaWFsSGFpckNvbG9yLFxyXG4gICAgICAgIGNsb3RoZVR5cGU6IHRoaXMuX2xhc3RTYXZlZC5jbG90aGVUeXBlLFxyXG4gICAgICAgIGdyYXBoaWNUeXBlOiB0aGlzLl9sYXN0U2F2ZWQuZ3JhcGhpY1R5cGUsXHJcbiAgICAgICAgY2xvdGhlQ29sb3I6IHRoaXMuX2xhc3RTYXZlZC5jbG90aGVDb2xvcixcclxuICAgICAgICBjbG90aGVDb2xvcjI6IHRoaXMuX2xhc3RTYXZlZC5jbG90aGVDb2xvcjIsXHJcbiAgICAgICAgY2xvdGhlQ29sb3IzOiB0aGlzLl9sYXN0U2F2ZWQuY2xvdGhlQ29sb3IzLFxyXG4gICAgICAgIGV5ZVR5cGU6IHRoaXMuX2xhc3RTYXZlZC5leWVUeXBlLFxyXG4gICAgICAgIGV5ZWJyb3dUeXBlOiB0aGlzLl9sYXN0U2F2ZWQuZXllYnJvd1R5cGUsXHJcbiAgICAgICAgZXllYnJvd0NvbG9yOiB0aGlzLl9sYXN0U2F2ZWQuZXllYnJvd0NvbG9yLFxyXG4gICAgICAgIG1vdXRoVHlwZTogdGhpcy5fbGFzdFNhdmVkLm1vdXRoVHlwZSxcclxuICAgICAgICBza2luQ29sb3I6IHRoaXMuX2xhc3RTYXZlZC5za2luQ29sb3IsXHJcbiAgICAgICAgcGV0VHlwZTogdGhpcy5fbGFzdFNhdmVkLnBldFR5cGUsXHJcbiAgICAgICAgYXdhcmRUeXBlOiB0aGlzLl9sYXN0U2F2ZWQuYXdhcmRUeXBlLFxyXG4gICAgICAgIGhhdENvbG9yOiB0aGlzLl9sYXN0U2F2ZWQuaGF0Q29sb3IsXHJcbiAgICAgICAgYWNjZXNzb3JpZXNDb2xvcjogdGhpcy5fbGFzdFNhdmVkLmFjY2Vzc29yaWVzQ29sb3IsXHJcbiAgICAgICAgYWNjZXNzb3JpZXNUeXBlOiB0aGlzLl9sYXN0U2F2ZWQuYWNjZXNzb3JpZXNUeXBlLFxyXG4gICAgICAgIG5vc2VUeXBlOiB0aGlzLl9sYXN0U2F2ZWQubm9zZVR5cGVcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJhbmRvbUF2YXRhcigpIHtcclxuICAgIGlmICghdGhpcy5ub0NvbG9yQmFja2dyb3VuZCkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmF2YXRhclN0eWxlID0gdGhpcy5yYW5kb21FbnVtVmFsdWVXaXRoRXhjbHVzaW9ucyhBdmF0YXJTdHlsZSwgdGhpcy5hdmF0YXJTdHlsZXMpO1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmJhY2tncm91bmRDb2xvciA9IHRoaXMucmFuZG9tRW51bVZhbHVlKEJhY2tncm91bmRDb2xvcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jdXJyZW50QXZhdGFyLnRvcFR5cGUgPSB0aGlzLnJhbmRvbUVudW1WYWx1ZVdpdGhFeGNsdXNpb25zKFRvcFR5cGUsIHRoaXMudG9wVHlwZXMpO1xyXG4gICAgdGhpcy5fY3VycmVudEF2YXRhci5oYWlyQ29sb3IgPSB0aGlzLnJhbmRvbUVudW1WYWx1ZShIYWlyQ29sb3IpO1xyXG4gICAgaWYgKCF0aGlzLm5vRmFjaWFsSGFpcikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmZhY2lhbEhhaXJUeXBlID0gdGhpcy5yYW5kb21FbnVtVmFsdWVXaXRoRXhjbHVzaW9ucyhGYWNpYWxIYWlyVHlwZSwgdGhpcy5mYWNpYWxIYWlyVHlwZXMpO1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmZhY2lhbEhhaXJDb2xvciA9IHRoaXMucmFuZG9tRW51bVZhbHVlKEhhaXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmNsb3RoZVR5cGUgPSB0aGlzLnJhbmRvbUVudW1WYWx1ZVdpdGhFeGNsdXNpb25zKENsb3RoZVR5cGUsIHRoaXMuY2xvdGhlVHlwZXMpO1xyXG4gICAgdGhpcy5fY3VycmVudEF2YXRhci5ncmFwaGljVHlwZSA9IHRoaXMucmFuZG9tRW51bVZhbHVlV2l0aEV4Y2x1c2lvbnMoR3JhcGhpY1R5cGUsIHRoaXMuZ3JhcGhpY1R5cGVzKTtcclxuICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuY2xvdGhlQ29sb3IgPSB0aGlzLnJhbmRvbUVudW1WYWx1ZShDbG90aGVDb2xvcik7XHJcbiAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmNsb3RoZUNvbG9yMiA9IHRoaXMucmFuZG9tRW51bVZhbHVlKENsb3RoZUNvbG9yKTtcclxuICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuY2xvdGhlQ29sb3IzID0gdGhpcy5yYW5kb21FbnVtVmFsdWUoQ2xvdGhlQ29sb3IpO1xyXG4gICAgdGhpcy5fY3VycmVudEF2YXRhci5leWVUeXBlID0gdGhpcy5yYW5kb21FbnVtVmFsdWVXaXRoRXhjbHVzaW9ucyhFeWVUeXBlLCB0aGlzLmV5ZVR5cGVzKTtcclxuICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuZXllYnJvd1R5cGUgPSB0aGlzLnJhbmRvbUVudW1WYWx1ZVdpdGhFeGNsdXNpb25zKEV5ZWJyb3dUeXBlLCB0aGlzLmV5ZWJyb3dUeXBlcyk7XHJcbiAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmV5ZWJyb3dDb2xvciA9IHRoaXMucmFuZG9tRW51bVZhbHVlKEhhaXJDb2xvcik7XHJcbiAgICB0aGlzLl9jdXJyZW50QXZhdGFyLm1vdXRoVHlwZSA9IHRoaXMucmFuZG9tRW51bVZhbHVlV2l0aEV4Y2x1c2lvbnMoTW91dGhUeXBlLCB0aGlzLm1vdXRoVHlwZXMpO1xyXG4gICAgdGhpcy5fY3VycmVudEF2YXRhci5za2luQ29sb3IgPSB0aGlzLnJhbmRvbUVudW1WYWx1ZShTa2luQ29sb3IpO1xyXG4gICAgdGhpcy5fY3VycmVudEF2YXRhci5wZXRUeXBlID0gdGhpcy5yYW5kb21FbnVtVmFsdWVXaXRoRXhjbHVzaW9ucyhQZXRUeXBlLCB0aGlzLnBldFR5cGVzKTtcclxuICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuYXdhcmRUeXBlID0gdGhpcy5yYW5kb21FbnVtVmFsdWVXaXRoRXhjbHVzaW9ucyhBd2FyZFR5cGUsIHRoaXMuYXdhcmRUeXBlcyk7XHJcbiAgICB0aGlzLl9jdXJyZW50QXZhdGFyLmhhdENvbG9yID0gdGhpcy5yYW5kb21FbnVtVmFsdWUoSGF0Q29sb3IpO1xyXG4gICAgdGhpcy5fY3VycmVudEF2YXRhci5hY2Nlc3Nvcmllc1R5cGUgPSB0aGlzLnJhbmRvbUVudW1WYWx1ZVdpdGhFeGNsdXNpb25zKEFjY2Vzc29yaWVzVHlwZSwgdGhpcy5hY2Nlc3Nvcmllc1R5cGVzKTtcclxuICAgIHRoaXMuX2N1cnJlbnRBdmF0YXIuYWNjZXNzb3JpZXNDb2xvciA9IHRoaXMucmFuZG9tRW51bVZhbHVlKEFjY2Vzc29yaWVzQ29sb3IpO1xyXG4gICAgaWYgKCF0aGlzLm5vTm9zZSkge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QXZhdGFyLm5vc2VUeXBlID0gdGhpcy5yYW5kb21FbnVtVmFsdWVXaXRoRXhjbHVzaW9ucyhOb3NlVHlwZSwgdGhpcy5ub3NlVHlwZXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZWZyZXNoQXZhdGFyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRXF1YWwob2JqQTogYW55LCBvYmpCOiBhbnkpIHtcclxuICAgIC8vIENyZWF0ZSBhcnJheXMgb2YgcHJvcGVydHkgbmFtZXNcclxuICAgIGNvbnN0IGFQcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iakEpO1xyXG4gICAgY29uc3QgYlByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqQik7XHJcbiAgICAvLyBJZiBjb3VudCBvZiBwcm9wZXJ0aWVzIGlzIGRpZmZlcmVudCxcclxuICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XHJcbiAgICBpZiAoYVByb3BzLmxlbmd0aCAhPT0gYlByb3BzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFQcm9wcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgY29uc3QgcHJvcE5hbWUgPSBhUHJvcHNbaV07XHJcbiAgICAgIC8vIElmIHZhbHVlcyBvZiBzYW1lIHByb3BlcnR5IGFyZSBub3QgZXF1YWwsXHJcbiAgICAgIC8vIG9iamVjdHMgYXJlIG5vdCBlcXVpdmFsZW50XHJcbiAgICAgIGlmIChvYmpBW3Byb3BOYW1lXSAhPT0gb2JqQltwcm9wTmFtZV0pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElmIHdlIG1hZGUgaXQgdGhpcyBmYXIsIG9iamVjdHNcclxuICAgIC8vIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnRcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByYW5kb21LZXk8VD4ob2JqZWN0OiBUKToga2V5b2YgVCB7XHJcbiAgICBjb25zdCBhcnJheVZhbHVlcyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XHJcbiAgICBjb25zdCBhcnJheVZhbHVlID0gYXJyYXlWYWx1ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXlWYWx1ZXMubGVuZ3RoKV07XHJcblxyXG4gICAgcmV0dXJuIG9iamVjdFthcnJheVZhbHVlXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmFuZG9tRW51bVZhbHVlPFQ+KGVudW1PYmplY3Q6IFQpIHtcclxuICAgIHJldHVybiBlbnVtT2JqZWN0W3RoaXMucmFuZG9tS2V5KGVudW1PYmplY3QpXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmFuZG9tRW51bVZhbHVlV2l0aEV4Y2x1c2lvbnM8VD4oZW51bU9iamVjdDogVCwgdmFsdWVzOiB7IHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcgfVtdKSB7XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWVzLmxlbmd0aCldO1xyXG5cclxuICAgIHJldHVybiBlbnVtT2JqZWN0W3ZhbHVlLnZhbHVlXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0S2V5VmFsdWVzPFQ+KGVudW1PYmplY3Q6IFQpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbnVtT2JqZWN0KS5tYXAoa2V5ID0+ICh7IHZhbHVlOiBrZXksIGxhYmVsOiBlbnVtT2JqZWN0W2tleV0gfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRLZXlWYWx1ZXNXaXRoRXhjbHVzaW9uczxUPihlbnVtT2JqZWN0OiBULCBleGNsdWRlZFZhbHVlczogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlbnVtT2JqZWN0KS5maWx0ZXIocyA9PiBleGNsdWRlZFZhbHVlcy5pbmRleE9mKHMpID09PSAtMSkubWFwKGtleSA9PiAoeyB2YWx1ZToga2V5LCBsYWJlbDogZW51bU9iamVjdFtrZXldIH0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVmcmVzaEF2YXRhcigpIHtcclxuXHJcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcblxyXG4gICAgaWYgKHN2Z0VsZW1lbnQpIHtcclxuXHJcbiAgICAgIC8vIHJlbW92ZSBjdXJyZW50IHVybCBmcm9tIHVybCgjKSAtIHRoaXMgaXMgYSBoYWNrIHRvIGdldCBzdmdcclxuICAgICAgLy8gZmlsdGVycyB0byB3b3JrIGluIHNhZmFyaSBhbmQgYW5ndWxhclxyXG5cclxuICAgICAgbGV0IHN2ZyA9IHN2Z0VsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UobmV3IFJlZ0V4cCh3aW5kb3cubG9jYXRpb24uaHJlZiwgJ2cnKSwgJycpO1xyXG5cclxuICAgICAgLy8gcmVtb3ZlIGNvbW1lbnRzXHJcbiAgICAgIHN2ZyA9IHN2Zy5yZXBsYWNlKC88IS0tW14+XSotLT4vZywgJycpO1xyXG5cclxuICAgICAgLy8gcmVtb3ZlIGFuZ3VsYXIgYWRkaXRpb25zXHJcblxyXG4gICAgICBzdmcgPSBzdmcucmVwbGFjZSgvbmctcmVmbGVjdC4rPz1cIi4qP1wiL2csICcnKTtcclxuXHJcbiAgICAgIC8vIHJlbW92ZSBraXAgZWxlbWVudHNcclxuICAgICAgc3ZnID0gc3ZnLnJlcGxhY2UoL2tpcC1jdXN0b20tLis/PVwiLio/XCIvZywgJycpO1xyXG5cclxuICAgICAgLy8gZml4IHhsaW5rXHJcblxyXG4gICAgICBzdmcgPSBzdmcucmVwbGFjZSgneG1sbnNYbGluaycsICd4bWxuczp4bGluaycpO1xyXG5cclxuICAgICAgdGhpcy5zdmcgPSBzdmc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdmcgPSAnJztcclxuICAgIH1cclxuICAgIC8vIHRoaXMudXJsID0gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmwpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==