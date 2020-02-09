import {
  AccessoriesType, AvatarStyle, AwardType, ClotheType, EarringType,
  EyebrowType, EyeType, FacialHairType, GraphicType,
  MouthType, NoseType, PetType, TopType
} from '../options';

export interface AvatarExclusion {
  avatarStyles?: AvatarStyle[];
  topTypes?: TopType[];
  accessoriesTypes?: AccessoriesType[];
  facialHairTypes?: FacialHairType[];
  clotheTypes?: ClotheType[];
  eyeTypes?: EyeType[];
  eyebrowTypes?: EyebrowType[];
  mouthTypes?: MouthType[];
  graphicTypes?: GraphicType[];
  petTypes?: PetType[];
  awardTypes?: AwardType[];
  noseTypes?: NoseType[];
  earringTypes?: EarringType[];
}
