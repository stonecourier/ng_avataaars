import {
  AccessoriesColor, AccessoriesType, AvatarStyle, AwardType, BackgroundColor, ClotheColor,
  ClotheType, EarringColor, EarringType, EyebrowType, EyeType, FacialHairType, GraphicType,
  HairColor, HatColor, MouthType, NoseType, PetType, SkinColor, TopType
} from '../options';

export interface AvatarSelection {
  avatarStyle: AvatarStyle;
  topType: TopType;
  accessoriesType: AccessoriesType;
  hairColor: HairColor;
  facialHairType: FacialHairType;
  facialHairColor: HairColor;
  clotheType: ClotheType;
  clotheColor: ClotheColor;
  clotheColor2: ClotheColor;
  clotheColor3: ClotheColor;
  eyeType: EyeType;
  eyebrowType: EyebrowType;
  eyebrowColor: HairColor;
  mouthType: MouthType;
  skinColor: SkinColor;
  backgroundColor: BackgroundColor;
  graphicType: GraphicType;
  petType: PetType;
  awardType: AwardType;
  hatColor: HatColor;
  accessoriesColor: AccessoriesColor;
  noseType: NoseType;
  earringType: EarringType;
  earringColor: EarringColor;
}
