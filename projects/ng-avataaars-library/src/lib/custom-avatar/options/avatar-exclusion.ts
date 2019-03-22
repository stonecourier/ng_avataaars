import {
  AvatarStyle, TopType, AccessoriesType, FacialHairType, ClotheType,
  EyeType, EyebrowType, MouthType, GraphicType,
  PetType, AwardType, NoseType
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
}
