/* tslint:disable:forin */

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { accessoriesColorTranslation } from './colors/accessories-color-translation';
import { backgroundColorTranslation } from './colors/background-color-translation';
import { clotheColorTranslation } from './colors/clothe-color-translation';
import { earringColorTranslation } from './colors/ear-ring-color-translation';
import { hairColorTranslation } from './colors/hair-color-translation';
import { hatColorTranslation } from './colors/hat-color-translation';
import { skinColorTranslation } from './colors/skin-color-translation';
import { randomId } from './helper/randomid';
import {
  tabIndexes, AccessoriesColor, AccessoriesType, AvatarExclusion, AvatarSelection, AvatarStyle,
  AwardType, BackgroundColor, ClotheColor, ClotheType, EarringColor, EarringType, EyebrowType,
  EyeType, FacialHairType, GraphicType, HairColor, HatColor, MouthType,
  NoseType,
  PetType, SkinColor, TopType
} from './options';

export interface KeyValue {
  value: string;
  label: string;
}

export interface SaveAvatar {
  avatarSelection: AvatarSelection;
  svg: string;
}

export interface AvatarText {
  save: string;
  random: string;
  revert: string;
  svg: string;
  background: string;
  backgroundColor: string;
  eyes: string;
  eyebrows: string;
  eyebrowColors: string;
  accessories: string;
  accessoryColors: string;
  facialHairs: string;
  facialHairColors: string;
  noses: string;
  mouths: string;
  pets: string;
  awards: string;
  hatsAndHairStyles: string;
  hairColors: string;
  hatColors: string;
  clothes: string;
  clotheColors1: string;
  clotheColors2: string;
  clotheColors3: string;
  graphics: string;
  skinColors: string;
  earrings: string;
  earringColors: string;
}

