import { Component, Input } from '@angular/core';
import {
  AvatarStyle, NoseType, MouthType, EyeType, EyebrowType,
  SkinColor, AccessoriesType, FacialHairType, HairColor, TopType,
  ClotheType, BackgroundColor, ClotheColor, GraphicType, PetType, AwardType,
  HatColor, AccessoriesColor
} from '../options';
import { randomId } from '../helper/randomid';
import { urlfix } from '../helper/urlfix';
import { backgroundColorTranslation } from '../colors/background-color-translation';
import { skinColorTranslation } from '../colors/skin-color-translation';

@Component({
  selector: 'kip-custom-avatar-base',
  templateUrl: './avatar.component.html',
})

export class CustomAvatarBaseComponent {

  private _backColor = '';
  private _backgroundColor: BackgroundColor;
  private _skinColor: SkinColor;
  private _color: string;

  @Input()
  width: number;

  @Input()
  widthFull: boolean;

  @Input()
  height: number;

  @Input()
  transform = '';

  @Input()
  viewBox = '';

  @Input()
  noFeatures = false;

  @Input()
  noPet = false;

  @Input()
  noAward = false;

  @Input()
  avatarStyle: AvatarStyle = AvatarStyle.Transparent;

  @Input()
  svgClass: string;

  @Input()
  set backgroundColor(value: BackgroundColor) {
    if (this._backgroundColor !== value) {
      this._backgroundColor = value;
      this._backColor = backgroundColorTranslation(value);
    }
  }

  get backgroundColor() {
    return this._backgroundColor;
  }

  get backColor() {
    return this._backColor;
  }

  @Input()
  clotheType: ClotheType;

  @Input()
  graphicType: GraphicType;

  @Input()
  clotheColor: ClotheColor;

  @Input()
  clotheColor2: ClotheColor;

  @Input()
  clotheColor3: ClotheColor;

  @Input()
  topType: TopType;

  @Input()
  set skinColor(value: SkinColor) {
    if (this._skinColor !== value) {
      this._skinColor = value;
      this._color = skinColorTranslation(value);
    }
  }

  get skinColor() {
    return this._skinColor;
  }

  get color() {
    return this._color;
  }

  @Input()
  noseType: NoseType;

  @Input()
  mouthType: MouthType;

  @Input()
  eyeType: EyeType;

  @Input()
  eyebrowType: EyebrowType;

  @Input()
  eyebrowColor: HairColor;

  @Input()
  accessoriesType: AccessoriesType;

  @Input()
  facialHairType: FacialHairType;

  @Input()
  facialHairColor: HairColor;

  @Input()
  hairColor: HairColor;

  @Input()
  petType: PetType;

  get petTypeVisible() {
    return !this.noFeatures && this.petType !== PetType.None && !this.noPet;
  }

  @Input()
  awardType: AwardType;

  get awardTypeVisible() {
    return !this.noFeatures && this.awardType !== AwardType.None && !this.noAward;
  }

  @Input()
  hatColor: HatColor;

  @Input()
  accessoriesColor: AccessoriesColor;

  mask1: string = randomId('kip-mask');
  mask2: string = randomId('kip-mask');
  mask3: string = randomId('kip-mask');
  path1: string = randomId('kip-path');
  path3: string = randomId('kip-path');
  path5: string = randomId('kip-path');

  urlFix(path: string) {
    return urlfix(path);
  }
}
