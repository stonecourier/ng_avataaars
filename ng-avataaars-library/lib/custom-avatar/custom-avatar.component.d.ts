import { EventEmitter } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { AvatarStyle, TopType, AccessoriesType, HairColor, FacialHairType, ClotheType, ClotheColor, EyeType, EyebrowType, MouthType, SkinColor, BackgroundColor, GraphicType, PetType, AwardType, HatColor, AccessoriesColor, AvatarSelection, AvatarExclusion, NoseType } from './options';
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
}
export declare enum tabIndexes {
    background = 1,
    top = 2,
    eyes = 3,
    eyebrows = 4,
    accessory = 5,
    nose = 6,
    mouth = 7,
    facialHair = 8,
    clothes = 9,
    pet = 10,
    award = 11
}
export declare class CustomAvatarComponent {
    private changeDetectorRef;
    private _currentAvatar;
    private _lastSaved;
    constructor(changeDetectorRef: ChangeDetectorRef);
    tabIndex: tabIndexes;
    tabIndexes: typeof tabIndexes;
    id: string;
    svgId: string;
    svg: string;
    avatarText: AvatarText;
    noNose: boolean;
    noPet: boolean;
    noAward: boolean;
    noSvgOutput: boolean;
    noRandom: boolean;
    noSave: boolean;
    noFacialHair: boolean;
    noColorBackground: boolean;
    avatarSaved: EventEmitter<SaveAvatar>;
    avatarSelection: AvatarSelection;
    avatarExclusion: AvatarExclusion;
    backgroundColor: BackgroundColor;
    readonly backgroundColors: KeyValue[];
    avatarStyle: AvatarStyle;
    readonly avatarStyles: KeyValue[];
    topType: TopType;
    readonly topTypes: KeyValue[];
    accessoriesType: AccessoriesType;
    readonly accessoriesTypes: KeyValue[];
    accessoriesColor: AccessoriesColor;
    readonly accessoriesColors: KeyValue[];
    hairColor: HairColor;
    readonly hairColors: KeyValue[];
    hatColor: HatColor;
    readonly hatColors: KeyValue[];
    readonly hatColorVisible: boolean;
    facialHairType: FacialHairType;
    readonly facialHairTypes: KeyValue[];
    facialHairColor: HairColor;
    clotheType: ClotheType;
    readonly clotheTypes: KeyValue[];
    graphicType: GraphicType;
    readonly graphicTypes: KeyValue[];
    clotheColor: ClotheColor;
    clotheColor2: ClotheColor;
    readonly clotheColor2Visible: boolean;
    clotheColor3: ClotheColor;
    readonly clotheColor3Visible: boolean;
    readonly clotheColors: KeyValue[];
    readonly clotheColors2: KeyValue[];
    readonly clotheColors3: KeyValue[];
    eyeType: EyeType;
    readonly eyeTypes: KeyValue[];
    noseType: NoseType;
    readonly noseTypes: KeyValue[];
    eyebrowType: EyebrowType;
    readonly eyebrowTypes: KeyValue[];
    eyebrowColor: HairColor;
    readonly eyebrowColors: {
        value: string;
        label: any;
    }[];
    mouthType: MouthType;
    readonly mouthTypes: KeyValue[];
    petType: PetType;
    readonly petTypes: KeyValue[];
    awardType: AwardType;
    readonly awardTypes: KeyValue[];
    skinColor: SkinColor;
    readonly skinColors: KeyValue[];
    accessoriesColorConvert(value: AccessoriesColor): "" | "#262E33" | "#65C9FF" | "#5199E4" | "#25557C" | "#E6E6E6" | "#929598" | "#3C4F5C" | "#B1E2FF" | "#A7FFC4" | "#FFDEB5" | "#FFAFB9" | "#FFFFB1" | "#FF488E" | "#FF5C5C" | "#FFFFFF";
    hairColorConvert(value: HairColor): "" | "#A55728" | "#2C1B18" | "#B58143" | "#D6B370" | "#724133" | "#4A312C" | "#ECDCBF" | "#C93305" | "#E8E1E1" | "#F59797";
    skinColorConvert(value: SkinColor): "" | "#FD9841" | "#F8D25C" | "#FFDBB4" | "#EDB98A" | "#D08B5B" | "#AE5D29" | "#614335";
    clotheColorConvert(value: ClotheColor): "" | "#262E33" | "#65C9FF" | "#5199E4" | "#25557C" | "#E6E6E6" | "#929598" | "#3C4F5C" | "#B1E2FF" | "#A7FFC4" | "#FFDEB5" | "#FFAFB9" | "#FFFFB1" | "#FF488E" | "#FF5C5C" | "#f8f8ff";
    backgroundColorConvert(value: BackgroundColor): "" | "#65C9FF" | "#F59797" | "#8FD8FF" | "#EDE38C" | "#D24B88" | "#954BD2" | "#524BD2" | "#F44848" | "#4BD2A2" | "#4B88D2" | "#EAA95A";
    hatColorConvert(value: HatColor): "" | "#262E33" | "#65C9FF" | "#5199E4" | "#25557C" | "#E6E6E6" | "#929598" | "#3C4F5C" | "#B1E2FF" | "#A7FFC4" | "#FFDEB5" | "#FFAFB9" | "#FFFFB1" | "#FF488E" | "#FF5C5C" | "#FFFFFF";
    selectSvg(): void;
    readonly saveAvatarEnabled: boolean;
    saveAvatar(): void;
    revert(): void;
    randomAvatar(): void;
    private isEqual;
    private randomKey;
    private randomEnumValue;
    private randomEnumValueWithExclusions;
    private getKeyValues;
    private getKeyValuesWithExclusions;
    private refreshAvatar;
}
