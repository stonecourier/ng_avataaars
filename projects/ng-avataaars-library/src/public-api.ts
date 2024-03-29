/*
 * Public API Surface of ng-avataaars-library
 */
export {
  AvatarExclusion, AvatarSelection, AvatarStyle, TopType, AccessoriesType, HairColor, FacialHairType, ClotheType,
  ClotheColor, EyeType, EyebrowType, MouthType, SkinColor, BackgroundColor, GraphicType, PetType, AwardType,
  HatColor, AccessoriesColor, NoseType, EarringType, EarringColor
} from './lib/custom-avatar/options';
export {
  UrlFixPipe,
  SkinColorPipe,
  ClotheColorPipe
} from './lib/custom-avatar/pipes';
export { CustomAvatarComponent, SaveAvatar } from './lib/custom-avatar/custom-avatar.component';
export { CustomAvatarBaseComponent } from './lib/custom-avatar/avatar/avatar.component';
export * from './lib/ng-avataaars-library.module';
