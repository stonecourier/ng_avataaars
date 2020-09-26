import { Component, Input } from '@angular/core';
import { backgroundColorTranslation } from '../colors/background-color-translation';
import { skinColorTranslation } from '../colors/skin-color-translation';
import { randomId } from '../helper/randomid';
import { urlfix } from '../helper/urlfix';
import {
  AccessoriesColor, AccessoriesType, AvatarStyle, AwardType, BackgroundColor,
  ClotheColor, ClotheType, EarringColor, EarringType, EyebrowType,
  EyeType, FacialHairType, GraphicType, HairColor, HatColor, MouthType,
  NoseType, PetType, SkinColor, TopType
} from '../options';

@Component({
  selector: 'kip-custom-avatar-base',
  templateUrl: './avatar.component.html'
})

export class CustomAvatarBaseComponent {

  @Input() width: number | undefined = undefined;
  @Input() widthFull = false;
  @Input() height: number | undefined = undefined;
  @Input() transform = '';
  @Input() viewBox = '';
  @Input() noFeatures = false;
  @Input() noPet = false;
  @Input() noAward = false;
  @Input() avatarStyle: AvatarStyle = AvatarStyle.Transparent;
  @Input() svgClass = '';
  @Input() backgroundColor: BackgroundColor = BackgroundColor.ColorA;

  get backColor(): string {
    return backgroundColorTranslation(this.backgroundColor);
  }

  @Input() clotheType: ClotheType = ClotheType.BlazerShirt;
  @Input() graphicType: GraphicType = GraphicType.Bat;
  @Input() clotheColor: ClotheColor = ClotheColor.Black;
  @Input() clotheColor2: ClotheColor = ClotheColor.Black;
  @Input() clotheColor3: ClotheColor = ClotheColor.Black;
  @Input() topType: TopType = TopType.Hat;
  @Input() skinColor: SkinColor = SkinColor.Black;

  get color(): string {
    return skinColorTranslation(this.skinColor);
  }

  @Input() noseType: NoseType = NoseType.Default;
  @Input() mouthType: MouthType = MouthType.Default;
  @Input() eyeType: EyeType = EyeType.Happy;
  @Input() eyebrowType: EyebrowType = EyebrowType.Default;
  @Input() eyebrowColor: HairColor = HairColor.Black;
  @Input() accessoriesType: AccessoriesType = AccessoriesType.Blank;
  @Input() facialHairType: FacialHairType = FacialHairType.Blank;
  @Input() facialHairColor: HairColor = HairColor.Black;
  @Input() hairColor: HairColor = HairColor.Black;
  @Input() petType: PetType = PetType.None;

  get petTypeVisible(): boolean {
    return !this.noFeatures && this.petType !== PetType.None && !this.noPet;
  }

  @Input() awardType: AwardType = AwardType.None;

  get awardTypeVisible(): boolean {
    return !this.noFeatures && this.awardType !== AwardType.None && !this.noAward;
  }

  @Input() hatColor: HatColor = HatColor.Black;
  @Input() accessoriesColor: AccessoriesColor = AccessoriesColor.Black;
  @Input() earringType: EarringType = EarringType.Blank;
  @Input() earringColor: EarringColor = EarringColor.Black;

  readonly mask1: string = randomId('ptx-mask');
  readonly mask2: string = randomId('ptx-mask');
  readonly mask3: string = randomId('ptx-mask');
  readonly path1: string = randomId('ptx-path');
  readonly path3: string = randomId('ptx-path');
  readonly path5: string = randomId('ptx-path');

  urlFix(path: string): string {
    return urlfix(path);
  }
}
