import {
  AvatarStyle, TopType, AccessoriesType, HairColor, FacialHairType, ClotheType,
  ClotheColor, EyeType, EyebrowType, MouthType, SkinColor, BackgroundColor, GraphicType,
  PetType, AwardType, HatColor, AccessoriesColor, NoseType
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
}