@Component({
  selector: 'kip-custom-avatar',
  styleUrls: ['./custom-avatar.css'],
  templateUrl: './custom-avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarComponent {

  // Current Avatar options

  @Input() set avatarSelection(value: AvatarSelection) {
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
        noseType: value.noseType ? value.noseType : this._currentAvatar.noseType,
        earringType: value.earringType,
        earringColor: value.earringColor
      };
      this._lastSaved = value;
      this.changeDetectorRef.markForCheck();
    }
  }

  get avatarSelection(): AvatarSelection {
    return this._currentAvatar;
  }

  // #region Background Color

  set backgroundColor(value: BackgroundColor) {
    if (this._currentAvatar.backgroundColor !== value) {
      this._currentAvatar.backgroundColor = value;
      this.refreshAvatar();
    }
  }

  get backgroundColor() {
    return this._currentAvatar.backgroundColor;
  }

  get backgroundColors(): KeyValue[] {
    return this.getKeyValues(BackgroundColor);
  }

  // #endregion

  // #region Avatar Style

  set avatarStyle(value: AvatarStyle) {
    if (this._currentAvatar.avatarStyle !== value) {
      this._currentAvatar.avatarStyle = value;
      this.refreshAvatar();
    }
  }

  get avatarStyle() {
    return this._currentAvatar.avatarStyle;
  }

  get avatarStyles(): KeyValue[] {
    return this.getKeyValuesWithExclusions(AvatarStyle, this.avatarExclusion &&
      this.avatarExclusion.avatarStyles ? this.avatarExclusion.avatarStyles : []);
  }

  // #endregion

  // #region Top Type

  set topType(value: TopType) {
    if (this._currentAvatar.topType !== value) {
      this._currentAvatar.topType = value;
      this.refreshAvatar();
    }
  }

  get topType() {
    return this._currentAvatar.topType;
  }

  get topTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(TopType, this.avatarExclusion &&
      this.avatarExclusion.topTypes ? this.avatarExclusion.topTypes : []);
  }

  // #endregion

  // #region Accessories Type and Color

  set accessoriesType(value: AccessoriesType) {
    if (this._currentAvatar.accessoriesType !== value) {
      this._currentAvatar.accessoriesType = value;
      this.refreshAvatar();
    }
  }

  get accessoriesType() {
    return this._currentAvatar.accessoriesType;
  }

  get accessoriesTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(AccessoriesType, this.avatarExclusion &&
      this.avatarExclusion.accessoriesTypes ? this.avatarExclusion.accessoriesTypes : []);
  }

  set accessoriesColor(value: AccessoriesColor) {
    if (this._currentAvatar.accessoriesColor !== value) {
      this._currentAvatar.accessoriesColor = value;
      this.refreshAvatar();
    }
  }

  get accessoriesColor() {
    return this._currentAvatar.accessoriesColor;
  }

  get accessoriesColors(): KeyValue[] {
    return this.getKeyValues(AccessoriesColor);
  }

  // #endregion

  // #region Earring Type and Color

  set earringType(value: EarringType) {
    if (this._currentAvatar.earringType !== value) {
      this._currentAvatar.earringType = value;
      this.refreshAvatar();
    }
  }

  get earringType() {
    return this._currentAvatar.earringType;
  }

  get earringTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(EarringType, this.avatarExclusion &&
      this.avatarExclusion.earringTypes ? this.avatarExclusion.earringTypes : []);
  }

  set earringColor(value: EarringColor) {
    if (this._currentAvatar.earringColor !== value) {
      this._currentAvatar.earringColor = value;
      this.refreshAvatar();
    }
  }

  get earringColor() {
    return this._currentAvatar.earringColor;
  }

  get earringColors(): KeyValue[] {
    return this.getKeyValues(EarringColor);
  }

  // #endregion

  // #region Hair Color

  set hairColor(value: HairColor) {
    if (this._currentAvatar.hairColor !== value) {
      this._currentAvatar.hairColor = value;
      this.refreshAvatar();
    }
  }

  get hairColor() {
    return this._currentAvatar.hairColor;
  }

  // #endregion

  // #region Hat Color

  get hairColors(): KeyValue[] {
    return this.getKeyValues(HairColor);
  }

  set hatColor(value: HatColor) {
    if (this._currentAvatar.hatColor !== value) {
      this._currentAvatar.hatColor = value;
      this.refreshAvatar();
    }
  }

  get hatColor() {
    return this._currentAvatar.hatColor;
  }

  get hatColors(): KeyValue[] {
    return this.getKeyValues(HatColor);
  }

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

  set facialHairType(value: FacialHairType) {
    if (this._currentAvatar.facialHairType !== value) {
      this._currentAvatar.facialHairType = value;
      this.refreshAvatar();
    }
  }

  get facialHairType() {
    return this._currentAvatar.facialHairType;
  }

  get facialHairTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(FacialHairType, this.avatarExclusion &&
      this.avatarExclusion.facialHairTypes ? this.avatarExclusion.facialHairTypes : []);
  }

  set facialHairColor(value: HairColor) {
    if (this._currentAvatar.facialHairColor !== value) {
      this._currentAvatar.facialHairColor = value;
      this.refreshAvatar();
    }
  }

  get facialHairColor() {
    return this._currentAvatar.facialHairColor;
  }

  // #endregion

  // #region Clothe Type, Colors and Graphics

  set clotheType(value: ClotheType) {
    if (this._currentAvatar.clotheType !== value) {
      this._currentAvatar.clotheType = value;
      this.refreshAvatar();
    }
  }

  get clotheType() {
    return this._currentAvatar.clotheType;
  }

  get clotheTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(ClotheType, this.avatarExclusion &&
      this.avatarExclusion.clotheTypes ? this.avatarExclusion.clotheTypes : []);
  }

  set graphicType(value: GraphicType) {
    if (this._currentAvatar.graphicType !== value) {
      this._currentAvatar.graphicType = value;
      this.refreshAvatar();
    }
  }

  get graphicType() {
    return this._currentAvatar.graphicType;
  }

  get graphicTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(GraphicType, this.avatarExclusion &&
      this.avatarExclusion.graphicTypes ? this.avatarExclusion.graphicTypes : []);
  }

  set clotheColor(value: ClotheColor) {
    if (this._currentAvatar.clotheColor !== value) {
      this._currentAvatar.clotheColor = value;
      this.refreshAvatar();
    }
  }

  get clotheColor() {
    return this._currentAvatar.clotheColor;
  }

  set clotheColor2(value: ClotheColor) {
    if (this._currentAvatar.clotheColor2 !== value) {
      this._currentAvatar.clotheColor2 = value;
      this.refreshAvatar();
    }
  }

  get clotheColor2() {
    return this._currentAvatar.clotheColor2;
  }

  get clotheColor2Visible() {
    return !(this.clotheType === ClotheType.ShirtScoopNeck || this.clotheType === ClotheType.ShirtVNeck);
  }

  set clotheColor3(value: ClotheColor) {
    if (this._currentAvatar.clotheColor3 !== value) {
      this._currentAvatar.clotheColor3 = value;
      this.refreshAvatar();
    }
  }

  get clotheColor3() {
    return this._currentAvatar.clotheColor3;
  }

  get clotheColor3Visible() {
    return this.clotheType === ClotheType.BlazerShirt || this.clotheType === ClotheType.BlazerSweater;
  }

  get clotheColors(): KeyValue[] {
    return this.getKeyValues(ClotheColor);
  }
  get clotheColors2(): KeyValue[] {
    return this.getKeyValues(ClotheColor).filter(s => this.clotheColor !== s.value);
  }

  get clotheColors3(): KeyValue[] {
    return this.getKeyValues(ClotheColor).filter(s => this.clotheColor !== s.value && this.clotheColor2 !== s.value);
  }

  // #endregion

  // #region Eye Types

  set eyeType(value: EyeType) {
    if (this._currentAvatar.eyeType !== value) {
      this._currentAvatar.eyeType = value;
      this.refreshAvatar();
    }
  }

  get eyeType() {
    return this._currentAvatar.eyeType;
  }

  get eyeTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(EyeType, this.avatarExclusion &&
      this.avatarExclusion.eyeTypes ? this.avatarExclusion.eyeTypes : []);
  }

  // #endregion

  // #region Nose Type

  set noseType(value: NoseType) {
    if (this._currentAvatar.noseType !== value) {
      this._currentAvatar.noseType = value;
      this.refreshAvatar();
    }
  }

  get noseType() {
    return this._currentAvatar.noseType;
  }

  get noseTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(NoseType, this.avatarExclusion &&
      this.avatarExclusion.noseTypes ? this.avatarExclusion.noseTypes : []);
  }

  // #endregion

  // #region Eyebrow Type and Color

  set eyebrowType(value: EyebrowType) {
    if (this._currentAvatar.eyebrowType !== value) {
      this._currentAvatar.eyebrowType = value;
      this.refreshAvatar();
    }
  }

  get eyebrowType() {
    return this._currentAvatar.eyebrowType;
  }

  get eyebrowTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(EyebrowType, this.avatarExclusion &&
      this.avatarExclusion.eyebrowTypes ? this.avatarExclusion.eyebrowTypes : []);
  }

  set eyebrowColor(value: HairColor) {
    if (this._currentAvatar.eyebrowColor !== value) {
      this._currentAvatar.eyebrowColor = value;
      this.refreshAvatar();
    }
  }

  get eyebrowColor() {
    return this._currentAvatar.eyebrowColor;
  }

  get eyebrowColors() {
    return this.getKeyValues(HairColor);
  }

  // #endregion

  // #region Mouth Types

  set mouthType(value: MouthType) {
    if (this._currentAvatar.mouthType !== value) {
      this._currentAvatar.mouthType = value;
      this.refreshAvatar();
    }
  }

  get mouthType() {
    return this._currentAvatar.mouthType;
  }

  get mouthTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(MouthType, this.avatarExclusion &&
      this.avatarExclusion.mouthTypes ? this.avatarExclusion.mouthTypes : []);
  }

  // #endregion

  // #region Pet Types

  set petType(value: PetType) {
    if (this._currentAvatar.petType !== value) {
      this._currentAvatar.petType = value;
      this.refreshAvatar();
    }
  }

  get petType() {
    return this._currentAvatar.petType;
  }

  get petTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(PetType, this.avatarExclusion &&
      this.avatarExclusion.petTypes ? this.avatarExclusion.petTypes : []);
  }

  // #endregion

  // #region Award Type

  set awardType(value: AwardType) {
    if (this._currentAvatar.awardType !== value) {
      this._currentAvatar.awardType = value;
      this.refreshAvatar();
    }
  }

  get awardType() {
    return this._currentAvatar.awardType;
  }

  get awardTypes(): KeyValue[] {
    return this.getKeyValuesWithExclusions(AwardType, this.avatarExclusion &&
      this.avatarExclusion.awardTypes ? this.avatarExclusion.awardTypes : []);
  }

  // #endregion

  // #region Skin Colors

  set skinColor(value: SkinColor) {
    if (this._currentAvatar.skinColor !== value) {
      this._currentAvatar.skinColor = value;
      this.refreshAvatar();
    }
  }

  get skinColor() {
    return this._currentAvatar.skinColor;
  }

  get skinColors(): KeyValue[] {
    return this.getKeyValues(SkinColor);
  }

  get saveAvatarEnabled() {
    if (this._lastSaved === undefined) {
      return true;
    }

    if (this.isEqual(this._currentAvatar, this._lastSaved)) {
      return false;
    }

    return true;
  }

  private _currentAvatar: AvatarSelection =
    {
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
      noseType: NoseType.Default,
      earringType: EarringType.Blank,
      earringColor: EarringColor.Black
    };

  private _lastSaved: AvatarSelection | null = null;

  tabIndex: tabIndexes = tabIndexes.background;
  tabIndexes = tabIndexes;
  readonly id: string = randomId('avatar');
  readonly svgId: string = randomId('svgId');
  svg = '';

  // All the texts for avatar localization

  @Input() avatarText: AvatarText = {
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
    skinColors: 'Skin colours',
    earrings: 'Ear Rings',
    earringColors: 'Ear Ring colors'
  };

  // Controls whether noses can be selected

  @Input() noNose = true;

  // Controls whether pets can be selected

  @Input() noPet = true;

  // Controls whether awards can be selected

  @Input() noAward = true;

  // Controls whether ear-rings can be selected

  @Input() noEarring = true;

  // Controls whether an svg output button is available

  @Input() noSvgOutput = true;

  // Controls whether a random button is available

  @Input() noRandom = false;

  // Controls whethter saving is available

  @Input() noSave = false;

  // Controls whether facial hair is available (for kids/females etc)

  @Input() noFacialHair = false;

  // Controls whether the circle background and setting color for it is available

  @Input() noColorBackground = false;

  @Output() readonly avatarSaved: EventEmitter<SaveAvatar> = new EventEmitter<SaveAvatar>();

  // Optional parameter allowing choices to be turned off (for example may not want vomit as a choice for mouth options)

  @Input() avatarExclusion: AvatarExclusion = {
    mouthTypes: [MouthType.Vomit],
    graphicTypes: [GraphicType.Hola],
    topTypes: [TopType.Eyepatch],
    eyeTypes: [EyeType.Dizzy]
  };

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.refreshAvatar();
  }

  // #endregion

  // #region Color Converters

  accessoriesColorConvert(value: string) {
    return accessoriesColorTranslation(value as AccessoriesColor);
  }

  earringColorConvert(value: string) {
    return earringColorTranslation(value as EarringColor);
  }

  hairColorConvert(value: string) {
    return hairColorTranslation(value as HairColor);
  }

  skinColorConvert(value: string) {
    return skinColorTranslation(value as SkinColor);
  }

  clotheColorConvert(value: string) {
    return clotheColorTranslation(value as ClotheColor);
  }

  backgroundColorConvert(value: string) {
    return backgroundColorTranslation(value as BackgroundColor);
  }

  hatColorConvert(value: string) {
    return hatColorTranslation(value as HatColor);
  }

  // #endregion

  selectSvg() {
    const element = document.getElementById(this.svgId) as HTMLTextAreaElement;

    if (element !== null) {
      element.style.display = '';
    }
    setTimeout(() => {
      if (element !== null) {
        element.select();
        document.execCommand('copy');
        element.style.display = 'none';
      }
    }, 100);
  }

  saveAvatar() {
    if (this.svg !== '') {
      const saveAvatar: AvatarSelection = {
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
        noseType: this.avatarSelection.noseType,
        earringColor: this.avatarSelection.earringColor,
        earringType: this.avatarSelection.earringType
      };
      this.avatarSaved.emit({ avatarSelection: saveAvatar, svg: this.svg });
      this._lastSaved = saveAvatar;
      this.changeDetectorRef.markForCheck();
    }
  }

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
        noseType: this._lastSaved.noseType,
        earringType: this._lastSaved.earringType,
        earringColor: this._lastSaved.earringColor
      };
    }
  }

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
    if (!this.noEarring) {
      this._currentAvatar.earringType = this.randomEnumValueWithExclusions(EarringType, this.earringTypes);
    }
    this._currentAvatar.earringColor = this.randomEnumValue(EarringColor);
    this.refreshAvatar();
  }

  private isEqual(objA: any, objB: any) {
    // Create arrays of property names
    const aProps = Object.getOwnPropertyNames(objA);
    const bProps = Object.getOwnPropertyNames(objB);
    // If count of properties is different,
    // objects are not equivalent
    if (aProps.length !== bProps.length) {
      return false;
    }
    for (const propName of aProps) {
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

  private randomKey<T>(object: T): keyof T {
    const arrayValues = Object.keys(object);
    const arrayValue = arrayValues[Math.floor(Math.random() * arrayValues.length)];

    return object[arrayValue];
  }

  private randomEnumValue<T>(enumObject: T) {
    return enumObject[this.randomKey(enumObject)];
  }

  private randomEnumValueWithExclusions<T>(enumObject: T, values: { value: string; label: string }[]) {

    const value = values[Math.floor(Math.random() * values.length)];

    return enumObject[value.value];
  }

  private getKeyValues<T>(enumObject: T) {
    return Object.keys(enumObject).map(key => ({ value: key, label: enumObject[key] }));
  }

  private getKeyValuesWithExclusions<T>(enumObject: T, excludedValues: string[]) {
    return Object.keys(enumObject).filter(s => excludedValues.indexOf(s) === -1).map(key => ({ value: key, label: enumObject[key] }));
  }

  private refreshAvatar() {

    const svgElement = document.getElementById(this.id);

    if (svgElement) {

      // remove current url from url(#) - this is a hack to get svg
      // filters to work in safari and angular

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

    } else {
      this.svg = '';
    }
    // this.url = this.domSanitizer.bypassSecurityTrustUrl(url);
    this.changeDetectorRef.markForCheck();
  }

}
