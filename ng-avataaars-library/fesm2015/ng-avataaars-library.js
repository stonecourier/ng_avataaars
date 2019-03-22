import { CommonModule } from '@angular/common';
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef, Directive, TemplateRef, ContentChildren, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AvatarStyle = {
    Circle: 'Circle',
    Transparent: 'Transparent',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const TopType = {
    NoHair: 'NoHair',
    Eyepatch: 'Eyepatch',
    Hat: 'Hat',
    Hijab: 'Hijab',
    Turban: 'Turban',
    WinterHat1: 'WinterHat1',
    WinterHat2: 'WinterHat2',
    WinterHat3: 'WinterHat3',
    WinterHat4: 'WinterHat4',
    LongHairBigHair: 'LongHairBigHair',
    LongHairBob: 'LongHairBob',
    LongHairBun: 'LongHairBun',
    LongHairCurly: 'LongHairCurly',
    LongHairCurvy: 'LongHairCurvy',
    LongHairDreads: 'LongHairDreads',
    LongHairFrida: 'LongHairFrida',
    LongHairFro: 'LongHairFro',
    LongHairFroBand: 'LongHairFroBand',
    LongHairNotTooLong: 'LongHairNotTooLong',
    LongHairShavedSides: 'LongHairShavedSides',
    LongHairMiaWallace: 'LongHairMiaWallace',
    LongHairStraight: 'LongHairStraight',
    LongHairStraight2: 'LongHairStraight2',
    LongHairStraightStrand: 'LongHairStraightStrand',
    ShortHairDreads01: 'ShortHairDreads01',
    ShortHairDreads02: 'ShortHairDreads02',
    ShortHairFrizzle: 'ShortHairFrizzle',
    ShortHairShaggy: 'ShortHairShaggy',
    ShortHairShaggyMullet: 'ShortHairShaggyMullet',
    ShortHairShortCurly: 'ShortHairShortCurly',
    ShortHairShortFlat: 'ShortHairShortFlat',
    ShortHairShortRound: 'ShortHairShortRound',
    ShortHairShortWaved: 'ShortHairShortWaved',
    ShortHairSides: 'ShortHairSides',
    ShortHairTheCaesar: 'ShortHairTheCaesar',
    ShortHairTheCaesarSidePart: 'ShortHairTheCaesarSidePart',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AccessoriesType = {
    Blank: 'Blank',
    Kurt: 'Kurt',
    Prescription01: 'Prescription01',
    Prescription02: 'Prescription02',
    Round: 'Round',
    Sunglasses: 'Sunglasses',
    Wayfarers: 'Wayfarers',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const HairColor = {
    Auburn: 'Auburn',
    Black: 'Black',
    Blonde: 'Blonde',
    BlondeGolden: 'BlondeGolden',
    Brown: 'Brown',
    BrownDark: 'BrownDark',
    PastelPink: 'PastelPink',
    Platinum: 'Platinum',
    Red: 'Red',
    SilverGray: 'SilverGray',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const FacialHairType = {
    Blank: 'Blank',
    BeardMedium: 'BeardMedium',
    BeardLight: 'BeardLight',
    BeardMajestic: 'BeardMajestic',
    MoustacheFancy: 'MoustacheFancy',
    MoustacheMagnum: 'MoustacheMagnum',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ClotheType = {
    BlazerShirt: 'BlazerShirt',
    BlazerSweater: 'BlazerSweater',
    CollarSweater: 'CollarSweater',
    GraphicShirt: 'GraphicShirt',
    Hoodie: 'Hoodie',
    Overall: 'Overall',
    ShirtCrewNeck: 'ShirtCrewNeck',
    ShirtScoopNeck: 'ShirtScoopNeck',
    ShirtVNeck: 'ShirtVNeck',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ClotheColor = {
    Black: 'Black',
    Blue01: 'Blue01',
    Blue02: 'Blue02',
    Blue03: 'Blue03',
    Gray01: 'Gray01',
    Gray02: 'Gray02',
    Heather: 'Heather',
    PastelBlue: 'PastelBlue',
    PastelGreen: 'PastelGreen',
    PastelOrange: 'PastelOrange',
    PastelRed: 'PastelRed',
    PastelYellow: 'PastelYellow',
    Pink: 'Pink',
    Red: 'Red',
    White: 'White',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EyeType = {
    Close: 'Close',
    Cry: 'Cry',
    CryMirrored: 'CryMirrored',
    Default: 'Default',
    Dizzy: 'Dizzy',
    EyeRoll: 'EyeRoll',
    Happy: 'Happy',
    Hearts: 'Hearts',
    Side: 'Side',
    SideMirrored: 'SideMirrored',
    Squint: 'Squint',
    Surprised: 'Surprised',
    Wink: 'Wink',
    WinkMirrored: 'WinkMirrored',
    WinkWacky: 'WinkWacky',
    WinkWackyMirrored: 'WinkWackyMirrored',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const EyebrowType = {
    Angry: 'Angry',
    AngryNatural: 'AngryNatural',
    Default: 'Default',
    DefaultNatural: 'DefaultNatural',
    FlatNatural: 'FlatNatural',
    FrownNatural: 'FrownNatural',
    RaisedExcited: 'RaisedExcited',
    RaisedExcitedNatural: 'RaisedExcitedNatural',
    SadConcerned: 'SadConcerned',
    SadConcernedNatural: 'SadConcernedNatural',
    UnibrowNatural: 'UnibrowNatural',
    UpDown: 'UpDown',
    UpDownNatural: 'UpDownNatural',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MouthType = {
    Concerned: 'Concerned',
    Default: 'Default',
    Disbelief: 'Disbelief',
    Eating: 'Eating',
    Grimace: 'Grimace',
    Sad: 'Sad',
    ScreamOpen: 'ScreamOpen',
    Serious: 'Serious',
    Smile: 'Smile',
    Tongue: 'Tongue',
    Twinkle: 'Twinkle',
    Vomit: 'Vomit',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const SkinColor = {
    Tanned: 'Tanned',
    Yellow: 'Yellow',
    Pale: 'Pale',
    Light: 'Light',
    Brown: 'Brown',
    DarkBrown: 'DarkBrown',
    Black: 'Black',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const NoseType = {
    Default: 'Default',
    Clown: 'Clown',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const GraphicType = {
    Bat: 'Bat',
    Cumbia: 'Cumbia',
    Deer: 'Deer',
    Diamond: 'Diamond',
    Hola: 'Hola',
    Pizza: 'Pizza',
    Resist: 'Resist',
    Selena: 'Selena',
    Bear: 'Bear',
    SkullOutline: 'SkullOutline',
    Skull: 'Skull',
    IKip: 'IKip',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const BackgroundColor = {
    ColorA: 'ColorA',
    ColorB: 'ColorB',
    ColorC: 'ColorC',
    ColorD: 'ColorD',
    ColorE: 'ColorE',
    ColorF: 'ColorF',
    ColorG: 'ColorG',
    ColorH: 'ColorH',
    ColorI: 'ColorI',
    ColorJ: 'ColorJ',
    ColorK: 'ColorK',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const PetType = {
    None: 'None',
    Dog: 'Dog',
    Cat: 'Cat',
    Chick: 'Chick',
    Rabbit: 'Rabbit',
    Fish: 'Fish',
    Rat: 'Rat',
    Snake: 'Snake',
    Parrot: 'Parrot',
    Turtle: 'Turtle',
    Bird: 'Bird',
    Flea: 'Flea',
    Spider: 'Spider',
    Hamster: 'Hamster',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AwardType = {
    None: 'None',
    TrophyA: 'TrophyA',
    TrophyB: 'TrophyB',
    BirthdayA: 'BirthdayA',
    BirthdayB: 'BirthdayB',
    BirthdayC: 'BirthdayC',
    BirthdayD: 'BirthdayD',
    Correct: 'Correct',
    Incorrect: 'Incorrect',
    ThumbUp: 'ThumbUp',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const HatColor = {
    Black: 'Black',
    Blue01: 'Blue01',
    Blue02: 'Blue02',
    Blue03: 'Blue03',
    Gray01: 'Gray01',
    Gray02: 'Gray02',
    Heather: 'Heather',
    PastelBlue: 'PastelBlue',
    PastelGreen: 'PastelGreen',
    PastelOrange: 'PastelOrange',
    PastelRed: 'PastelRed',
    PastelYellow: 'PastelYellow',
    Pink: 'Pink',
    Red: 'Red',
    White: 'White',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const AccessoriesColor = {
    Black: 'Black',
    Blue01: 'Blue01',
    Blue02: 'Blue02',
    Blue03: 'Blue03',
    Gray01: 'Gray01',
    Gray02: 'Gray02',
    Heather: 'Heather',
    PastelBlue: 'PastelBlue',
    PastelGreen: 'PastelGreen',
    PastelOrange: 'PastelOrange',
    PastelRed: 'PastelRed',
    PastelYellow: 'PastelYellow',
    Pink: 'Pink',
    Red: 'Red',
    White: 'White',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} accessoriesColor
 * @return {?}
 */
function accessoriesColorTranslation(accessoriesColor) {
    switch (accessoriesColor) {
        case AccessoriesColor.Black:
            return '#262E33';
        case AccessoriesColor.Blue01:
            return '#65C9FF';
        case AccessoriesColor.Blue02:
            return '#5199E4';
        case AccessoriesColor.Blue03:
            return '#25557C';
        case AccessoriesColor.Blue03:
            return '#25557C';
        case AccessoriesColor.Gray01:
            return '#E6E6E6';
        case AccessoriesColor.Gray02:
            return '#929598';
        case AccessoriesColor.Heather:
            return '#3C4F5C';
        case AccessoriesColor.PastelBlue:
            return '#B1E2FF';
        case AccessoriesColor.PastelGreen:
            return '#A7FFC4';
        case AccessoriesColor.PastelOrange:
            return '#FFDEB5';
        case AccessoriesColor.PastelRed:
            return '#FFAFB9';
        case AccessoriesColor.PastelYellow:
            return '#FFFFB1';
        case AccessoriesColor.Pink:
            return '#FF488E';
        case AccessoriesColor.Red:
            return '#FF5C5C';
        case AccessoriesColor.White:
            return '#FFFFFF';
    }
    return '';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} hairColor
 * @return {?}
 */
function hairColorTranslation(hairColor) {
    switch (hairColor) {
        case HairColor.Auburn:
            return '#A55728';
        case HairColor.Black:
            return '#2C1B18';
        case HairColor.Blonde:
            return '#B58143';
        case HairColor.BlondeGolden:
            return '#D6B370';
        case HairColor.Brown:
            return '#724133';
        case HairColor.BrownDark:
            return '#4A312C';
        case HairColor.Platinum:
            return '#ECDCBF';
        case HairColor.Red:
            return '#C93305';
        case HairColor.SilverGray:
            return '#E8E1E1';
        case HairColor.PastelPink:
            return '#F59797';
    }
    return '';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} skinColor
 * @return {?}
 */
function skinColorTranslation(skinColor) {
    switch (skinColor) {
        case SkinColor.Tanned:
            return '#FD9841';
        case SkinColor.Yellow:
            return '#F8D25C';
        case SkinColor.Pale:
            return '#FFDBB4';
        case SkinColor.Light:
            return '#EDB98A';
        case SkinColor.Brown:
            return '#D08B5B';
        case SkinColor.DarkBrown:
            return '#AE5D29';
        case SkinColor.Black:
            return '#614335';
    }
    return '';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} clotheColor
 * @return {?}
 */
function clotheColorTranslation(clotheColor) {
    switch (clotheColor) {
        case ClotheColor.Black:
            return '#262E33';
        case ClotheColor.Blue01:
            return '#65C9FF';
        case ClotheColor.Blue02:
            return '#5199E4';
        case ClotheColor.Blue03:
            return '#25557C';
        case ClotheColor.Blue03:
            return '#25557C';
        case ClotheColor.Gray01:
            return '#E6E6E6';
        case ClotheColor.Gray02:
            return '#929598';
        case ClotheColor.Heather:
            return '#3C4F5C';
        case ClotheColor.PastelBlue:
            return '#B1E2FF';
        case ClotheColor.PastelGreen:
            return '#A7FFC4';
        case ClotheColor.PastelOrange:
            return '#FFDEB5';
        case ClotheColor.PastelRed:
            return '#FFAFB9';
        case ClotheColor.PastelYellow:
            return '#FFFFB1';
        case ClotheColor.Pink:
            return '#FF488E';
        case ClotheColor.Red:
            return '#FF5C5C';
        case ClotheColor.White:
            return '#f8f8ff';
    }
    return '';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} backgroundColor
 * @return {?}
 */
function backgroundColorTranslation(backgroundColor) {
    switch (backgroundColor) {
        case BackgroundColor.ColorA:
            return '#65C9FF';
        case BackgroundColor.ColorB:
            return '#8FD8FF';
        case BackgroundColor.ColorC:
            return '#EDE38C';
        case BackgroundColor.ColorD:
            return '#F59797';
        case BackgroundColor.ColorE:
            return '#D24B88';
        case BackgroundColor.ColorF:
            return '#954BD2';
        case BackgroundColor.ColorG:
            return '#524BD2';
        case BackgroundColor.ColorH:
            return '#F44848';
        case BackgroundColor.ColorI:
            return '#4BD2A2';
        case BackgroundColor.ColorJ:
            return '#4B88D2';
        case BackgroundColor.ColorK:
            return '#EAA95A';
    }
    return '';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} hatColor
 * @return {?}
 */
function hatColorTranslation(hatColor) {
    switch (hatColor) {
        case HatColor.Black:
            return '#262E33';
        case HatColor.Blue01:
            return '#65C9FF';
        case HatColor.Blue02:
            return '#5199E4';
        case HatColor.Blue03:
            return '#25557C';
        case HatColor.Blue03:
            return '#25557C';
        case HatColor.Gray01:
            return '#E6E6E6';
        case HatColor.Gray02:
            return '#929598';
        case HatColor.Heather:
            return '#3C4F5C';
        case HatColor.PastelBlue:
            return '#B1E2FF';
        case HatColor.PastelGreen:
            return '#A7FFC4';
        case HatColor.PastelOrange:
            return '#FFDEB5';
        case HatColor.PastelRed:
            return '#FFAFB9';
        case HatColor.PastelYellow:
            return '#FFFFB1';
        case HatColor.Pink:
            return '#FF488E';
        case HatColor.Red:
            return '#FF5C5C';
        case HatColor.White:
            return '#FFFFFF';
    }
    return '';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} prefix
 * @return {?}
 */
function randomId(prefix) {
    return prefix + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class CustomAvatarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PickerTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
    /**
     * @return {?}
     */
    getType() {
        return this.name;
    }
}
PickerTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kipPickerTemplate]'
            },] }
];
/** @nocollapse */
PickerTemplateDirective.ctorParameters = () => [
    { type: TemplateRef }
];
PickerTemplateDirective.propDecorators = {
    type: [{ type: Input }],
    name: [{ type: Input, args: ['kipPickerTemplate',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPickerComponent {
    constructor() {
        this.optionPicked = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pick(value) {
        this.optionPicked.emit(value);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.templates.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
            }
        }));
    }
}
CustomAvatarPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-picker',
                template: "<span>{{ title }}</span><br />\r\n<div class=\"row\">\r\n  <div *ngFor=\"let optionPicked of options\" class=\"col-4 col-md-2 py-1 px-1\">\r\n    <div [ngClass]=\"{'kip-avatar-pick':true,'kip-avatar-selected':optionPicked.value==currentOption}\"\r\n      (click)=\"pick(optionPicked.value)\" [title]=\"optionPicked.value\"\r\n      [style.background-color]=\"backgroundColor\">\r\n      <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: optionPicked}\"></ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".kip-avatar-pick{display:inline-block;cursor:pointer;border:1px solid #000}.kip-avatar-selected{border-color:red}"]
            }] }
];
CustomAvatarPickerComponent.propDecorators = {
    title: [{ type: Input }],
    currentOption: [{ type: Input }],
    options: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    optionPicked: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PickerTemplateDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This is a hack to get svg filters to work in safari and angular
// If you don't include the full url, the filters and masks break
// Once the svg is generated, this is removed and the svg saved
/**
 * @param {?} path
 * @return {?}
 */
function urlfix(path) {
    return 'url(' + window.location.href + '#' + path + ')';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarBaseComponent {
    constructor() {
        this._backColor = '';
        this.transform = '';
        this.viewBox = '';
        this.noFeatures = false;
        this.noPet = false;
        this.noAward = false;
        this.avatarStyle = AvatarStyle.Transparent;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.mask3 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.path5 = randomId('kip-path');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set backgroundColor(value) {
        if (this._backgroundColor !== value) {
            this._backgroundColor = value;
            this._backColor = backgroundColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get backgroundColor() {
        return this._backgroundColor;
    }
    /**
     * @return {?}
     */
    get backColor() {
        return this._backColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set skinColor(value) {
        if (this._skinColor !== value) {
            this._skinColor = value;
            this._color = skinColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get skinColor() {
        return this._skinColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @return {?}
     */
    get petTypeVisible() {
        return !this.noFeatures && this.petType !== PetType.None && !this.noPet;
    }
    /**
     * @return {?}
     */
    get awardTypeVisible() {
        return !this.noFeatures && this.awardType !== AwardType.None && !this.noAward;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-base',
                template: "<svg [attr.width]=\"width\" [attr.height]=\"height\" [attr.viewBox]=\"viewBox\" version='1.1'\r\n  xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' [ngClass]=\"svgClass\"\r\n  [style.width]=\"widthFull?'100%':''\">\r\n  <defs>\r\n    <circle [attr.id]=\"path1\" cx='120' cy='120' r='120' />\r\n    <path\r\n      d='M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z'\r\n      [attr.id]=\"path3\" />\r\n    <path\r\n      d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'\r\n      [attr.id]=\"path5\" />\r\n  </defs>\r\n  <g id='Avataaar' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' [attr.transform]=\"transform\">\r\n    <g transform='translate(-825.000000, -1100.000000)' id='Avataaar/Circle'>\r\n      <g transform='translate(825.000000, 1100.000000)'>\r\n        <g *ngIf=\"avatarStyle=='Circle'\" id='Circle' stroke-width='1' fill-rule='evenodd'\r\n          transform='translate(12.000000, 40.000000)'>\r\n          <mask [attr.id]=\"mask2\" fill='white'>\r\n            <use [attr.xlink:href]=\"'#' + path1\" />\r\n          </mask>\r\n          <use id='Circle-Background' fill='#E6E6E6' [attr.xlink:href]=\"'#' + path1\" />\r\n          <g id='Color/Palette/Blue-01' [attr.mask]=\"urlFix(mask2)\" [attr.fill]='backColor'>\r\n            <rect id='\uD83D\uDD8DColor' x='0' y='0' width='240' height='240' />\r\n          </g>\r\n        </g>\r\n        <mask *ngIf=\"avatarStyle=='Circle'\" [attr.id]=\"mask3\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <g id='Mask' />\r\n        <g id='Avataaar' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"avatarStyle=='Circle'?urlFix(mask3):''\">\r\n          <g id='Body' transform='translate(32.000000, 36.000000)'>\r\n            <mask id='mask-6' fill='white'>\r\n              <use [attr.xlink:href]=\"'#' + path5\" />\r\n            </mask>\r\n            <use [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path5\" />\r\n            <path\r\n              d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'\r\n              id='Neck-Shadow' fill-opacity='0.100000001' fill='#000000' mask='url(#mask-6)' />\r\n          </g>\r\n          <g *ngIf=\"!noFeatures\" kip-custom-avatar-clothes [clotheType]=\"clotheType\" [clotheColor]=\"clotheColor\"\r\n            [graphicType]=\"graphicType\" [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\" />\r\n          <g *ngIf=\"!noFeatures\" kip-custom-avatar-face [mouthType]=\"mouthType\" [eyeType]=\"eyeType\"\r\n            [eyebrowType]=\"eyebrowType\" [eyebrowColor]=\"eyebrowColor\" [noseType]=\"noseType\" />\r\n          <g *ngIf=\"!noFeatures\" kip-custom-avatar-top [topType]=\"topType\" [accessoriesType]=\"accessoriesType\"\r\n            [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n            [hatColor]=\"hatColor\" [accessoriesColor]=\"accessoriesColor\" />\r\n        </g>\r\n        <g *ngIf=\"petTypeVisible\" kip-custom-avatar-pet transform=\"scale(0.15) translate(0,1350)\" [petType]=\"petType\" />\r\n        <g *ngIf=\"awardTypeVisible\" kip-custom-avatar-award transform=\"scale(0.15) translate(1200,1350)\"\r\n          [awardType]=\"awardType\" [skinColor]=\"skinColor\" [clotheColor]=\"clotheColor\" [clotheColor2]=\"clotheColor2\" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg>\r\n"
            }] }
];
CustomAvatarBaseComponent.propDecorators = {
    width: [{ type: Input }],
    widthFull: [{ type: Input }],
    height: [{ type: Input }],
    transform: [{ type: Input }],
    viewBox: [{ type: Input }],
    noFeatures: [{ type: Input }],
    noPet: [{ type: Input }],
    noAward: [{ type: Input }],
    avatarStyle: [{ type: Input }],
    svgClass: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    clotheType: [{ type: Input }],
    graphicType: [{ type: Input }],
    clotheColor: [{ type: Input }],
    clotheColor2: [{ type: Input }],
    clotheColor3: [{ type: Input }],
    topType: [{ type: Input }],
    skinColor: [{ type: Input }],
    noseType: [{ type: Input }],
    mouthType: [{ type: Input }],
    eyeType: [{ type: Input }],
    eyebrowType: [{ type: Input }],
    eyebrowColor: [{ type: Input }],
    accessoriesType: [{ type: Input }],
    facialHairType: [{ type: Input }],
    facialHairColor: [{ type: Input }],
    hairColor: [{ type: Input }],
    petType: [{ type: Input }],
    awardType: [{ type: Input }],
    hatColor: [{ type: Input }],
    accessoriesColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarColorPickerComponent {
    constructor() {
        this.colorPicked = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pick(value) {
        this.colorPicked.emit(value);
    }
}
CustomAvatarColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-color-picker',
                template: "<span>{{ title }}</span><br />\r\n<div class=\"row\">\r\n  <div [ngClass]=\"{'kip-avatar-pick-color':true,'kip-avatar-selected-color':colorPicked.value==currentColor}\"\r\n    *ngFor=\"let colorPicked of colors\" (click)=\"pick(colorPicked.value)\"\r\n    [style.background-color]=\"colorConverter(colorPicked.value)\">\r\n  </div>\r\n</div>\r\n",
                styles: [".kip-avatar-pick-color{width:40px;height:40px;margin:2px;display:inline-block;cursor:pointer;border:1px solid #000}.kip-avatar-selected-color{border-color:red}"]
            }] }
];
CustomAvatarColorPickerComponent.propDecorators = {
    title: [{ type: Input }],
    currentColor: [{ type: Input }],
    colors: [{ type: Input }],
    colorConverter: [{ type: Input }],
    colorPicked: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconBaseComponent {
    constructor() {
        this.selectTab = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get avatarTabFillColor() {
        return this.currentIndex === this.index ? 'black' : 'gray';
    }
    /**
     * @return {?}
     */
    select() {
        this.selectTab.emit(this.index);
    }
}
CustomAvatarIconBaseComponent.propDecorators = {
    index: [{ type: Input }],
    currentIndex: [{ type: Input }],
    selectTab: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconBackgroundComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconBackgroundComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-background',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"36\">\r\n    <defs>\r\n      <path id=\"8-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M227.64839014530307,81.92886833665776 C227.64839014530307,127.16036613564857 190.93987397993826,163.85773667331551 145.69495052405597,163.85773667331551 C100.45002706817368,163.85773667331551 63.74151090280894,127.16036613564857 63.74151090280894,81.92886833665776 C63.74151090280894,36.69737053766702 100.45002706817368,0 145.69495052405597,0 C190.93987397993826,0 227.64839014530307,36.69737053766702 227.64839014530307,81.92886833665776 L227.64839014530307,81.92886833665776ZM187.18372058954495,182.06425840863687 L218.5426653978083,182.06425840863687 C258.7792245920165,182.06425840863687 291.38990104811194,214.66501771417015 291.38990104811194,254.8898658776341 L291.38990104811194,263.99312674529466 C291.38990104811194,279.0706123264838 279.15388873413997,291.30290934827667 264.0722475821792,291.30290934827667 L27.317653465932803,291.30290934827667 C12.236012313972035,291.30290934827667 0,279.0706123264838 0,263.99312674529466 L0,254.8898658776341 C0,214.66501771417015 32.61067645609537,182.06425840863687 72.84771487375232,182.06425840863687 L104.206180458567,182.06425840863687 C116.89745504874136,187.8677909874931 130.89796810058388,191.16751927629758 145.69495052405597,191.16751927629758 C160.4919329475281,191.16751927629758 174.54947358975807,187.8677909874931 187.18372058954495,182.06425840863687 L187.18372058954495,182.06425840863687Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <use xlink:href=\"#8-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconTopComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconTopComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-top',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    height=\"30\" width=\"24\">\r\n    <defs>\r\n      <path id=\"6-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M-5.684341886080802e-14,129.53998710300365 C-5.684341886080802e-14,58.11060293784231 58.116865286191576,0 129.55326710371676,0 C200.99014814469052,0 259.1065342074336,58.11060293784231 259.10557576053634,129.53998710300365 L259.10557576053634,327.7662974092026 C259.10557576053634,338.5946995705451 250.29649032774586,347.40356445312517 239.47274951689838,347.40356445312517 L182.5572974164322,347.40356445312517 C179.37812905819422,347.2808195472934 176.8219511831804,344.71324544288376 176.8219511831804,341.5161242237979 C176.8219511831804,341.5161242237979 175.55009215050575,312.3392765297659 176.8219511831804,311.48581585640494 C174.83221542445207,312.8225845964786 174.74403830990335,312.87532654820313 174.6673625581219,312.928547972216 L169.02594412080242,316.7144611614634 C166.80043042534606,318.22767570367006 164.62092218095867,319.8348668144043 162.44812306485204,321.4425373974268 C153.02083938332393,328.4145439431264 143.26864220362197,335.6272455776056 129.55326710371676,335.6272455776056 C115.8388504507088,335.6272455776056 106.0866532710068,328.4145439431264 96.6584111425814,321.4425373974268 C94.4856120264748,319.8348668144043 92.30706222898466,318.22767570367006 90.0748394052474,316.7144611614634 L84.43917164931153,312.928547972216 C84.26281742021423,312.81107726155693 84.07400338145247,312.6816197436873 83.89764915235514,312.56319008845134 L82.60278739414605,341.51516527922115 C82.60278739414605,344.29994033027856 78.20159924189133,346.6095583435261 77.00737440789541,347.23622862447166 C76.80801745326366,347.34075358334405 76.69779606007786,347.3982902579527 76.71313121043411,347.40356445312517 L19.639056148470086,347.40356445312517 C8.809564656238846,347.40356445312517 -5.684341886080802e-14,338.5946995705451 -5.684341886080802e-14,327.7662974092026 L-5.684341886080802e-14,129.53998710300365 L-5.684341886080802e-14,129.53998710300365ZM177.60596074514564,296.67683475672254 C183.65951134829038,292.4613143970641 189.58367162030387,288.0271546738931 194.83691906422996,283.03968392990254 C220.21180066940042,258.95722930017564 223.49160595185157,222.11457865912172 223.7561372954975,188.4580213745203 C203.66421498806832,185.68475365838466 134.55923524814756,171.252637777389 103.04645971287272,102.22445083256068 C94.48465357957758,106.58812812933624 77.25944594187689,115.95557822790825 62.131320115398644,127.80861266957257 C45.34843572078715,140.95190703933525 35.3317071974392,161.66031517555498 35.3317071974392,183.19916931529232 C35.3317071974392,218.21646895438764 37.56920147911137,257.69717612624675 64.26865669630632,283.03968392990254 C69.5506575471503,288.05592301119736 75.51698948264364,292.5078232090395 81.60600262098733,296.7473171831182 C84.75066689092367,298.9313134568038 87.91833388639442,301.0812671980126 91.1042113729133,303.21252151997356 L96.68716454949941,306.9691868996281 C99.04877770436785,308.57062434290134 101.35767627988646,310.27227149445133 103.65986572712426,311.9739186460014 C111.91592730019086,318.0799982388413 119.7186434908497,323.84996775750915 129.55326710371676,323.84996775750915 C139.38693226968653,323.84996775750915 147.1896484603454,318.0799982388413 155.445710033412,311.9739186460014 C157.74885792754708,310.27227149445133 160.05679805616836,308.57062434290134 162.41841121103673,306.9691868996281 L168.07228945802075,303.17176637545913 C171.2696683073068,301.03427891374895 174.44979511244208,298.8732973099066 177.60596074514564,296.67683475672254 L177.60596074514564,296.67683475672254Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.07)\">\r\n      <use xlink:href=\"#6-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconEyeComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconEyeComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-eye',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"42\">\r\n    <defs>\r\n      <path id=\"5-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M342.00548169283513,93.7118998242152 C308.13588523717834,37.5417212375486 244.96752557893566,0 172.9987065099782,0 C101.00017558720548,0 37.846192632421854,37.568092213410914 3.991931327121256,93.7118998242152 C-1.3312827403052632,102.53994359833126 -1.3312827403052632,113.4963648606781 3.991931327121256,122.32440863479421 C37.86248622967542,178.4941077491724 101.02988744102073,216.03582898672096 172.9987065099782,216.03582898672096 C244.99819587964816,216.03582898672096 308.1521788344318,178.46773677331007 342.00548169283513,122.32392916250578 C347.32965420715885,113.49588538838965 347.32965420715885,102.53994359833126 342.00548169283513,93.7118998242152 L342.00548169283513,93.7118998242152ZM172.9987065099782,187.85724259714863 C127.84914852037413,187.85724259714863 91.30452677444228,152.14854391817303 91.30452677444228,108.01791449336048 C91.30452677444228,63.893997680585606 127.84243939209328,28.17858638957231 172.9987065099782,28.17858638957231 C218.14730605268514,28.17858638957231 254.69288624551416,63.886805596259535 254.69288624551416,108.01791449336048 C254.69288624551416,152.1423107784238 218.1549736278632,187.85724259714863 172.9987065099782,187.85724259714863 L172.9987065099782,187.85724259714863ZM172.9987065099782,169.07151833743382 C207.50183636472934,169.07151833743382 235.47123372080426,141.7372826477431 235.47123372080426,108.01791449336048 C235.47123372080426,74.29854633897797 207.50183636472934,46.96431064928716 172.9987065099782,46.96431064928716 C162.36186284409794,46.96431064928716 152.3480096614417,49.565447813885264 143.5810958921313,54.14728500188515 C157.8073231882803,54.14680552959675 169.32497955274994,65.40241749990827 169.32497955274994,79.28697602754542 C169.32497955274994,93.17057561060574 157.8073231882803,104.42618758091729 143.6002648300767,104.42618758091729 C129.3932064718729,104.42618758091729 117.87650855430061,93.17153455518257 117.87650855430061,79.28697602754542 C113.18874477976271,87.83548745752132 110.52713774604942,97.62247580844783 110.52713774604942,108.01791449336048 C110.52713774604942,141.7372826477431 138.49653510212454,169.07151833743382 172.9987065099782,169.07151833743382 L172.9987065099782,169.07151833743382Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <use xlink:href=\"#5-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconEyeBrowComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconEyeBrowComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-eye-brow',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"36\">\r\n    <defs>\r\n      <path id=\"3-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M15.713133364374539,59.08676956719891 C15.713133364374842,59.08676956719893 -19.64141670546833,95.6642935849888 15.713133364374539,126.61450621542635 C51.067683434217415,157.56471884586392 59.90632095167837,59.08676956719891 171.8623961728474,59.08676956719891 C283.8184713940165,59.08676956719891 342.7427215104218,92.85063789131262 342.7427215104218,92.85063789131262 C342.7427215104218,92.85063789131262 248.4639213241742,0 171.8623961728478,0 C95.26087102152144,0 15.713133364374237,59.086769567198886 15.713133364374539,59.08676956719891Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <use xlink:href=\"#3-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconAccessoriesComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconAccessoriesComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-accessories',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"39\">\r\n    <defs>\r\n      <path id=\"path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M335.42238917895,144.47938466513213 L308.92612470397586,38.78019815849917 C305.4733197565681,24.993931449985087 296.3120050890319,13.156240121549676 283.80331463278713,6.315608982872997 C271.2768929089428,-0.5072816811326779 256.3605838467606,-1.8919976500468303 242.79424723938055,2.6337412802096396 L233.88404565892867,5.58872899365075 C228.98254822629997,7.211742689902279 226.3357971194944,12.487376279224444 227.97138674968235,17.362171035439882 L230.9277162043054,26.19213269870963 C232.55803437655828,31.06692745492507 237.85153659016947,33.701627679711514 242.74728334141457,32.079093455748406 L250.4479249375143,29.525424047702426 C256.79907330226075,27.419581757026883 263.8858296606606,27.448829566619604 269.8219705188898,30.531356908776488 C275.83382868200334,33.65511886773622 280.08741601207873,39.00123488345395 281.7234848657153,45.55082634306868 L304.1937931487152,135.02658849922406 C291.2293611928196,131.06518845242047 275.1034921462853,127.77888538769142 256.7521094042946,127.77888538769142 C236.43734819325059,127.77888538769142 213.5285504547507,131.86207139574995 189.65028367966406,143.33344589584377 L146.89396759253827,143.33344589584377 C123.01570081745166,131.85056406082816 100.10690307895169,127.77313172023048 79.78639118652404,127.77313172023048 C61.42877853970124,127.77313172023048 45.303388716615586,131.05943478495962 32.33847753727124,135.02083483176315 L54.80926504371972,45.539319008146954 C56.439103992523975,38.99500174370467 60.704192685366614,33.64361153281449 66.71653007192884,30.52560324131562 C72.65267093015824,27.44259642687034 79.73367660717435,27.413828089566028 86.08434574847209,29.519190907953174 L93.77923666318833,32.07286031599915 C98.67546263788195,33.69587401225067 103.9684856280445,31.060694315175795 105.59880380029743,26.186379031248773 L108.55513325492063,17.356417367979017 C110.19120210855712,12.48162261176358 107.54445100175151,7.20550955015301 102.64247434567423,5.582975326189888 L93.73227276522223,2.627987612748779 C80.1659361578422,-1.8977513175076932 65.25010631910878,-0.5192684883428071 52.723205371815894,6.309855315412136 C40.21451491557111,13.156240121549676 31.053200248034855,24.988177782524232 27.60039530062686,38.76821135128904 L1.1098815070363541,144.47938466513213 C0.3733150664858894,147.4267008219588 0.0009584468972680086,150.45217096179545 0,153.4896279088422 L0,194.35361263275027 C0,230.94166348866105 30.13596656734939,260.60229872169384 67.30645413719729,260.60229872169384 L88.9941905285778,260.60229872169384 C124.21328021558807,260.60229872169384 153.47849777676953,233.87939019971952 156.11374752080786,199.30943820570627 L157.82553367932854,176.8384899373091 L178.71296691149024,176.8384899373091 L180.4247530700108,199.30943820570627 C183.05377290921697,233.87939019971952 212.31946969384694,260.60229872169384 247.5385593808573,260.60229872169384 L269.22581654878917,260.60229872169384 C306.3963041186372,260.60229872169384 336.53274990943504,230.94166348866105 336.53274990943504,194.35936630021118 L336.53274990943504,153.49538157630315 C336.53274990943504,150.4531299063722 336.15847639605187,147.42813923882395 335.42238917895,144.47938466513213 L335.42238917895,144.47938466513213ZM118.82632942949323,196.49397692819102 C117.67523470587436,211.56570884191933 104.57039027952888,223.3741523607622 88.9941905285778,223.3741523607622 L67.30645413719729,223.3741523607622 C50.81254148211215,223.3741523607622 37.39236802656547,210.35600025827313 37.39236802656547,194.35361263275027 L37.39236802656547,172.51652672962487 C47.97889323033927,168.74164140301093 62.761019726903776,165.00127808116213 79.79789254929125,165.00127808116213 C93.73802344660575,165.00127808116213 107.40978921268535,167.51994601215455 120.65504610948058,172.51652672962487 L118.82632942949323,196.49397692819102 L118.82632942949323,196.49397692819102ZM269.22581654878917,223.3741523607622 C285.71924998042556,223.3741523607622 299.1399026594211,210.36175392573404 299.1399026594211,194.35936630021118 L299.1341519780374,172.52275986937414 C288.5471475508148,168.74739507047173 273.7597495963156,165.00127808116213 256.7458794994623,165.00127808116213 C242.79999792076435,165.00127808116213 229.1224814733012,167.51994601215455 215.8772245765059,172.51652672962487 L217.70594125649325,196.49397692819102 C218.8512852987284,211.56570884191933 231.956129725074,223.3741523607622 247.5380801574087,223.3741523607622 L269.22581654878917,223.3741523607622 L269.22581654878917,223.3741523607622Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <use xlink:href=\"#path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconMouthComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconMouthComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-mouth',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"42\">\r\n    <defs>\r\n      <path id=\"4-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M297.54313012857256,82.0094196811099 C328.014073886517,91.86401362470151 367.63051793819295,104.67647211546466 403.83872482318384,100.49739164972519 C343.5342044939781,77.26887716564796 293.58282754906116,4.397719829252287 256.67782976975644,0.2397361442025886 C236.2763291145096,-2.058854006411832 205.0836748429222,12.881981972581901 201.6725623355454,14.553422369962346 C196.4509436392293,12.035233911258356 166.80426421293524,-1.7337717948731215 147.1608950534274,0.4794722884051772 C110.25589727412267,4.637455973454874 60.30452032920585,77.50861330985053 0,100.73712779392775 C36.208206884990844,104.9162082596673 75.82465093666674,92.10374976890415 106.2955946946113,82.24915582531251 C123.66456936690213,76.63213796664586 138.06140021076487,71.9759825739432 147.1608950534274,71.9759825739432 C165.30908705319712,71.9759825739432 190.8047329674234,84.7385759467122 202.47190704786698,84.7385759467122 L202.47190704786698,84.46383832545605 C214.58188359484822,83.73216361334975 239.08170318281307,71.73624642974058 256.67782976975644,71.73624642974058 C265.7773246124191,71.73624642974058 280.1741554562817,76.39240182244332 297.54313012857256,82.0094196811099Z\" />\r\n      <path id=\"4-path-1\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M115.3754216624061,173.0232963470803 C115.3754216624061,173.0232963470803 175.87211283113683,201.96237668499998 199.63867007599532,201.9623766849998 C223.4052273208538,201.9623766849996 289.08734916119005,173.0232963470803 289.08734916119005,173.0232963470803 C289.08734916119005,173.0232963470803 239.02849781517853,184.93938825092954 199.63867007599532,184.93938825092954 C160.24884233681212,184.93938825092954 115.3754216624061,173.0232963470803 115.3754216624061,173.0232963470803Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <g>\r\n        <use xlink:href=\"#4-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#4-path-1\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconFacialHairComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconFacialHairComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-facial-hair',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"33\">\r\n    <defs>\r\n      <path id=\"1-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M24.165217559686802,72.0716888623889 C30.039075146678506,72.0716888623889 35.5257120018946,69.85368369875816 40.02804807804521,65.6608681450626 C45.94211493021418,60.157439247975184 54.940728152146235,58.05701646307324 62.52540735065297,60.0736976514171 L91.51573673161202,67.76129092996452 C112.72750114225067,73.3324013913934 132.74565627016136,56.569169192719436 132.74565627016136,34.414354749895224 C132.74565627016136,15.434264532748843 117.923860151598,0 99.69694516555687,0 C93.87927038744299,0 88.17506285078827,1.5882224717076638 83.19682533473134,4.587433488161032 C77.835222769861,7.804602084697072 76.49069103975535,10.211312626873076 60.59701505769931,25.35707015230197 C47.44528047362195,38.15347439347135 28.02200214559415,43.236474590030866 10.344246575741213,38.45574714269126 C7.858983500674955,37.76688647511419 5.228856908600181,38.44714355400378 3.2117839075158217,40.08584041267796 C1.185897916803557,41.71536011008549 0,44.33716036944834 0,47.00025785451107 C0,53.99899046548143 2.6383887698509247,60.44365196497848 7.431002691870319,65.14866783186832 C11.925076590244787,69.55141094953824 18.025317848303033,72.0716888623889 24.165217559686802,72.0716888623889Z\" />\r\n      <path id=\"1-path-1\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M221.96946488674124,25.357070152302125 C206.26581899353755,10.399444432839237 204.25700817022945,7.866547923246935 198.82655412389147,4.596037076848539 C193.84060524191045,1.5882224717076738 188.13639770525603,0 182.31872292714246,0 C164.09180794110236,0 149.2700118225398,15.434264532748939 149.2700118225398,34.41435474989544 C149.2700118225398,56.609319273261335 169.35261193710335,73.36050644777295 190.508193538863,67.76186450254411 L220.05704613748824,60.07427122399664 C227.56901817156444,58.05759003565277 236.0570288069299,60.15801282055471 241.9870692027991,65.65341170153386 C246.48940527894945,69.85425727133777 251.97604213416525,72.07226243496852 257.8416375433805,72.07226243496852 C269.72650486844736,72.07226243496852 282.0151172808421,62.695497910780354 282.0151172808421,46.7823002744287 C282.0151172808421,44.118629216786786 280.82921936403864,41.60695489262359 278.8038841851782,39.97686162263688 C276.77854900631786,38.346768352650166 274.1241866927665,37.79212366859768 271.6714215169532,38.456320715270664 C254.0019281248774,43.23647459003114 235.1211994708179,38.15347439347158 221.96946488674124,25.357070152302125Z\" />\r\n      <path id=\"1-path-2\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M177.06838435627327,85.52540727929339 C165.94914550512948,84.30484483083046 155.54871612051085,79.44668508530359 147.43856241544125,71.08858546171238 C144.9918561699971,68.56486611338673 142.85746024449148,65.80999701565763 140.99461456189533,62.89338045060401 C133.02106219605807,75.40701341024504 119.86932761198122,83.72783081619053 104.82555431716582,85.36939553776052 C111.90458823577185,96.0837313165612 125.54929942715903,103.24306424969772 141.0078340463372,103.24306424969772 C156.38760257071607,103.24306424969772 169.9585049739696,96.1473978728485 177.06838435627327,85.52540727929339Z\" />\r\n      <path id=\"1-path-3\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M85.79390321582405,84.00257208159645 L57.89968941983567,76.75146753579361 C57.34281863772311,76.60004437489405 56.76997431190999,76.53293638313177 56.17289426462016,76.53293638313177 C54.27699987091944,76.53293638313177 52.356318943890265,77.26366784898788 51.041531053778805,78.49053959582163 C43.46511403304858,85.54835018244592 34.170164034879,89.27886623733451 24.1652175598122,89.27886623733451 C22.280339403146346,89.27886623733451 20.414188849439764,88.98806493969789 18.550792354991902,88.7116029565404 C17.229394722659535,93.40629451700522 16.524355552428005,98.29026502859448 16.524355552428005,103.24306424968351 C16.524355552428005,121.00488630868342 25.407849097345277,137.38841345995007 39.4149944871795,146.74854437934232 C35.26738124355183,154.41950405309387 33.048711104729485,163.12346794192146 33.048711104729485,172.07177374947327 C33.048711104729485,200.53760728084887 55.836348223204965,223.6933058743156 83.1725896133773,223.6933058743156 C84.98806547672348,223.6933058743156 86.79527916229353,223.59235710038263 88.586519304163,223.39103312509573 C97.98667436601558,244.42910175628563 118.23011154128835,258.1076606242105 141.00783404643246,258.1076606242105 C163.78555655157658,258.1076606242105 184.02899372684936,244.42910175628563 193.42914878870192,223.39103312509573 C195.2203889305714,223.59293067296176 197.02760261614145,223.6933058743156 198.84307847948762,223.6933058743156 C226.17931986966,223.6933058743156 248.96695698813545,200.53760728084887 248.96695698813545,172.07177374947327 C248.96695698813545,163.12346794192146 246.74828684931308,154.41950405309387 242.60067360568542,146.74854437934232 C256.60781899551966,137.38841345995007 265.4913125404369,121.00488630868344 265.4913125404369,103.24306424968351 C265.4913125404369,98.29542718180696 264.78957824131584,93.41604525085103 263.4709346682422,88.72651584359869 C261.5981743723147,89.00297782675618 259.71990595786974,89.2788662373345 257.84218835527656,89.2788662373345 C247.83724188020977,89.2788662373345 238.5422918820402,85.53974659375841 230.9576126835338,78.46530240233835 C229.6665097030473,77.27227143767533 227.73040604416934,76.53293638313176 225.82624947269247,76.53293638313176 C225.24514296910317,76.53293638313176 224.6965343647668,76.60004437489404 224.18042365968324,76.73483393099781 L196.22176487704087,84.00486637191311 C188.8877050710777,105.26605473639816 166.67897120878456,120.45024162463096 141.00783404643246,120.45024162463096 C115.33559526037689,120.45024162463096 93.12741220993544,105.26490759123985 85.79390321582405,84.00257208159645Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-1\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-2\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n      <g opacity=\"1\">\r\n        <use xlink:href=\"#1-path-3\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n      </g>\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconClothesComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconClothesComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-clothes',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"30\"\r\n    width=\"38\">\r\n    <defs>\r\n      <path id=\"2-path-0\" opacity=\"1\" fill-rule=\"evenodd\"\r\n        d=\"M328.82294253432997,50.22818619999715 L227.76244227950116,0 C217.32938601282393,14.469881620310058 194.2313261189365,24.567568794195495 167.2922405348296,24.567568794195495 C140.35315495072274,24.567568794195495 117.25509505683526,14.469881620310058 106.82203879015803,0 L5.7615385353292226,50.22818619999715 C1.6609840822570734,52.31018355543744 0,57.306977208494146 2.024324350250809,61.41892198548874 L31.714414820595994,121.01609628496722 C33.79064492341734,125.12804106196181 38.77359717018855,126.79363894631403 42.87415162326071,124.76369152475974 L72.2528075781827,110.3458598383357 C77.75481735065924,107.63926327626332 84.19113066940541,111.64710818548588 84.19113066940541,117.84105031792076 L84.19113066940541,249.83968265283553 C84.19113066940541,259.05252095065885 91.6136532869917,266.4956614963579 100.80097149197614,266.4956614963579 L233.67969807254198,266.4956614963579 C242.86701627752643,266.4956614963579 250.2895388951127,259.05252095065885 250.2895388951127,249.83968265283553 L250.2895388951127,117.78900038403476 C250.2895388951127,111.64710818548588 256.72585221385884,107.58721334237731 262.2278619863354,110.29380990444969 L291.60651794125744,124.71164159087374 C295.70707239432954,126.79363894631403 300.69002464110076,125.12804106196181 302.7662547439221,120.96404635108121 L332.5082509668378,61.41892198548874 C334.58448106965915,57.306977208494146 332.9234969874021,52.25813362155144 328.82294253432997,50.22818619999715Z\" />\r\n    </defs>\r\n    <g opacity=\"1\" transform=\"scale(0.11)\">\r\n      <use xlink:href=\"#2-path-0\" [attr.fill]=\"avatarTabFillColor\" fill-opacity=\"1\" />\r\n    </g>\r\n  </svg>\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconPetComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconPetComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-pet',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  Pet\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconAwardComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconAwardComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-award',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  Award\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarIconNoseComponent extends CustomAvatarIconBaseComponent {
}
CustomAvatarIconNoseComponent.decorators = [
    { type: Component, args: [{
                selector: 'kip-custom-avatar-icon-nose',
                template: "<a (click)='select()' [ngClass]=\"{'kip-avatar-nav-link':true, 'active': currentIndex===index}\">\r\n  Nose\r\n</a>\r\n",
                styles: [".kip-avatar-nav-link{display:block;padding:.15rem}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesComponent {
}
CustomAvatarClothesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes]',
                template: "<svg:g [ngSwitch]=\"clotheType\">\r\n  <g *ngSwitchCase=\"'BlazerShirt'\" kip-custom-avatar-clothes-blazer-shirt [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\" />\r\n  <g *ngSwitchCase=\"'BlazerSweater'\" kip-custom-avatar-clothes-blazer-sweater [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" [clotheColor3]=\"clotheColor3\"/>\r\n  <g *ngSwitchCase=\"'CollarSweater'\" kip-custom-avatar-clothes-collar-sweater [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'GraphicShirt'\" kip-custom-avatar-clothes-graphic-shirt [clotheColor]=\"clotheColor\"\r\n    [graphicType]=\"graphicType\" [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Hoodie'\" kip-custom-avatar-clothes-hoodie [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Overall'\" kip-custom-avatar-clothes-overall [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'ShirtCrewNeck'\" kip-custom-avatar-clothes-shirt-crew-neck [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'ShirtScoopNeck'\" kip-custom-avatar-clothes-shirt-scoop-neck [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'ShirtVNeck'\" kip-custom-avatar-clothes-shirt-v-neck [clotheColor]=\"clotheColor\"\r\n    [clotheColor2]=\"clotheColor2\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarClothesComponent.propDecorators = {
    clotheType: [{ type: Input }],
    clotheColor: [{ type: Input }],
    clotheColor2: [{ type: Input }],
    clotheColor3: [{ type: Input }],
    graphicType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesBaseComponent {
    constructor() {
        this._color = '';
        this._color2 = '';
        this._color3 = '';
        this.option = ClotheType.BlazerShirt;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor(value) {
        if (this._clotheColor !== value) {
            this._clotheColor = value;
            this._color = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor() {
        return this._clotheColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor2(value) {
        if (this._clotheColor2 !== value) {
            this._clotheColor2 = value;
            this._color2 = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor2() {
        return this._clotheColor2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor3(value) {
        if (this._clotheColor3 !== value) {
            this._clotheColor3 = value;
            this._color3 = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor3() {
        return this._clotheColor3;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @return {?}
     */
    get color2() {
        return this._color2;
    }
    /**
     * @return {?}
     */
    get color3() {
        return this._color3;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarClothesBaseComponent.propDecorators = {
    clotheColor: [{ type: Input }],
    clotheColor2: [{ type: Input }],
    clotheColor3: [{ type: Input }],
    graphicType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesBlazerShirtComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesBlazerShirtComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-blazer-shirt]',
                template: "<svg:g id='Clothing/Blazer-+-Shirt' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M133.960472,0.294916112 C170.936473,3.32499816 200,34.2942856 200,72.0517235 L200,81 L0,81 L0,72.0517235 C1.22536245e-14,33.9525631 29.591985,2.76498122 67.0454063,0.219526408 C67.0152598,0.593114549 67,0.969227185 67,1.34762511 C67,13.2107177 81.9984609,22.8276544 100.5,22.8276544 C119.001539,22.8276544 134,13.2107177 134,1.34762511 C134,0.994669088 133.986723,0.64370138 133.960472,0.294916112 Z'\r\n      [id]=\"path1\"></path>\r\n  </defs>\r\n  <g id='Shirt' transform='translate(32.000000, 29.000000)'>\r\n    <mask [id]=\"mask1\" fill='white'>\r\n      <use [attr.xlink:href]=\"'#' + path1\"></use>\r\n    </mask>\r\n    <use id='Clothes' fill='#E6E6E6' [attr.xlink:href]=\"'#' + path1\"></use>\r\n    <g id='Color/Palette/Black' [attr.mask]=\"urlFix(mask1)\" [attr.fill]=\"color3\">\r\n      <g transform='translate(-32.000000, -29.000000)' id='\uD83D\uDD8DColor'>\r\n        <rect x='0' y='0' width='264' height='110'></rect>\r\n      </g>\r\n    </g>\r\n    <g id='Shadowy' opacity='0.599999964' [attr.mask]=\"urlFix(mask1)\" fill-opacity='0.16' fill='#000000'>\r\n      <g transform='translate(60.000000, -25.000000)' id='Hola-\uD83D\uDC4B\uD83C\uDFFC'>\r\n        <ellipse cx='40.5' cy='27.8476251' rx='39.6351047' ry='26.9138272'></ellipse>\r\n      </g>\r\n    </g>\r\n  </g>\r\n  <g id='Blazer' transform='translate(32.000000, 28.000000)'>\r\n    <path\r\n      d='M68.784807,1.12222847 C30.512317,2.80409739 -1.89486556e-14,34.3646437 -1.42108547e-14,73.0517235 L0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'\r\n      id='Saco' [attr.fill]=\"color\"></path>\r\n    <path\r\n      d='M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'\r\n      id='Pocket-hanky' fill='#E6E6E6'></path>\r\n    <path\r\n      d='M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'\r\n      id='Wing' [attr.fill]=\"color2\"></path>\r\n    <path\r\n      d='M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'\r\n      id='Wing' [attr.fill]=\"color2\"\r\n      transform='translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) '></path>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesBlazerSweaterComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesBlazerSweaterComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-blazer-sweater]',
                template: "<svg:g id='Clothing/Blazer-+-Sweater' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]='color' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <g id='Color/Palette/Black' [attr.mask]=\"urlFix(mask1)\" fill-rule='evenodd' [attr.fill]=\"color3\">\r\n    <rect id='\uD83D\uDD8DColor' x='0' y='0' width='264' height='110' />\r\n  </g>\r\n  <g id='Blazer' stroke-width='1' fill-rule='evenodd' transform='translate(32.000000, 28.000000)'>\r\n    <path\r\n      d='M68.784807,1.12222847 C30.512317,2.80409739 1.24427139e-14,34.3646437 0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z'\r\n      id='Saco' [attr.fill]=\"color\" />\r\n    <path\r\n      d='M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z'\r\n      id='Pocket-hanky' fill='#E6E6E6' />\r\n    <path\r\n      d='M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z'\r\n      id='Wing' [attr.fill]=\"color2\" />\r\n    <path\r\n      d='M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z'\r\n      id='Wing' [attr.fill]=\"color2\"\r\n      transform='translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) ' />\r\n  </g>\r\n  <path\r\n    d='M156,21.5390062 C162.772319,26.1359565 167,32.6563196 167,39.8878801 C167,47.2887711 162.572015,53.9447688 155.520105,58.5564942 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,21.5390062 Z M108,21.5390062 C101.227681,26.1359565 97,32.6563196 97,39.8878801 C97,47.2887711 101.427985,53.9447688 108.479895,58.5564942 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5390062 Z'\r\n    id='Collar' fill='#F2F2F2' fill-rule='evenodd' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesCollarSweaterComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesCollarSweaterComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-collar-sweater]',
                template: "<svg:g id='Clothing/Collar-+-Sweater' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <path\r\n    d='M156,22.2794906 C162.181647,26.8351858 166,33.1057265 166,40.027915 C166,47.2334941 161.862605,53.7329769 155.228997,58.3271669 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,22.2794906 Z M108,21.5714994 C101.232748,26.1740081 97,32.7397769 97,40.027915 C97,47.4261549 101.361602,54.080035 108.308428,58.6915723 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5714994 Z'\r\n    id='Collar' [attr.fill]=\"color2\" fill-rule='evenodd' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicShirtComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesGraphicShirtComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphic-shirt]',
                template: "<svg:g id='Clothing/Graphic-Shirt' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <g kip-custom-avatar-graphics [graphicType]=\"graphicType\" [clotheColor2]=\"clotheColor2\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesHoodieComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesHoodieComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-hoodie]',
                template: "<svg:g id='Clothing/Hoodie' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Hoodie' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <path\r\n    d='M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z'\r\n    id='Straps' [attr.fill]=\"color2\" fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" />\r\n  <path\r\n    d='M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z'\r\n    id='Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesOverallComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesOverallComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-overall]',
                template: "<svg:g id='Clothing/Overall' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Overall' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n\r\n  <circle id='Button' [attr.fill]=\"color2\" fill-rule='evenodd' cx='81' cy='83' r='5' />\r\n  <circle id='Button' [attr.fill]=\"color2\" fill-rule='evenodd' cx='183' cy='83' r='5' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesShirtCrewNeckComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesShirtCrewNeckComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-shirt-crew-neck]',
                template: "<svg:g id='Clothing/Shirt-Crew-Neck' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <g id='Shadowy' opacity='0.599999964' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\"\r\n     [attr.fill]=\"color2\">\r\n    <g transform='translate(92.000000, 4.000000)' id='Hola-\uD83D\uDC4B\uD83C\uDFFC'>\r\n      <ellipse cx='40.5' cy='27.8476251' rx='39.6351047' ry='26.9138272' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesShirtScoopNeckComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesShirtScoopNeckComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-shirt-scoop-neck]',
                template: "<svg:g id='Clothing/Shirt-Scoop-Neck' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M181.544255,32.3304167 C210.784209,41.4878872 232,68.7921987 232,101.051724 L232,110 L32,110 L32,101.051724 C32,68.3969699 53.7388273,40.8195914 83.5340368,32.0020332 C83.182234,33.4201865 83,34.8712315 83,36.3476251 C83,52.6289957 105.161905,65.8276544 132.5,65.8276544 C159.838095,65.8276544 182,52.6289957 182,36.3476251 C182,34.9849859 181.844766,33.6439396 181.544255,32.3304167 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesShirtVNeckComponent extends CustomAvatarClothesBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesShirtVNeckComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-shirt-v-neck]',
                template: "<svg:g id='Clothing/Shirt-V-Neck' transform='translate(0.000000, 170.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Clothes' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsComponent {
    constructor() {
        this.graphicType = GraphicType.Bat;
    }
}
CustomAvatarClothesGraphicsComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-graphics]',
                template: "<svg:g [ngSwitch]=\"graphicType\">\r\n  <g *ngSwitchCase=\"'Skull'\" kip-custom-avatar-clothes-graphics-skull [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'SkullOutline'\" kip-custom-avatar-clothes-graphics-skull-outline [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'IKip'\" kip-custom-avatar-clothes-graphics-ikip [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Bat'\" kip-custom-avatar-clothes-graphics-bat [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Cumbia'\" kip-custom-avatar-clothes-graphics-cumbia [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Deer'\" kip-custom-avatar-clothes-graphics-deer [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Diamond'\" kip-custom-avatar-clothes-graphics-diamond [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Hola'\" kip-custom-avatar-clothes-graphics-hola [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Selena'\" kip-custom-avatar-clothes-graphics-selena [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Pizza'\" kip-custom-avatar-clothes-graphics-pizza [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Resist'\" kip-custom-avatar-clothes-graphics-resist [clotheColor2]=\"clotheColor2\" />\r\n  <g *ngSwitchCase=\"'Bear'\" kip-custom-avatar-clothes-graphics-bear [clotheColor2]=\"clotheColor2\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarClothesGraphicsComponent.propDecorators = {
    graphicType: [{ type: Input }],
    clotheColor2: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        this._color2 = '';
        this.option = GraphicType.Bat;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor2(value) {
        if (this._clotheColor2 !== value) {
            this._clotheColor2 = value;
            this._color2 = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor2() {
        return this._clotheColor2;
    }
    /**
     * @return {?}
     */
    get color2() {
        return this._color2;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarClothesGraphicsBaseComponent.propDecorators = {
    clotheColor2: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsSkullComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Skull;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsSkullComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-skull]',
                template: "<svg:g id='Clothing/Graphic/Skull' [attr.mask]=\"urlFix(mask1)\" fill-rule='evenodd' [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Fill-49'>\r\n    <path\r\n      d='M65.2820354,19.9288113 C64.9841617,22.7059411 59.588846,24.2025715 57.6102394,22.3766824 C56.6984983,21.5350479 56.6825881,19.8029182 56.4815012,18.6751632 C56.1014249,16.5420247 55.8256486,14.4172496 55.7306295,12.2519776 C55.6727342,10.9274596 55.3253621,9.86749314 56.7745135,9.67029008 C57.65797,9.55055964 58.5675014,10.137767 59.2896464,10.6026028 C61.736719,12.1758255 65.6201265,16.7414286 65.2820354,19.9288113 M52.8813831,14.0756657 C53.1659984,16.901216 54.2014853,21.8145656 51.9457767,24.1810024 C49.9296045,26.2960933 45.7863308,24.19905 45.1631825,21.7084809 C44.3897714,18.6188195 47.4383369,14.9274245 49.307782,12.8387447 C49.881874,12.1969544 51.151594,10.4256483 52.1442119,11.018578 C52.526056,11.2461539 52.8367463,13.6301981 52.8813831,14.0756657 M54.3212536,25.1062722 C54.9678252,23.5832306 61.2342228,28.1246236 58.2744891,30.2850536 C57.7918806,30.6376421 54.1148633,31.7513112 53.4099544,31.2274906 C51.9250051,30.1235056 53.8408548,26.2630794 54.3212536,25.1062722 M73.3250687,17.5267194 C72.8817937,2.05112066 53.065234,-2.31331777 42.4756895,6.50447654 C38.426551,9.87585667 36.113389,14.0039155 36.0073212,19.2826191 C35.9171635,23.7544627 36.6256081,27.9718792 40.0409914,31.0465744 C41.5219631,32.379896 42.5004386,33.1955596 43.2862243,35.0170469 C44.1095756,36.9234899 44.4852324,39.3524331 46.0280771,40.8495037 C46.8788292,41.6752915 48.1176128,42.3417322 49.2940816,41.8091079 C51.455655,40.8301355 50.7644465,37.8320326 51.4194152,36.1606486 C53.4559171,41.1294616 58.6302582,42.7141291 59.5694002,36.4097935 C60.6000257,38.2286397 63.2945899,40.610483 65.268335,38.6195243 C66.0806376,37.8003393 66.2030575,36.4705391 66.3409457,35.3929652 C66.5857855,33.4807998 66.1601884,32.7294032 67.6955199,31.4180909 C71.7349355,27.9683578 73.4691441,22.7464381 73.3250687,17.5267194' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsSkullOutlineComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.SkullOutline;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsSkullOutlineComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-skull-outline]',
                template: "<svg:g id='Clothing/Graphic/Skull-Outline' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd'\r\n  [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Skull'>\r\n    <g transform='translate(36.000000, 1.000000)'>\r\n      <path\r\n        d='M36.3353853,17.0393673 C36.1551375,18.0777567 35.8927571,19.1087846 35.3466862,20.0285256 C34.6274709,21.2401241 33.3213404,21.7355025 32.5643885,22.8466397 C31.3705799,24.5990841 32.9555173,27.1231756 31.7781352,28.6842237 C30.5119611,30.3630542 27.6359878,29.346749 26.5163205,31.5755188 C25.3358307,33.925968 27.0535122,37.0679834 25.5729054,39.4058749 C24.1038415,39.0369393 23.6514462,33.5197923 21.3841422,37.0389708 C19.9319488,39.2928559 20.9126566,40.513981 18.7354764,37.2741024 C17.9789685,36.1486754 17.1247893,35.1384326 15.6392989,35.8810671 C14.5955488,36.4024269 14.3806721,38.7178013 13.4297097,38.9672226 C11.0962556,39.5786511 11.0105713,33.3500473 10.2172146,32.1709255 C9.78124586,31.523123 9.3750224,31.1394645 8.59986813,30.8939404 C7.92815655,30.6808931 6.73124021,31.1087199 6.17495825,30.7934791 C5.13032022,30.2019696 4.98914092,28.23821 4.94962847,27.1963565 C4.8759311,25.2572791 5.52544468,23.2770647 4.98958488,21.3579064 C4.53896541,19.7461945 3.1027546,18.7545717 2.63348882,17.1753366 C0.0993647654,8.64045187 11.6836147,3.89495204 18.2986197,3.63037495 C26.0390634,3.32033043 37.3356273,7.85191686 36.3353853,17.0393673 M38.172936,11.7240091 C36.716747,8.28277481 33.5180147,5.54736808 30.2580159,3.71135026 C28.6748543,2.82018878 26.955841,2.16285976 25.1728973,1.77140691 C23.531577,1.41069869 21.6150014,1.64842836 20.0482663,1.19462018 C18.728373,0.811827785 17.9097107,-0.0477230086 16.3562944,0.00207464445 C14.238161,0.0696262433 12.0370069,1.17426809 10.1879133,2.08751375 C6.5279065,3.89538507 3.41663437,6.23630778 1.4618782,9.83126531 C-0.636277062,13.6895009 -0.437382953,17.1865952 1.81083082,20.7832848 C3.95648981,24.2167247 0.837226393,29.045365 3.97824385,32.3086268 C5.29902504,33.6808769 6.59938407,32.6801606 7.84957562,33.3409538 C8.81163708,33.8493229 8.77123671,36.8034063 9.03805671,37.6694524 C10.2385247,41.5623298 14.5524847,43.0692501 16.5436456,38.8602659 C17.4830651,41.2128802 21.1990108,43.6239527 22.9291232,40.5460247 C24.0106099,41.9455552 25.8832335,42.541395 27.3123409,41.3414881 C28.6557641,40.2130299 28.8040467,37.585879 28.8724166,35.9984164 C28.9261357,34.7604034 28.3747373,33.2339971 29.3261438,32.3402375 C30.3734455,31.3559761 32.5204364,31.7708122 33.6951548,30.5011885 C35.0359141,29.0518603 34.4849597,27.3552759 34.5879584,25.6288129 C34.6922891,23.8828639 35.0035051,24.3280116 36.2980926,23.0670485 C39.1833891,20.2567287 39.6717451,15.2600755 38.172936,11.7240091'\r\n        id='Boo!' />\r\n      <path\r\n        d='M14.4199416,28.1214878 C16.4409104,26.2992475 16.0109503,20.7236412 15.8441352,18.1620823 C15.5281264,13.3012213 12.4886458,14.7535905 10.6384079,17.7811955 C9.23849255,20.072024 5.8716471,23.7758196 7.38120621,26.6576793 C8.58337131,28.9535919 12.5610889,29.793746 14.4199416,28.1214878'\r\n        id='Boo!' />\r\n      <path\r\n        d='M27.7905585,19.2735023 C26.7563456,17.3532744 26.3690889,17.0619469 25.1393718,15.4887787 C24.3486011,14.4775769 23.2406052,12.6869687 21.7361817,13.0471169 C19.1541926,13.6660822 20.2075808,19.6585611 20.238428,21.4487472 C20.2617717,22.8065864 19.9608037,24.2138247 21.0892255,25.1768941 C22.2443259,26.1627631 24.1422588,26.073676 25.5295464,25.8676357 C29.7877025,25.2338929 29.5913646,22.6136348 27.7905585,19.2735023'\r\n        id='Boo!' />\r\n      <path\r\n        d='M19.2396436,31.8300192 C18.9563137,31.7944779 19.3174042,31.4678578 19.3591799,31.2433628 C19.5473771,31.8574625 19.6855263,31.8862554 19.2396436,31.8300192 M20.2848621,27.5191742 C17.6678865,24.7492021 12.711061,33.9166085 16.2049116,34.9450569 C17.0098167,35.1821488 17.604189,34.5815458 18.3598733,34.4767215 C19.4596896,34.3242088 20.3837174,34.9635023 21.3333895,33.9548492 C22.8244907,32.3712368 21.5203459,28.8566969 20.2848621,27.5191742'\r\n        id='Boo!' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsIKipComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.IKip;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsIKipComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-ikip]',
                template: "<svg:g id='Clothing/Graphic/Ikip' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd' transform=\"scale(0.3)\">\r\n  <g transform=\"translate(250,200)\">\r\n    <path fill=\"#FFFFFF\" d=\"M147.9,18.9c-2.2-2.2-4.8-3.2-7.8-3.2c-3,0-5.7,1.1-7.8,3.2c-2.2,2.2-3.2,4.8-3.2,7.8c0,3,1.1,5.7,3.2,7.8\r\n\t\tc2.2,2.2,4.8,3.2,7.8,3.2c3,0,5.7-1.1,7.8-3.2c2.2-2.2,3.2-4.8,3.2-7.8C151.2,23.6,150.1,21,147.9,18.9z\" />\r\n    <path fill=\"#FFFFFF\" d=\"M148.3,41.9h-16.4c-0.8,0-1.5,0.7-1.5,1.5v53.3c0,0.8,0.7,1.5,1.5,1.5h16.4c0.8,0,1.5-0.7,1.5-1.5V43.5\r\n\t\tC149.9,42.6,149.2,41.9,148.3,41.9z\" />\r\n    <path fill=\"#CF2760\" d=\"M34.9,90.1c-2,0.6-3.8-0.1-5.4-0.9c-13.2-6.7-17.6-16.7-19.1-23.9c-2.2-11.3,1.6-22.9,6.4-28.5\r\n\t\tc4.5-5.2,8.3-7.9,12.8-9.3c10.4-3,19.8,1,24.2,10.1c4.4,9.2,2.6,17.4-5,22.6c-2.6,1.8-4.6,2.7-6.1,3.5c-2.3,1.1-3.6,1.7-5.8,4.3\r\n\t\tc-3.4,3.9-1.8,8.2,0.3,12.7c1,2.1,2,4.2,0.9,6.6C37.6,88.6,36.4,89.7,34.9,90.1z\" />\r\n    <path fill=\"#00AAC6\" d=\"M83.6,61.2c-1.8,0.6-3.8,0.9-5.8,0.9c-10.8,0.4-18-5-19.7-14.6c-0.6-3.2-0.7-5.6-0.7-7.5\r\n\t\tc-0.1-2.9-0.1-4.4-1.7-7.9c-2.5-5.3-7.8-5.6-13-5.5c-2.5,0.1-6.2,0.2-7.6-3.6c-1.4-3.7,1.8-6.3,2.8-7.1c4.3-3.5,8.9-6.1,13.6-7.6\r\n\t\tl0.4-0.1c19.3-5.8,37.5,7,42.7,18.1c3.2,6.7,4.2,11.7,3.5,16.7c-1.2,8.9-6.4,15.4-14.2,17.9L83.6,61.2z\" />\r\n    <path fill=\"#F6C54B\" d=\"M76.9,103c-4,1.2-7.9,1.7-11.1,1.4c-7.5-0.7-12.5-2.3-16.5-5.5c-9-7-11.4-17.7-6.3-27.3\r\n\t\tc2.9-5.5,6.6-8.9,11.1-10.4l0.4-0.1c3.5-1.1,7.3-0.9,11.3,0.6c3.2,1.2,5.3,2.3,7,3.2c2.5,1.4,3.9,2.1,7.8,2.5\r\n\t\tc1.3,0.1,2.5,0,3.6-0.3c4.2-1.4,6.5-5.6,8-8.4c1.1-2.1,2.1-3.9,4.4-4.7c0,0,0,0,0,0c1.5-0.5,3.1-0.3,4.3,0.5c2.3,1.4,2.7,4,2.9,5.3\r\n\t\tc3.9,24-10.8,37.9-25.9,42.8L76.9,103z\" />\r\n    <path fill=\"#F4B849\"\r\n      d=\"M48.7,82.7c-0.2-1.7-0.2-3.3,0.2-4.7c0.8-3,1.8-4.9,3.4-6.4c3.5-3.2,8-3.5,11.6-0.7c2,1.6,3.2,3.3,3.5,5.3\r\n\t\tl0,0.2c0.2,1.5-0.2,3.1-1,4.6c-0.7,1.2-1.3,2-1.8,2.7c-0.7,0.9-1.1,1.5-1.5,3c-0.1,0.5-0.2,1-0.1,1.5c0.3,1.8,1.9,3,2.9,3.9\r\n\t\tc0.8,0.6,1.5,1.1,1.6,2.1c0,0,0,0,0,0c0.1,0.7-0.1,1.3-0.5,1.7c-0.7,0.9-1.8,0.8-2.4,0.8c-10.1-0.1-14.7-7-15.7-13.5L48.7,82.7z\" />\r\n    <path fill=\"#BC2157\"\r\n      d=\"M44.2,36.5c1.2,1,2.2,2,2.9,3.1c1.4,2.4,2,4.3,1.9,6.2c-0.2,4.3-2.9,7.4-7,7.9c-2.3,0.3-4.2-0.1-5.6-1.1\r\n\t\tl-0.1-0.1c-1.1-0.8-1.9-2-2.3-3.6c-0.3-1.2-0.4-2.1-0.5-2.8c-0.1-1.1-0.2-1.7-1-2.9c-0.2-0.4-0.5-0.8-0.9-1c-1.3-1-3.1-0.8-4.3-0.6\r\n\t\tc-0.9,0.1-1.7,0.2-2.4-0.3c0,0,0,0,0,0c-0.5-0.4-0.8-0.9-0.8-1.4c-0.1-1,0.6-1.7,1-2.1c6.5-6.4,14-4.9,18.8-1.4L44.2,36.5z\" />\r\n    <path fill=\"#009FBF\" d=\"M77.6,54.3c-1.6,0.2-3.1,0.1-4.3-0.2c-2.8-0.7-4.6-1.7-5.9-3.1c-2.9-3.2-3.2-7.4-0.6-10.7\r\n\t\tc1.5-1.9,3-2.9,4.9-3.2l0.2,0c1.4-0.2,2.8,0.1,4.2,0.9c1.1,0.6,1.9,1.2,2.4,1.7c0.9,0.7,1.4,1.1,2.8,1.4c0.5,0.1,0.9,0.2,1.4,0.1\r\n\t\tc1.7-0.3,2.8-1.7,3.6-2.7c0.6-0.7,1.1-1.3,2-1.5l0,0c0.6-0.1,1.2,0.1,1.6,0.5c0.8,0.7,0.8,1.7,0.8,2.2c-0.1,9.3-6.5,13.6-12.5,14.5\r\n\t\tL77.6,54.3z\" />\r\n    <path fill=\"#FFFFFF\" d=\"M107.5,59.2c-0.2-1.5-0.9-5.7-4.8-8c-0.8-0.5-1.7-0.8-2.7-1c0.8-2,1.3-4.1,1.7-6.3c0.8-5.7-0.4-11.5-3.8-18.9\r\n\t\tC92.2,12.7,72.1-1.6,50.7,4.9L50.3,5c-5.2,1.6-10.2,4.4-14.9,8.2c-4.7,3.8-4.9,7.7-4.3,10.2c-0.7,0.1-1.5,0.2-2.2,0.5l-0.3,0.1\r\n\t\tc-5.2,1.6-9.6,4.8-14.6,10.5c-5.5,6.3-9.8,19.2-7.3,31.7c1.6,8.1,6.5,19.2,21.1,26.6c1.3,0.7,4.5,2.3,8.2,1.1\r\n\t\tc1.1-0.3,2-0.9,2.9-1.5c1.7,3.6,4.4,6.9,7.9,9.7c4.6,3.6,10.3,5.5,18.5,6.2c3.8,0.3,8.1-0.2,12.6-1.6c0.4-0.1,0.8-0.2,1.2-0.4\r\n\t\tC94.9,101,111.8,85.6,107.5,59.2z M40.2,19.1c3.9-3.2,8.1-5.5,12.4-6.9c0.1,0,0.2-0.1,0.3-0.1C70.8,6.7,87,19.5,91.1,28.2\r\n\t\tc2.8,6,3.8,10.4,3.2,14.6c-1,7.4-5.2,12.7-11.6,14.7c-0.1,0-0.1,0-0.2,0.1c-1.5,0.5-3.1,0.7-4.8,0.8c-11.4,0.4-14.9-6-15.9-11.4\r\n\t\tc-0.5-3-0.6-5.1-0.6-7c-0.1-3-0.2-5.2-2.1-9.3c-3.7-8-12.1-7.8-16.6-7.7c-2.3,0.1-3.5,0.1-3.9-1.1C38.2,20.9,39.1,20,40.2,19.1z\r\n\t\t M34.1,65.6c-5.3,6.1-2,13-0.2,16.8c0.8,1.7,1.2,2.6,0.9,3.4c-0.2,0.4-0.5,0.6-0.9,0.8c-0.6,0.2-1.3,0-2.6-0.6\r\n\t\tc-11.8-6-15.8-14.8-17.1-21.2c-2-10,1.4-20.5,5.6-25.3c4-4.6,7.3-7,11-8.2l0.2,0h0c8.4-2.4,15.9,0.7,19.5,8.2\r\n\t\tc4.6,9.5,0.5,14.9-3.7,17.8c-2.3,1.6-4.1,2.4-5.7,3.2C38.6,61.5,36.8,62.4,34.1,65.6z M76.7,99c-0.3,0.1-0.6,0.2-1,0.3\r\n\t\tc-3.5,1.1-6.9,1.5-9.7,1.3c-6.7-0.6-11.1-2-14.5-4.7C44,90.1,42,81.4,46.3,73.4c2.5-4.6,5.4-7.4,9-8.6c0.1,0,0.2-0.1,0.3-0.1\r\n\t\tc2.7-0.8,5.7-0.6,8.9,0.5c2.9,1,4.8,2.1,6.5,3c2.7,1.5,4.6,2.5,9.3,2.9c1.8,0.2,3.5,0,5-0.5c0.1,0,0.2-0.1,0.3-0.1\r\n\t\tc5.4-1.8,8.3-7,10-10.2c0.9-1.7,1.4-2.6,2.2-2.9c0,0,0,0,0,0c0.4-0.1,0.8-0.1,1.1,0.1c0.7,0.4,0.9,1.3,1.2,2.7\r\n\t\tC103.5,82.1,90.3,94.6,76.7,99z\" />\r\n    <path fill=\"#F6C54B\" d=\"M140.1,35.7c-2.5,0-4.6-0.9-6.3-2.6c-1.7-1.7-2.6-3.9-2.6-6.3c0-2.5,0.9-4.6,2.6-6.3c1.7-1.7,3.9-2.6,6.3-2.6\r\n\t\ts4.6,0.9,6.3,2.6c1.7,1.7,2.6,3.9,2.6,6.3c0,2.5-0.9,4.6-2.6,6.3C144.7,34.8,142.6,35.7,140.1,35.7z\" />\r\n    <g>\r\n      <path fill=\"#FFFFFF\" d=\"M200.1,55.2l33.5-35c0.3-0.3,0.5-0.7,0.5-1.1c0-0.8-0.7-1.5-1.5-1.5h0h-22.4c-0.4,0-0.8,0.2-1.1,0.5\r\n\t\t\tl-27.5,29.4V19.1c0-0.8-0.7-1.5-1.5-1.5h-17.1c-0.8,0-1.5,0.7-1.5,1.5v77.6c0,0.8,0.7,1.5,1.5,1.5H180c0.8,0,1.5-0.7,1.5-1.5V64.1\r\n\t\t\tl28.9,33.7c0.3,0.3,0.7,0.5,1.2,0.5h23.9c0.6,0,1.2-0.4,1.4-0.9c0.2-0.6,0.1-1.2-0.3-1.7L200.1,55.2z\" />\r\n      <path fill=\"#FFFFFF\" d=\"M260.1,41.9h-16.4c-0.8,0-1.5,0.7-1.5,1.5v53.3c0,0.8,0.7,1.5,1.5,1.5h16.4c0.8,0,1.5-0.7,1.5-1.5V43.5\r\n\t\t\tC261.6,42.6,260.9,41.9,260.1,41.9z\" />\r\n      <path fill=\"#FFFFFF\" d=\"M251.9,15.6c-3,0-5.7,1.1-7.8,3.2c-2.2,2.2-3.2,4.8-3.2,7.8c0,3,1.1,5.7,3.2,7.8c2.2,2.2,4.8,3.2,7.8,3.2\r\n\t\t\tc3,0,5.7-1.1,7.8-3.2c2.2-2.2,3.2-4.8,3.2-7.8c0-3-1.1-5.7-3.2-7.8C257.5,16.7,254.9,15.6,251.9,15.6z\" />\r\n      <path fill=\"#FFFFFF\" d=\"M331.5,58c-1.3-3.5-3.2-6.6-5.6-9.2c-2.4-2.6-5.4-4.6-8.8-6.1c-3.4-1.4-7.2-2.1-11.3-2.1c-2,0-4,0.3-5.8,0.8\r\n\t\t\tc-1.8,0.5-3.5,1.3-5,2.1c-1.5,0.9-2.9,1.8-4,2.9c-0.1,0.1-0.1,0.1-0.2,0.2v-3.2c0-0.8-0.7-1.5-1.5-1.5H274c-0.8,0-1.5,0.7-1.5,1.5\r\n\t\t\tv78.3c0,0.8,0.7,1.5,1.5,1.5h16.4c0.8,0,1.5-0.7,1.5-1.5v-27c1.6,1.4,3.4,2.5,5.5,3.2c3.1,1.1,6.5,1.7,10.1,1.7\r\n\t\t\tc4,0,7.7-0.9,10.9-2.5c3.2-1.7,5.9-3.9,8.1-6.7c2.2-2.8,3.9-6,5.1-9.5c1.2-3.5,1.8-7.3,1.8-11.2C333.4,65.5,332.8,61.6,331.5,58z\r\n\t\t\t M313.9,70.1c0,3.7-1,6.5-3,8.7c-2,2.2-4.8,3.2-8.6,3.2c-3.8,0-6.6-1.1-8.6-3.2c-2-2.2-3-5.1-3-8.7c0-3.7,1-6.5,3-8.7\r\n\t\t\tc2-2.2,4.8-3.2,8.6-3.2c3.8,0,6.6,1.1,8.6,3.2C312.9,63.6,313.9,66.4,313.9,70.1z\" />\r\n    </g>\r\n    <path fill=\"#F6C54B\" d=\"M133.1,96.2c-0.4,0-0.6-0.3-0.6-0.7V44.9c0-0.4,0.3-0.7,0.6-0.7h14c0.4,0,0.6,0.3,0.6,0.7v50.6\r\n\t\tc0,0.4-0.3,0.7-0.6,0.7H133.1z\" />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsBatComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Bat;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsBatComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-bat]',
                template: "<svg:g id='Clothing/Graphic/Bat' [attr.mask]=\"urlFix(mask1)\" fill-rule='evenodd' [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Batman!'>\r\n    <path\r\n      d='M87.6852404,13.4031978 C86.29151,6.97182978 81.4755637,3.2534243 75.1844381,1.81688169 C72.6586144,1.2402574 64.2721154,-0.570361088 65.5784818,4.22465302 C66.1709196,6.39748644 65.8414841,8.18940114 64.0250388,9.99135202 C62.2550056,11.7463153 58.793658,12.1906445 57.0732221,9.97994727 C55.5989529,8.08493361 57.5000322,5.25883596 56.3515582,3.41309083 C55.9056373,2.69596 55.1361961,2.32963935 54.323983,2.68090573 C53.1827893,3.17450341 53.7902429,4.23560158 53.2510425,4.99880761 C52.4024277,6.20178089 52.005649,5.82542406 51.2416681,4.6261003 C50.7616206,3.87247426 51.2334777,3.05133209 49.9949096,2.72926188 C48.5615922,2.35655457 48.0924652,3.5572469 47.9627841,4.65164695 C47.8813352,5.33866923 48.2849392,6.44356164 48.2990449,7.14016392 C48.3263462,8.50417231 48.2084956,10.4630526 47.5741958,11.668763 C46.449383,13.8060136 44.8695487,13.1221847 43.1909749,11.7645629 C41.2107218,10.1633357 40.6296595,8.3800886 41.0127875,5.94768301 C41.4719041,3.03125972 41.3053663,0.239376333 37.7334484,2.06368053 C32.7127425,4.62792506 28.0537786,9.19894983 25.144827,13.9830154 C22.6999971,18.0025063 20.7757117,22.8759851 22.9416134,27.4556775 C25.1521073,32.1307136 28.8036539,36.1460988 33.9080837,37.3394921 C35.2294658,37.6483328 38.9997729,39.1501106 40.2533568,37.8905698 C42.1999383,35.9335142 37.7052371,34.1082977 36.8179454,32.9158167 C35.5598113,31.2256324 34.4805006,28.0012808 35.8614905,26.0944062 C37.6206031,23.6670187 39.4602546,25.0200786 40.9063125,26.7376343 C42.0415909,28.085676 43.6550967,31.5636693 45.4119342,28.759925 C46.621381,26.8288723 46.513086,23.6583511 49.812446,25.0433443 C54.5269225,27.0213845 54.6716193,36.1552226 55.5120438,40.3343801 C55.879246,42.1637024 57.5473544,44.3981215 58.9829469,41.8594236 C59.7719539,40.4634819 59.3460539,37.437573 59.2022672,35.9960123 C58.9055932,33.0111605 58.1225014,30.0760334 59.092607,27.1190092 C59.6536484,25.4082963 61.093336,22.9594679 63.2223811,24.2751201 C64.9469121,25.3407802 64.2284333,30.0910877 66.5745236,30.0824201 C68.6412307,30.075121 68.0774592,26.2910242 69.1777009,25.0433443 C70.8571848,23.1387506 74.0937518,24.0442879 75.0870635,26.2919365 C76.4243714,29.3169331 72.88476,31.4176885 73.0435625,34.0768205 C73.1982698,36.6684365 76.5376717,35.657063 77.9345873,34.9996931 C80.8057722,33.6493704 83.0526678,31.1467116 84.6097509,28.428731 C87.0172691,24.2253954 88.7354298,18.2068795 87.6852404,13.4031978' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsCumbiaComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Cumbia;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsCumbiaComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-cumbia]',
                template: "<svg:g id='Clothing/Graphic/Cumbia' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd'\r\n  [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Group'>\r\n    <g transform='translate(0.000000, 6.000000)'>\r\n      <path\r\n        d='M10.271566,24.1315073 C13.5453197,23.5731503 16.0029461,20.5783262 15.4519585,17.3443595 C14.9878717,14.6197774 13.7065483,17.0011951 12.4758861,18.1969085 C11.1405733,19.4948562 10.0263951,20.7706412 7.9400381,20.2508902 C4.33273358,19.3518711 3.08247252,14.8503409 4.09976568,11.7711556 C4.65593031,10.0878629 5.87660814,8.76060323 7.57838317,8.07498941 C9.42992328,7.32896437 10.7818767,8.16542752 12.3264908,9.1691833 C12.6145575,9.35649386 14.0556303,10.5386236 14.3204002,10.4181586 C14.7822683,10.2079704 14.435405,7.98955578 14.3651448,7.69393398 C14.0267867,6.27266155 13.0993526,5.11877135 11.7481388,4.45603516 C8.41484886,2.82099993 4.23436935,4.94468693 2.10881463,7.51091298 C-2.77648522,13.4083357 1.18803674,25.6753895 10.271566,24.1315073'\r\n        id='Fill-1' />\r\n      <path\r\n        d='M20.283037,5.0382162 C20.2819296,5.04100097 20.2826679,5.03926048 20.283037,5.0382162 M18.6886879,17.9031695 C19.1918363,21.3771733 21.6658646,24.4038731 25.6412168,24.2597611 C29.9192703,24.1048581 31.6970859,20.1616201 32.6494871,16.7739442 C33.6055798,13.3751292 34.7008413,9.09110464 33.3132148,5.68149867 C32.8931247,4.64939232 32.6284457,3.30051808 31.5966777,4.15126612 C30.3445285,5.18372056 30.188379,8.18953451 30.0824336,9.59271181 C29.8819863,12.2396382 29.3005786,19.5639383 25.9741881,20.5368682 C21.7954354,21.7593834 21.9264829,14.6895419 21.9733647,12.559887 C22.0147092,10.6641531 22.2203245,8.82550695 21.6322721,6.97572174 C21.3192348,5.99095653 21.0416357,4.53521664 20.1036312,5.34175641 C18.8141981,6.45044401 18.6506656,9.16977447 18.5602244,10.6690264 C18.4155185,13.0736776 18.3464879,15.5110498 18.6886879,17.9031695'\r\n        id='Fill-5' />\r\n      <path\r\n        d='M37.7827156,20.7457507 C37.9712859,21.1583285 38.4071734,22.1476129 38.8028084,22.4248624 C39.7471104,23.085889 38.7480505,23.1327334 39.6027816,22.3662202 C40.4161723,21.6371824 40.7331154,19.6485506 40.8571366,18.6953537 C41.2422552,15.7354812 40.7367418,12.5875371 40.7704668,9.60302793 C41.7938233,11.8206768 42.3544573,14.1868398 43.1555184,16.4766638 C43.7096249,18.0589637 44.5516638,21.2808179 46.809793,21.2301566 C49.2532288,21.1753312 49.3790632,18.0849884 49.7043469,16.4110816 C50.1652562,14.0411017 50.674396,11.6898595 51.3797214,9.37401083 C51.4718308,13.2836103 49.952752,20.3692605 53.4880823,23.2940864 C53.5018625,23.3072722 54.9204913,19.144366 54.954579,18.8882832 C55.1783249,17.1970267 55.0383477,15.4440049 55.0622816,13.7402565 C55.1130505,10.1433001 55.779574,5.73680294 54.762745,2.23422934 C54.4338349,1.10024771 53.7872564,-0.0302639607 52.3530342,0.000618647874 C50.5278914,0.0401761465 50.1202895,1.98612748 49.6550286,3.29915884 C48.3742011,6.91277103 47.2097796,10.5229133 46.2981148,14.2395832 C45.7498104,12.5594305 40.9593998,-2.18198369 37.5092887,3.33767535 C36.9540943,4.22633108 37.1937961,5.55601823 37.1709501,6.53385184 C37.1274339,8.41283302 37.0161049,10.2897322 36.9754898,12.1690604 C36.9138418,15.0116484 36.5653494,18.0756195 37.7827156,20.7457507'\r\n        id='Fill-7' />\r\n      <path\r\n        d='M62.0203329,7.70997634 C62.739914,7.57453437 67.7552707,5.98272311 67.5433251,7.57379827 C67.3203514,9.24915661 62.9098151,10.8829254 61.7267107,11.4497207 C61.7246429,10.2414163 61.4930536,9.00918877 61.0839813,7.88259125 C61.3958688,7.82517563 61.7081008,7.76739196 62.0203329,7.70997634 M67.7366608,7.0706755 C67.7370055,7.06957135 67.7101246,7.03497476 67.7366608,7.0706755 M67.8590034,15.4110304 C70.1314738,16.6318484 69.1461853,18.8279958 67.4326998,20.0186339 C66.7844565,20.4691256 60.9030521,21.8209691 60.9195942,21.6818466 C60.9202835,21.6855271 60.9192496,21.6869993 60.9164926,21.6866312 C61.0960433,19.9925024 60.6587116,16.6686533 61.9159109,15.6664563 C63.2203241,14.6267183 66.4163948,14.8593252 67.8590034,15.4110304 M67.9210363,7.41553727 C67.9299966,7.4383563 67.9220702,7.41811361 67.9210363,7.41553727 M57.9444294,24.2596607 C58.1677477,24.8109979 58.8039291,26.1720425 59.5100698,26.2047988 C60.3706034,26.2449162 60.3040904,25.1617484 60.4388396,24.49558 C63.8802848,26.2162084 68.9369967,24.4481017 71.346284,21.4654339 C74.1325933,18.014976 72.6941202,13.1953763 68.7674402,11.7202366 C70.879659,10.0319965 72.7933728,6.32096 70.0222271,4.23081061 C67.8262639,2.57459081 64.19424,2.48294665 61.8993688,3.92827446 C59.1637197,5.65111111 58.0495406,9.7614806 57.8096802,12.9340616 C57.553967,16.3156944 56.6513889,21.0591079 57.9444294,24.2596607'\r\n        id='Fill-9' />\r\n      <path\r\n        d='M76.0506048,15.8714133 C76.1237655,17.940757 75.9002189,20.1580872 76.3823293,22.1766928 C76.5533503,22.8940747 76.8153532,23.6882686 77.1423879,24.3390566 C77.7529985,25.5536025 77.4525393,25.3897603 78.1744543,24.6980999 C80.3464523,22.6164239 79.3828568,16.1236949 79.3306438,13.4500732 C79.2896863,11.3715683 79.3947376,9.17044617 78.8182061,7.16734396 C78.656252,6.60499548 77.6954704,3.81897451 77.1633356,3.88345432 C76.3469995,3.98140725 75.7873513,7.81319908 75.7401407,8.57603396 C75.592256,10.9723573 75.9658759,13.4712141 76.0506048,15.8714133'\r\n        id='Fill-11' />\r\n      <path\r\n        d='M94.7477626,16.430477 C93.1655372,16.2926323 91.1264105,16.5045376 89.6311966,16.9871715 C90.3280165,15.0708102 91.1056588,12.9329761 91.8694667,11.1973368 C92.343479,10.1066267 92.8411555,9.02761048 93.3628603,7.95745314 C94.6410916,10.6431228 95.3546586,13.7848497 96.19492,16.6232471 C95.7158108,16.535721 95.233425,16.4715824 94.7477626,16.430477 M100.188346,17.1547822 C99.4605809,14.375208 98.6093975,11.6225649 97.7622188,8.8759458 C97.2244951,7.13215631 96.6321618,4.96384744 95.1624324,3.70729846 C90.9986238,0.146013273 88.6354794,9.55701945 87.6142778,11.9390054 C86.6294827,14.2352371 85.3978516,16.5725741 84.764743,18.9878696 C84.4541957,20.1714211 84.3555342,21.4261983 84.5197274,22.6402245 C84.725424,24.1589974 84.5157227,24.3811791 85.8136135,23.5544648 C86.8140635,22.9176858 87.2280051,21.7617741 88.0409617,20.9917569 C88.1847673,20.8556839 88.2586724,20.3241488 88.4301469,20.2373314 C88.6194606,20.1413008 89.9348266,20.4896334 90.2461019,20.5112492 C92.4155638,20.6622052 94.958192,20.2933198 96.9605482,19.4573923 C97.1658807,20.2989895 98.5882817,25.4187356 99.9378698,25.2302178 C100.5353,25.1465897 100.903369,22.1660952 100.929946,21.6933833 C101.017322,20.1398833 100.57826,18.6444979 100.188346,17.1547822'\r\n        id='Fill-13' />\r\n      <path\r\n        d='M109.301672,3.43213272 C109.038492,2.22890734 108.487555,0.14016215 107.459721,1.31990649 C106.069159,2.9162614 106.369359,6.49285063 106.348516,8.49692176 C106.333584,9.94847693 104.797121,20.5594163 106.905363,20.3801066 C106.815459,20.3801066 107.750277,18.7118855 107.885912,18.4578633 C108.700028,16.9340861 109.016405,15.4885791 109.213945,13.735684 C109.578851,10.499214 109.997264,6.62484253 109.301672,3.43213272'\r\n        id='Fill-15' />\r\n      <path\r\n        d='M108.164017,24.3012978 C105.924782,21.573307 101.852706,24.9591601 103.122505,27.675428 C104.85153,31.3753862 110.454236,27.1147969 108.164017,24.3012978'\r\n        id='Fill-17' />\r\n      <path\r\n        d='M94.8984918,28.5446042 C92.0066895,27.8070876 88.6012921,28.3048186 85.6491092,28.3933947 C82.5678984,28.4853064 79.489563,28.6568994 76.4083523,28.7499229 C69.8412367,28.9481999 63.2849033,28.8418345 56.7170689,28.7877252 C44.2631983,28.6854365 31.7816533,29.4770624 19.334252,28.9556122 C16.661689,28.8440582 13.7889353,28.2429265 11.1361398,28.7473286 C10.409056,28.8859372 8.12717022,29.2902742 7.80729649,30.013337 C7.47088995,30.7730903 9.20934979,31.5680517 10.1384213,31.968312 C12.560117,33.0119536 15.4670145,32.8262773 18.0389431,32.9319015 C20.9688428,33.0527208 23.9249793,32.9900875 26.856676,32.9181889 C38.9324486,32.6213292 50.9456841,31.5750933 63.0376301,31.7529868 C70.0126746,31.8560167 76.974421,31.7911597 83.9494655,31.7544692 C87.2686047,31.7366799 90.9489497,32.2799961 94.2217253,31.6922065 C94.773777,31.5928827 97.9847343,30.8375767 98.0293009,29.8561978 C98.0497872,29.4033107 95.2233973,28.6276211 94.8984918,28.5446042'\r\n        id='Fill-19' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsDeerComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Deer;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsDeerComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-deer]',
                template: "<svg:g id='Clothing/Graphic/Deer' [attr.mask]=\"urlFix(mask1)\" fill-rule='evenodd' [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='oh,-deer!'>\r\n    <path\r\n      d='M76.9598206,16.2351328 C77.3545748,17.6603319 74.7317873,18.9054413 73.8540158,19.6535687 C72.3474717,20.9370645 70.7886986,22.2879408 69.0287021,23.2010483 C68.2808959,23.5889965 67.4755973,23.9042554 66.6674645,24.1357992 C65.420446,24.4927115 65.5625576,24.2427912 65.0864232,25.3008688 C64.2491394,27.1617948 64.0321258,29.6352706 63.2754123,31.6133978 C61.5708838,36.0670427 57.5083567,46.4138243 51.0084754,41.8719723 C48.9403681,40.4271716 47.8107637,37.6249608 46.6471497,35.4361165 C45.312678,32.9242543 44.0348889,29.927661 43.2668389,27.1858884 C42.8923285,25.8501217 43.1299908,25.3952014 42.1376394,24.7708091 C41.514535,24.3787772 40.4582132,24.2775023 39.7537287,23.9908291 C38.2544724,23.3807295 36.9414591,22.5546042 35.6656945,21.5602318 C34.4279881,20.5948534 29.5561137,16.6096049 33.5340216,15.8696448 C35.3592032,15.5298839 37.7512114,15.6560692 39.6006855,15.7495851 C41.6283052,15.8520851 43.6741443,16.3196647 45.4774626,17.2854514 C47.3184343,18.2720648 46.7783296,17.9862083 48.6865108,17.4345052 C45.3653119,16.3090472 42.0384447,14.4370952 39.8031236,11.6536693 C38.5961879,10.1508806 35.8037572,4.00047299 37.9022302,2.58875006 C40.4225841,0.893212425 40.6331197,7.93508406 41.3416529,9.15569148 C42.9344356,11.8995059 45.8495437,12.9351233 48.3844732,14.454655 C46.6435058,12.7868862 45.3446632,10.9496454 44.7106272,8.58683697 C44.4357163,7.56224546 43.6846711,5.0981621 44.1919809,4.10133952 C44.7207491,3.06123008 45.9641237,2.99507471 46.6499838,3.88041325 C47.2678248,4.67754462 47.1123524,6.5115185 47.3241026,7.47240483 C47.6739156,9.06095045 48.2451958,10.282783 49.3059712,11.5127828 C50.8113007,13.2585495 52.7227209,14.6866071 54.9750468,15.2395353 C60.1015883,16.4977125 61.8947847,11.1317769 62.5826693,6.99461605 C62.7510977,5.98186717 62.5033135,4.30184746 63.6329179,3.81589134 C65.0001846,3.22743524 65.5293577,4.56156854 65.5690356,5.59718594 C65.6564888,7.91058207 64.5127138,11.4535697 63.4029483,13.4419061 C66.1929497,11.7100238 68.4064075,8.96375923 69.3015886,5.75399867 C69.6327773,4.56646894 69.3639395,1.9182123 70.4757294,1.25134983 C72.0154733,0.327216479 72.5049686,2.16772422 72.45112,3.27317229 C72.1324825,9.78825116 67.1525061,15.7132405 60.9627599,17.341806 C62.4810453,18.1005509 62.2814414,18.2716565 63.8114683,17.3650829 C64.6961227,16.840332 65.656084,16.4352324 66.6375037,16.1342663 C68.1076089,15.6834297 69.6931038,15.453111 71.2182722,15.3183501 C72.4377591,15.2105413 76.4921887,14.5012087 76.9598206,16.2351328 Z M58.8595294,24.6214062 C59.7193936,22.4825816 56.3639386,22.4048657 56.0375022,24.7163015 C55.622102,27.6609177 58.7932497,27.8924294 58.8595294,24.6214062 Z M56.9297708,33.6367531 C57.5886752,31.4414328 53.4036129,31.5246305 53.0344702,33.4664333 C52.5980925,35.7582944 56.4400387,35.1974948 56.9297708,33.6367531 Z M51.7024587,27 C54.0260737,27 54.9736078,23.9354052 52.6986912,23.1385385 C49.8083182,22.1255453 48.8835101,27 51.7024587,27 Z' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsDiamondComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Diamond;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsDiamondComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-diamond]',
                template: "<svg:g id='Clothing/Graphic/Diamond' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd'\r\n  [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Diamond'>\r\n    <g transform='translate(29.000000, 2.000000)'>\r\n      <path\r\n        d='M34.7804613,27.7365051 C32.3910217,30.3933795 29.9226048,32.9801662 27.4446301,35.5565142 C28.4300853,32.0044048 29.1846452,27.9785814 30.6489944,24.5994547 C31.0655115,23.6371144 30.7485963,23.5153306 31.576097,23.1057395 C32.1847753,22.8045111 33.6536519,23.1494823 34.3825567,23.1678741 C35.9404713,23.2066461 37.5335988,23.3597457 39.0789374,23.1186635 C37.6281703,24.6436945 36.1869609,26.1712109 34.7804613,27.7365051 M19.5162179,31.798118 C16.8174087,28.5164183 14.1321816,25.2302449 10.8578947,22.4814113 C12.146683,22.6176103 13.5536857,22.4376686 14.8163159,22.687201 C16.7595591,23.0714412 16.6534177,23.6778747 17.6358547,25.6458009 C19.0866218,28.5522078 20.5248129,31.434755 21.6858291,34.4689106 C20.9750337,33.5692019 20.2446197,32.6844056 19.5162179,31.798118 M10.4182378,19.266817 C11.3810563,17.6920783 11.5616476,16.294796 13.3373785,15.4865494 C15.3988361,14.5480688 18.6379102,14.7454082 20.8256308,14.5709343 C19.4553501,16.093977 17.7887788,17.6736865 17.2223558,19.6928116 C16.3480725,17.9749149 15.2599971,16.5189775 13.5521766,15.5223389 C13.3368755,15.4159645 14.7101745,20.0725781 14.8897597,20.3926954 C13.1743936,20.2967597 11.3684803,19.9850926 9.66518708,20.3012334 C9.916204,19.9562622 10.1672209,19.611291 10.4182378,19.266817 M26.8243819,14.2592673 C28.4154971,14.2945597 29.9940364,14.4183318 31.563521,14.6783029 C30.2968665,16.353451 29.9150592,18.3104416 29.4653415,20.3086895 C28.9869505,18.0509676 27.2564932,15.9473394 25.7312761,14.2607585 C26.095477,14.2602615 26.4596779,14.2597644 26.8243819,14.2592673 M23.3257392,15.3334498 C23.5601558,15.1748824 27.7826729,20.4190405 28.3923573,20.889275 C25.0798394,20.8813217 21.7743641,20.7192748 18.4658705,20.5736313 C20.3728949,19.0868752 21.4886374,16.8863171 23.3257392,15.3334498 M26.0124754,32.4289082 C25.6105465,33.7779741 25.2352788,35.1369815 24.797634,36.4756088 C23.2432407,31.7444337 20.9357965,27.288142 18.7898282,22.8020257 C22.1295103,22.8900083 25.465671,23.0107979 28.8058561,23.0575231 C27.9864041,26.2164449 26.9441054,29.3032906 26.0124754,32.4289082 M33.2416622,14.9656131 C34.5188805,16.093977 36.338879,18.4063774 36.9284418,19.1833081 C36.9867944,19.260355 37.0461531,19.3369048 37.1070209,19.4124604 C37.3177947,19.6744198 38.0733606,20.6680759 38.3701542,21.0567898 C36.1426934,20.8306199 33.8251885,20.9270528 31.5901821,20.9066727 C32.0881916,18.8527521 32.6938517,16.8952645 32.1737084,14.7787123 C32.5308668,14.8363732 32.886516,14.8985078 33.2416622,14.9656131 M40.8898811,20.5830758 C38.7323429,17.9068154 36.5199733,13.3247633 33.025858,12.5055811 C29.5538765,11.6918667 25.478247,12.0517501 21.9519372,12.2754346 C18.8773572,12.4702886 13.8690917,12.0721303 11.1572035,13.8690622 C9.76378291,14.7921334 8.73154499,16.8738902 8.2491297,18.4202955 C7.81450321,19.8131041 8.51523782,20.7048596 7.00259677,20.7048596 C6.90651615,20.7048596 9.50672951,24.3777585 9.81308082,24.66656 C12.0853121,26.8064748 14.2574385,28.8688456 16.2701013,31.2642577 C19.1047312,34.6379166 21.6747622,39.6022206 25.414864,41 C24.7292206,40.6609938 28.2067356,38.0334469 28.6242587,37.5811072 C30.7355173,35.2930636 32.8709217,33.0268914 34.9967685,30.7517718 C36.9349813,28.6779682 39.0472459,26.7209776 40.9271061,24.6004489 C42.361776,22.9824645 42.3658003,22.4262358 40.8898811,20.5830758'\r\n        id='Fill-21' />\r\n      <path\r\n        d='M6.99858316,11.9999257 C7.04159508,12.0142408 6.09038895,9.95483812 6.17394084,10.0812061 C5.69932656,9.36248835 5.12830624,8.8402333 4.43566602,8.35351923 C3.70792411,7.84261755 0.1270582,7.25421678 0,7 C1.49355183,9.65224611 4.16721231,11.1276907 6.99858316,11.9999257'\r\n        id='Fill-23' />\r\n      <path\r\n        d='M22.3553325,7.19614224 C22.5279973,7.84840006 22.7925782,8.44932951 23.1490753,8.99893058 C23.2186566,9.07737584 24.0076748,4.81518326 23.9999436,4.45201075 C23.9866286,3.8317121 23.6120919,0 22.814054,0 C21.4769753,0 22.1397162,6.46931298 22.3553325,7.19614224'\r\n        id='Fill-25' />\r\n      <path\r\n        d='M48.969198,5 C45.977552,5 39.2896081,10.8535875 40.0615528,13.9997703 C40.0673207,14.0103781 40.50905,13.6497123 40.4129174,13.7172166 C40.4321439,13.7032335 40.4508897,13.6887683 40.4691549,13.6738209 C41.7405084,12.649202 43.1873037,11.6544779 44.4605798,10.4683308 C45.3723974,9.61874094 46.4476403,8.85642448 47.2772645,7.92727594 C47.3618612,7.83276992 49.2628831,5 48.969198,5'\r\n        id='Fill-27' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsHolaComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Hola;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsHolaComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-hola]',
                template: "<svg:g id='Clothing/Graphic/Hola' [attr.mask]=\"urlFix(mask1)\" fill-rule='evenodd' [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Hola'>\r\n    <path\r\n      d='M74.6371722,16.9479681 C75.917206,22.7098952 73.7328313,28.1917851 69.3072818,31.9519351 C67.2267705,33.7200766 64.8728066,35.0262382 62.2514759,35.7865716 C60.7921156,36.2102906 59.2674351,36.5090512 57.7541146,36.6572104 C56.61811,36.7683298 54.9700918,36.2570992 53.9631048,36.5456839 C52.8441403,36.8672382 51.4050658,38.4111058 50.2065809,38.9084974 C49.535121,39.1873134 48.8385068,39.4319389 48.1390525,39.6350472 C46.6326292,40.0734193 45.0742742,40.3689236 43.5256565,40.611514 C41.9242956,40.8622449 35.2433712,41.9140123 36.070626,38.9752504 C36.3550329,37.9641861 39.1816559,36.4707903 39.7950984,35.791049 C40.2486888,35.288773 42.9398027,32.427347 42.8140307,31.4960606 C42.7742705,31.2021844 41.0666121,29.8650885 40.6657648,29.4157265 C39.7573668,28.3973356 38.9041462,27.3581862 38.4205328,26.0646425 C37.5920608,23.8487672 37.6354724,21.0667121 37.9105478,18.7446017 C38.5986421,12.9407505 41.476791,9.08616941 46.5133487,6.19584415 C49.3679661,4.55795247 52.4720988,3.65678642 55.718232,3.26074551 C59.6739625,2.77841409 62.8279982,2.76294692 66.1848919,5.01097768 C70.6051671,7.97090519 73.4601902,11.6785482 74.6371722,16.9479681 Z M69.5056769,23.9358717 C70.5917785,23.6358901 69.1977385,20.8827342 68.427284,22.2161669 C68.1497742,22.6968702 68.8902058,24.1047895 69.5056769,23.9358717 Z M67.6848238,18.6143519 C67.7728641,18.973353 68.1185341,19.0836583 68.4325583,19.0405131 C69.182727,18.9371273 68.7125023,18.059976 68.7340052,17.6684125 C68.7741711,16.9194759 68.8407085,15.0292252 68.5619816,14.3474487 C68.0491567,13.0942011 67.5866405,13.3339422 67.2884393,14.5615469 C67.0210725,15.6617509 67.4109655,17.5092635 67.6848238,18.6143519 Z M66.6372652,22.892652 C67.4795315,22.3952604 65.2570196,16.7171816 64.7685376,15.9051553 C62.8770898,12.7604359 62.2652702,18.3363499 61.9751833,19.714149 C61.8498171,20.310856 60.4574,26.4960951 62.3135504,24.5020515 C63.3047144,23.4376661 61.755691,19.900162 64.5567538,20.7227711 C65.540615,21.0117629 64.8289892,20.9287287 65.4314774,21.8315228 C65.6517812,22.1616248 65.8887193,23.3326522 66.6372652,22.892652 Z M60.2947079,21.5987013 C61.0809854,20.2481733 57.6303713,20.8778498 57.2327696,20.9022717 C57.3268957,19.1027888 57.6782457,17.2792911 57.6733771,15.4798082 C57.67216,15.0052104 57.8380978,13.2887618 56.7146704,14.0987529 C56.2606742,14.4264127 56.4168749,15.9283561 56.3787376,16.3789391 C56.2886686,17.436405 55.4313908,21.0858425 56.2708171,21.9381649 C56.8660024,22.5421985 59.9640494,22.1587756 60.2947079,21.5987013 Z M55.4961584,19.1587406 C55.8337431,17.8148148 55.4118876,14.9057989 53.6512301,14.8794474 C53.0382604,14.8705068 53.3156518,15.7104604 53.164165,15.7984555 C52.0992431,16.4200683 51.6357538,16.3414844 51.0047261,17.4454234 C48.5177346,21.7957715 54.0705776,24.8897184 55.4961584,19.1587406 Z M49.4685836,22.9899323 C50.2301124,22.7799045 50.0146773,13.0115738 49.1375194,13.0062824 C47.6286618,12.9977348 49.0750392,17.8462849 48.5033854,18.49672 C48.3321733,18.6916877 47.4769241,18.5109661 47.2529689,18.5520762 C46.1129071,18.7637322 45.3623326,18.6444722 45.0126054,17.9464145 C44.7014213,17.3265067 45.3736926,13.0661159 43.7552917,15.1562188 C43.7698975,15.8937585 43.7816632,16.6317052 43.7901833,17.3692449 C44.1261161,18.0843979 44.0007498,18.5195137 43.4136789,18.6754065 C43.3844673,19.14512 43.8056005,19.5387187 43.8108748,19.6921693 C43.8360292,20.4630855 43.3268557,23.9232538 44.7111585,23.7563712 C45.5960249,23.6493221 45.0316741,20.2746303 45.0280226,19.7255458 C46.1705187,19.7532239 47.3673807,19.8806245 48.5033854,19.7336864 C48.5086597,20.1610687 48.2149214,23.3367225 49.4685836,22.9899323 Z M63.8368644,17 C64.2706568,17.6069046 64.6557203,18.2184508 65,18.8421816 C64.3342161,18.8990426 63.6679025,18.9518422 63,19 C63.2722458,18.332463 63.5439619,17.664926 63.8368644,17 Z M53.9230169,17 C54.0684325,17.4229772 54.1789882,20.2877939 52.5679624,19.9763934 C51.6476608,19.7985469 52.0614978,18.2121289 52.3219511,17.8848372 C52.8722396,17.1947521 53.1949428,17.4368397 53.9230169,17 Z' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsSelenaComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Selena;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsSelenaComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-selena]',
                template: "<svg:g id='Clothing/Graphic/Selena' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd'\r\n  [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Selena'>\r\n    <g transform='translate(17.000000, 0.000000)'>\r\n      <path\r\n        d='M65.3033729,7.56759412 C65.1470447,8.49857487 63.3805357,12.656817 62.0741755,10.5184706 C61.5650892,9.68550605 62.4755312,7.05707864 62.7589611,6.30931546 C63.3169849,4.836648 63.7329539,4.67144048 65.0219821,3.97805378 C65.1307322,5.16706304 65.4331933,6.37685313 65.3033729,7.56759412 M62.3188632,10.8866375 C62.3487694,10.8987596 62.4772304,11.018942 62.3188632,10.8866375 M62.3110467,10.8804032 C62.3052694,10.8755544 62.3107069,10.8800569 62.3110467,10.8804032 M55.0298897,6.20471867 C55.040085,6.21337734 55.0829054,6.246973 55.0298897,6.20471867 M42.5545574,11.1605979 C42.3475925,12.3804321 42.0797954,13.5995735 41.6509123,14.760875 C41.48167,13.0294864 41.7542249,11.3046783 42.651413,9.81019097 C42.6412176,10.2618275 42.6089325,10.7120786 42.5545574,11.1605979 M42.544702,8.65858718 C42.5406238,8.64334792 42.3859948,8.41891506 42.544702,8.65858718 M25.9083201,18.8030909 C26.0609101,17.2701591 26.6763675,15.7860622 27.8141651,14.7591433 C27.5371923,16.3838571 26.7416175,17.4294787 25.9083201,18.8030909 M75.8371766,5.29694317 C75.8371766,5.93422166 73.7787416,7.63166832 73.2635382,8.10027581 C72.3850415,8.898952 71.4487714,9.53969396 70.1865909,9.35370562 C66.7252801,8.84422918 68.0968903,5.14766761 67.5456634,2.87251415 C67.1120225,1.08501726 66.6671667,1.75900853 65.4641191,1.64644576 C64.3456926,1.54219531 63.9460361,0.990464532 62.7824103,1.83312679 C60.685573,3.35151205 59.0159196,5.32915344 58.1231495,7.8135005 C57.7992782,6.11813191 56.8776214,3.30960407 54.6706746,3.71967892 C53.0387439,4.02273255 51.6868446,6.64596475 51.0078363,7.96277605 C50.95618,6.76545446 50.3403828,4.88721467 48.8328349,5.74476985 C47.7973303,6.3339061 47.8418499,9.12615564 47.615174,10.1548062 C47.1499276,12.2664839 46.236427,17.7723622 42.9708663,17.056463 C43.999574,15.1377006 46.2510403,9.08632573 44.3207265,7.1194211 C41.6091115,4.35730375 39.5459188,11.2748924 39.4354695,12.9584852 C39.355946,14.1644655 40.2405598,16.9030312 39.7637588,17.6511408 C39.1788873,18.568614 37.3362533,18.9641423 36.4608152,18.2922291 C35.0562401,17.2143972 35.6101858,15.4622277 35.9313383,14.093118 C36.3527448,12.2990405 36.5512137,10.495958 36.6650614,8.65616275 C36.7503623,7.27631629 37.951031,1.10787617 35.6370334,1.02406019 C33.5415555,0.948902892 33.3281335,6.16211798 33.1786022,7.58664321 C32.9944067,9.33812 32.8825981,11.1121094 32.94377,12.8746693 C33.0056216,14.6573173 33.3376491,15.8449412 32.6467463,17.5181435 C31.9065662,19.3108356 28.3834038,24.6889119 26.2743321,21.1180743 C28.5142437,20.1354878 31.1850774,15.5997275 29.9833892,13.0506135 C28.317474,9.51683506 24.5679755,14.9018383 24.024565,16.7073452 C23.1474277,19.6222016 23.5328108,23.4292478 26.8877504,24.3782386 C30.3810066,25.366713 33.0780083,22.0916557 34.309263,19.1975801 C35.3107832,20.7859275 37.1544368,21.1842266 38.8580746,20.7031506 C39.5350438,20.5116207 40.1861848,20.1822447 40.7496461,19.7555452 C41.8198148,18.9457859 41.1934823,19.2471078 42.3292409,19.2142048 C45.6264071,19.1196521 47.4252012,18.0612156 48.660534,14.6690931 C48.6459207,15.6031909 49.0041163,17.0287552 50.2588202,16.5178934 C51.2334927,16.1209797 51.2266958,14.5083881 51.4074928,13.6480621 C51.9774112,10.935126 52.8729,8.10651006 55.0057608,6.22584583 C56.8466956,8.22807786 55.4856205,11.6534497 56.6968244,13.7862546 C58.5635873,17.0737803 59.5035957,11.2537653 59.7962014,10.1319473 C59.8526155,15.0140547 65.6574903,13.2158211 66.9135536,9.97505214 C70.2130987,13.4901279 77.1479547,10.3238236 75.8371766,5.29694317'\r\n        id='Bom-Bom' />\r\n      <path\r\n        d='M69.433817,15.3488372 C65.8038135,15.3488372 61.8287631,16.3747039 58.3068219,17.1662556 C54.7602589,17.9637144 51.2314783,18.9518414 47.8046046,20.1368717 C43.9335128,21.4748303 39.9926593,22.6897243 36.2145831,24.2580599 C32.9385178,25.6183343 28.7066484,26.6107275 26.7027087,29.6738881 C26.6986051,29.6824206 28.8051356,29.5856097 28.9754363,29.5573869 C30.0242559,29.3834556 30.9267127,29.0139335 31.8924339,28.6010927 C33.6392127,27.8548288 35.3740227,27.0823111 37.115672,26.3248894 C41.0202768,24.6265975 45.0951823,23.2295678 49.1044296,21.7708418 C53.1003402,20.3176946 57.1991835,19.0860638 61.3588973,18.1455219 C64.7498643,17.3792395 68.5409353,17.2322183 71.6624305,15.8729284 C71.5444511,15.9172317 71.6210523,15.887368 71.8918919,15.7816965 C71.813239,15.8197645 69.6708017,15.3488372 69.433817,15.3488372'\r\n        id='Bidi' />\r\n      <path\r\n        d='M22.1170349,20.8250383 C19.8478706,19.8267659 16.6395075,20.267131 14.2823358,20.5862701 C12.1385566,20.8762747 8.78577979,21.5209156 7.44867865,21.6937129 C6.34297926,21.8346967 3.04321074,22.7348497 2.4393915,21.4968044 C1.79003946,20.1656628 5.15878677,16.0935417 5.89512684,15.1341152 C9.20984643,10.8135143 13.1946457,6.01370248 17.9749097,3.21110531 C17.5345328,5.16177188 17.1498826,7.12884748 16.7479027,9.08721625 C16.5824216,9.89460802 15.79851,14.2513757 17.2338124,14.5946261 C17.8233602,14.735275 19.0058537,11.8121216 19.104055,11.5505816 C19.9270433,9.36181652 20.1163103,6.84118695 20.4951839,4.54927932 C20.7119744,3.23789558 21.6953468,0.499260193 19.8009787,0.0471743805 C18.1723317,-0.341619419 15.9646707,1.77447706 14.8776601,2.66558843 C11.5962407,5.35767573 8.75146029,8.61302846 6.0905101,11.8864646 C4.78025293,13.4985691 3.4761121,15.1200503 2.37686886,16.8831849 C1.47300888,18.3332083 -0.712565331,21.3735691 0.232070287,23.1651685 C1.92969602,26.3860287 10.0715716,23.5626691 12.663543,23.133355 C14.708781,22.7941232 16.8162019,22.4729748 18.8913421,22.7566168 C21.0534703,23.0519796 20.9484731,24.0274803 20.2298024,25.953031 C18.7520254,29.9126329 15.4539558,33.3136578 12.5058772,36.2726431 C11.2071731,37.5759898 6.1251694,43.6918736 4.84549395,40.3641872 C3.97595347,38.1030884 4.74525384,35.3289559 5.74561617,33.2503658 C6.21419621,32.2765394 6.8346655,31.3887768 7.32329357,30.4256666 C7.45649398,30.163122 8.12453486,28.0011471 8.27030776,27.9529247 C4.4003599,29.303824 2.15328244,34.538308 1.93751135,38.2397187 C1.83591206,39.9810863 2.07376995,42.5640033 3.73741598,43.6084889 C5.40174162,44.6533095 6.96378836,43.3814414 8.28661802,42.4230195 C11.9289019,39.7838429 15.1780407,36.4246779 18.1519439,33.0879497 C19.7778725,31.2635323 26.6054133,22.8014905 22.1170349,20.8250383'\r\n        id='Bidi' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsPizzaComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Pizza;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsPizzaComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-pizza]',
                template: "<svg:g id='Clothing/Graphic/Pizza' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd'\r\n  [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Group-2'>\r\n    <g transform='translate(35.000000, 1.000000)'>\r\n      <path\r\n        d='M30.9332298,24.3911229 C26.8510636,25.7713262 22.3826909,27.7147062 20.0279438,31.464875 C18.1805823,34.4072634 18.056518,31.0097105 15.4771364,32.0578917 C12.9702973,33.0766532 13.6557418,37.2811459 12.7452506,39.3594362 C12.0367243,38.1679392 11.7020395,36.8427927 10.8096839,35.755105 C11.5033719,35.309607 12.1459503,34.7115469 12.6240715,34.0306915 C12.7802853,33.7116981 7.83173048,34.3791045 7.54774295,34.4602188 C6.13687312,34.8620076 4.80843799,35.231855 3.46021853,35.8900153 C3.8167486,35.3734898 4.16627171,34.8531817 4.51043656,34.3282505 C4.82039102,33.8562748 5.1253994,33.3800962 5.42463735,32.9009757 C5.63196061,32.2209608 6.00126805,32.2188594 6.53255966,32.8950918 C7.28147888,32.931236 7.71055147,33.2519105 8.49450544,33.0724504 C11.4098085,32.4054642 12.3380232,26.8489271 8.74469474,27.0851251 C10.3237313,24.2158656 11.7251212,21.3024766 12.9975007,18.2831768 C13.4999402,22.5742474 19.0774717,21.0961186 20.7166857,18.8076877 C22.8571026,15.8190684 20.1132637,10.1456931 16.2334747,10.6962614 C16.8142272,9.32068116 17.4036352,7.93375334 17.8825808,6.5182464 C18.9752527,8.1287638 20.8844403,8.90880562 22.421023,9.97463863 C24.031797,11.0917459 25.3940304,12.414791 26.5839752,13.9807586 C28.9704596,17.1210994 30.3767956,20.9881063 32.7987269,24.0334636 C32.1610946,24.0675064 31.539537,24.1868662 30.9332298,24.3911229 M39.9388082,20.0029673 C39.306534,14.2455357 34.7895249,8.40194655 30.4996233,4.82661475 C27.9499181,2.7020935 20.2587609,-2.55814545 17.1930146,1.48706068 C19.664819,2.55835735 22.3921709,2.81640998 24.8425422,3.97596569 C28.1630118,5.5482375 30.7646508,8.13506801 33.0114085,11.0312255 C36.1484608,15.075591 40.9816071,23.3139423 33.485408,25.4170292 C34.0030979,25.0791231 34.3035723,24.7080149 34.7132728,24.1086939 C33.706333,23.8762784 34.1131482,22.231298 33.7590912,21.1570594 C33.3473298,19.9063026 32.549362,18.6904293 31.874634,17.5745828 C30.8042195,15.803518 29.6278764,14.0408588 28.3707472,12.4038637 C26.692789,10.2179814 24.685092,8.49735037 22.3938196,7.00829423 C21.4874501,6.41948033 20.6190006,5.89749114 19.5774382,5.59320758 C18.2279822,5.19898385 18.6698322,5.67936522 18.3005247,4.44668058 C18.0692954,3.67420382 18.277443,2.68402141 18.0548693,1.85480669 C16.0817949,3.51323614 15.4400408,5.90967929 14.5555165,8.23635577 C13.5353871,10.9202712 12.4328231,13.5714048 11.3591111,16.2330453 C8.72367389,22.767997 5.32530354,28.6283975 1.46777192,34.479972 C0.796341323,35.4991538 -0.697375374,37.4299255 0.377573066,38.6537842 C1.33876162,39.7486166 2.7084141,38.9597489 3.76399039,38.5150914 C5.20041497,37.9107271 7.14917119,36.3506434 8.69894348,37.1680903 C10.6971605,38.2221554 9.75287108,42.1522045 12.9130052,41.9954397 C16.0265636,41.8407762 15.4404529,36.7154475 16.4395615,34.6775042 C18.7514425,36.3628316 20.615291,35.3171721 22.0187417,33.0665665 C23.6451783,30.4578814 25.7942508,29.4101204 28.5323192,28.1291035 C29.6521946,27.6050129 31.5663282,26.1899262 32.7327792,26.0138284 C33.6980895,25.8688314 34.6254798,26.8972594 35.915995,26.8506082 C39.0138909,26.7375526 40.3077034,22.5977832 39.9388082,20.0029673'\r\n        id='Fill-29' />\r\n      <path\r\n        d='M18.5372079,22.8336349 C16.1119296,22.3885123 12.7302873,22.7596628 12.5083803,25.9869094 C12.3721811,27.9648021 13.9174686,29.8351772 15.5900451,30.6510203 C20.7121513,33.1501581 24.6988403,23.9625691 18.5372079,22.8336349'\r\n        id='Fill-31' />\r\n      <path\r\n        d='M28.3362306,19.157604 C27.6856351,18.4518413 26.6326311,17.918164 25.6605301,18.1654572 C25.9719227,17.9508815 26.2293799,17.5642204 26.5251817,17.3262751 C23.3686979,15.0403008 21.3853086,20.8049502 23.1786599,23.0743534 C25.8964974,26.5139375 31.2158743,22.3078297 28.3362306,19.157604'\r\n        id='Fill-33' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsResistComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Resist;
        this.mask1 = randomId('kip-mask');
    }
}
CustomAvatarClothesGraphicsResistComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-resist]',
                template: "<svg:g id='Clothing/Graphic/Resist' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd'\r\n  [attr.fill]=\"color2\">\r\n  <g transform='translate(77.000000, 58.000000)' id='Resist'>\r\n    <g transform='translate(3.000000, 9.000000)'>\r\n      <path\r\n        d='M102.565245,21.0710109 C99.4833509,20.4054313 97.3728781,24.6059197 100.65303,25.85541 C103.46796,26.9271503 105.497722,21.7103865 102.565245,21.0710109'\r\n        id='!' />\r\n      <path\r\n        d='M101.191001,18 C104.847558,18 103.499462,12.0185653 103.512139,10.034892 C103.52569,7.89835492 105.057378,1.43936922 102.622588,0.300988793 C98.4060734,-1.67043963 99.5622709,6.62567562 99.5876242,8.26886181 C99.6156003,10.0850565 99.7546063,11.9885455 99.3594446,13.7770905 C99.009744,15.3574722 98.2303489,18 101.191001,18'\r\n        id='H' />\r\n      <path\r\n        d='M96.057932,1.97392328 C94.9756601,1.35173361 93.2567577,1.65427333 92.0711316,1.60022061 C90.7220251,1.53916824 89.3807782,1.40539746 88.0356015,1.30662485 C85.8592683,1.14718875 83.080101,0.743543202 80.9175222,1.23857286 C79.6922049,1.51933595 78.5800664,2.46389764 79.1565707,3.84671419 C79.777482,5.33646958 81.4602301,4.95187859 82.7370279,4.87682696 C83.3217848,4.84221766 84.7703158,4.58750876 85.3421043,4.78816493 C86.3390991,5.13853549 85.9154647,4.67967061 86.1430012,5.85522022 C86.491969,7.66229234 86.2825097,9.85512207 86.2675764,11.6929148 C86.2420326,14.8668599 86.2322081,18.0567485 86.1650082,21.2287493 C86.1386784,22.4645735 85.7244756,23.8606116 86.9218911,24.6768466 C87.9196719,25.3569777 89.1379155,24.9023904 89.6550795,23.8835548 C90.1694927,22.8705522 89.6806234,20.8169375 89.6259989,19.6876632 C89.5599779,18.3406226 89.4900272,17.0122476 89.5293254,15.6628738 C89.6330726,12.0775058 89.8110933,8.49563763 89.8971563,4.90910305 C90.8399197,4.95537841 91.8188373,4.92737987 92.7525621,5.05842857 C93.4359574,5.15409023 94.4184119,5.59351169 95.0754775,5.55890239 C96.9743656,5.45818543 97.7689748,2.97175996 96.057932,1.97392328'\r\n        id='C' />\r\n      <path\r\n        d='M67.7216119,8.81264097 C67.7100258,8.75972031 67.6397369,8.1691564 67.7216119,8.81264097 M67.6853088,8.53730013 C67.6887847,8.56222653 67.685695,8.5449698 67.6853088,8.53730013 M69.1169633,5.42725256 C72.533315,1.44593148 73.7004204,9.77441647 76.3625176,9.42199554 C80.623109,8.85827545 75.4217272,2.46944776 73.6942412,1.64649312 C70.1786354,-0.0289443454 67.0886252,1.72587411 65.4167525,4.9126183 C63.3188978,8.91234656 64.6466637,11.6208874 68.6751471,13.3572987 C70.1461943,13.9915796 75.714469,15.8848355 74.2051877,18.3157346 C73.4451402,19.5398125 70.6791544,19.6445033 69.5047111,19.402142 C67.1492591,18.916269 67.5161519,17.3159942 66.3699015,15.8288469 C65.3371947,14.4885737 63.3397528,14.8820273 63.028087,16.6100019 C62.7828481,17.9675319 64.198282,20.0348891 65.1433208,20.9897619 C67.3759602,23.2457927 71.1831493,23.4271802 74.0298516,22.3998291 C78.4155727,20.816811 78.9473743,16.6909168 75.8357368,13.4953526 C74.0870096,11.6995014 71.9026455,11.154572 69.7225296,10.0773681 C67.0781977,8.7712248 67.5725376,7.68673472 69.1169633,5.42725256'\r\n        id='A' />\r\n      <path\r\n        d='M58.749962,20.5676943 C58.1855671,15.7434329 58.0538346,10.8505093 57.9696387,6.00460433 C57.9426476,4.45075032 58.6758373,0.798596322 56.5169562,0.139962235 C53.6023258,-0.749287073 53.9890632,2.83233897 54.0502966,4.30372379 C54.255348,9.21679823 54.8922562,14.0929294 55.1210758,19.0000333 C55.193992,20.5568726 54.6924419,23.5739018 56.9520358,23.9463193 C59.7027058,24.4000865 58.9598476,21.8648117 58.749962,20.5676943'\r\n        id='E' />\r\n      <path\r\n        d='M49.4716454,4.67909741 C47.1120678,1.521124 42.3181606,1.01110068 39.382093,3.92183601 C37.3101733,5.97595969 36.00495,10.8410892 37.9661116,13.3252251 C40.0904751,16.016404 45.3211527,13.6574039 46.6913436,16.7080638 C48.3726748,20.4511421 43.9611374,21.8560762 41.6168232,19.3708027 C40.7738094,18.4774087 40.9581453,16.917382 39.7163241,16.3637507 C37.9539791,15.5788077 36.853443,17.2916519 37.2001979,18.7227508 C38.0479082,22.2235205 41.8524287,24.1130716 45.3011927,23.9947614 C49.0689244,23.8650751 50.7028996,21.0184245 50.4641631,17.5957699 C50.1342371,12.8603265 46.4792204,12.1186123 42.4747091,11.597213 C40.7761576,11.3761397 40.5534673,11.3966165 40.6583549,9.64547322 C40.7855505,7.52650643 42.0277631,5.07763608 44.6491681,5.58159221 C46.7551372,5.98657727 46.942604,9.15327227 49.1037564,9.30040167 C52.5998763,9.53853896 50.3604497,5.86712943 49.4716454,4.67909741'\r\n        id='P' />\r\n      <path\r\n        d='M31.7209696,20.4381695 C30.3835461,20.7580967 28.7579173,20.5355712 27.3944988,20.5112208 C26.3407598,20.4924897 22.8201338,20.9379153 22.1329619,20.2148947 C21.3727026,19.4150766 21.6202201,16.9680453 21.5881973,15.9288437 C21.5422351,14.4753101 21.1839563,14.2599024 22.4595946,13.9298603 C23.2085518,13.7361807 24.3674009,13.8332078 25.1415996,13.7976187 C26.6572206,13.727939 28.606845,14.008531 30.0716062,13.7099572 C31.4414292,13.4304891 32.5739067,11.958599 31.3223797,10.7058628 C30.4355361,9.81763391 28.7797682,10.2949024 27.6909924,10.3200021 C25.6573553,10.3664552 23.6222112,10.3555912 21.5881973,10.3915549 C21.5964855,8.82376157 21.5448723,7.2454788 21.6669357,5.68105705 C24.5143291,5.82154032 27.4788884,6.56329201 30.3255283,6.42655496 C31.766555,6.35724988 33.3654353,5.43530497 32.6368221,3.69630934 C32.0121888,2.20606276 30.1149312,2.40985716 28.792954,2.35066687 C27.1398233,2.27611708 25.4848088,2.23790563 23.8313013,2.18096308 C22.6068996,2.13900541 20.8260543,1.73628668 19.6721027,2.28847961 C17.3095724,3.41833976 18.121445,7.29867513 18.1873743,9.39955568 C18.2706336,12.0657409 18.2721406,14.6678658 18.3644416,17.3561538 C18.4484544,19.7885748 18.3271445,22.9972128 21.2159792,23.6808981 C24.1051906,24.364958 27.4611816,23.7142395 30.4084109,23.8565959 C31.6166129,23.9150369 33.2693669,24.2671816 33.8631075,22.8608504 C34.4319834,21.512211 33.1326106,20.086774 31.7209696,20.4381695'\r\n        id='M' />\r\n      <path\r\n        d='M8.41021607,5.87934286 C10.7314099,6.38056324 11.3520318,8.89406466 11.4306011,11.0286326 C11.4842397,12.4898438 11.613048,12.4018284 10.4273316,12.768689 C9.23708235,13.1371074 7.50704692,12.9377097 6.28808963,12.8851342 C3.74516418,12.7756991 4.0526421,12.6070678 4.00353629,9.93973422 C3.99220418,9.31505862 3.52947636,6.4362544 3.89625898,6.02967003 C4.37220759,5.5015777 7.73482232,5.8267673 8.41021607,5.87934286 M13.4870013,20.7181143 C12.1966517,19.2140637 10.9010138,17.7773878 9.45277018,16.4318428 C11.6107816,16.3722571 13.9557729,15.9594416 14.7229567,13.6130136 C15.3711534,11.6307201 14.8079476,8.6132722 14.05474,6.74080322 C13.0612917,4.27092005 10.9928039,2.62238402 8.42003723,2.26253349 C6.62389782,2.01172858 2.14242611,1.58956627 0.799948834,2.97327723 C-0.664537495,4.48161175 0.351952758,8.62222952 0.4422319,10.4701632 C0.602014649,13.7411422 0.486049391,16.987586 0.285471047,20.2550599 C0.220500284,21.3096868 -0.296621662,23.0423437 0.243919977,23.9918195 C0.843766325,25.0456674 2.30296434,25.3089347 3.21255502,24.5288691 C4.19693763,23.6845445 3.74176455,22.6513373 3.68132663,21.5678912 C3.58802559,19.8917044 3.75574082,18.1644997 3.85546339,16.4937651 C5.46348977,17.806207 7.10551249,19.0851563 8.61683821,20.5163799 C10.1096548,21.9300785 11.1809169,23.7184265 12.6076296,25.143419 C13.618076,26.1528699 15.4266807,26.5676327 15.9381366,24.6947742 C16.377067,23.0871303 14.3667507,21.7435326 13.4870013,20.7181143'\r\n        id='I' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarClothesGraphicsBearComponent extends CustomAvatarClothesGraphicsBaseComponent {
    constructor() {
        super(...arguments);
        this.option = GraphicType.Bear;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarClothesGraphicsBearComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-clothes-graphics-bear]',
                template: "<svg:g id='Clothing/Graphic/Bear' [attr.mask]=\"urlFix(mask1)\" stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <polygon [attr.id]=\"path1\"\r\n      points='47.8916289 0.430054064 47.8916289 41.9204613 0.45345556 41.9204613 0.45345556 0.430054064 47.8916289 0.430054064' />\r\n  </defs>\r\n  <g transform='translate(77.000000, 58.000000)' id='Group-76'>\r\n    <g transform='translate(31.000000, 1.000000)'>\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <path\r\n        d='M34.4465814,31.5861741 C33.968066,34.4016565 30.3675711,38.9307388 27.2995299,35.97048 C23.8326433,32.6262918 31.5245196,31.1602447 28.7810969,28.3763859 C27.5974268,27.1761741 24.3685608,27.83928 22.7791175,27.96528 C21.289633,28.0833741 18.9133856,28.4198682 19.4834474,30.5900329 C19.9159423,32.2398918 21.1926433,31.5342918 21.8715711,32.4815153 C22.4069938,33.2301035 22.1798598,35.9887624 21.3826639,36.7492094 C20.3796124,37.7053271 19.193468,37.4123153 17.7975093,36.7996094 C14.6057567,35.39928 13.1212206,31.4868565 15.2228289,28.5829271 C19.3780454,22.8417741 35.2897979,21.5244565 34.4465814,31.5861741 M14.9853031,14.7244094 C15.9695505,14.2811859 17.132932,14.5213271 17.7173443,15.5110447 C18.5189938,16.8669035 17.3595711,18.6842682 15.7424165,18.4668565 C14.0347052,18.2365976 13.1726845,15.5481035 14.9853031,14.7244094 M32.9472,16.3787153 C32.0911175,19.3854212 27.3109113,16.0012094 30.0112825,14.08848 C31.5626227,12.9900565 33.4583753,14.5801271 32.9472,16.3787153 M47.8267052,23.16888 C47.5911588,20.7887153 46.9270763,18.5231859 45.7389526,16.4385035 C45.1164371,15.3460094 44.3464577,14.3276329 43.5492619,13.35768 C43.2483959,12.9930212 42.6432,12.34968 42.5264165,12.1446212 C41.8173031,10.90488 41.888066,11.7834212 42.2789938,10.3598682 C42.8950763,8.11657412 44.2262103,6.28043294 43.1627876,3.87062118 C42.1735918,1.62930353 39.5078598,0.576832941 37.1791175,0.443915294 C36.0914474,0.382150588 35.0017979,0.525938824 33.9720247,0.892574118 C32.9368082,1.26069176 31.9708701,2.53255059 31.0717361,2.79393882 C30.3740041,2.99702118 28.3872,2.33391529 27.6305814,2.28549176 C26.2356124,2.19605647 24.8332206,2.23558588 23.4387464,2.31859765 C21.8087258,2.41544471 18.0632412,3.58205647 16.5257567,3.19565647 C15.5108289,2.94069176 14.3172619,1.41485647 13.1449732,1.03191529 C11.852932,0.610432941 10.4673649,0.467632941 9.17829278,0.954338824 C6.89260206,1.81805647 5.17845773,4.50605647 5.12501443,6.89560941 C5.09680825,8.15066824 5.78018969,9.01092706 5.91528247,10.1469035 C6.11816907,11.8619859 6.35223093,10.5026682 5.42835464,11.8718682 C4.9577567,12.5690682 4.13284948,13.1822682 3.60385979,13.8537741 C0.778787629,17.4405741 -0.278696907,22.73208 0.974746392,27.0733976 C4.13284948,38.0131624 14.6423753,42.4676329 25.4136742,41.86728 C34.6648082,41.3509271 48.9782103,34.1491624 47.8267052,23.16888'\r\n        id='Fill-74' [attr.fill]=\"color2\" [attr.mask]=\"urlFix(mask2)\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFaceComponent {
    constructor() {
        this.noseType = NoseType.Default;
        this.mouthType = MouthType.Concerned;
        this.eyeType = EyeType.Cry;
        this.eyebrowType = EyebrowType.Angry;
    }
}
CustomAvatarFaceComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-face]',
                template: "<svg:g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>\r\n  <g kip-custom-avatar-nose [noseType]=\"noseType\" />\r\n  <g kip-custom-avatar-mouth [mouthType]=\"mouthType\" />\r\n  <g kip-custom-avatar-eyes [eyeType]=\"eyeType\" />\r\n  <g kip-custom-avatar-eye-brows [eyebrowType]=\"eyebrowType\" [eyebrowColor]=\"eyebrowColor\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarFaceComponent.propDecorators = {
    noseType: [{ type: Input }],
    mouthType: [{ type: Input }],
    eyeType: [{ type: Input }],
    eyebrowType: [{ type: Input }],
    eyebrowColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesComponent {
    constructor() {
        this.eyeType = EyeType.Close;
    }
}
CustomAvatarEyesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes]',
                template: "<svg:g [ngSwitch]=\"eyeType\">\r\n  <g *ngSwitchCase=\"'Close'\" kip-custom-avatar-eyes-close />\r\n  <g *ngSwitchCase=\"'Cry'\" kip-custom-avatar-eyes-cry />\r\n  <g *ngSwitchCase=\"'CryMirrored'\" kip-custom-avatar-eyes-cry transform=\"scale(-1, 1) translate(-112, 0)\" />\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-eyes-default />\r\n  <g *ngSwitchCase=\"'Dizzy'\" kip-custom-avatar-eyes-dizzy />\r\n  <g *ngSwitchCase=\"'EyeRoll'\" kip-custom-avatar-eyes-eye-roll />\r\n  <g *ngSwitchCase=\"'Happy'\" kip-custom-avatar-eyes-happy />\r\n  <g *ngSwitchCase=\"'Hearts'\" kip-custom-avatar-eyes-hearts />\r\n  <g *ngSwitchCase=\"'Side'\" kip-custom-avatar-eyes-sides />\r\n  <g *ngSwitchCase=\"'SideMirrored'\" kip-custom-avatar-eyes-sides transform=\"scale(-1, 1) translate(-112, 0)\" />\r\n  <g *ngSwitchCase=\"'Squint'\" kip-custom-avatar-eyes-squint />\r\n  <g *ngSwitchCase=\"'Surprised'\" kip-custom-avatar-eyes-surprised />\r\n  <g *ngSwitchCase=\"'Wink'\" kip-custom-avatar-eyes-wink />\r\n  <g *ngSwitchCase=\"'WinkMirrored'\" kip-custom-avatar-eyes-wink transform=\"scale(-1, 1) translate(-112, 0)\"/>\r\n  <g *ngSwitchCase=\"'WinkWacky'\" kip-custom-avatar-eyes-wink-wacky />\r\n  <g *ngSwitchCase=\"'WinkWackyMirrored'\" kip-custom-avatar-eyes-wink-wacky transform=\"scale(-1, 1) translate(-112, 0)\"/>\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarEyesComponent.propDecorators = {
    eyeType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesCryComponent {
    constructor() {
        this.option = EyeType.Cry;
    }
}
CustomAvatarEyesCryComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-cry]',
                template: "<svg:g id='Eyes/Cry-\uD83D\uDE22' transform='translate(0.000000, 8.000000)'>\r\n  <circle id='Eye' fill-opacity='0.599999964' fill='#000000' fill-rule='evenodd' cx='30' cy='22' r='6'></circle>\r\n  <path\r\n    d='M25,27 C25,27 19,34.2706667 19,38.2706667 C19,41.5846667 21.686,44.2706667 25,44.2706667 C28.314,44.2706667 31,41.5846667 31,38.2706667 C31,34.2706667 25,27 25,27 Z'\r\n    id='Drop' fill='#92D9FF' fill-rule='nonzero'></path>\r\n  <circle id='Eye' fill-opacity='0.599999964' fill='#000000' fill-rule='evenodd' cx='82' cy='22' r='6'></circle>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesCloseComponent {
    constructor() {
        this.option = EyeType.Close;
    }
}
CustomAvatarEyesCloseComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-close]',
                template: "<svg:g id='Eyes/Closed-\uD83D\uDE0C' transform='translate(0.000000, 8.000000)' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M16.1601674,32.4473116 C18.006676,28.648508 22.1644225,26 26.9975803,26 C31.8136766,26 35.9591217,28.629842 37.8153518,32.4071242 C38.3667605,33.5291977 37.5821037,34.4474817 36.790607,33.7670228 C34.3395063,31.6597833 30.8587163,30.3437884 26.9975803,30.3437884 C23.2572061,30.3437884 19.8737584,31.5787519 17.4375392,33.5716412 C16.5467928,34.3002944 15.6201012,33.5583844 16.1601674,32.4473116 Z'\r\n    id='Closed-Eye' transform='translate(27.000000, 30.000000) scale(1, -1) translate(-27.000000, -30.000000) ' />\r\n  <path\r\n    d='M74.1601674,32.4473116 C76.006676,28.648508 80.1644225,26 84.9975803,26 C89.8136766,26 93.9591217,28.629842 95.8153518,32.4071242 C96.3667605,33.5291977 95.5821037,34.4474817 94.790607,33.7670228 C92.3395063,31.6597833 88.8587163,30.3437884 84.9975803,30.3437884 C81.2572061,30.3437884 77.8737584,31.5787519 75.4375392,33.5716412 C74.5467928,34.3002944 73.6201012,33.5583844 74.1601674,32.4473116 Z'\r\n    id='Closed-Eye' transform='translate(85.000000, 30.000000) scale(1, -1) translate(-85.000000, -30.000000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesDefaultComponent {
    constructor() {
        this.option = EyeType.Default;
    }
}
CustomAvatarEyesDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-default]',
                template: "<svg:g id='Eyes/Default-\uD83D\uDE00' transform='translate(0.000000, 8.000000)' fill-opacity='0.599999964'>\r\n  <circle id='Eye' cx='30' cy='22' r='6' />\r\n  <circle id='Eye' cx='82' cy='22' r='6' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesDizzyComponent {
    constructor() {
        this.option = EyeType.Dizzy;
    }
}
CustomAvatarEyesDizzyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-dizzy]',
                template: "<svg:g id='Eyes/X-Dizzy-\uD83D\uDE35' transform='translate(0.000000, 8.000000)' fill-opacity='0.599999964' fill-rule='nonzero'>\r\n  <path\r\n    d='M29,25.2 L34.5,30.7 C35,31.1 35.7,31.1 36.1,30.7 L37.7,29.1 C38.1,28.6 38.1,27.9 37.7,27.5 L32.2,22 L37.7,16.5 C38.1,16 38.1,15.3 37.7,14.9 L36.1,13.3 C35.6,12.9 34.9,12.9 34.5,13.3 L29,18.8 L23.5,13.3 C23,12.9 22.3,12.9 21.9,13.3 L20.3,14.9 C19.9,15.3 19.9,16 20.3,16.5 L25.8,22 L20.3,27.5 C19.9,28 19.9,28.7 20.3,29.1 L21.9,30.7 C22.4,31.1 23.1,31.1 23.5,30.7 L29,25.2 Z'\r\n    id='Eye' />\r\n  <path\r\n    d='M83,25.2 L88.5,30.7 C89,31.1 89.7,31.1 90.1,30.7 L91.7,29.1 C92.1,28.6 92.1,27.9 91.7,27.5 L86.2,22 L91.7,16.5 C92.1,16 92.1,15.3 91.7,14.9 L90.1,13.3 C89.6,12.9 88.9,12.9 88.5,13.3 L83,18.8 L77.5,13.3 C77,12.9 76.3,12.9 75.9,13.3 L74.3,14.9 C73.9,15.3 73.9,16 74.3,16.5 L79.8,22 L74.3,27.5 C73.9,28 73.9,28.7 74.3,29.1 L75.9,30.7 C76.4,31.1 77.1,31.1 77.5,30.7 L83,25.2 Z'\r\n    id='Eye' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesEyeRollComponent {
    constructor() {
        this.option = EyeType.EyeRoll;
    }
}
CustomAvatarEyesEyeRollComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-eye-roll]',
                template: "<svg:g id='Eyes/Eye-Roll-\uD83D\uDE44' transform='translate(0.000000, 8.000000)'>\r\n  <circle id='Eyeball' fill='#FFFFFF' cx='30' cy='22' r='14' />\r\n  <circle id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' r='14' />\r\n  <circle id='Eye' fill-opacity='0.699999988' fill='#000000' cx='30' cy='14' r='6' />\r\n  <circle id='Eye' fill-opacity='0.699999988' fill='#000000' cx='82' cy='14' r='6' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesHappyComponent {
    constructor() {
        this.option = EyeType.Happy;
    }
}
CustomAvatarEyesHappyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-happy]',
                template: "<svg:g id='Eyes/Happy-\uD83D\uDE01' transform='translate(0.000000, 8.000000)' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M16.1601674,22.4473116 C18.006676,18.648508 22.1644225,16 26.9975803,16 C31.8136766,16 35.9591217,18.629842 37.8153518,22.4071242 C38.3667605,23.5291977 37.5821037,24.4474817 36.790607,23.7670228 C34.3395063,21.6597833 30.8587163,20.3437884 26.9975803,20.3437884 C23.2572061,20.3437884 19.8737584,21.5787519 17.4375392,23.5716412 C16.5467928,24.3002944 15.6201012,23.5583844 16.1601674,22.4473116 Z'\r\n    id='Squint' />\r\n  <path\r\n    d='M74.1601674,22.4473116 C76.006676,18.648508 80.1644225,16 84.9975803,16 C89.8136766,16 93.9591217,18.629842 95.8153518,22.4071242 C96.3667605,23.5291977 95.5821037,24.4474817 94.790607,23.7670228 C92.3395063,21.6597833 88.8587163,20.3437884 84.9975803,20.3437884 C81.2572061,20.3437884 77.8737584,21.5787519 75.4375392,23.5716412 C74.5467928,24.3002944 73.6201012,23.5583844 74.1601674,22.4473116 Z'\r\n    id='Squint' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesHeartsComponent {
    constructor() {
        this.option = EyeType.Hearts;
    }
}
CustomAvatarEyesHeartsComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-hearts]',
                template: "<svg:g id='Eyes/Hearts-\uD83D\uDE0D' transform='translate(0.000000, 8.000000)' fill-opacity='0.8' fill-rule='nonzero'\r\n  fill='#FF5353'>\r\n  <path\r\n    d='M35.9583333,10 C33.4074091,10 30.8837273,11.9797894 29.5,13.8206358 C28.1106364,11.9797894 25.5925909,10 23.0416667,10 C17.5523182,10 14,13.3341032 14,17.6412715 C14,23.3708668 18.4118636,26.771228 23.0416667,30.376724 C24.695,31.6133636 27.8223436,34.7777086 28.2083333,35.470905 C28.5943231,36.1641015 30.3143077,36.1885229 30.7916667,35.470905 C31.2690257,34.7532872 34.3021818,31.6133636 35.9583333,30.376724 C40.5853182,26.771228 45,23.3708668 45,17.6412715 C45,13.3341032 41.4476818,10 35.9583333,10 Z'\r\n    id='Heart' />\r\n  <path\r\n    d='M88.9583333,10 C86.4074091,10 83.8837273,11.9797894 82.5,13.8206358 C81.1106364,11.9797894 78.5925909,10 76.0416667,10 C70.5523182,10 67,13.3341032 67,17.6412715 C67,23.3708668 71.4118636,26.771228 76.0416667,30.376724 C77.695,31.6133636 80.8223436,34.7777086 81.2083333,35.470905 C81.5943231,36.1641015 83.3143077,36.1885229 83.7916667,35.470905 C84.2690257,34.7532872 87.3021818,31.6133636 88.9583333,30.376724 C93.5853182,26.771228 98,23.3708668 98,17.6412715 C98,13.3341032 94.4476818,10 88.9583333,10 Z'\r\n    id='Heart' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesSidesComponent {
    constructor() {
        this.option = EyeType.Side;
    }
}
CustomAvatarEyesSidesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-sides]',
                template: "<svg:g id='Eyes/Side-\uD83D\uDE12' transform='translate(0.000000, 8.000000)' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M27.2409577,20.3455337 C26.462715,21.3574913 26,22.6247092 26,24 C26,27.3137085 28.6862915,30 32,30 C35.3137085,30 38,27.3137085 38,24 C38,23.7097898 37.9793961,23.4243919 37.9395713,23.1451894 C37.9474218,22.9227843 37.9097825,22.6709538 37.8153518,22.4071242 C37.7703692,22.2814477 37.7221152,22.1572512 37.6706873,22.0345685 C37.3370199,21.0717264 36.7650456,20.2202109 36.0253277,19.550585 C33.898886,17.3173253 30.5064735,16 26.9975803,16 C22.1644225,16 18.006676,18.648508 16.1601674,22.4473116 C15.6201012,23.5583844 16.5467928,24.3002944 17.4375392,23.5716412 C19.8737584,21.5787519 23.2572061,20.3437884 26.9975803,20.3437884 C27.0788767,20.3437884 27.1600045,20.3443718 27.2409577,20.3455337 Z'\r\n    id='Eye' />\r\n  <path\r\n    d='M85.2409577,20.3455337 C84.462715,21.3574913 84,22.6247092 84,24 C84,27.3137085 86.6862915,30 90,30 C93.3137085,30 96,27.3137085 96,24 C96,23.7097898 95.9793961,23.4243919 95.9395713,23.1451894 C95.9474218,22.9227843 95.9097825,22.6709538 95.8153518,22.4071242 C95.7703692,22.2814477 95.7221152,22.1572512 95.6706873,22.0345685 C95.3370199,21.0717264 94.7650456,20.2202109 94.0253277,19.550585 C91.898886,17.3173253 88.5064735,16 84.9975803,16 C80.1644225,16 76.006676,18.648508 74.1601674,22.4473116 C73.6201012,23.5583844 74.5467928,24.3002944 75.4375392,23.5716412 C77.8737584,21.5787519 81.2572061,20.3437884 84.9975803,20.3437884 C85.0788767,20.3437884 85.1600045,20.3443718 85.2409577,20.3455337 Z'\r\n    id='Eye' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesSquintComponent {
    constructor() {
        this.option = EyeType.Squint;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarEyesSquintComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-squint]',
                template: "<svg:g id='Eyes/Squint-\uD83D\uDE0A' transform='translate(0.000000, 8.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <g id='Eye' transform='translate(16.000000, 13.000000)'>\r\n    <mask [attr.id]=\"mask1\" fill='white'>\r\n      <use [attr.xlink:href]=\"'#' + path1\" />\r\n    </mask>\r\n    <use id='The-white-stuff' fill='#FFFFFF' [attr.xlink:href]=\"'#' + path1\" />\r\n    <circle fill-opacity='0.699999988' fill='#000000' [attr.mask]=\"urlFix(mask1)\" cx='14' cy='10' r='6' />\r\n  </g>\r\n  <g id='Eye' transform='translate(68.000000, 13.000000)'>\r\n    <mask [attr.id]=\"mask2\" fill='white'>\r\n      <use [attr.xlink:href]=\"'#' + path2\" />\r\n    </mask>\r\n    <use id='Eyeball-Mask' fill='#FFFFFF' [attr.xlink:href]=\"'#' + path2\" />\r\n    <circle fill-opacity='0.699999988' fill='#000000' [attr.mask]=\"urlFix(mask2)\" cx='14' cy='10' r='6' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesSurprisedComponent {
    constructor() {
        this.option = EyeType.Surprised;
    }
}
CustomAvatarEyesSurprisedComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-surprised]',
                template: "<svg:g id='Eyes/Surprised-\uD83D\uDE33' transform='translate(0.000000, 8.000000)'>\r\n  <circle id='The-White-Stuff' fill='#FFFFFF' cx='30' cy='22' r='14' />\r\n  <circle id='Eye-Ball' fill='#FFFFFF' cx='82' cy='22' r='14' />\r\n  <circle id='Eye' fill-opacity='0.699999988' fill='#000000' cx='30' cy='22' r='6' />\r\n  <circle id='Eye' fill-opacity='0.699999988' fill='#000000' cx='82' cy='22' r='6' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesWinkComponent {
    constructor() {
        this.option = EyeType.Wink;
    }
}
CustomAvatarEyesWinkComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-wink]',
                template: "<svg:g id='Eyes/Wink-\uD83D\uDE09' transform='translate(0.000000, 8.000000)' fill-opacity='0.599999964'>\r\n  <circle id='Eye' cx='30' cy='22' r='6' />\r\n  <path\r\n    d='M70.4123979,24.204889 C72.2589064,20.4060854 76.4166529,17.7575774 81.2498107,17.7575774 C86.065907,17.7575774 90.2113521,20.3874194 92.0675822,24.1647016 C92.618991,25.2867751 91.8343342,26.2050591 91.0428374,25.5246002 C88.5917368,23.4173607 85.1109468,22.1013658 81.2498107,22.1013658 C77.5094365,22.1013658 74.1259889,23.3363293 71.6897696,25.3292186 C70.7990233,26.0578718 69.8723316,25.3159619 70.4123979,24.204889 Z'\r\n    id='Winky-Wink' transform='translate(81.252230, 21.757577) rotate(-4.000000) translate(-81.252230, -21.757577) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyesWinkWackyComponent {
    constructor() {
        this.option = EyeType.WinkWacky;
    }
}
CustomAvatarEyesWinkWackyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eyes-wink-wacky]',
                template: "<svg:g id='Eyes/Wink-Wacky-\uD83D\uDE1C' transform='translate(0.000000, 8.000000)'>\r\n  <circle id='Cornea?-I-don&#39;t-know' fill='#FFFFFF' cx='82' cy='22' r='12' />\r\n  <circle id='Eye' fill-opacity='0.699999988' fill='#000000' cx='82' cy='22' r='6' />\r\n  <path\r\n    d='M16.1601674,25.4473116 C18.006676,21.648508 22.1644225,19 26.9975803,19 C31.8136766,19 35.9591217,21.629842 37.8153518,25.4071242 C38.3667605,26.5291977 37.5821037,27.4474817 36.790607,26.7670228 C34.3395063,24.6597833 30.8587163,23.3437884 26.9975803,23.3437884 C23.2572061,23.3437884 19.8737584,24.5787519 17.4375392,26.5716412 C16.5467928,27.3002944 15.6201012,26.5583844 16.1601674,25.4473116 Z'\r\n    id='Winky-Doodle' fill-opacity='0.599999964' fill='#000000' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsComponent {
    /**
     * @param {?} value
     * @return {?}
     */
    set eyebrowColor(value) {
        if (this._eyebrowColor !== value) {
            this._eyebrowColor = value;
            this._color = hairColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get eyebrowColor() {
        return this._eyebrowColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
}
CustomAvatarEyebrowsComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brows]',
                template: "<svg:g [attr.fill]=\"color\" [ngSwitch]=\"eyebrowType\">\r\n  <g *ngSwitchCase=\"'AngryNatural'\" kip-custom-avatar-eye-brow-angry-natural />\r\n  <g *ngSwitchCase=\"'Angry'\" kip-custom-avatar-eye-brow-angry />\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-eye-brow-default />\r\n  <g *ngSwitchCase=\"'DefaultNatural'\" kip-custom-avatar-eye-brow-default-natural />\r\n  <g *ngSwitchCase=\"'RaisedExcited'\" kip-custom-avatar-eye-brow-raised-excited />\r\n  <g *ngSwitchCase=\"'RaisedExcitedNatural'\" kip-custom-avatar-eye-brow-raised-excited-natural />\r\n  <g *ngSwitchCase=\"'FlatNatural'\" kip-custom-avatar-eye-brow-flat-natural />\r\n  <g *ngSwitchCase=\"'FrownNatural'\" kip-custom-avatar-eye-brow-frown-natural />\r\n  <g *ngSwitchCase=\"'SadConcernedNatural'\" kip-custom-avatar-eye-brow-sad-concerned-natural />\r\n  <g *ngSwitchCase=\"'SadConcerned'\" kip-custom-avatar-eye-brow-sad-concerned />\r\n  <g *ngSwitchCase=\"'UnibrowNatural'\" kip-custom-avatar-eye-brow-unibrow-natural />\r\n  <g *ngSwitchCase=\"'UpDown'\" kip-custom-avatar-eye-brow-up-down />\r\n  <g *ngSwitchCase=\"'UpDownNatural'\" kip-custom-avatar-eye-brow-up-down-natural />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarEyebrowsComponent.propDecorators = {
    eyebrowType: [{ type: Input }],
    eyebrowColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsAngryComponent {
}
CustomAvatarEyebrowsAngryComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-angry]',
                template: "<svg:g id='Eyebrow/Outline/Angry' fill-opacity='0.599999964' fill-rule='nonzero'>\r\n  <path\r\n    d='M15.6114904,15.1845247 C19.8515017,9.41618792 22.4892046,9.70087612 28.9238518,14.5564693 C29.1057771,14.6937504 29.2212592,14.7812575 29.5936891,15.063789 C34.4216439,18.7263562 36.7081807,20 40,20 C41.1045695,20 42,19.1045695 42,18 C42,16.8954305 41.1045695,16 40,16 C37.9337712,16 36.0986396,14.9777974 32.011227,11.8770179 C31.6358269,11.5922331 31.5189458,11.5036659 31.3332441,11.3635351 C27.5737397,8.52660822 25.3739873,7.28738405 22.6379899,6.99208688 C18.9538127,6.59445233 15.5799484,8.47367246 12.3885096,12.8154753 C11.7343147,13.7054768 11.9254737,14.9572954 12.8154753,15.6114904 C13.7054768,16.2656853 14.9572954,16.0745263 15.6114904,15.1845247 Z'\r\n    id='Eyebrow'></path>\r\n  <path\r\n    d='M73.6114904,15.1845247 C77.8515017,9.41618792 80.4892046,9.70087612 86.9238518,14.5564693 C87.1057771,14.6937504 87.2212592,14.7812575 87.5936891,15.063789 C92.4216439,18.7263562 94.7081807,20 98,20 C99.1045695,20 100,19.1045695 100,18 C100,16.8954305 99.1045695,16 98,16 C95.9337712,16 94.0986396,14.9777974 90.011227,11.8770179 C89.6358269,11.5922331 89.5189458,11.5036659 89.3332441,11.3635351 C85.5737397,8.52660822 83.3739873,7.28738405 80.6379899,6.99208688 C76.9538127,6.59445233 73.5799484,8.47367246 70.3885096,12.8154753 C69.7343147,13.7054768 69.9254737,14.9572954 70.8154753,15.6114904 C71.7054768,16.2656853 72.9572954,16.0745263 73.6114904,15.1845247 Z'\r\n    id='Eyebrow' transform='translate(84.999934, 13.470064) scale(-1, 1) translate(-84.999934, -13.470064) '></path>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsAngryNaturalComponent {
}
CustomAvatarEyebrowsAngryNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-angry-natural]',
                template: "<svg:g id='Eyebrow/Natural/Angry-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M44.8565785,12.2282877 C44.8578785,12.2192877 44.8578785,12.2192877 44.8565785,12.2282877 M17.5862288,7.89238094 C15.2441598,8.3302947 13.0866155,9.78806858 12.1523766,12.0987479 C11.8009169,12.967391 11.3917103,14.9243181 11.7083227,15.8073302 C11.8284629,16.14295 12.0332321,16.1008692 12.9555234,16.0430509 C14.643791,15.9369937 16.9330912,13.6622369 18.7484684,13.2557982 C21.2753939,12.6899315 23.9825295,13.1148447 26.4961798,13.6882381 C30.8109365,14.6725177 36.4854008,17.7875215 40.9461842,16.1699775 C41.2783949,16.0495512 45.6210294,12.9225732 44.3685187,12.2769925 C43.9238011,11.9068186 41.1370145,12.0854053 40.6216067,11.9988489 C38.2277647,11.5971998 35.7297127,10.9345131 33.373373,10.3265657 C28.2329017,9.00016592 22.9666484,6.88073171 17.5862288,7.89238094'\r\n    id='Eyebrows-The-Web'\r\n    transform='translate(28.094701, 12.127505) rotate(17.000000) translate(-28.094701, -12.127505) ' />\r\n  <path\r\n    d='M100.918293,12.2094196 C100.919593,12.2004196 100.919593,12.2004196 100.918293,12.2094196 M73.5862288,7.89238094 C71.2441598,8.3302947 69.0866155,9.78806858 68.1523766,12.0987479 C67.8009169,12.967391 67.3917103,14.9243181 67.7083227,15.8073302 C67.8284629,16.14295 68.0332321,16.1008692 68.9555234,16.0430509 C70.643791,15.9369937 72.9330912,13.6622369 74.7484684,13.2557982 C77.2753939,12.6899315 79.9825295,13.1148447 82.4961798,13.6882381 C86.8109365,14.6725177 92.4854008,17.7875215 96.9461842,16.1699775 C97.2783949,16.0495512 101.621029,12.9225732 100.368519,12.2769925 C99.9238011,11.9068186 97.1370145,12.0854053 96.6216067,11.9988489 C94.2277647,11.5971998 91.7297127,10.9345131 89.373373,10.3265657 C84.2329017,9.00016592 78.9666484,6.88073171 73.5862288,7.89238094'\r\n    id='Eyebrows-The-Web'\r\n    transform='translate(84.094701, 12.127505) scale(-1, 1) rotate(17.000000) translate(-84.094701, -12.127505) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsDefaultComponent {
}
CustomAvatarEyebrowsDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-default]',
                template: "<svg:g id='Eyebrow/Outline/Default' fill-opacity='0.599999964'>\r\n  <g id='I-Browse' transform='translate(12.000000, 6.000000)'>\r\n    <path\r\n      d='M3.63024536,11.1585767 C7.54515501,5.64986673 18.2779197,2.56083721 27.5230268,4.83118046 C28.5957248,5.0946055 29.6788665,4.43856013 29.9422916,3.36586212 C30.2057166,2.2931641 29.5496712,1.21002236 28.4769732,0.94659732 C17.7403633,-1.69001789 5.31209962,1.88699832 0.369754639,8.84142326 C-0.270109626,9.74178291 -0.0589363917,10.9903811 0.84142326,11.6302454 C1.74178291,12.2701096 2.9903811,12.0589364 3.63024536,11.1585767 Z'\r\n      id='Eyebrow' fill-rule='nonzero' />\r\n    <path\r\n      d='M61.6302454,11.1585767 C65.545155,5.64986673 76.2779197,2.56083721 85.5230268,4.83118046 C86.5957248,5.0946055 87.6788665,4.43856013 87.9422916,3.36586212 C88.2057166,2.2931641 87.5496712,1.21002236 86.4769732,0.94659732 C75.7403633,-1.69001789 63.3120996,1.88699832 58.3697546,8.84142326 C57.7298904,9.74178291 57.9410636,10.9903811 58.8414233,11.6302454 C59.7417829,12.2701096 60.9903811,12.0589364 61.6302454,11.1585767 Z'\r\n      id='Eyebrow' fill-rule='nonzero'\r\n      transform='translate(73.000154, 6.039198) scale(-1, 1) translate(-73.000154, -6.039198) ' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsDefaultNaturalComponent {
}
CustomAvatarEyebrowsDefaultNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-default-natural]',
                template: "<svg:g id='Eyebrow/Natural/Default-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364'\r\n    id='Eyebrow' transform='translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) ' />\r\n  <path\r\n    d='M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364'\r\n    id='Eyebrow'\r\n    transform='translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsFlatNaturalComponent {
}
CustomAvatarEyebrowsFlatNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-flat-natural]',
                template: "<svg:g id='Eyebrow/Natural/Flat-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M38.5686071,10.7022978 C33.5865557,11.2384494 28.6553385,11.1338998 23.6562444,11.1010606 C19.8231061,11.0762636 15.91974,10.6892291 12.3246118,12.5091287 C11.6361455,12.8572921 7.8767609,14.9449324 8.00311195,16.0108688 C8.10389896,16.8633498 12.0128479,18.0636592 12.7165939,18.2838164 C16.4280826,19.4452548 19.9241869,18.9282036 23.6870976,18.5703225 C28.3024371,18.1316834 32.9139567,18.1745756 37.5322346,17.8739956 C40.6422336,17.6719334 45.4224171,16.9769469 46.8293214,13.1484895 C47.2530382,11.9954284 46.8152171,9.73353891 46.3074622,8.50642195 C46.1050066,8.01751871 45.5634602,7.84963624 45.1688335,8.14921095 C43.7560524,9.22218432 40.9851444,10.4425994 38.5686071,10.7022978'\r\n    id='Fill-10' transform='translate(27.500000, 13.500000) rotate(2.000000) translate(-27.500000, -13.500000) ' />\r\n  <path\r\n    d='M95.5686071,10.7022978 C90.5865557,11.2384494 85.6553385,11.1338998 80.6562444,11.1010606 C76.8231061,11.0762636 72.91974,10.6892291 69.3246118,12.5091287 C68.6361455,12.8572921 64.8767609,14.9449324 65.003112,16.0108688 C65.103899,16.8633498 69.0128479,18.0636592 69.7165939,18.2838164 C73.4280826,19.4452548 76.9241869,18.9282036 80.6870976,18.5703225 C85.3024371,18.1316834 89.9139567,18.1745756 94.5322346,17.8739956 C97.6422336,17.6719334 102.422417,16.9769469 103.829321,13.1484895 C104.253038,11.9954284 103.815217,9.73353891 103.307462,8.50642195 C103.105007,8.01751871 102.56346,7.84963624 102.168833,8.14921095 C100.756052,9.22218432 97.9851444,10.4425994 95.5686071,10.7022978'\r\n    id='Fill-10'\r\n    transform='translate(84.500000, 13.500000) scale(-1, 1) rotate(2.000000) translate(-84.500000, -13.500000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsFrownNaturalComponent {
    constructor() {
        this.option = EyebrowType.FrownNatural;
    }
}
CustomAvatarEyebrowsFrownNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-frown-natural]',
                template: "<svg:g id='Eyebrow/Natural/Frown-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M36.3692975,6.87618545 C34.3991755,9.78053246 30.8236346,11.5165625 27.6315757,12.5601676 C23.6890255,13.8490851 9.08080143,15.9390364 12.5196198,23.9079177 C12.572332,24.029546 12.7390347,24.0312591 12.7920764,23.9096308 C13.9448284,21.2646433 30.256648,18.7865093 31.7648785,18.2064622 C36.2101722,16.4974987 40.1579937,12.7153722 40.9269343,7.66282939 C41.2794477,5.34640965 40.2901039,1.6143049 39.3791695,0.113308759 C39.2697915,-0.0669067099 39.0052417,-0.02339461 38.9498938,0.181831751 C38.5898029,1.51323348 37.5385221,5.15317482 36.3692975,6.87618545'\r\n    id='Fill-5' />\r\n  <path\r\n    d='M95.3692975,6.87618545 C93.3991755,9.78053246 89.8236346,11.5165625 86.6315757,12.5601676 C82.6890255,13.8490851 68.0808014,15.9390364 71.5196198,23.9079177 C71.572332,24.029546 71.7390347,24.0312591 71.7920764,23.9096308 C72.9448284,21.2646433 89.256648,18.7865093 90.7648785,18.2064622 C95.2101722,16.4974987 99.1579937,12.7153722 99.9269343,7.66282939 C100.279448,5.34640965 99.2901039,1.6143049 98.3791695,0.113308759 C98.2697915,-0.0669067099 98.0052417,-0.02339461 97.9498938,0.181831751 C97.5898029,1.51323348 96.5385221,5.15317482 95.3692975,6.87618545'\r\n    id='Fill-5' transform='translate(85.500000, 12.000000) scale(-1, 1) translate(-85.500000, -12.000000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsRaisedExcitedComponent {
    constructor() {
        this.option = EyebrowType.RaisedExcited;
    }
}
CustomAvatarEyebrowsRaisedExcitedComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-raised-excited]',
                template: "<svg:g id='Eyebrow/Outline/Raised-Excited' fill-opacity='0.599999964'>\r\n  <g id='I-Browse' transform='translate(12.000000, 0.000000)'>\r\n    <path\r\n      d='M3.97579559,17.1279169 C5.47099148,7.60476158 18.0585488,1.10867597 27.1635167,5.30104271 C28.1668367,5.76301969 29.3546946,5.32417444 29.8166716,4.32085442 C30.2786486,3.3175344 29.8398033,2.12967649 28.8364833,1.66769952 C17.3488212,-3.62177466 1.93575948,4.3324746 0.0242044059,16.507492 C-0.147121205,17.5986938 0.598585765,18.6221744 1.68978754,18.7935 C2.78098932,18.9648257 3.80446998,18.2191187 3.97579559,17.1279169 Z'\r\n      id='Eyebrow' fill-rule='nonzero' />\r\n    <path\r\n      d='M61.9757956,17.1279169 C63.4709915,7.60476158 76.0585488,1.10867597 85.1635167,5.30104271 C86.1668367,5.76301969 87.3546946,5.32417444 87.8166716,4.32085442 C88.2786486,3.3175344 87.8398033,2.12967649 86.8364833,1.66769952 C75.3488212,-3.62177466 59.9357595,4.3324746 58.0242044,16.507492 C57.8528788,17.5986938 58.5985858,18.6221744 59.6897875,18.7935 C60.7809893,18.9648257 61.80447,18.2191187 61.9757956,17.1279169 Z'\r\n      id='Eyebrow' fill-rule='nonzero'\r\n      transform='translate(73.000097, 9.410436) scale(-1, 1) translate(-73.000097, -9.410436) ' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsRaisedExcitedNaturalComponent {
    constructor() {
        this.option = EyebrowType.RaisedExcitedNatural;
    }
}
CustomAvatarEyebrowsRaisedExcitedNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-raised-excited-natural]',
                template: "<svg:g id='Eyebrow/Natural/Raised-Excited-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z'\r\n    id='Eye-Browse-Reddit' />\r\n  <path\r\n    d='M80.7663531,1.57844898 L81.6772984,1.17582144 C86.9190996,-0.905265751 94.8645466,-0.0328729562 99.7227321,2.29911638 C100.289785,2.57148957 99.9021563,3.4519421 99.3211012,3.40711006 C84.4021788,2.25602197 74.3582869,11.5525942 70.9460869,17.8470939 C70.8449215,18.0337142 70.5391523,18.05489 70.4635344,17.8808353 C68.156283,12.5620676 74.9134476,3.89614725 80.7663531,1.57844898 Z'\r\n    id='Eye-Browse-Reddit' transform='translate(85.000000, 9.000000) scale(-1, 1) translate(-85.000000, -9.000000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsSadConcernedComponent {
    constructor() {
        this.option = EyebrowType.SadConcerned;
    }
}
CustomAvatarEyebrowsSadConcernedComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-sad-concerned]',
                template: "<svg:g id='Eyebrow/Outline/Sad-Concerned' fill-opacity='0.599999964' fill-rule='nonzero'>\r\n  <path\r\n    d='M15.9726042,19.4088529 C17.452356,11.0203704 30.0622688,5.22829657 39.2106453,8.9774793 C40.2254706,9.39337449 41.4016967,8.94600219 41.8378196,7.97824531 C42.2739426,7.01048842 41.8048116,5.88881678 40.7899862,5.47292159 C29.3457328,0.782843812 13.9550264,7.85221132 12.0280273,18.7760684 C11.84479,19.8148122 12.5792704,20.798534 13.6685352,20.9732726 C14.7578,21.1480113 15.7893668,20.4475967 15.9726042,19.4088529 Z'\r\n    id='Eyebrow' transform='translate(27.000414, 12.500000) scale(-1, -1) translate(-27.000414, -12.500000) ' />\r\n  <path\r\n    d='M73.9726042,19.4088529 C75.452356,11.0203704 88.0622688,5.22829657 97.2106453,8.9774793 C98.2254706,9.39337449 99.4016967,8.94600219 99.8378196,7.97824531 C100.273943,7.01048842 99.8048116,5.88881678 98.7899862,5.47292159 C87.3457328,0.782843812 71.9550264,7.85221132 70.0280273,18.7760684 C69.84479,19.8148122 70.5792704,20.798534 71.6685352,20.9732726 C72.7578,21.1480113 73.7893668,20.4475967 73.9726042,19.4088529 Z'\r\n    id='Eyebrow' transform='translate(85.000414, 12.500000) scale(1, -1) translate(-85.000414, -12.500000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsSadConcernedNaturalComponent {
    constructor() {
        this.option = EyebrowType.SadConcernedNatural;
    }
}
CustomAvatarEyebrowsSadConcernedNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-sad-concerned-natural]',
                template: "<svg:g id='Eyebrow/Natural/Sad-Concerned-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M22.7663531,5.57844898 L23.6772984,5.17582144 C28.9190996,3.09473425 36.8645466,3.96712704 41.7227321,6.29911638 C42.2897848,6.57148957 41.9021563,7.4519421 41.3211012,7.40711006 C26.4021788,6.25602197 16.3582869,15.5525942 12.9460869,21.8470939 C12.8449215,22.0337142 12.5391523,22.05489 12.4635344,21.8808353 C10.156283,16.5620676 16.9134476,7.89614725 22.7663531,5.57844898 Z'\r\n    id='Eyebrow' transform='translate(27.000000, 13.000000) scale(-1, -1) translate(-27.000000, -13.000000) ' />\r\n  <path\r\n    d='M80.7663531,5.57844898 L81.6772984,5.17582144 C86.9190996,3.09473425 94.8645466,3.96712704 99.7227321,6.29911638 C100.289785,6.57148957 99.9021563,7.4519421 99.3211012,7.40711006 C84.4021788,6.25602197 74.3582869,15.5525942 70.9460869,21.8470939 C70.8449215,22.0337142 70.5391523,22.05489 70.4635344,21.8808353 C68.156283,16.5620676 74.9134476,7.89614725 80.7663531,5.57844898 Z'\r\n    id='Eyebrow' transform='translate(85.000000, 13.000000) scale(1, -1) translate(-85.000000, -13.000000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsUnibrowNaturalComponent {
    constructor() {
        this.option = EyebrowType.UnibrowNatural;
    }
}
CustomAvatarEyebrowsUnibrowNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-unibrow-natural]',
                template: "<svg:g id='Eyebrow/Natural/Unibrow-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M57.000525,12 C56.999825,11.9961 56.999825,11.9961 57.000525,12 M59.4596631,14.892451 C61.3120123,16.058698 64.1131185,16.7894891 65.7030886,17.0505179 C71.9486685,18.0766191 78.0153663,15.945512 84.1715051,15.0153209 C89.636055,14.1895424 95.8563653,13.4967455 100.86041,16.507708 C100.987756,16.584232 101.997542,17.2147893 102.524546,17.7511372 C102.91024,18.1443003 103.563259,18.0619945 103.822605,17.5722412 C105.241692,14.8939029 97.7243204,8.76008291 96.2812935,8.14993193 C89.7471082,5.39200867 81.0899445,8.32440654 74.4284137,9.38927986 C70.6888462,9.98718701 66.9279989,10.3803501 63.2409655,11.2908151 C61.9188284,11.6171635 60.6278928,12.2066818 59.3382119,12.3724317 C59.1848981,12.1429782 58.9889964,12 58.7633758,12 C57.5922879,12 55.8451696,15.4574504 58.0750241,15.6547468 C58.7728345,15.7164887 59.215997,15.3816732 59.4596631,14.892451 Z'\r\n    id='Kahlo' transform='translate(80.500000, 12.500000) rotate(-2.000000) translate(-80.500000, -12.500000) ' />\r\n  <path\r\n    d='M54.999475,12 C55.000175,11.9961 55.000175,11.9961 54.999475,12 M15.7187065,8.14993193 C22.2528918,5.39200867 30.9100555,8.32440654 37.5715863,9.38927986 C41.3111538,9.98718701 45.0720011,10.3803501 48.7590345,11.2908151 C50.2416282,11.6567696 51.6849876,12.3536477 53.1313394,12.4128263 C53.8325707,12.4413952 54.2674737,13.2763566 53.8149484,13.8242681 C52.3320222,15.6179895 48.3271239,16.7172136 46.2969114,17.0505179 C40.0513315,18.0766191 33.9846337,15.945512 27.8284949,15.0153209 C22.363945,14.1895424 16.1436347,13.4967455 11.1395899,16.507708 C11.0122444,16.584232 10.0024581,17.2147893 9.47545402,17.7511372 C9.0897602,18.1443003 8.43674067,18.0619945 8.17739482,17.5722412 C6.75830756,14.8939029 14.2756796,8.76008291 15.7187065,8.14993193 Z M54.9339874,11 C56.1050753,11 57.8521936,15.4015737 55.6223391,15.6527457 C53.3924847,15.9039176 53.7628995,11 54.9339874,11 Z'\r\n    id='Frida' transform='translate(32.348682, 12.500000) rotate(2.000000) translate(-32.348682, -12.500000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsUpDownComponent {
    constructor() {
        this.option = EyebrowType.UpDown;
    }
}
CustomAvatarEyebrowsUpDownComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-up-down]',
                template: "<svg:g id='Eyebrow/Outline/Up-Down' fill-opacity='0.599999964' fill-rule='nonzero'>\r\n  <path\r\n    d='M15.5914402,14.1619718 C20.0874642,7.83556966 29.6031809,4.65350252 39.3473715,7.79575991 C40.3986323,8.13476518 41.5256656,7.55736801 41.8646708,6.50610724 C42.2036761,5.45484647 41.6262789,4.32781316 40.5750182,3.98880789 C29.1665516,0.309863172 17.8358054,4.09887835 12.3309495,11.8448183 C11.6910852,12.7451779 11.9022584,13.9937761 12.8026181,14.6336404 C13.7029777,15.2735046 14.9515759,15.0623314 15.5914402,14.1619718 Z'\r\n    id='Eyebrow' />\r\n  <path\r\n    d='M73.6376405,21.1577995 C77.5525501,15.6490895 88.2853148,12.56006 97.5304219,14.8304032 C98.6031199,15.0938282 99.6862617,14.4377829 99.9496867,13.3650849 C100.213112,12.2923868 99.5570664,11.2092451 98.4843684,10.9458201 C87.7477584,8.30920485 75.3194947,11.8862211 70.3771498,18.840646 C69.7372855,19.7410057 69.9484587,20.9896038 70.8488184,21.6294681 C71.749178,22.2693324 72.9977762,22.0581591 73.6376405,21.1577995 Z'\r\n    id='Eyebrow' transform='translate(85.007549, 16.038421) scale(-1, 1) translate(-85.007549, -16.038421) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarEyebrowsUpDownNaturalComponent {
    constructor() {
        this.option = EyebrowType.UpDownNatural;
    }
}
CustomAvatarEyebrowsUpDownNaturalComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-eye-brow-up-down-natural]',
                template: "<svg:g id='Eyebrow/Natural/Up-Down-Natural' fill-opacity='0.599999964'>\r\n  <path\r\n    d='M22.7663531,1.57844898 L23.6772984,1.17582144 C28.9190996,-0.905265751 36.8645466,-0.0328729562 41.7227321,2.29911638 C42.2897848,2.57148957 41.9021563,3.4519421 41.3211012,3.40711006 C26.4021788,2.25602197 16.3582869,11.5525942 12.9460869,17.8470939 C12.8449215,18.0337142 12.5391523,18.05489 12.4635344,17.8808353 C10.156283,12.5620676 16.9134476,3.89614725 22.7663531,1.57844898 Z'\r\n    id='Eye-Browse-Reddit' />\r\n  <path\r\n    d='M86.535177,12.0246305 C92.3421916,12.2928751 101.730304,16.5124899 101.488432,22.3684172 C101.480419,22.5600881 101.1989,22.6442368 101.06135,22.496811 C98.306449,19.5374968 78.7459953,16.5471364 71.8564209,18.1317995 C71.2258949,18.2770375 70.7468448,17.6550104 71.1462176,17.2056651 C74.5683263,13.3574126 81.3327077,11.7792465 86.535177,12.0246305 Z'\r\n    id='Eyebrow' transform='translate(86.246508, 17.285912) rotate(5.000000) translate(-86.246508, -17.285912) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthComponent {
    constructor() {
        this.mouthType = MouthType.Concerned;
    }
}
CustomAvatarMouthComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth]',
                template: "<svg:g [ngSwitch]=\"mouthType\">\r\n  <g *ngSwitchCase=\"'Concerned'\" kip-custom-avatar-mouth-concerned />\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-mouth-default />\r\n  <g *ngSwitchCase=\"'Disbelief'\" kip-custom-avatar-mouth-disbelief />\r\n  <g *ngSwitchCase=\"'Eating'\" kip-custom-avatar-mouth-eating />\r\n  <g *ngSwitchCase=\"'Grimace'\" kip-custom-avatar-mouth-grimace />\r\n  <g *ngSwitchCase=\"'Sad'\" kip-custom-avatar-mouth-sad />\r\n  <g *ngSwitchCase=\"'ScreamOpen'\" kip-custom-avatar-mouth-scream-open />\r\n  <g *ngSwitchCase=\"'Serious'\" kip-custom-avatar-mouth-serious />\r\n  <g *ngSwitchCase=\"'Smile'\" kip-custom-avatar-mouth-smile />\r\n  <g *ngSwitchCase=\"'Tongue'\" kip-custom-avatar-mouth-tongue />\r\n  <g *ngSwitchCase=\"'Twinkle'\" kip-custom-avatar-mouth-twinkle />\r\n  <g *ngSwitchCase=\"'Vomit'\" kip-custom-avatar-mouth-vomit />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarMouthComponent.propDecorators = {
    mouthType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MouthBaseComponent {
    constructor() {
        this.option = MouthType.Concerned;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthConcernedComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthConcernedComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-concerned]',
                template: "<svg:g id='Mouth/Concerned' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'\r\n      [id]=\"path1\"></path>\r\n  </defs>\r\n  <mask [id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"\r\n      transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '></use>\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd'\r\n    transform='translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) '\r\n    [attr.xlink:href]=\"'#' + path1\"></use>\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5'></rect>\r\n  <g id='Tongue' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" fill='#FF4F6D'>\r\n    <g transform='translate(38.000000, 24.000000)'>\r\n      <circle id='friend?' cx='11' cy='11' r='11'></circle>\r\n      <circle id='How-you-doing' cx='21' cy='11' r='11'></circle>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthDefaultComponent extends MouthBaseComponent {
}
CustomAvatarMouthDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-default]',
                template: "<svg:g id='Mouth/Default' transform='translate(2.000000, 52.000000)' fill-opacity='0.699999988'>\r\n  <path d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15' id='Mouth' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthDisbeliefComponent extends MouthBaseComponent {
}
CustomAvatarMouthDisbeliefComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-disbelief]',
                template: "<svg:g id='Mouth/Disbelief' transform='translate(2.000000, 52.000000)' fill-opacity='0.699999988' fill='#000000'>\r\n  <path d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15' id='Mouth'\r\n    transform='translate(54.000000, 22.000000) scale(1, -1) translate(-54.000000, -22.000000) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthEatingComponent extends MouthBaseComponent {
}
CustomAvatarMouthEatingComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-eating]',
                template: "<svg:g id='Mouth/Eating' transform='translate(2.000000, 52.000000)'>\r\n  <g id='Om-Nom-Nom' opacity='0.599999964' stroke-width='1' transform='translate(28.000000, 6.000000)'\r\n    fill-opacity='0.599999964' fill='#000000'>\r\n    <path\r\n      d='M16.1906378,10.106319 C16.0179484,4.99553347 11.7923466,0.797193688 6.29352385,0 C9.66004124,1.95870633 11.9804619,5.49520667 11.9804619,9.67694348 C11.9804619,15.344608 6.50694731,20.2451296 0.176591694,20.2451296 C0.11761218,20.2451296 0.0587475828,20.2447983 0,20.244138 L8.8963743e-11,20.244138 C1.35764479,20.7317259 2.83995964,21 4.39225962,21 C9.71395931,21 14.2131224,17.8469699 15.6863572,13.5136402 C18.1609431,15.6698775 21.8629994,17.0394229 26,17.0394229 C30.1370006,17.0394229 33.8390569,15.6698775 36.3136428,13.5136402 C37.7868776,17.8469699 42.2860407,21 47.6077404,21 C49.1600404,21 50.6423552,20.7317259 52,20.244138 L52,20.244138 C51.9412524,20.2447983 51.8823878,20.2451296 51.8234083,20.2451296 C45.4930527,20.2451296 40.0195381,15.344608 40.0195381,9.67694348 C40.0195381,5.49520667 42.3399588,1.95870633 45.7064761,0 C40.2076534,0.797193688 35.9820516,4.99553347 35.8093622,10.106319 C33.2452605,11.8422828 29.7948543,12.9056086 26,12.9056086 C22.2051457,12.9056086 18.7547395,11.8422828 16.1906378,10.106319 Z'\r\n      id='Delicious' />\r\n  </g>\r\n  <circle id='Redish' fill-opacity='0.2' fill='#FF4646' cx='17' cy='15' r='9' />\r\n  <circle id='Redish' fill-opacity='0.2' fill='#FF4646' cx='91' cy='15' r='9' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthGrimaceComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthGrimaceComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-grimace]',
                template: "<svg:g id='Mouth/Grimace' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='24' y='9' width='60' height='22' rx='11' />\r\n  </defs>\r\n  <rect id='Mouth' fill-opacity='0.599999964' fill='#000000' fill-rule='evenodd' x='22' y='7' width='64' height='26'\r\n    rx='13' />\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill='#FFFFFF' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <path\r\n    d='M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z'\r\n    id='Grimace-Teeth' fill='#E6E6E6' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthSadComponent extends MouthBaseComponent {
}
CustomAvatarMouthSadComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-sad]',
                template: "<svg:g id='Mouth/Sad' transform='translate(2.000000, 52.000000)' fill-opacity='0.699999988' fill='#000000'>\r\n  <path\r\n    d='M40.0582943,16.6539438 C40.7076459,23.6831146 46.7016363,28.3768187 54,28.3768187 C61.3416045,28.3768187 67.3633339,23.627332 67.9526838,16.5287605 C67.9840218,16.1513016 67.0772329,15.8529531 66.6289111,16.077395 C61.0902255,18.8502083 56.8805885,20.2366149 54,20.2366149 C51.1558456,20.2366149 47.0072148,18.8804569 41.5541074,16.168141 C41.0473376,15.9160792 40.0197139,16.2363147 40.0582943,16.6539438 Z'\r\n    id='Mouth' transform='translate(54.005357, 22.188409) scale(1, -1) translate(-54.005357, -22.188409) ' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthScreamOpenComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthScreamOpenComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-scream-open]',
                template: "<svg:g id='Mouth/Scream-Open' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"\r\n      transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) ' />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd'\r\n    transform='translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) '\r\n    [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5' />\r\n  <g id='Tongue' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" fill='#FF4F6D'>\r\n    <g transform='translate(38.000000, 32.000000)' id='Say-ahhhh'>\r\n      <circle cx='11' cy='11' r='11' />\r\n      <circle cx='21' cy='11' r='11' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthSeriousComponent extends MouthBaseComponent {
}
CustomAvatarMouthSeriousComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-serious]',
                template: "<svg:g id='Mouth/Serious' transform='translate(2.000000, 52.000000)' fill='#000000' fill-opacity='0.699999988'>\r\n  <rect id='Why-so-serious?' x='42' y='18' width='24' height='6' rx='3' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthSmileComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthSmileComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-smile]',
                template: "<svg:g id='Mouth/Smile' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5' />\r\n  <g id='Tongue' stroke-width='1' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" fill='#FF4F6D'>\r\n    <g transform='translate(38.000000, 24.000000)'>\r\n      <circle cx='11' cy='11' r='11' />\r\n      <circle cx='21' cy='11' r='11' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthTongueComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarMouthTongueComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-tongue]',
                template: "<svg:g id='Mouth/Tongue' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M29,15.6086957 C30.410031,25.2313711 41.062182,33 54,33 C66.9681454,33 77.6461342,25.183301 79,14.7391304 C79.1012093,14.3397326 78.775269,13 76.826087,13 C56.838426,13 41.7395748,13 31.173913,13 C29.3833142,13 28.870211,14.2404669 29,15.6086957 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='2' width='31'\r\n    height='16' rx='5' />\r\n  <path\r\n    d='M65.9841079,23.7466656 C65.9945954,23.8296335 66,23.9141856 66,24 L66,33 C66,39.0751322 61.0751322,44 55,44 L54,44 C47.9248678,44 43,39.0751322 43,33 L43,24 L43,24 C43,23.9141856 43.0054046,23.8296335 43.0158921,23.7466656 C43.0053561,23.6651805 43,23.5829271 43,23.5 C43,21.5670034 45.9101491,20 49.5,20 C51.510438,20 53.3076958,20.4914717 54.5,21.2634601 C55.6923042,20.4914717 57.489562,20 59.5,20 C63.0898509,20 66,21.5670034 66,23.5 C66,23.5829271 65.9946439,23.6651805 65.9841079,23.7466656 Z'\r\n    id='Tongue' fill='#FF4F6D' fill-rule='evenodd' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthTwinkleComponent extends MouthBaseComponent {
}
CustomAvatarMouthTwinkleComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-twinkle]',
                template: "<svg:g id='Mouth/Twinkle' transform='translate(2.000000, 52.000000)' fill-opacity='0.599999964' fill-rule='nonzero'\r\n  fill='#000000'>\r\n  <path\r\n    d='M40,16 C40,21.371763 46.1581544,25 54,25 C61.8418456,25 68,21.371763 68,16 C68,14.8954305 67.050301,14 66,14 C64.7072748,14 64.1302316,14.9051755 64,16 C62.7575758,18.9378973 59.6832595,20.7163149 54,21 C48.3167405,20.7163149 45.2424242,18.9378973 44,16 C43.8697684,14.9051755 43.2927252,14 42,14 C40.949699,14 40,14.8954305 40,16 Z'\r\n    id='Mouth' />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarMouthVomitComponent extends MouthBaseComponent {
    constructor() {
        super(...arguments);
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarMouthVomitComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-mouth-vomit]',
                template: "<svg:g id='Mouth/Vomit' transform='translate(2.000000, 52.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M34.0082051,12.6020819 C35.1280248,23.0929366 38.2345159,31.9944054 53.9961505,31.9999974 C69.757785,32.0055894 72.9169073,23.0424631 73.9942614,12.5047938 C74.0809675,11.6567158 73.1738581,10.9999965 72.0369872,10.9999965 C65.3505138,10.9999965 62.6703194,12.4951994 53.9894323,12.4999966 C45.3085452,12.5047938 40.7567994,10.9999965 36.0924943,10.9999965 C34.9490269,10.9999965 33.8961688,11.5524868 34.0082051,12.6020819 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M59.9170416,36 L60,36 C60,39.3137085 62.6862915,42 66,42 C69.3137085,42 72,39.3137085 72,36 L72,35 L72,31 C72,27.6862915 69.3137085,25 66,25 L66,25 L42,25 L42,25 C38.6862915,25 36,27.6862915 36,31 L36,31 L36,35 L36,38 C36,41.3137085 38.6862915,44 42,44 C45.3137085,44 48,41.3137085 48,38 L48,36 L48.0829584,36 C48.5590365,33.1622867 51.0270037,31 54,31 C56.9729963,31 59.4409635,33.1622867 59.9170416,36 Z'\r\n      [attr.id]=\"path2\" />\r\n    <filter x='-1.4%' y='-2.6%' width='102.8%' height='105.3%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='-1' in='SourceAlpha' result='shadowOffsetInner1' />\r\n      <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1'\r\n        result='shadowInnerInner1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowInnerInner1' />\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"\r\n      transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) ' />\r\n  </mask>\r\n  <use id='Mouth' fill-opacity='0.699999988' fill='#000000' fill-rule='evenodd'\r\n    transform='translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) '\r\n    [attr.xlink:href]=\"'#' + path1\" />\r\n  <rect id='Teeth' fill='#FFFFFF' fill-rule='evenodd' [attr.mask]=\"urlFix(mask1)\" x='39' y='0' width='31'\r\n    height='16' rx='5' />\r\n  <g id='Vomit-Stuff'>\r\n    <use fill='#88C553' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n    <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(filter1)\" [attr.xlink:href]=\"'#' + path2\" />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarNoseComponent {
    constructor() {
        this.noseType = NoseType.Default;
    }
}
CustomAvatarNoseComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-nose]',
                template: "<svg:g [ngSwitch]=\"noseType\">\r\n  <g *ngSwitchCase=\"'Default'\" kip-custom-avatar-nose-default />\r\n  <g *ngSwitchCase=\"'Clown'\" kip-custom-avatar-nose-clown />\r\n  </svg:g>\r\n"
            }] }
];
CustomAvatarNoseComponent.propDecorators = {
    noseType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarNoseDefaultComponent {
}
CustomAvatarNoseDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-nose-default]',
                template: "<svg:g id='Nose/Default' transform='translate(28.000000, 40.000000)' fill-opacity='0.16'>\r\n  <path d='M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8' id='Nose'></path>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarNoseClownComponent {
}
CustomAvatarNoseClownComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-nose-clown]',
                template: "<svg:g id='Nose/Clown' transform='translate(55, 50)' fill-opacity='1' fill='red'>\r\n<circle cx=\"0\" cy=\"0\" r=\"13\" stroke=\"red\" stroke-width=\"3\" fill=\"red\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopComponent {
}
CustomAvatarTopComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top]',
                template: "<svg:g [ngSwitch]=\"topType\">\r\n  <g *ngSwitchCase=\"'Eyepatch'\" kip-custom-avatar-top-eye-patch [facialHairType]=\"facialHairType\"\r\n    [hatColor]=\"hatColor\" [facialHairColor]=\"facialHairColor\" />\r\n  <g *ngSwitchCase=\"'LongHairFro'\" kip-custom-avatar-top-long-hair-fro [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairBigHair'\" kip-custom-avatar-top-long-hair-big-hair [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairBob'\" kip-custom-avatar-top-long-hair-bob [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairBun'\" kip-custom-avatar-top-long-hair-bun [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairCurly'\" kip-custom-avatar-top-long-hair-curly [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairCurvy'\" kip-custom-avatar-top-long-hair-curvy [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairDreads'\" kip-custom-avatar-top-long-hair-dreads [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairFrida'\" kip-custom-avatar-top-long-hair-frida [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairFroBand'\" kip-custom-avatar-top-long-hair-fro-band [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairMiaWallace'\" kip-custom-avatar-top-long-hair-mia-wallace [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairNotTooLong'\" kip-custom-avatar-top-long-hair-not-too-long\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairShavedSides'\" kip-custom-avatar-top-long-hair-shaved-sides\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairStraight'\" kip-custom-avatar-top-long-hair-straight [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairStraight2'\" kip-custom-avatar-top-long-hair-straight2 [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'LongHairStraightStrand'\" kip-custom-avatar-top-long-hair-straight-strand\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'NoHair'\" kip-custom-avatar-top-no-hair [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\"\r\n    [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairDreads01'\" kip-custom-avatar-top-short-hair-dreads1 [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairDreads02'\" kip-custom-avatar-top-short-hair-dreads2 [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairFrizzle'\" kip-custom-avatar-top-short-hair-frizzle [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairShaggy'\" kip-custom-avatar-top-short-hair-shaggy [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairShaggyMullet'\" kip-custom-avatar-top-short-hair-shaggy-mullet\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairShortCurly'\" kip-custom-avatar-top-short-hair-short-curly\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairShortFlat'\" kip-custom-avatar-top-short-hair-short-flat [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairShortRound'\" kip-custom-avatar-top-short-hair-short-round\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairShortWaved'\" kip-custom-avatar-top-short-hair-short-waved\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairSides'\" kip-custom-avatar-top-short-hair-sides [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairTheCaesar'\" kip-custom-avatar-top-short-hair-the-caesar [facialHairType]=\"facialHairType\"\r\n    [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'ShortHairTheCaesarSidePart'\" kip-custom-avatar-top-short-hair-the-caesar-side-part\r\n    [facialHairType]=\"facialHairType\" [hairColor]=\"hairColor\" [facialHairColor]=\"facialHairColor\"\r\n    [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'Hat'\" kip-custom-avatar-top-hat [facialHairType]=\"facialHairType\" [hatColor]=\"hatColor\"\r\n    [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'Hijab'\" kip-custom-avatar-top-hijab [facialHairType]=\"facialHairType\" [hatColor]=\"hatColor\"\r\n    [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'Turban'\" kip-custom-avatar-top-turban [facialHairType]=\"facialHairType\" [hatColor]=\"hatColor\"\r\n    [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'WinterHat1'\" kip-custom-avatar-top-winter-hat1 [facialHairType]=\"facialHairType\"\r\n    [hatColor]=\"hatColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'WinterHat2'\" kip-custom-avatar-top-winter-hat2 [facialHairType]=\"facialHairType\"\r\n    [hatColor]=\"hatColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'WinterHat3'\" kip-custom-avatar-top-winter-hat3 [facialHairType]=\"facialHairType\"\r\n    [hatColor]=\"hatColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'WinterHat4'\" kip-custom-avatar-top-winter-hat4 [facialHairType]=\"facialHairType\"\r\n    [hatColor]=\"hatColor\" [facialHairColor]=\"facialHairColor\" [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarTopComponent.propDecorators = {
    topType: [{ type: Input }],
    accessoriesType: [{ type: Input }],
    facialHairType: [{ type: Input }],
    hairColor: [{ type: Input }],
    facialHairColor: [{ type: Input }],
    hatColor: [{ type: Input }],
    accessoriesColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopBaseComponent {
    constructor() {
        this._color = '';
        this._color2 = '';
        this.option = TopType.Eyepatch;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hairColor(value) {
        if (this._hairColor !== value) {
            this._hairColor = value;
            this._color = hairColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get hairColor() {
        return this._hairColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hatColor(value) {
        if (this._hatColor !== value) {
            this._hatColor = value;
            this._color2 = hatColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get hatColor() {
        return this._hatColor;
    }
    /**
     * @return {?}
     */
    get color2() {
        return this._color2;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarTopBaseComponent.propDecorators = {
    hairColor: [{ type: Input }],
    hatColor: [{ type: Input }],
    facialHairType: [{ type: Input }],
    facialHairColor: [{ type: Input }],
    accessoriesType: [{ type: Input }],
    accessoriesColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopEyePatchComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.Eyepatch;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarTopEyePatchComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-eye-patch]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [id]=\"path1\" x='0' y='0' width='264' height='280'></rect>\r\n  </defs>\r\n  <mask [id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"></use>\r\n  </mask>\r\n  <g id='Mask'></g>\r\n  <g id='Top/Accesories/Eyepatch' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <path\r\n        d='M160.395307,39.7810237 C157.318088,36.6927979 154.11865,43.6386608 152.623361,45.4281124 C149.013122,49.7486528 145.540256,54.182935 141.868413,58.4518947 C134.616309,66.8823544 127.439316,75.3743141 120.233991,83.8401528 C119.140279,85.1257012 119.27271,85.2649028 117.837048,85.3885641 C116.88598,85.4708947 115.563312,84.9802173 114.5737,84.9256608 C111.823607,84.774556 109.112057,85.2348141 106.435756,85.8227012 C101.091389,86.9961608 95.4264863,88.9291124 90.7890799,91.898306 C89.5718308,92.677306 88.7874545,93.5971608 87.4670933,93.841177 C86.3183659,94.0534512 84.794416,93.6295641 83.622299,93.5194592 C81.5412806,93.3237173 78.5378542,92.4726366 76.4953793,92.9137173 C73.9027538,93.4738302 72.9174244,96.6109915 75.5604528,98.0003624 C77.570314,99.0564431 81.5706,98.4761608 83.8235816,98.6447899 C86.3971,98.8372253 85.6120649,98.704306 85.2473843,101.164306 C84.7239177,104.69758 85.5985582,108.646475 87.0885766,111.878201 C90.5482655,119.383185 100.122861,127.335201 108.8551,126.603153 C116.142123,125.992451 122.526834,119.413274 125.519389,113.099935 C127.050916,109.868871 127.954546,106.192096 128.250376,102.628403 C128.438811,100.36183 128.333722,97.9580399 127.684083,95.7632173 C127.362888,94.6783705 126.853916,93.5554995 126.308378,92.5695157 C125.866281,91.7710076 123.908799,89.9203866 123.788886,89.1165882 C123.556307,87.5602415 127.973324,83.3874995 128.816339,82.3443141 C132.788953,77.4276205 136.780344,72.5320882 140.721662,67.5889431 C144.603353,62.7201931 148.506456,57.8640076 152.489612,53.0785802 C154.294237,50.9098786 163.318023,42.7148382 160.395307,39.7810237'\r\n        id='Badass-Eyepatch' [attr.fill]='color2' fill-rule='evenodd'></path>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopEyePatchComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairFroComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairFro;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairFroComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-fro]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M180.665797,104.495381 C181.518431,106.144109 182,108.015816 182,110 L182,123 C182,129.018625 177.569129,134.002364 171.791419,134.867187 C170.048193,155.114792 157.530782,172.282984 140,180.610951 L140,190.054182 C143.832093,191.949549 148.058707,193 152.5,193 C160.121477,193 167.110765,189.906604 172.559029,184.758484 C174.020475,184.918263 175.501874,185 177,185 C195.390093,185 211.259672,172.683502 218.621514,154.88375 C224.900145,149.813883 229,141.454126 229,132 C229,130.214987 228.853847,128.468986 228.57447,126.776775 C230.785923,120.339137 232,113.331199 232,106 C232,93.1344627 228.26103,81.2644681 221.954258,71.7251464 C221.984605,71.1545437 222,70.5793265 222,70 C222,59.0433596 216.493437,49.5565783 208.470603,44.9571334 C201.160166,27.369138 185.740722,14.9905991 167.696954,14.0567347 C163.273738,9.07458291 157.201041,6 150.5,6 C149.549121,6 148.610894,6.0619088 147.688236,6.18239195 C137.909703,2.19640473 127.211351,0 116,0 C104.788649,0 94.0902965,2.19640473 84.3117637,6.18239195 C83.3891064,6.0619088 82.4508793,6 81.5,6 C74.7989589,6 68.7262617,9.07458291 64.3030458,14.0567347 C46.2592779,14.9905991 30.8398341,27.369138 23.5293968,44.9571334 C15.5065631,49.5565783 10,59.0433596 10,70 C10,70.5793265 10.0153947,71.1545437 10.0457422,71.7251464 C3.73896962,81.2644681 0,93.1344627 0,106 C0,113.331199 1.21407678,120.339137 3.42552978,126.776775 C3.14615333,128.468986 3,130.214987 3,132 C3,141.454126 7.0998554,149.813883 13.3784857,154.88375 C20.7403278,172.683502 36.6099075,185 55,185 C56.4981261,185 57.9795252,184.918263 59.4409604,184.758485 C64.8892346,189.906604 71.878523,193 79.5,193 C83.9412925,193 88.1679073,191.949549 92,190.054182 L92,180.610951 C74.4692178,172.282984 61.9518066,155.114792 60.2085808,134.867187 C54.4308707,134.002364 50,129.018625 50,123 L50,110 C50,108.017039 50.4809755,106.146415 51.3326281,104.498428 C54.034525,103.696079 57.0103265,101.444735 59.9905531,98.1675057 C59.9937016,98.1669748 59.9968506,98.1664452 60,98.1659169 L60,98.1571139 C66.866448,90.6014009 73.7548744,77.602262 77.3694073,64.3345491 C88.4864044,66.0717584 101.905207,67.0867832 116.353789,67.0867832 C130.513023,67.0867832 143.683308,66.1120054 154.66752,64.4380466 C158.288087,77.6642508 165.154277,90.6101259 172,98.1475774 L172,98.1659169 C172.006563,98.167018 172.013125,98.1681244 172.019685,98.1692362 C174.995621,101.441388 177.967097,103.690532 180.665797,104.495381 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Fro' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <path\r\n        d='M67,109.777572 C76.0375502,108.717226 88.9217814,89.3309188 94.3694073,69.3345491 C105.486404,71.0717584 118.905207,72.0867832 133.353789,72.0867832 C147.513023,72.0867832 160.683308,71.1120054 171.66752,69.4380466 C177.129582,89.3913728 189.978479,108.706688 199,109.77655 L199,89 C199,66.1159733 187.353465,45.9521405 169.664405,34.1125124 C169.136033,36.5946509 168.784517,39.3353373 168.624132,42.297284 C158.284896,40.892676 146.228147,40.0867832 133.353789,40.0867832 C120.190372,40.0867832 107.88169,40.9292706 97.3896338,42.392803 C97.2315704,39.3922173 96.8778294,36.6175705 96.3431783,34.1074375 C78.6498638,45.9463781 67,66.1127033 67,89 L67,89 L67,109.777572 Z'\r\n        id='Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' />\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(17.000000, 0.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairFroComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairBigHairComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairBigHair;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.mask3 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairBigHairComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-big-hair]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M182.884023,95.3249541 C161.364085,83.7373848 142.890027,67.1442914 130.845581,48.302359 C112.763849,73.9237118 76.5299076,78.5347548 51.2240944,94.679971 C51.0770557,95.4306015 51,96.2063021 51,97 L51,110 C51,116.018625 55.4308707,121.002364 61.2085808,121.867187 C62.9518066,142.114792 75.4692178,159.282984 93,167.610951 L93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,167.610951 C158.530782,159.282984 171.048193,142.114792 172.791419,121.867187 C178.569129,121.002364 183,116.018625 183,110 L183,97 C183,96.4315537 182.960475,95.8723389 182.884023,95.3249541 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M222.384814,182.806274 C217.011239,188.518122 211.648364,192.127879 211.831204,198 C212.148076,209.888877 255.439069,245.051165 216.999964,267.00001 L16.0053198,267 C-22.4337677,245.051165 20.8572256,209.888877 21.1740982,198 C21.3569373,192.127879 15.9940628,188.518122 10.6204878,182.806274 C5.24691269,177.094426 -0.137362978,169.280486 0.00267373922,155 C0.944497502,125.971596 31.3716806,128.588232 31.2026676,109 C31.3716806,89.9992744 19.8139454,82.1607482 31.2026676,46 C42.8395963,9.53932757 72.9165934,0.768171773 116.002651,0.0159928999 L116.002651,0 C116.16951,0.002426813 116.336177,0.0049705256 116.502651,0.0076322645 C116.669125,0.0049705256 116.835791,0.002426813 117.002651,0 L117.002651,0.0159928999 C160.088708,0.768171773 190.165705,9.53932757 201.802634,46 C213.191356,82.1607482 201.633621,89.9992744 201.802634,109 C201.633621,128.588232 232.060804,125.971596 233.002628,155 C233.142665,169.280486 227.758389,177.094426 222.384814,182.806274 Z M93,186 L89,186 L89,186 C49.235498,186 17,218.235498 17,258 L17,267 L217,267 L217,258 C217,218.235498 184.764502,186 145,186 L141,186 L141,140 L93,140 L93,186 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Big-Hair' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(16.000000, 13.000000)'>\r\n        <mask [attr.id]=\"mask3\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <g id='Shadow' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(16.000000, 13.000000)'>\r\n        <mask [attr.id]=\"mask1\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <g id='Shape' />\r\n        <path\r\n          d='M30.0988695,115.056827 C27.7250732,118.08281 24.5296181,122.528485 24.3618393,122.19381 C26.2345006,119.810609 27.3747977,117.011661 27.3409475,113.436088 C27.517612,95.334874 15.4366324,87.8674306 27.3409475,53.4185647 C28.0096512,51.5090274 29.1070085,49.7044671 30.585889,48.0048838 C20.2433352,82.4586863 31.3685109,90.3556196 31.2026676,109 C31.2224682,111.294844 30.8223327,113.284923 30.0988695,115.056827 Z M202.419413,48.0048838 C203.898293,49.7044671 204.995651,51.5090274 205.664354,53.4185647 C215.822041,82.8130155 208.516445,92.5627534 206.263744,106.036479 C205.964379,106.841192 206.195125,107.789747 205.880216,108.603009 C175.207016,98.1454461 147.589972,78.5596292 131.494917,55.6119279 C108.710969,85.0357527 58.3544031,85.3732378 33.6737341,110.936101 C34.0607045,110.391798 34.4280855,109.884956 34.7584999,109.446288 C57.2940449,79.527377 108.24688,80.3241416 130.845581,48.302359 C146.243536,72.3904102 172.664446,92.9495135 202.009146,103.926748 C202.310417,103.073073 202.089664,102.077381 202.376063,101.232679 C204.483829,87.4002546 211.215481,77.3069293 202.419413,48.0048838 Z'\r\n          id='Shadow-Mask' fill-opacity='0.16' fill='#000000' [attr.mask]=\"urlFix(mask1)\" />\r\n      </g>\r\n      <path\r\n        d='M50.7584999,122.446288 C73.2940449,92.527377 124.24688,93.3241416 146.845581,61.302359 C162.243536,85.3904102 188.664446,105.949514 218.009146,116.926748 C218.310417,116.073073 218.089664,115.077381 218.376063,114.232679 C220.531197,100.089398 227.520377,89.8551619 217.802634,59 C206.165705,22.5393276 176.088708,13.7681718 133.002651,13.0159929 C132.336177,13.0049705 132.16951,13.0024268 132.002651,13 C88.9165934,13.7681718 58.8395963,22.5393276 47.2026676,59 C35.8139454,95.1607482 47.3716806,102.999274 47.2026676,122 C47.2350518,125.753256 46.1441426,128.691293 44.3525888,131.192923 C44.5361111,131.59459 48.5061717,125.436551 50.7584999,122.446288 Z'\r\n        id='Light' fill-opacity='0.1' fill='#FFFFFF' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairBigHairComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairBobComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairBob;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairBobComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-bob]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M38,79.3595521 L38,111 C38,133.339168 51.0804213,152.623239 70,161.610951 L70,174.74565 C50.3625813,177.434228 34.6409914,182.163507 23.3845374,181.000327 C9.16164761,179.530612 1.49623627,150.795665 1,126 C0.382878875,95.1640258 29.3189583,30.7950013 40,18 C47.9231015,8.50878211 69.6952966,0.550643437 94.0001685,1 C118.30504,1.44935656 140.861928,6.81215989 149.000169,17 C161.324059,32.4276364 186.868727,91.0786423 187.000169,126 C187.093514,150.800049 177.46255,175.65995 164.000169,177 C152.920532,178.102871 137.475571,175.511343 118,173.997342 L118,161.610951 C136.919579,152.623239 150,133.339168 150,111 L150,82.9882378 C140.478735,78.1305678 131.863294,72.248172 124.153679,65.3410505 C127.362309,70.6368571 130.848786,75.1475352 134.61311,78.8730846 C107.596314,71.2928169 86.1055278,58.4501118 70.1407506,40.3449693 C62.1597317,56.8095313 51.4461487,69.8143919 38.0000014,79.3595511 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Bob' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Hair' stroke-width='1' fill-rule='evenodd' transform='translate(39.000000, 19.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Combined-Shape' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairBobComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairBunComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairBun;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairBunComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-bun]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M114.939716,28.3372418 C113.953527,28.5587334 112.985531,28.7906134 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 95.7648164,43.2055199 133,41.6707324 C170.235184,40.1359449 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 C161.866498,31.8520537 156.438352,29.6874962 151.116597,28.2827668 C154.176091,25.3110645 156,21.5675963 156,17.5 C156,7.83501688 145.702549,0 133,0 C120.297451,0 110,7.83501688 110,17.5 C110,21.5924906 111.846303,25.3568736 114.939716,28.3372418 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Bun' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Short-Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairBunComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairCurlyComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairCurly;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairCurlyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-curly]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M48.7246602,89.2187346 C44.7420117,91.1711421 42,95.2653555 42,100 L42,113 C42,119.018625 46.4308707,124.002364 52.2085808,124.867187 C53.9518066,145.114792 66.4692178,162.282984 84,170.610951 L84,189 L80,189 L80,189 C78.4137385,189 76.8394581,189.051297 75.2787271,189.152323 C70.3620966,186.639548 65.7724391,183.578174 61.590479,180.048925 C57.2814481,181.318646 52.7202934,182 48,182 C21.490332,182 0,160.509668 0,134 C0,119.590902 6.34904132,106.664702 16.4021743,97.866349 C11.1175746,90.6060809 8,81.6671147 8,72 C8,50.160623 23.9112243,32.0375116 44.7738169,28.5905219 C51.0188047,11.8901624 67.1208542,0 86,0 C94.0143172,0 101.528186,2.14267429 108,5.88641659 C114.471814,2.14267429 121.985683,0 130,0 C148.879146,0 164.981195,11.8901624 171.226183,28.5905219 C192.088776,32.0375116 208,50.160623 208,72 C208,81.6671147 204.882425,90.6060809 199.597826,97.866349 C209.650959,106.664702 216,119.590902 216,134 C216,160.509668 194.509668,182 168,182 C163.279707,182 158.718552,181.318646 154.409521,180.048925 C150.227561,183.578174 145.637903,186.639548 140.721273,189.152323 C139.160542,189.051297 137.586262,189 136,189 L136,189 L132,189 L132,170.610951 C149.530782,162.282984 162.048193,145.114792 163.791419,124.867187 C169.569129,124.002364 174,119.018625 174,113 L174,100 C174,95.778427 171.820067,92.0660046 168.524466,89.9269981 C167.450514,89.5343912 166.370126,89.0424011 165.289302,88.4564081 C164.868503,88.3367332 164.43828,88.2394463 164,88.1659169 L164,87.7130302 C155.319369,82.4100235 146.764694,71.1747746 141.449951,56.7992877 C131.312295,58.8351061 119.547256,60 107,60 C95.038684,60 83.7882341,58.9413637 73.9808476,57.0787685 C68.7546917,71.0641476 60.4637821,82.0431875 52,87.4230168 L52,88.1659169 C50.9777341,88.3374206 49.9992949,88.6381729 49.0820602,89.050796 C48.9628927,89.1079465 48.8437566,89.1639284 48.7246602,89.2187346 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Curly' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <path\r\n        d='M105.984735,27.7643628 C114.013215,26.6267967 122.796163,26 132,26 C142.358003,26 152.182939,26.7938545 160.999342,28.2161842 C183.451688,38.7497687 199,61.559133 199,88 L199,105.044138 C187.461887,104.672508 173.831239,90.7644306 166.449951,70.7992877 C156.312295,72.8351061 144.547256,74 132,74 C120.038684,74 108.788234,72.9413637 98.9808476,71.0787685 C91.6758772,90.6271291 78.3831001,104.301811 67,105.021902 L67,88 L67,88 C67,61.1745453 83.0039076,38.0870034 105.984735,27.7643628 Z'\r\n        id='Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' />\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(25.000000, 10.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Curly!' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairCurlyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairCurvyComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairCurvy;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairCurvyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-curvy]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M162.831093,71.6181521 C162.943003,73.0640672 163,74.5253775 163,76 L163,114 C163,136.339168 149.919579,155.623239 131,164.610951 L131,183 L135,183 C136.524404,183 137.037743,183.047374 138.538625,183.140731 C123.625568,210.496321 119.823733,233.574048 137.47212,247.543277 C139.169858,248.745686 140.396085,249.328761 140.607243,249.428275 C142.980035,250.546232 145.444343,251.76781 148.074296,252.382591 C152.696796,253.463231 158.007057,252.010459 162.630756,251.429524 C164.742591,251.164137 166.847633,251.000636 168.977452,250.993519 C171.542066,250.985014 174.188404,251.078221 176.119408,252.691023 C178.003455,254.264772 177.763079,259.889444 172.244213,262.523872 C176.3432,264.37915 181.25603,260.071171 182.931671,257.34666 C184.398107,254.962171 185.526058,252.378599 186.146081,249.741914 C186.917963,246.458686 186.967717,243.016815 186.363678,239.728032 C185.106048,232.88022 182.187563,226.295538 180.201011,219.605673 C179.468692,217.139607 178.51478,214.440611 178.099366,211.916746 C177.986471,211.23167 177.851996,208.701383 177.957698,208.171998 C178.036425,207.778517 178.016643,207.37549 179.372782,206.996069 C183.288539,205.899634 187.379733,204.063449 190.225486,201.476579 C193.590156,198.418295 195.343925,194.445304 196.758409,190.497133 C198.998525,184.244662 200.281132,177.550111 200.870584,171.057073 C200.99307,169.708269 201.062205,168.361722 201.086383,167.009968 C201.10077,166.193153 201.000862,165.263344 201.094375,164.445141 C201.247433,163.105189 201.039826,163.457881 202.341615,162.571291 C206.599454,159.671476 209.921164,155.448546 212.051783,151.200622 C215.39827,144.528634 215.834064,137.49302 213.117591,130.733555 C210.864687,125.12728 207.291411,119.498616 201.725588,115.887863 C199.588776,114.501568 197.334273,113.244582 195.115337,111.95809 C193.906862,111.257566 191.067703,110.342511 190.209501,109.441341 C189.609259,108.810939 190.56477,105.649382 190.685858,104.583322 C191.213967,99.9353218 190.606132,95.4261763 189.520542,90.8868298 C187.127368,80.8793698 177.487944,64.7382958 173.617944,55.2249863 C170.293437,47.0528435 165.481911,-0.0750473139 108.58669,0.198941193 C51.691468,0.4729297 41.4185991,50.4377258 33.7159879,59.7736698 C25.3512665,69.9121239 16.9074766,89.1763214 22.602684,107.035643 C17.099033,113.95809 4.54481227,124.04369 1.3853513,134.125611 C-0.596804833,140.450807 -0.511883829,147.495621 2.0289526,153.633016 C3.46621561,157.104393 5.52490056,160.250502 7.94045353,163.272162 C10.0566849,165.919435 12.4084972,168.423513 14.4577909,171.110359 C15.6946403,172.732013 16.0263318,173.129312 15.5599656,175.128304 C14.6406208,179.068318 12.7411877,182.853334 11.0939201,186.603116 C8.54189405,192.412639 6.39748885,197.82226 6.0799842,204.016065 C5.77766543,209.912373 7.40435223,226.688671 24.3409972,236.576369 C26.3249517,237.73442 28.2831301,238.743202 30.3833764,239.685161 C29.2931905,236.290327 30.5294405,224.161856 32.7263968,219.653578 C33.2860762,221.204589 34.2369916,222.697108 35.2618383,224.05216 C36.8611506,226.167444 40.636039,231.460774 45.4085994,231.706547 C43.4722007,228.722725 41.3891385,226.708805 40.7853002,223.10864 C44.7616013,225.068753 50.4191385,226.855644 55.0466338,226.691448 C58.4512667,226.570818 63.4709972,224.871405 66.0000446,222.74779 C57.6284322,224.074724 49.679027,221.3155 46.4820009,215.419366 C45.8146217,214.188415 45.3084926,212.898625 45.0141664,211.558847 C44.5967546,209.659309 43.9381673,206.615432 44.8227444,204.862039 C45.0375932,204.436124 45.3893685,204.001198 45.806628,203.572743 C45.7407358,203.49425 45.6753213,203.415537 45.6103845,203.336606 C51.303506,198.550494 58.4494475,190.932516 62.2752482,185.367908 C62.3459243,185.245492 62.416066,185.122857 62.4856702,185 L62.5253504,185 C62.5536953,184.957813 62.5818364,184.915755 62.6097716,184.873828 C67.874859,183.648086 73.3617452,183 79,183 L83,183 L83,164.610951 C64.0804213,155.623239 51,136.339168 51,114 L51,76 L51,76 C51,73.537425 51.1589523,71.1119753 51.4671565,68.733351 C55.4088487,67.4702772 59.365485,66.2776957 63.3986046,65.2045441 C67.8552588,64.0189378 77.7980098,62.0907786 81.6887904,61.1941723 L84.4252449,58.215348 L85.4876566,60.1702128 C87.6456492,60.0042337 99.5663601,58.212708 99.5663601,58.212708 L100.896323,54.9898699 C102.612526,56.7530625 103.834989,57.668872 103.834989,57.668872 C106.391211,57.460454 117.488488,57.2113208 120.119841,57.2427023 C120.119841,57.2427023 127.460212,57.5012269 129.240756,57.5714137 L130.907605,56.9328981 L131.456495,58.0098503 C132.910143,58.601117 141.699367,61.6008734 143.434153,62.138079 L145.980784,61.2323702 C147.100342,63.9256202 149.920119,63.586016 152.257345,65.7132858 C154.760315,67.9915694 159.482831,69.7372554 162.831093,71.6181521 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Curvy' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <path\r\n        d='M100.899906,42.4648024 C91.1016204,48.4721303 82.3855283,56.3273858 76.5871222,65.36024 C73.8252914,69.662826 71.5532049,74.1995784 69.4361743,78.7575668 C68.3739624,81.0447336 67.4048638,83.3600237 66.475928,85.6893613 C65.8894735,87.1594817 64.9889112,88.7449062 65.8359233,90.2878445 C66.3526427,89.9857996 66.5492598,90.0943892 66.224362,90.6353417 C68.9162579,91.3693254 72.6583769,89.3003017 74.9906073,88.5362205 C79.7539763,86.9753339 84.5203425,85.5025753 89.3986046,84.2045441 C93.8552588,83.0189378 103.79801,81.0907786 107.68879,80.1941723 L110.425245,77.215348 L111.487657,79.1702128 C113.645649,79.0042337 125.56636,77.212708 125.56636,77.212708 L126.896323,73.9898699 C128.612526,75.7530625 129.834989,76.668872 129.834989,76.668872 C132.391211,76.460454 143.488488,76.2113208 146.119841,76.2427023 C146.119841,76.2427023 153.460212,76.5012269 155.240756,76.5714137 L156.907605,75.9328981 L157.456495,77.0098503 C158.910143,77.601117 167.699367,80.6008734 169.434153,81.138079 L171.980784,80.2323702 C173.100342,82.9256202 175.920119,82.586016 178.257345,84.7132858 C181.34867,87.5271086 187.825645,89.5285179 190.917768,91.9756241 C192.024938,92.8519441 193.059576,93.7675012 194.100208,94.7015404 C195.255933,95.7385867 195.085291,95.890424 195.460742,97.0802141 C195.573237,97.4361731 196.715775,99.2788807 197.202722,99.4296139 C198.935909,99.9660566 187.048767,68.9435732 183.785603,64.9771662 C180.417736,60.8830307 158.574915,33.3231248 129.612057,34.2254634'\r\n        id='Top-Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' />\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(26.000000, 16.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Hair-Mask' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n        <path\r\n          d='M62.6794556,184.462132 C69.755442,174.755405 62.148959,147.786913 56.1278159,137.800593 C72.9649824,130.137708 106.213574,131.553467 155.87359,142.047871 C151.079203,150.900348 149.123448,158.803527 150.006324,165.757409 C145.469118,171.332534 141.720304,177.127222 138.759883,183.141474 L103.888915,191.746789 C81.8528509,194.400378 68.1163643,191.97216 62.6794556,184.462132 Z'\r\n          id='Shadow' fill-opacity='0.24' fill='#000000' [attr.mask]=\"urlFix(mask2)\" />\r\n      </g>\r\n      <path\r\n        d='M79.0404573,170.094305 C78.9812573,169.892618 78.8354573,169.667152 78.6348573,169.428842 C78.7708573,169.650142 78.9074573,169.871269 79.0404573,170.094305 Z M56.409572,120.375261 C57.2661752,126.5406 58.7356083,132.465374 60.8662263,138.377476 C62.9277086,144.09848 65.285915,149.836145 68.678559,155.067858 C71.8402179,159.943234 75.6031176,164.4923 78.6348973,169.428772 C77.8378388,168.48126 76.1633964,167.329804 75.5207941,166.65115 C74.4643769,165.535276 73.4750971,164.385382 72.5369698,163.193485 C70.6143583,160.749982 68.9003527,158.193833 67.243494,155.609567 C63.9913192,150.536843 61.5529875,145.034363 59.4397533,139.530668 C55.2902133,128.722708 51.1268862,115.61687 54.7738936,104.200899 C54.4921557,104.935095 55.2326668,106.688314 55.3491585,107.497319 C55.5525692,108.91069 55.7349995,110.333608 55.8267142,111.757219 C56.0123415,114.639678 56.0109428,117.505994 56.409572,120.375261 Z M68.8553146,165.041212 C67.4967783,163.309515 64.9739252,161.944396 63.4129772,160.279177 C61.9976938,158.769648 60.9019131,157.07822 59.9070386,155.339754 C57.6517365,151.39922 56.1697151,147.374505 55.6897616,142.969154 C55.7992598,143.49177 56.6083072,144.395543 56.8630702,144.824778 C57.4766993,145.858902 58.0839345,146.89424 58.6508072,147.948671 C59.7481863,149.989667 60.6639345,152.099744 61.7731027,154.135533 C63.8106073,157.875421 66.402796,161.495374 68.8553146,165.041212 Z M73.5320242,183.498629 C74.6465874,185.460651 75.5723262,187.464851 76.1569823,189.60079 C76.4654954,190.727599 76.7138643,191.869508 76.9272658,193.013501 C76.9962017,193.382508 77.0093894,194.709963 77.1846264,195.283955 C74.9700864,190.992812 73.2798587,186.448779 70.6421125,182.34214 C68.0381348,178.288092 64.6948448,174.560527 61.1958996,171.061031 C57.5013364,167.36575 53.7855929,163.879099 51.8038364,159.214262 C50.0788411,155.153619 49.4126608,150.996124 49.8138875,146.658464 C49.8160855,148.56911 51.5706533,151.280256 52.1766896,153.126681 C53.0063178,155.654018 53.6655046,158.231689 54.9143429,160.634229 C57.039566,164.722991 60.873,167.876911 64.0792175,171.321558 C67.631513,175.137643 71.0245567,179.084252 73.5320242,183.498629 Z M59.2286696,174.179456 C60.2874847,175.196917 61.2164205,176.28259 62.0352588,177.454354 C62.9328239,178.738937 63.5914112,180.09017 64.1800637,181.504062 C64.6869921,182.721301 64.9105841,184.986375 65.7074428,186.0021 C63.1288415,182.856337 60.4739112,179.884838 58.6955655,176.312444 C58.0893295,175.089825 57.1480051,173.289222 56.4530516,171.817184 C56.6844363,172.409922 58.7059559,173.677148 59.2286696,174.179456 Z M48.9033745,180.528033 C51.7405353,184.777866 55.450684,188.609052 57.877027,193.056233 C60.7067946,198.242644 61.9518364,203.862978 62.202803,209.595957 C62.3216924,212.307277 62.3152983,215.0606 61.9498383,217.764455 C61.7540204,219.211673 61.4399126,220.650211 61.0810465,222.075732 C60.944973,222.616747 60.2406283,224.002173 60.1037556,224.846586 C59.8140251,214.305575 61.5584024,203.763696 56.0767017,193.942823 C53.4811162,189.292219 49.4912277,185.327212 46.398105,180.924811 C43.6164926,176.966226 40.8998197,173.083838 38.6846803,168.851361 C40.0408188,170.567263 42.485145,171.915893 44.0009349,173.619818 C45.8995688,175.753674 47.3488206,178.199606 48.9033745,180.528033 Z M60.1036574,224.846603 C60.0710574,225.050581 60.0700574,225.224111 60.1172574,225.346603 C60.1116574,225.180112 60.1082574,225.01327 60.1036574,224.846603 Z M50.5604331,202.493815 C50.5610325,202.989874 51.376474,204.011501 51.5992667,204.528562 C52.1207816,205.73799 52.5455864,207.007473 52.7573894,208.289626 C53.1752007,210.818004 52.6269108,213.429521 51.6899823,215.850286 C49.7909489,220.757251 46.8161162,225.102895 43.0767946,229.15 C44.4121524,227.402335 44.9438578,224.56136 45.8833838,222.612182 C46.8478866,220.611106 47.8829238,218.6411 48.7335325,216.600624 C50.652947,211.995842 50.4835046,207.289696 50.5604331,202.493815 Z M41.9174331,221.200893 C42.3180604,220.652936 42.1102537,218.018161 42.3222565,217.328919 C42.714092,216.055618 43.3920613,214.827097 44.170737,213.693866 C43.7551236,214.392828 44.3691524,216.160106 44.1663411,217.067177 C43.8338504,218.55553 42.9962296,219.998582 41.9174331,221.200893 Z M99.6077106,42.748374 C99.5269106,42.804974 99.4471106,42.908174 99.3681106,43.044574 C99.4481106,42.945974 99.5267106,42.846574 99.6077106,42.748374 Z M84.8469387,64.3317143 C86.2672175,63.085837 87.0237138,60.1410677 88.0032026,58.5522183 C89.1283559,56.7269681 90.4213532,54.9730547 91.6476125,53.1960567 C94.0795502,49.6719145 96.3744154,46.2123399 99.3680307,43.0054816 C98.7464089,43.9398028 98.1949219,46.7736616 97.8536394,47.5189663 C96.9620688,49.4667561 95.8988578,51.3334892 94.6328355,53.1235049 C91.7722965,57.1680066 88.7029517,60.9266404 84.8469387,64.3317143 Z M84.3117165,54.1218036 C85.0620186,52.7952168 86.2055548,51.6739619 87.4917584,50.7082248 C86.9188913,51.2107066 86.6607314,53.2831189 86.2670976,53.9831221 C85.472237,55.3952784 84.3143141,56.6130375 83.0714703,57.7545999 C83.7352528,57.1726235 83.842553,54.9516363 84.3117165,54.1218036 Z M203.505599,152.127968 C203.498805,152.179518 203.485417,152.282271 203.464637,152.438483 C203.462638,150.913159 202.784469,149.237352 202.704144,147.668984 C202.592048,145.478545 202.906556,143.353715 203.787137,141.277137 C205.526519,137.175704 208.790083,134.069516 212.950612,131.638511 C211.805877,132.313173 210.683921,134.851617 209.949604,135.906916 C208.84663,137.493162 207.668126,139.094161 206.735993,140.757819 C204.793001,144.225725 204.229725,148.375062 203.505599,152.127968 Z M201.998401,130.481881 C201.761221,131.706583 201.448912,132.921738 201.009121,134.107908 C200.534762,135.386937 199.915938,136.630558 199.22578,137.835993 C198.79578,138.586852 197.246621,140.162684 197.24762,140.993211 C197.165296,136.095098 198.975812,131.657983 202.419809,127.7355 C202.04236,128.392806 202.137271,129.766083 201.998401,130.481881 Z M201.196906,165.719988 C204.852905,165.202752 208.302496,166.981313 210.618342,169.271033 C211.855791,170.494694 212.955568,171.900428 213.683091,173.404055 C214.229783,174.534509 214.228783,176.387356 214.9631,177.323587 C213.165772,174.905078 210.886892,172.951214 208.638584,170.859535 C207.075238,169.404855 203.950944,165.678852 201.196906,165.719988 Z M200.41897,176.096698 C200.227148,176.031957 198.485169,175.539368 198.081944,175.776984 C198.679388,175.510035 199.412106,175.184941 200.068895,175.097983 C204.35311,174.529024 209.561066,178.239232 210.13633,181.81909 C209.657576,180.592826 207.111145,179.578489 205.959616,178.968568 C204.136711,178.002484 202.395531,176.832456 200.41897,176.096698 Z M202.227687,183.908269 C202.969797,184.089822 204.54713,185.083504 205.275252,185.072742 C202.345977,185.143906 199.703236,184.81829 196.883858,184.158729 C197.036117,184.200212 198.643022,183.702937 198.694974,183.695647 C199.910043,183.523987 201.052381,183.620492 202.227687,183.908269 Z M190.882541,197.765243 C195.171151,197.522941 200.218656,198.149351 204.314046,199.181739 C206.346955,199.694288 208.253382,200.468058 210.006351,201.476666 C211.420436,202.290531 213.935896,203.408661 214.881616,204.614097 C211.142494,198.162369 203.032039,194.811448 194.722769,196.473197 C193.615199,196.695886 191.914181,197.749796 190.882541,197.765243 Z M189.923153,210.197773 C192.611453,209.233424 195.584487,208.30431 198.505969,208.169273 C201.277391,208.042395 204.351332,208.458613 206.915546,209.342078 C206.033367,209.102206 203.92333,209.674289 202.995793,209.779298 C201.699199,209.926138 200.399608,210.077837 199.099817,210.196558 C197.506299,210.342009 195.898395,210.422718 194.298883,210.41942 C193.159543,210.41699 190.979371,209.87858 189.923153,210.197773 Z M179.458947,227.410508 C179.711912,231.383499 182.010574,234.84533 185.39043,237.491388 C188.973097,240.296087 193.769036,241.572686 196.369816,245.319691 C197.637437,247.145462 198.312809,249.270812 198.20431,251.417686 C198.148362,252.524014 197.870221,253.636069 197.5695,254.712196 C197.371684,255.420184 196.66734,256.580144 196.667939,257.270775 C196.69911,253.384221 196.751661,248.859281 194.031592,245.598095 C191.300932,242.324066 186.539161,241.170701 183.203065,238.482813 C179.924714,235.841442 177.437828,232.389157 176.877749,228.498264 C176.425569,225.354411 176.648562,219.871892 179.90773,217.738557 C179.246345,218.128392 179.377224,220.111764 179.361438,220.669267 C179.298097,222.900321 179.317079,225.185182 179.458947,227.410508 Z M177.005789,242.672904 C177.402221,243.19257 179.575399,243.82436 180.213805,244.182606 C181.67045,245.000116 183.07914,245.92923 184.234665,247.059684 C186.55111,249.326146 188.044121,252.504886 188.151821,255.553623 C188.151821,254.833139 186.505553,253.096583 186.043183,252.481107 C185.275297,251.458613 184.407904,250.511969 183.524526,249.564283 C181.371329,247.253734 179.135209,244.999942 177.005789,242.672904 Z M229.167807,153.791051 C230.371887,154.841663 231.178936,156.147595 231.842519,157.49987 C233.373295,160.619424 233.65823,164.217333 232.431571,167.500388 C232.634582,166.795698 232.030544,165.31585 231.860502,164.601614 C231.488248,163.038626 230.906389,161.56225 230.298355,160.059664 C229.118053,157.144401 228.163741,154.41208 226.113648,151.858014 C226.644354,152.52556 228.442481,153.157872 229.167807,153.791051 Z M171.509602,41.9832998 C171.510002,42.3148163 172.426549,43.2758671 172.633357,43.6374111 C173.149677,44.5392749 173.557297,45.4857459 173.696967,46.4924453 C173.85542,47.6336606 173.6616,48.7505762 173.315522,49.8605491 C173.109914,50.5202844 172.131624,51.7949741 172.132423,52.3894475 C171.972572,48.891167 171.198691,45.5298324 171.509602,41.9832998 Z M179.146978,48.8048339 C179.312224,50.0477605 178.906202,51.4491555 178.183074,52.546805 C178.314952,52.2364639 177.729296,50.1642252 177.710314,49.7849773 C177.650969,48.6118253 177.77925,47.4056953 177.856378,46.2332376 C177.857178,46.8738803 179.039478,47.9958294 179.146978,48.8048339 Z M118.377388,50.3732542 C117.142336,51.8857333 115.738043,53.3032702 114.227248,54.6164922 C113.2036,55.5060327 111.243024,56.5057893 110.46315,57.5267214 C113.964293,51.8147436 118.00913,46.8878178 122.764906,41.8951095 C122.049172,42.8155452 121.862346,44.8121078 121.337434,45.8885819 C120.563354,47.4758692 119.527518,48.9645693 118.377388,50.3732542 Z M124.275361,52.8515919 C124.845431,52.5155626 125.378934,50.859195 125.81333,50.3013446 C126.54465,49.3623371 127.437619,48.4554398 128.390733,47.6728177 C128.186123,47.8927295 127.788693,49.7158968 127.5657,50.0739694 C126.843372,51.2344508 125.56616,52.1809219 124.275361,52.8515919 Z'\r\n        id='Lights' fill-opacity='0.6' fill='#FFFFFF' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairCurvyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairDreadsComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairDreads;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairDreadsComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-dreads]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C63.4467803,131.013632 63.6113966,121.686985 63.000708,112.826222 C62.1957105,101.145772 62.8887367,89.7481762 65.5369124,78.2476834 C67.9263583,67.8722634 71.3610508,62.3068417 79.1631677,53.9925443 C83.5224388,49.3467459 90.0678681,49.0779432 96.5828586,47.4293172 C103.17612,45.7598396 109.194306,43.2191332 113.317676,38.4387068 C122.400941,48.8499369 146.671683,45.1030183 155.554378,56.4493915 C166.355804,70.2471725 166.476604,79.1499376 167.747424,95.0917937 C168.700138,107.043152 167.218859,128.656014 166.803718,141.630125 C161.185514,152.525228 152.097197,161.339247 141,166.610951 L141,185 L145,185 C151.635699,185 158.061736,185.89767 164.1633,187.578199 C162.113115,190.752042 159.66929,193.757151 157.112045,196.551224 C153.280561,200.738743 149.430596,205.07041 145.111547,208.917959 C140.170678,213.319433 135.443967,216.514694 132.444114,221.999991 C131.086326,224.482676 128.707208,227.093643 131.224932,229.817026 C133.524148,232.304244 137.149083,231.79157 139.609734,229.99245 C143.247171,227.332528 145.947527,223.133676 149.2996,220.076669 C146.062216,225.891963 141.557817,234.561189 143.870623,241.081807 C144.65714,243.298862 145.455615,243.254893 146.671536,244.732627 C148.591355,244.77569 149.350151,245.644199 148.948467,247.337701 C149.128382,247.821818 149.308297,248.305028 149.488756,248.789145 C150.944383,251.382887 153.73062,253.199684 157.268587,251.977153 C168.828809,247.982737 155.493353,230.015568 168.22112,224.674872 C170.498594,227.504326 167.135107,235.453723 167.044334,238.930932 C166.932906,243.218176 167.166089,252.943574 173.685972,254.109896 C182.182202,255.630241 178.905139,247.513126 179.240509,244.059941 C179.630235,240.043766 182.101213,234.747946 184.111805,231.19141 C182.888817,234.970512 180.603189,243.344644 186.927937,245.060811 C194.245208,247.046687 193.409228,238.475373 194.5197,234.910224 C194.748535,240.185647 201.565196,252.659813 207.724704,242.806586 C210.898493,237.730613 208.733533,229.366 208.385661,223.95323 C212.799287,228.512903 216.32584,222.602417 216.224196,219.322843 C217.902135,224.075166 224.207315,237.325369 229.795009,226.807615 C233.19274,220.412559 229.568892,211.82266 227.311529,205.648358 C233.255792,206.168285 232.061613,200.411919 231.17617,197.553001 C229.869476,193.331485 230.56685,192.711833 230.835907,188.347077 C239.08591,193.151981 238.833159,180.113465 238.377664,176.915484 C237.232404,168.863643 230.969077,161.653567 226.135287,154.862787 C222.669068,149.991702 216.20028,141.510593 218.096726,135.636824 C220.053506,138.105004 224.604107,138.079166 226.413041,135.494944 C227.944765,133.306899 226.321725,129.699141 225.582497,127.51291 C223.561578,121.532617 219.523001,117.668749 215.871976,112.532035 C208.763972,102.531035 209.78639,89.3991407 209.129238,78.2191259 C208.309564,64.2703984 205.315147,50.5387982 192.648801,40.3918378 C185.862036,34.9554966 177.590835,30.4783232 171.278589,24.7101717 C169.557166,23.1372455 168.829352,21.1885396 167.213378,19.672275 C165.399552,17.9706136 164.553244,18.373591 163.055221,15.951194 C160.386934,11.6367527 157.252824,7.59700681 150.804147,7.39438491 C146.585112,7.26247669 141.249081,10.823092 137.446405,10.3027118 C134.324254,9.87616325 132.352254,5.42437419 129.78996,3.93032097 C125.824219,1.61762086 123.056462,2.51559399 118.817859,3.85507435 C112.508874,5.8486563 108.488235,6.54355423 102.06293,4.16059373 C97.6906135,2.53871192 93.5645254,-0.846479064 88.4018873,0.357013447 C84.3524397,1.30167574 82.5435053,4.56991717 80.1584078,7.07481345 C77.6972133,9.66084915 78.8865008,8.80593884 75.2887432,9.38026087 C71.6083661,9.9681817 68.7020041,10.5017074 65.9103313,12.9118655 C61.397779,16.8074642 64.5237352,22.8666297 60.95696,26.3007763 C59.0317058,28.154744 55.0219374,29.0377585 52.7922952,30.954734 C50.3582782,33.0471337 48.3677981,35.5901066 46.5441878,38.0655389 C42.992632,42.8881215 40.5678554,48.1435988 37.9642508,53.3460408 C33.1206766,63.0274694 28.8027153,73.0171372 26.9622549,83.4183949 C26.0170215,88.7645307 24.4238764,93.9946236 23.4503783,99.3303337 C22.6997357,103.444873 23.0198867,107.95151 21.5539323,111.946834 C19.8145722,116.686464 15.6553275,121.042608 13.4023127,125.704271 C10.4144183,131.887186 8.40763163,137.818976 7.77222166,144.475128 C7.14822625,151.019317 8.88486854,156.786109 9.65073052,163.202016 C10.0942673,166.919017 9.32731826,167.341033 6.77100254,170.849066 C4.80389503,173.548878 2.81124068,176.221946 1.54639979,179.227278 C-0.815325022,184.841763 -0.684329469,190.304395 3.42490864,195.240301 C6.24484612,198.627758 15.7238148,202.173415 14.9476254,194.622463 C14.5872518,191.114429 10.1763434,189.527451 11.0188459,185.502664 C11.6020751,182.715366 14.443211,180.786605 17.8920358,179.924895 C20.328227,179.316576 21.5278419,179.343321 22.6269,182.014575 C23.6232272,184.435613 22.3024007,189.72146 21.996382,192.265793 C21.8735397,193.288422 21.691994,194.184582 21.5686081,195.131511 C20.7005588,201.806248 20.5407551,207.947459 16.8870119,214.076432 C14.6426939,217.842389 10.2513533,223.149088 15.258536,226.778604 C19.2177543,229.649308 26.0490909,227.900051 29.1359115,224.896532 C32.3923196,228.923586 31.668311,233.320073 30.4502154,237.765516 C29.6941373,240.525616 27.6264731,244.567629 30.8812505,246.798736 C35.2888976,249.820386 42.4838692,245.061265 45.7886533,242.659719 C47.6992316,246.926565 49.4918595,262.485842 57.0243756,253.211017 C59.2224919,250.505765 62.8816706,247.867147 63.5785017,244.677325 C64.7346326,239.386945 63.9046317,233.818695 64.3834993,228.474826 C66.7870774,235.472308 68.4211208,238.262053 69.8925107,245.444931 C70.7774101,249.766172 71.124195,264.264472 80.0666799,262.354749 C86.9474795,260.885627 82.5468986,251.830921 81.6679782,248.139757 C79.9846038,241.070655 79.1724081,238.077382 77.5455629,230.999667 C80.078506,235.625521 82.2918416,240.371497 84.725315,245.034067 C87.115848,249.613685 97.8039252,259.060923 100.930715,255.083614 C104.057505,251.106306 96.435013,245.438857 94.7010885,240.623528 C91.0924599,230.599863 86.7201436,220.618354 85.6835937,210.116466 C85.1851583,205.067237 86.1200644,200.404213 86.5299011,195.413459 C86.8096981,192.003861 86.3887166,188.510775 85.718098,185.073467 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Dreads' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='template-for-hairstyles' stroke-width='1' fill-rule='evenodd' transform='translate(63.000000, 87.000000)' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <g id='Hair' stroke-width='1' fill-rule='evenodd' transform='translate(16.000000, 14.000000)'>\r\n        <mask [attr.id]=\"mask1\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='No-Woman' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n        <path\r\n          d='M85.718098,185.073467 C86.8059563,185.024663 87.900098,185 89,185 L89,185 L93,185 L93,166.610951 C81.2286384,161.018987 71.7176526,151.441235 66.2110974,139.621749 C66.7437304,141.280375 67.3851037,142.912325 68.1617154,144.509125 C73.916823,156.341882 81.4183567,166.92083 84.4877837,179.589912 C84.9233139,181.387079 85.3569126,183.222183 85.718098,185.073467 Z M164.1633,187.578199 C158.061736,185.89767 151.635699,185 145,185 L145,185 L141,185 L141,166.610951 C151.900717,161.432585 160.863061,152.836228 166.502046,142.206866 C166.424719,145.200638 166.492065,148.178617 166.874747,151.055581 C167.944997,159.099715 170.876362,166.366 169.515856,174.635875 C168.770949,179.167686 166.790265,183.511457 164.1633,187.578199 Z'\r\n          id='Shadows' fill-opacity='0.24' fill='#000000' [attr.mask]=\"urlFix(mask1)\" />\r\n        <path\r\n          d='M49.3607552,108.248307 C49.2357387,105.826133 47.3806025,97.711311 49.6885159,96.3093564 C52.2181977,94.7715832 51.6909542,104.01582 51.7170446,104.962941 C51.7605286,106.500263 52.928074,118.098087 50.7897482,118.046647 C48.6579451,117.995659 49.4428313,109.828495 49.3607552,108.248307 Z M57.7950752,165.998415 C57.7863784,167.012316 56.722651,166.95095 55.9633116,166.68563 C55.0256879,166.358041 55.5996767,164.201639 55.5502136,163.49457 C55.4197616,161.635525 54.5272525,156.156756 55.8904759,154.62169 C58.6158357,151.553363 57.8059462,164.569838 57.7950752,165.998415 Z M32.1210881,179.161492 C34.0501471,179.106894 32.2645853,141.329473 29.29952,141.371437 C27.2171799,141.400766 30.6611128,179.198041 32.1210881,179.161492 Z M34.3531219,198.516092 C31.9555228,198.516092 32.3963419,206.978357 33.8084848,207.654742 C35.9484412,208.679924 37.0349977,198.516092 34.3531219,198.516092 Z M49.5898072,202.054956 C49.6110057,203.112626 48.4113908,203.129321 47.6107416,202.798574 C46.701926,202.423155 47.082411,199.293461 47.0465367,198.598576 C46.9334783,196.41149 45.0299661,187.926664 46.7611729,186.367683 C48.7353466,184.59031 48.7782871,186.540953 49.3093354,187.8662 C50.8731288,191.768841 49.505557,197.898275 49.5898072,202.054956 Z M190.242397,122.33319 C190.352194,123.795609 191.311016,133.35074 189.717871,134.079016 C186.975661,135.332969 188.156795,129.428696 188.167666,128.666127 C188.274745,121.229044 187.19906,113.85423 186.381017,106.456855 C186.225562,105.052193 183.755671,94.2318284 185.564605,93.3352452 C188.272028,91.9937546 187.86817,95.5809897 188.023082,96.7451491 C189.152035,105.213731 189.651014,113.824449 190.242397,122.33319 Z M187.023004,155.587221 C184.490605,155.085459 183.16543,163.680835 184.321017,164.602687 C186.238118,166.132789 189.670093,156.113348 187.023004,155.587221 Z M186.754925,193.385172 C185.616188,193.158658 177.321615,209.117567 178.004314,210.020016 C179.303942,211.738731 190.833725,194.199633 186.754925,193.385172 Z M166.332555,200.758587 C164.551342,199.95631 156.998715,211.509915 158.926686,212.377619 C160.674743,213.163653 168.488275,201.725562 166.332555,200.758587 Z M208.425286,157.447168 C206.274459,157.447168 206.370123,169.269251 208.025233,170.015125 C209.736329,170.785817 210.967469,157.447168 208.425286,157.447168 Z M178.139603,48.8435128 C177.531371,47.9735519 170.964743,40.2233192 175.668081,41.3306242 C177.959145,41.8698375 181.116083,48.6833281 182.149372,50.7413632 C182.743472,51.9235715 186.133593,57.2006425 182.541271,56.8270286 C181.563968,56.7259543 178.951667,50.0063184 178.139603,48.8435128 Z M155.04775,33.3564939 C154.201443,33.7373274 154.215575,34.0946972 155.090147,34.4281522 C155.936998,34.0473186 155.922322,33.6904 155.04775,33.3564939 Z M70.6188876,41.486432 C68.6137316,43.3296843 61.07578,54.0047545 58.4928303,54.1116947 C53.7862308,54.3066237 62.7711125,45.0867526 63.7902688,43.9135688 C64.2452201,43.387441 66.275923,40.8222295 67.5119557,40.1914176 C68.7729918,39.5475202 72.9556091,39.3322861 70.6188876,41.486432 Z M43.2540252,69.9805849 C41.0711283,69.5519216 37.4190158,80.245492 38.693097,81.5359942 C40.6167205,83.4857354 45.7005438,70.4661025 43.2540252,69.9805849 Z M68.1928608,188.992366 C68.6054153,190.333405 72.8244505,200.071733 71.7639844,201.353211 C70.1425747,203.310623 69.6772959,200.536495 69.1467911,199.385872 C67.9689182,196.830588 64.9087316,190.540066 65.4006444,187.850317 C65.8784249,185.241788 67.775958,187.648619 68.1928608,188.992366 Z M59.986234,211.816206 C57.6913658,211.816206 57.9560747,221.618156 59.3225594,222.200687 C61.4391432,223.102685 62.8012795,211.816206 59.986234,211.816206 Z M221.791072,203.446532 C221.927503,204.049819 223.845148,209.009228 221.128485,208.290879 C219.566322,207.878008 219.325529,203.506094 218.926564,202.180847 C217.697597,198.095009 213.646519,193.018282 213.294842,188.98659 C212.955123,185.090266 215.135302,186.575246 216.80998,189.875503 C219.046145,194.283064 220.722996,198.746577 221.791072,203.446532 Z M202.089015,202.950817 C199.957212,202.941341 199.853937,213.724254 201.187265,214.35281 C203.051098,215.231344 204.808395,202.950817 202.089015,202.950817 Z M208.249611,114.654432 C209.831341,114.242012 204.839921,101.328868 203.071753,101.471004 C200.377376,101.688494 205.847663,115.273512 208.249611,114.654432 Z M181.434114,170.746831 C180.587263,171.127665 180.601939,171.485034 181.476511,171.818489 C182.322818,171.437656 182.308686,171.080286 181.434114,170.746831 Z M157.216135,225.987499 C158.009718,225.987499 158.337478,224.763778 157.165041,224.736253 C156.389939,224.742571 155.980645,225.987499 157.216135,225.987499 Z M58.6844317,170.628746 C58.7137834,168.720066 56.215084,170.119764 56.230847,171.730185 C56.26346,174.943806 58.6317074,173.476424 58.6844317,170.628746 Z M52.5187808,122.883143 C51.7148704,122.883143 51.3854791,124.119498 52.5698745,124.148828 C53.3536737,124.142962 53.7673152,122.883143 52.5187808,122.883143 Z M33.3865269,185.392722 C33.3087993,183.451554 31.6863025,185.43604 31.7770753,185.438747 C32.0651568,185.445967 33.4474045,186.856043 33.3865269,185.392722 Z M37.5995831,84.0632577 C35.2318792,84.0632577 35.5754028,89.8168218 37.0864719,90.1859235 C39.6063697,90.801845 39.9509805,84.0632577 37.5995831,84.0632577 Z M50.212933,208.325849 C47.9273051,208.325849 47.7729369,216.139704 49.3503191,216.625673 C51.8011861,217.379669 52.5931385,208.325849 50.212933,208.325849 Z M31.4567613,213.932223 C30.5849071,214.323435 30.5990394,214.691634 31.4991582,215.035467 C32.371556,214.644256 32.3568801,214.276959 31.4567613,213.932223 Z M201.455507,217.282881 C199.135636,217.282881 199.226409,226.836207 200.65051,227.481458 C202.64099,228.383907 204.139014,217.282881 201.455507,217.282881 Z M177.94561,226.161536 C175.534966,225.679629 174.272299,233.567034 175.395817,234.451885 C177.248236,235.910694 180.42148,226.656078 177.94561,226.161536 Z M157.46508,233.451204 C155.467534,233.451204 155.95836,237.025805 157.110686,237.557799 C159.104971,238.478297 159.694179,233.451204 157.46508,233.451204 Z M86.479514,19.5090896 C84.8080977,19.5090896 74.3192131,24.2532644 78.2392958,25.6588288 C80.6358078,26.5179603 90.7371413,19.5090896 86.479514,19.5090896 Z'\r\n          id='Highlights' fill-opacity='0.300000012' fill='#FFFFFF' [attr.mask]=\"urlFix(mask1)\" />\r\n      </g>\r\n      <g id='Group-74' stroke-width='1' fill-rule='evenodd' transform='translate(44.000000, 33.000000)' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairDreadsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairFridaComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairFrida;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
        this.filter2 = randomId('kip-filter');
        this.filter3 = randomId('kip-filter');
        this.filter4 = randomId('kip-filter');
        this.filter5 = randomId('kip-filter');
        this.filter6 = randomId('kip-filter');
        this.filter7 = randomId('kip-filter');
    }
}
CustomAvatarTopLongHairFridaComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-frida]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <filter x='-3.8%' y='-6.7%' width='107.7%' height='126.7%' filterUnits='objectBoundingBox' [attr.id]=\"filter5\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <filter x='-6.7%' y='-3.4%' width='113.3%' height='113.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter6\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <filter x='-6.7%' y='-3.4%' width='113.3%' height='113.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter7\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <filter x='-3.8%' y='-3.8%' width='107.7%' height='115.4%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <filter x='-2.5%' y='-2.5%' width='105.0%' height='110.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter2\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <filter x='-2.7%' y='-2.7%' width='105.4%' height='110.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter3\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <filter x='-1.8%' y='-1.9%' width='103.6%' height='107.4%' filterUnits='objectBoundingBox' [attr.id]=\"filter4\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Frida' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Cabello' stroke-width='1' fill-rule='evenodd' transform='translate(57.000000, 12.000000)'>\r\n        <path\r\n          d='M132,85.9365741 L132,86.1659169 C137.155374,87.0308248 141.196116,91.1828748 141.893354,96.3931952 C144.449672,93.4871212 146,89.6746099 146,85.5 C146,83.370043 145.596416,81.3343479 144.861548,79.4652142 C148.026608,76.4588698 150,72.2098901 150,67.5 C150,61.6639649 146.970105,56.5355997 142.397534,53.6021248 C143.424844,51.4510861 144,49.0427105 144,46.5 C144,38.865183 138.814518,32.4415002 131.77335,30.5587463 C131.922635,29.560863 132,28.5394662 132,27.5 C132,16.1781626 122.821837,7 111.5,7 C108.870853,7 106.357304,7.49493913 104.047446,8.3967274 C100.317449,3.30576666 94.2947759,0 87.5,0 C83.2377504,0 79.2793114,1.30076749 76,3.52698535 C72.7206886,1.30076749 68.7622496,0 64.5,0 C57.7052241,0 51.6825514,3.30576666 47.9525545,8.3967274 C45.6426956,7.49493913 43.1291474,7 40.5,7 C29.1781626,7 20,16.1781626 20,27.5 C20,28.5394662 20.0773647,29.560863 20.2266501,30.5587463 C13.1854816,32.4415002 8,38.865183 8,46.5 C8,48.6917361 8.4273349,50.7836628 9.20323008,52.6970055 C3.75045759,55.3899422 0,61.0069879 0,67.5 C0,72.9379417 2.63063706,77.7614652 6.68874609,80.7674054 C6.2406808,82.2665254 6,83.8551557 6,85.5 C6,89.6746099 7.55032816,93.4871212 10.1066457,96.3931952 C10.8038839,91.1828748 14.8446259,87.0308248 20,86.1659169 L20,85.9365741 C20.0276665,85.957925 20.0554443,85.9790669 20.0833333,86 C22.985911,38.8525302 68.5527463,55.7423492 76.000002,29.3361688 C83.4472619,55.7423461 129.014089,38.8525344 131.916667,86 C131.944556,85.9790669 131.972333,85.957925 132,85.9365741 Z M52,168.610951 L52,172.811832 C51.1847358,172.935746 50.3498715,173 49.5,173 C42.6790709,173 36.8248202,168.861157 34.3116389,162.957863 C25.7536314,162.348807 19,155.213101 19,146.5 C19,145.029028 19.1924867,143.603013 19.5536459,142.245771 C12.8575367,140.144362 8,133.88945 8,126.5 C8,122.755519 9.24731211,119.302363 11.3491137,116.533355 C13.0865598,119.870864 16.346706,122.289132 20.2085808,122.867187 C21.9518066,143.114792 34.4692178,160.282984 52,168.610951 Z M100,168.610951 L100,172.811832 C100.815264,172.935746 101.650128,173 102.5,173 C109.320929,173 115.17518,168.861157 117.688361,162.957863 C126.246369,162.348807 133,155.213101 133,146.5 C133,145.029028 132.807513,143.603013 132.446354,142.245771 C139.142463,140.144362 144,133.88945 144,126.5 C144,122.755519 142.752688,119.302363 140.650886,116.533355 C138.91344,119.870864 135.653294,122.289132 131.791419,122.867187 C130.048193,143.114792 117.530782,160.282984 100,168.610951 Z'\r\n          [attr.fill]=\"color\" />\r\n      </g>\r\n      <g id='Ornamentos' stroke-width='1' fill-rule='evenodd' transform='translate(67.000000, 0.000000)'>\r\n        <g id='hoja' [attr.filter]=\"urlFix(filter5)\" opacity='0.899999976'\r\n          transform='translate(120.000000, 64.500000) scale(1, -1) rotate(-20.000000) translate(-120.000000, -64.500000) translate(107.000000, 57.000000)'\r\n          fill-rule='nonzero'>\r\n          <path\r\n            d='M3.61111111,10 C3.61111111,10 1.95,0 13,0 C20.2222222,0 25.2777778,5.71428571 25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C5.05555556,14.2857143 3.61111111,10 3.61111111,10 Z'\r\n            id='leaf' fill='#5DD362' />\r\n          <path\r\n            d='M25.2777778,5.71428571 C25.2777778,5.71428571 19.8611111,14.2857143 11.5555556,14.2857143 C7.22222222,14.2857143 5.12777778,12.3571429 4.18888889,11.0714286 C2.09444444,12.8571429 1.37222222,14.5 1.37222222,14.5714286 C1.3,14.8571429 1.01111111,15 0.722222222,15 C0.65,15 0.505555556,15 0.433333333,14.9285714 C0.0722222222,14.7857143 -0.0722222222,14.3571429 0.0722222222,14 C0.144444444,13.7857143 1.95,9.85714286 7.43888889,7.28571429 C15.3833333,3.14285714 25.2777778,5.71428571 25.2777778,5.71428571 Z'\r\n            id='leaf' fill='#42BC53' />\r\n        </g>\r\n        <g id='hoja' [attr.filter]=\"urlFix(filter6)\"\r\n          transform='translate(93.307368, 21.745191) scale(-1, -1) rotate(-120.000000) translate(-93.307368, -21.745191) translate(85.807368, 7.245191)'>\r\n          <path d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'\r\n            id='leaf' fill='#5DD362' />\r\n          <path\r\n            d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'\r\n            id='leaf' fill='#42BC53' />\r\n        </g>\r\n        <g id='hoja' [attr.filter]=\"urlFix(filter7)\"\r\n          transform='translate(29.307368, 59.745191) rotate(-120.000000) translate(-29.307368, -59.745191) translate(21.807368, 45.245191)'>\r\n          <path d='M15,12 C15,5.9 9,0 9,0 C9,0 1.7,4.3 1,13 C0.3,21.7 6.8,23.7 6.8,23.7 C6.8,23.7 15,20.8 15,12 Z'\r\n            id='leaf' fill='#5DD362' />\r\n          <path\r\n            d='M8,29 C8.1,29 8.2,29 8.3,28.9 C8.8,28.7 9.1,28.1 8.9,27.6 C8.4,26.1 8,24.7 7.8,23.2 C10,22.2 15,18.9 15,12 C15,5.9 9,0 9,0 C9,0 8.6,1.1 8,3 C8,3 8,3 8,3 C7.8,3.5 2.8,16.6 7.1,28.3 C7.2,28.7 7.6,29 8,29 Z'\r\n            id='leaf' fill='#42BC53' />\r\n        </g>\r\n        <g id='Flor' [attr.filter]=\"urlFix(filter1)\"\r\n          transform='translate(13.000000, 42.000000) scale(-1, 1) translate(-13.000000, -42.000000) translate(0.000000, 29.000000)'>\r\n          <path\r\n            d='M24.4244753,20.9561089 C25.2601813,19.8468762 25.6139026,18.4784184 25.4208747,17.1027473 C25.2278468,15.7270762 24.5099609,14.5094298 23.401533,13.6738657 C23.1024018,13.448127 22.7077101,13.2632031 22.2596302,13.1057873 C22.7130645,12.9646232 23.1137179,12.7934099 23.4204085,12.5786628 C25.7688628,10.9342574 26.3421384,7.68540233 24.6974016,5.33647474 C23.0526648,2.98754715 19.8036678,2.41507618 17.4552135,4.05948158 C17.148523,4.2742286 16.8506035,4.59216121 16.5623958,4.97030055 C16.5681989,4.4950724 16.5289465,4.06126726 16.4191304,3.70296871 C16.0132035,2.3748027 15.1137169,1.2836091 13.8873598,0.632188307 C12.6611446,-0.0200371698 11.2540931,-0.154883395 9.92559572,0.250570203 C7.18364131,1.0892266 5.6350141,4.00181908 6.47286581,6.7436316 C6.58216096,7.10017888 6.78669399,7.47891226 7.05541252,7.86771872 C6.6074755,7.71655089 6.18638481,7.62487741 5.81372806,7.61849197 C2.94678437,7.56848119 0.573854142,9.85989025 0.523370073,12.7271653 C0.504358584,13.8654889 0.853022045,14.9255192 1.46080913,15.7935291 C2.38423063,17.1113044 3.90375474,17.9869973 5.63218533,18.0167186 C6.00484208,18.0231041 6.42832327,17.945939 6.88109576,17.8108811 C6.59932552,18.1901555 6.38197496,18.5617056 6.2605192,18.9140724 C5.69762142,20.5489044 5.99965968,22.2756795 6.92293929,23.5942594 C7.53072638,24.4622693 8.40824188,25.1534041 9.48422896,25.5235908 C12.1953795,26.4571485 15.1603315,25.0102268 16.0934159,22.2994077 C16.2148717,21.947041 16.272275,21.5203224 16.2839005,21.0473654 C16.5573519,21.4328579 16.8436218,21.7550638 17.1409542,21.9792407 C18.2505182,22.81542 19.6186447,23.168668 20.9943157,22.9756401 C22.3707915,22.7827541 23.5887693,22.0653415 24.4244753,20.9561089 Z'\r\n            fill='#4ACAD3' fill-rule='nonzero' />\r\n          <path\r\n            d='M11.178297,8.63990176 C10.9452631,7.87696713 11.3743225,7.06939957 12.1372572,6.83636565 C12.9001918,6.60333173 13.7077594,7.03239119 13.9407933,7.79532582 C14.1738272,8.55826044 13.7087793,11.9767907 13.7087793,11.9767907 C13.7087793,11.9767907 11.4113309,9.40283638 11.178297,8.63990176 Z M8.9355486,14.4373723 C8.1377895,14.4232361 7.50243635,13.7656743 7.5165726,12.9679152 C7.53070884,12.1701561 8.18827062,11.534803 8.98602972,11.5489392 C9.78378882,11.5630754 12.8914353,13.0618808 12.8914353,13.0618808 C12.8914353,13.0618808 9.73297629,14.4510353 8.9355486,14.4373723 Z M14.9931854,12.4189898 C14.9931854,12.4189898 16.7313261,9.4385895 17.3849366,8.98092648 C18.0385471,8.52326347 18.9389925,8.68203629 19.3966555,9.33564681 C19.8543185,9.98925733 19.6955457,10.8897027 19.0419352,11.3473657 C18.3883247,11.8050287 14.9931854,12.4189898 14.9931854,12.4189898 Z M11.9202121,19.2569641 C11.1657288,18.9973982 10.7651265,18.1754621 11.0246924,17.4209789 C11.2842584,16.6664957 13.670556,14.1745805 13.670556,14.1745805 C13.670556,14.1745805 14.0160946,17.6074345 13.7565287,18.3619178 C13.4966313,19.1159277 12.6746953,19.5165301 11.9202121,19.2569641 Z M17.2395979,17.2963365 C16.6023761,16.8164172 14.9694239,13.7771777 14.9694239,13.7771777 C14.9694239,13.7771777 18.3408473,14.5093818 18.978069,14.9893011 C19.6152908,15.4692204 19.7426018,16.3753059 19.2623511,17.0120544 C18.7824319,17.6492761 17.8763463,17.7765872 17.2395979,17.2963365 Z'\r\n            fill='#FFFFFF' />\r\n        </g>\r\n        <g id='Flor' [attr.filter]=\"urlFix(filter2)\" transform='translate(20.000000, 16.000000)'>\r\n          <path\r\n            d='M30.5258511,33.0981022 L30.7843694,30.7838831 L33.0980227,30.5247992 C35.9451175,30.2051869 38.2084249,28.4080043 39.1519882,25.7142103 C40.2177395,22.6719541 39.217042,19.3553405 36.6052724,17.4325757 L34.7311566,16.052869 L35.6634061,13.9191036 C36.8915092,11.1127382 36.3082875,8.02353005 34.142278,5.85752056 C31.9762685,3.69151107 28.8870604,3.10828939 26.0801294,4.33582677 L23.9469296,5.26864203 L22.5666572,3.39396053 C20.6438924,0.78558504 17.3267131,-0.217940904 14.2844569,0.847810436 C11.5917943,1.79137373 9.79348029,4.05468111 9.4749994,6.90177585 L9.21591547,9.21542924 L6.90226208,9.47451317 C4.05460165,9.79355975 1.79129427,11.5918737 0.847730981,14.2845363 C-0.0896097682,16.9607941 0.549614762,19.8457897 2.51650298,21.812678 L2.51706867,21.8132437 C2.78576925,22.0819442 3.08049135,22.3348056 3.39388108,22.5656053 L5.26856258,23.9458777 L4.33518163,26.0796431 C3.10877562,28.8865742 3.6919973,31.9757823 5.85800679,34.1417918 C8.02401628,36.3078013 11.1132244,36.891023 13.9201555,35.664617 L16.0539209,34.731236 L17.4341933,36.6059175 C19.3513012,39.2165558 22.6741374,40.217819 25.7169593,39.1526333 C28.4096219,38.2079386 30.2073702,35.9451969 30.5258511,33.0981022 Z'\r\n            fill='#FDB599' fill-rule='nonzero' />\r\n          <path\r\n            d='M22.8816016,25.1907295 C23.087511,25.9589303 22.6315686,26.7486271 21.8633678,26.9545366 C21.095167,27.1604461 20.3049044,26.703938 20.0995606,25.9363028 C19.8942168,25.1686677 20,20 20,20 C20,20 17.50759,24.5288775 16.9452987,25.0911688 C16.3835731,25.6528945 15.4711225,25.6534601 14.9088312,25.0911688 C14.3465399,24.5288775 14.3471055,23.6164269 14.9088312,23.0547013 C15.4711225,22.49241 20,20 20,20 C20,20 14.831898,20.1063489 14.0636972,19.9004394 C13.2954963,19.6945299 12.8395539,18.904833 13.0454634,18.1366322 C13.2513729,17.3684314 14.0410697,16.912489 14.8092705,17.1183984 C15.5774713,17.3243079 20,20 20,20 C20,20 17.3243079,15.5774713 17.1183984,14.8092705 C16.912489,14.0410697 17.3684314,13.2513729 18.1366322,13.0454634 C18.904833,12.8395539 19.6945299,13.2954963 19.9004394,14.0636972 C20.1063489,14.831898 20,20 20,20 C20,20 22.49241,15.4711225 23.0547013,14.9088312 C23.6169926,14.3465399 24.5288775,14.3465399 25.0911688,14.9088312 C25.6534601,15.4711225 25.6534601,16.3830074 25.0911688,16.9452987 C24.5288775,17.50759 20,20 20,20 C20,20 25.1686677,19.8942168 25.9363028,20.0995606 C26.703938,20.3049044 27.1604461,21.095167 26.9545366,21.8633678 C26.7486271,22.6315686 25.9589303,23.087511 25.1907295,22.8816016 C24.4225287,22.6756921 20,20 20,20 C20,20 22.6751264,24.421963 22.8816016,25.1907295 Z'\r\n            fill='#FFFFFF' />\r\n        </g>\r\n        <g id='Flor' [attr.filter]=\"urlFix(filter3)\" transform='translate(89.000000, 26.000000)'>\r\n          <path\r\n            d='M34.7579072,29.8221549 C35.9471811,28.2436316 36.4505537,26.2962107 36.1758602,24.338525 C35.9011667,22.3808393 34.8795597,20.6480348 33.3021815,19.4589627 C32.8764948,19.1377192 32.3148182,18.8745582 31.6771661,18.6505434 C32.322438,18.4496561 32.8925986,18.2060063 33.3290428,17.9004048 C36.6710739,15.5602894 37.4868893,10.9369187 35.1463023,7.59421406 C32.8057153,4.25150941 28.1821427,3.43683918 24.8401115,5.77695456 C24.4036673,6.08255608 23.979705,6.53499864 23.5695632,7.07312001 C23.5778216,6.3968338 23.5219623,5.77949571 23.3656856,5.26960932 C22.7880204,3.37952692 21.5079818,1.82667448 19.7627813,0.899652591 C18.0177827,-0.0285144339 16.0154402,-0.220410986 14.1248862,0.356580673 C10.2228742,1.55005325 8.01905852,5.69489638 9.21138596,9.59670651 C9.36692136,10.1041007 9.6579876,10.6430675 10.0403947,11.196369 C9.40294591,10.9812455 8.80370145,10.8507871 8.27338223,10.8417001 C4.19350083,10.7705309 0.816638586,14.0313823 0.744795872,18.1117353 C0.717741062,19.7316573 1.21391599,21.2401619 2.07884376,22.4754068 C3.39294359,24.3507024 5.55534329,25.5968808 8.01503297,25.6391765 C8.54535219,25.6482635 9.14799849,25.5384516 9.79232859,25.3462538 C9.39134786,25.8859905 9.08204129,26.414735 8.9092004,26.9161799 C8.10815356,29.2426717 8.53797723,31.7000054 9.85187515,33.5764461 C10.7168029,34.811691 11.965575,35.7952289 13.4967874,36.322033 C17.3549631,37.6505575 21.5743179,35.5914767 22.9021688,31.7337725 C23.0750097,31.2323275 23.1566991,30.6250741 23.173243,29.95202 C23.5623854,30.5006054 23.9697696,30.9591293 24.3928963,31.2781502 C25.9718913,32.4680977 27.9188405,32.9707967 29.8765262,32.6961032 C31.8353571,32.4216117 33.5686332,31.4006783 34.7579072,29.8221549 Z'\r\n            fill='#F7D30C' fill-rule='nonzero' />\r\n          <path\r\n            d='M15.9075765,12.2952448 C15.5759513,11.2095302 16.1865359,10.0602994 17.2722506,9.72867419 C18.3579653,9.397049 19.507196,10.0076336 19.8388212,11.0933483 C20.1704464,12.1790629 19.5086475,17.0438945 19.5086475,17.0438945 C19.5086475,17.0438945 16.2392017,13.3809595 15.9075765,12.2952448 Z M12.715973,20.5454914 C11.5807004,20.5253744 10.676544,19.5896134 10.696661,18.4543409 C10.716778,17.3190683 11.652539,16.4149119 12.7878115,16.4350289 C13.9230841,16.4551458 18.3455041,18.5880611 18.3455041,18.5880611 C18.3455041,18.5880611 13.850774,20.5649348 12.715973,20.5454914 Z M21.3364561,17.6731778 C21.3364561,17.6731778 23.8099641,13.4318389 24.7401021,12.7805492 C25.6702401,12.1292596 26.9516432,12.3552055 27.6029329,13.2853435 C28.2542225,14.2154816 28.0282766,15.4968846 27.0981386,16.1481743 C26.1680005,16.799464 21.3364561,17.6731778 21.3364561,17.6731778 Z M16.9633787,27.4041412 C15.889691,27.0347589 15.3196031,25.8650807 15.6889854,24.7913931 C16.0583677,23.7177054 19.4542528,20.1715184 19.4542528,20.1715184 C19.4542528,20.1715184 19.9459808,25.0567338 19.5765985,26.1304214 C19.2067446,27.2034356 18.0370664,27.7735236 16.9633787,27.4041412 Z M24.5332739,24.6140173 C23.6264583,23.9310553 21.3026416,19.6059836 21.3026416,19.6059836 C21.3026416,19.6059836 26.1004365,20.6479665 27.0072521,21.3309285 C27.9140676,22.0138905 28.095241,23.30332 27.4118074,24.209462 C26.7288453,25.1162776 25.4394159,25.297451 24.5332739,24.6140173 Z'\r\n            fill='#FFFFFF' />\r\n        </g>\r\n        <g id='Flor' [attr.filter]=\"urlFix(filter4)\" transform='translate(48.000000, 0.000000)'>\r\n          <path\r\n            d='M54.1379237,31.5464048 C55.9625462,24.5630399 48.1438056,19.13187 45.1845324,17.3616591 C45.6989766,14.4276922 46.8574047,4.80065356 40.7169237,1.24584505 C34.6121663,-2.28828261 26.9236153,3.44959091 24.6013353,5.39402404 C24.4009276,5.26871855 24.1656352,5.12587117 23.8977086,4.97076479 C20.8314374,3.19565841 13.1300975,-0.380512394 7.84990403,4.73636964 C2.20473848,10.2044755 5.53732179,18.7392794 6.80518652,21.4340926 C4.64577053,23.4449497 -1.57937327,30.0260297 0.986877047,37.024011 C1.69277097,38.9530347 2.99822799,40.4795811 4.86875265,41.5624535 C8.89955964,43.8959428 14.4760657,43.5196765 16.591707,43.2691852 C17.5849083,45.1496134 20.4220029,49.9813784 24.4796026,52.3303784 C26.1496784,53.2972082 27.8550402,53.7431811 29.5502657,53.6552686 C36.4552712,53.2971895 39.4664791,43.6601819 40.2201879,40.7426742 C43.0812084,40.3465884 52.3062726,38.5442744 54.1379237,31.5464048 Z'\r\n            fill='#FF7398' fill-rule='nonzero' />\r\n          <path\r\n            d='M27.7643057,25.6030632 C27.7643057,25.6030632 31.4492792,33.7908502 28.1176886,34.3138653 C24.7835165,34.8339614 26.6574825,25.7216143 26.6574825,25.7216143 C26.6574825,25.7216143 19.5457139,31.7290717 18.5074329,28.7503567 C17.4680864,25.7710249 26.208593,24.7024398 26.208593,24.7024398 C26.208593,24.7024398 18.2208741,20.0098596 20.8149072,17.8660564 C23.4089403,15.7222531 27.0309781,23.9576566 27.0309781,23.9576566 C27.0309781,23.9576566 28.975509,15.0385915 31.8514465,16.7035111 C34.727384,18.3684307 27.9942413,24.5153028 27.9942413,24.5153028 C27.9942413,24.5153028 36.8711392,23.5256765 36.3635103,26.8673556 C35.8586276,30.2092 27.7643057,25.6030632 27.7643057,25.6030632 Z'\r\n            fill='#FFFFFF' />\r\n        </g>\r\n      </g>\r\n      <g id='Arete' stroke-width='1' fill-rule='evenodd' transform='translate(182.000000, 129.000000)'>\r\n        <rect id='Cadenita' fill='#E6E6E6' x='9' y='0' width='2' height='39' rx='1' />\r\n        <polygon id='Rayo' fill='#9177FF' fill-rule='nonzero' points='20 37 10.57 37 17 20 6 20 0 41 8.636 41 4 60' />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairFridaComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairFroBandComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairFroBand;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairFroBandComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-fro-band]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M80.0203173,73.8104172 C78.0626651,79.5136273 77,85.6327143 77,92 L77,92 L77,98.1659169 C71.3245733,99.1180731 67,104.054007 67,110 L67,123 C67,129.018625 71.4308707,134.002364 77.2085808,134.867187 C78.9518066,155.114792 91.4692178,172.282984 109,180.610951 L109,191.55498 C104.295298,193.764912 99.0418843,195 93.5,195 C84.6936661,195 76.615743,191.881303 70.3104439,186.688122 C68.4019201,186.894245 66.4633102,187 64.5,187 C43.405572,187 25.1625605,174.791635 16.4510993,157.055039 C8.9342791,151.923647 4,143.288055 4,133.5 C4,131.385405 4.23029535,129.324599 4.66717333,127.341294 C2.29639351,121.011656 1,114.157223 1,107 C1,94.2436789 5.11811695,82.4491956 12.0974246,72.8734763 C12.0329017,72.0908558 12,71.2992702 12,70.5 C12,59.2025056 18.5734777,49.4403292 28.1042855,44.8296184 C36.5367477,26.7016558 54.5576512,13.9359054 75.6500672,13.049296 C80.7818839,8.06730831 87.7827378,5 95.5,5 C97.8269611,5 100.088787,5.27887473 102.253881,5.80502563 C111.775927,2.05800249 122.147627,0 133,0 C143.346018,0 153.255173,1.87043661 162.407758,5.29160393 C163.744126,5.09944416 165.11045,5 166.5,5 C174.217262,5 181.218116,8.06730831 186.349933,13.049296 C207.442349,13.9359054 225.463252,26.7016558 233.895715,44.8296184 C243.426522,49.4403292 250,59.2025056 250,70.5 C250,71.2992702 249.967098,72.0908558 249.902575,72.8734763 C256.881883,82.4491956 261,94.2436789 261,107 C261,114.157223 259.703606,121.011656 257.332827,127.341294 C257.769705,129.324599 258,131.385405 258,133.5 C258,143.288055 253.065721,151.923647 245.548901,157.055039 C236.837439,174.791635 218.594428,187 197.5,187 C195.53669,187 193.59808,186.894245 191.689556,186.688122 C185.384257,191.881303 177.306334,195 168.5,195 C164.481965,195 160.61557,194.350752 157,193.151442 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,104.054007 194.675427,99.1180731 189,98.1659169 L189,92 C189,86.5585666 188.223906,81.2983998 186.776371,76.3241528 L188.153157,89.1947292 L176.812614,65.1945789 L131.676809,45.6707349 L101.563146,56.2283606 L80.0648273,76.419385 L80.0203173,73.8104172 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Fro-+-Band' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Hair' stroke='none' fill-rule='evenodd' [attr.link:href]=\"'#' + path2\">\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <path\r\n        d='M76.6313898,98.975 C76.2155465,96.423245 76,93.8109442 76,91.1521739 C76,62.3493236 101.295912,39 132.5,39 C163.704088,39 189,62.3493236 189,91.1521739 C189,93.8109442 188.784453,96.423245 188.36861,98.975 C184.279562,73.883217 160.823662,54.6456522 132.5,54.6456522 C104.176338,54.6456522 80.7204382,73.883217 76.6313898,98.975 Z'\r\n        id='Band' stroke='none' fill='#92D9FF' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairFroBandComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairMiaWallaceComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairMiaWallace;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairMiaWallaceComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-mia-wallace]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M148.859344,69 C148.952588,70.3212062 149,71.6550662 149,73 L149,111 C149,133.339168 135.919579,152.623239 117,161.610951 L117,170.317435 C135.145605,171.815797 152.721153,174.335027 163.000169,177 C172.952646,163.439362 185.884594,150.800081 186.000169,126 C186.085192,107.014914 158.324059,30.4276364 146.000169,15 C137.861928,4.81215989 117.30504,1.44935656 93.0001685,1 C68.6952966,0.550643437 48.9231015,6.50878211 41,16 C30.3189583,28.7950013 -0.0850232975,107.014914 4.92293245e-13,126 C0.115574613,150.800081 13.047523,163.439362 23,177 C33.2789946,174.335033 50.8544902,171.815807 69,170.317444 L69,161.610951 C50.0804213,152.623239 37,133.339168 37,111 L37,73 L37,73 C37,71.6550662 37.0474121,70.3212062 37.1406562,69 L65.3735517,69 L69.2529753,47.5561285 L72.058097,69 L148.859344,69 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Mia-Wallace' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <path\r\n        d='M69.0330562,76.212888 C81.9708809,43.1292208 95.6458945,26.5873873 110.058097,26.5873873 C110.596882,26.5873873 139.311316,26.3494141 158.112657,26.226792 C178.767149,35.5853581 193,55.3036503 193,78.114622 L193,93 L110.058097,93 L107.252975,69.820435 L103.373552,93 L69,93 L69,78.114622 C69,77.478246 69.0110772,76.844277 69.0330621,76.2128728 L69.0330562,76.212888 Z'\r\n        id='Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' />\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(40.000000, 19.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Combined-Shape' [attr.fill]='color' [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairMiaWallaceComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairNotTooLongComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairNotTooLong;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairNotTooLongComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-not-too-long]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M59,102.340285 C59,118.921045 59,145.474283 59,182 C59,186.418278 62.581722,190 67,190 L109,190 L109,180.610951 C91.4692178,172.282984 78.9518066,155.114792 77.2085808,134.867187 C71.4308707,134.002364 67,129.018625 67,123 L67,110 C67,106.509412 68.4903619,103.366917 70.8694649,101.174135 C82.4088376,98.5552525 94.9706808,93.6376395 107.341516,86.4953343 C119.473269,79.4910638 129.843979,71.2579416 137.820938,62.752196 C134.394107,70.6604321 130.244513,77.5880409 125.372156,83.5350224 C138.047336,78.0120855 146.677812,69.1324394 151.263585,56.8960843 C151.64142,57.8180234 152.034942,58.738913 152.444252,59.6582378 C162.699828,82.6926393 180.317578,99.018563 198.205873,104.403108 C198.718861,106.513486 199,108.48395 199,110 L199,123 C199,129.018625 194.569129,134.002364 188.791419,134.867187 C187.048193,155.114792 174.530782,172.282984 157,180.610951 L157,190 L175,190 C192.673112,190 207,175.673112 207,158 C207,133.944314 207,115.902549 207,103.874706 C207,103.807916 206.990567,103.721208 206.971823,103.615272 C206.82774,91.3536714 206.623862,84.2237818 206.360189,82.2256031 C201.576875,45.9764505 170.555563,18 133,18 C96.9151011,18 66.8627142,43.8282542 60,78 C54.4771525,78 50,83.5964406 50,90.5 C50,95.0507583 51.6949619,99.1431718 54.8534901,101.273154 C55.7582038,101.883256 57.323834,102.197638 58.9999994,102.340287 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Long-but-not-too-long' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Behind' stroke-width='1' fill-rule='evenodd'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Combined-Shape' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <g id='Top' opacity='0.439990942' stroke-width='1' fill-rule='evenodd' transform='translate(50.000000, 18.000000)'\r\n        fill-opacity='0.159999996'>\r\n        <path\r\n          d='M11.8989604,84.7749122 C25.7109099,83.0145308 41.6792969,77.5379209 57.3415164,68.4953343 C69.4732686,61.4910638 79.8439791,53.2579416 87.8209384,44.752196 C84.3941075,52.6604321 80.2445133,59.5880409 75.3721558,65.5350224 C88.0473359,60.0120855 96.6778122,51.1324394 101.263585,38.8960843 C101.64142,39.8180234 102.034942,40.738913 102.444252,41.6582378 C114.38223,68.4713761 136.296003,86.1944823 157,88.1510343 L157,88.1510343 L157,74 C157,33.1309285 123.869071,-7.50752664e-15 83,0 C46.9151011,6.62868839e-15 16.8627142,25.8282542 10.3212729,60.0063288 C10.214595,60.0021202 10.1074956,60 10,60 C4.4771525,60 0,65.5964406 0,72.5 C0,78.9816827 3.9466744,84.3111215 8.99999442,84.9382803 L8.99999434,85.0927525 C9.31629342,85.0638362 9.63387297,85.0328725 9.95270131,84.9998631 C9.96845895,84.9999543 9.98422521,85 10,85 C10.6492988,85 11.2841443,84.9226474 11.8989604,84.7749122 Z'\r\n          id='Combined-Shape' fill='#FFFFFF' />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairNotTooLongComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairShavedSidesComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairShavedSides;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.mask3 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.path4 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairShavedSidesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-shaved-sides]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'\r\n      [attr.id]=\"path3\" />\r\n    <rect [attr.id]=\"path4\" x='0' y='0' width='112' height='150' rx='56' />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Shaved-Sides' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Behind' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(1.000000, 0.000000)'>\r\n        <mask [attr.id]=\"mask3\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <g id='Mask-Hair' />\r\n        <path\r\n          d='M116.179148,40 L146,40 C171.405098,40 192,60.5949015 192,86 L192,154.108712 C192,180.650314 210.758775,204.349179 222.609956,226.05167 C234.461138,247.754161 215.254522,268.242596 195.770735,276.769484 C190.902336,278.900091 185.645645,280 180.331438,280 L135.26309,280 C78.9108161,280 70.2166412,216.309596 67.6972794,146.504423 L70.2166412,84.1431398 C71.212998,59.4805095 91.4964003,40 116.179148,40 Z'\r\n          id='Hair' [attr.fill]=\"color\" [attr.mask]=\"urlFix(mask3)\" />\r\n      </g>\r\n      <g id='Top' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(77.000000, 36.000000)'>\r\n        <mask [attr.id]=\"mask1\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path4\" />\r\n        </mask>\r\n        <g id='Mask' />\r\n        <path\r\n          d='M98.8014742,19.9396383 C107.026909,29.4843994 112,41.9114359 112,55.5 L112,65.5 L112,61.5 C112,45.7605792 105.327989,31.5794902 94.657974,21.6307409 C63.9198041,32.6768506 38.0141969,32.8027026 16.9411526,22.0082968 C6.50516181,31.936614 -1.90326939e-15,45.958626 0,61.5 L0,61.5 L0,65.5 L0,55.5 C-1.66642407e-15,41.8926148 4.98687681,29.4499771 13.2327229,19.8999944 C9.3991564,16.860899 8.25944611,8.18718262 19.4671989,4.87682391 C31.3115751,1.37843003 29.3063159,-13.2020165 47.4575903,-15.9260752 C65.6088648,-18.6501339 63.9714902,-11.3745857 81.028596,-12.3495122 C98.0857017,-13.3244386 103.635746,-29.1131795 106.849606,-25.0739991 C119.588767,-9.06341321 116.420993,9.34036319 98.8014742,19.9396383 Z'\r\n          id='Shadow' fill-opacity='0.16' fill='#000000' [attr.mask]=\"urlFix(mask1)\" />\r\n      </g>\r\n      <path\r\n        d='M90.8779151,52.3613196 C113.02785,65.2272934 140.816672,65.2272934 174.244382,52.3613196 C188.77455,44.5891967 199.330608,29.0424257 182.951044,8.96303524 C180.782417,6.30455678 172.244382,15.6755614 155.351199,16.6504878 C138.458015,17.6254143 142.079654,13.3498661 124.102817,16.0739248 C106.12598,18.7979835 108.111968,33.37843 96.3814191,36.8768239 C84.6508698,40.3752178 86.5778198,49.8635735 90.8779151,52.3613196 Z'\r\n        id='Copet\u00F3n' [attr.fill]='color' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairShavedSidesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairStraightComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairStraight;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairStraightComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-straight]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M133.506381,81.3351151 C137.363649,83.3307002 140,87.3574737 140,92 L140,105 C140,111.018625 135.569129,116.002364 129.791419,116.867187 C128.048193,137.114792 115.530782,154.282984 98,162.610951 L98,162.610951 L98,181 L102,181 C119.490913,181 135.525121,187.236892 148,197.608051 L148,74 C148,53.5654643 139.717268,35.0654643 126.325902,21.6740982 C112.934536,8.28273213 94.4345357,-3.55271368e-15 74,0 C33.1309285,7.10542736e-15 -7.10542736e-15,33.1309285 0,74 L0,257.716445 C13.5691766,255.775526 24,244.105888 24,230 L24,184.423101 C30.9346808,182.200199 38.3271796,181 46,181 L50,181 L50,162.610951 C38.7726252,157.277407 29.6015372,148.317951 24,137.245847 L24,75.2659587 C33.1467898,72.2910056 42.777598,68.0170651 52.3415164,62.4953343 C67.7445474,53.6023901 80.4313947,42.9409152 89.0661426,32.3970356 C90.8310687,37.5951441 93.1752556,42.8009742 96.1104311,47.8848473 C104.877881,63.0705152 117.224186,74.2337047 130,79.9170491 L130,80.1659169 C130.400422,80.233095 130.794121,80.3201038 131.18005,80.4258987 C131.954509,80.7493055 132.730185,81.0524853 133.506381,81.3351151 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Straight' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(59.000000, 18.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Mask-Hair' [attr.fill]='color' [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <path\r\n        d='M192.506381,99.3351151 C197.3745,101.107702 202.263079,102.071957 207,102.148232 L207,102.148232 L207,92 C207,71.5654643 198.717268,53.0654643 185.325902,39.6740982 C198.717268,53.0654643 207,71.5654643 207,92 L207,215.608051 C194.525121,205.236892 178.490913,199 161,199 L157,199 L157,180.610951 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,105.357474 196.363649,101.3307 192.506381,99.3351151 Z M190.18005,98.4258987 C189.794121,98.3201038 189.400422,98.233095 189,98.1659169 L189,97.9170491 C189.392974,98.0918644 189.786355,98.2614951 190.18005,98.4258987 Z M83,155.245847 C88.6015372,166.317951 97.7726252,175.277407 109,180.610951 L109,199 L105,199 C97.3271796,199 89.9346808,200.200199 83,202.423101 L83,155.245847 Z'\r\n        id='Shadow' fill-opacity='0.24' fill='#000000' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairStraightComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairStraight2Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairStraight2;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairStraight2Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-straight2]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M21,157.540812 L21,69.046252 C21,65.5140485 21.3981158,62.0748299 22.1519234,58.7710202 C25.205041,38.7314193 36.7752683,22.8108863 50,13 C69.9046441,-1.75961713 103.441939,-6.01828252 115.047069,11.5221046 C123.698343,7.68103538 136.519049,11.1821114 146,20 C155.565156,29.4150438 163.19967,50.1973768 158.657409,67.2035172 C158.762104,68.4691962 158.815476,69.7490355 158.815476,71.0408963 L158.815476,92.8921195 C157.934142,87.9183006 153.988995,84.0029116 149,83.1659169 L149,83 C142.963851,61.4642087 125.229516,51.5800472 114.429684,41.777113 C97.5353566,60.6732583 44.8226408,60.7398069 27,98 L27,108 C27,114.018625 31.4308707,119.002364 37.2085808,119.867187 C38.9518066,140.114792 51.4692178,157.282984 69,165.610951 L69,166 C71.9303712,209.855112 62.358462,264.797432 0,248 C13.6057325,240.037752 20.8081123,189.055563 21,157.540812 Z M117,165.610951 C134.530782,157.282984 147.048193,140.114792 148.791419,119.867187 C153.87876,119.105701 157.921895,115.150816 158.815476,110.107881 L158.815476,111.47039 L158.815476,111.47039 C158.815476,127.298552 162.572711,142.900645 169.7782,156.993609 L196.726668,209.701177 C203.689761,223.320048 201.645562,239.173573 192.790715,250.468968 C189.966212,213.288807 158.90349,184 121,184 L121,184 L117,184 L117,165.610951 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Straight' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(40.000000, 15.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <path\r\n        d='M67,113 C84.8226408,80.6646674 137.535357,80.6069148 154.429684,64.2083647 C165.207546,72.6982916 182.891727,79.2665518 188.963018,97.8687161 C182.891727,76.423995 165.207546,66.5601054 154.429684,56.777113 C137.535357,75.6732583 84.8226408,75.7398069 67,113 Z'\r\n        id='Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairStraight2Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopLongHairStraightStrandComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.LongHairStraightStrand;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopLongHairStraightStrandComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-long-hair-straight-strand]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M8.46130289,88.6935361 C8.16088005,89.7438903 8,90.8531574 8,92 L8,105 C8,111.018625 12.4308707,116.002364 18.2085808,116.867187 C19.9518066,137.114792 32.4692178,154.282984 50,162.610951 L50,181 L46,181 L46,181 C30.3810228,181 15.9236322,185.973344 4.12503673,194.422823 C1.45272918,186.776619 1.52589027e-14,178.557961 1.42108547e-14,170 L0,74 L0,74 C-5.00501776e-15,33.1309285 33.1309285,7.50752664e-15 74,0 L74,0 L74,0 C114.869071,-7.50752664e-15 148,33.1309285 148,74 L148,170 C148,178.557961 146.547271,186.776619 143.874963,194.422823 C132.076368,185.973344 117.618977,181 102,181 L102,181 L98,181 L98,162.610951 C115.530782,154.282984 128.048193,137.114792 129.791419,116.867187 C135.569129,116.002364 140,111.018625 140,105 L140,92 C140,90.3107559 139.650957,88.7030352 139.021057,87.2450254 C126.064756,85.0568849 111.478699,79.7686298 97.1489304,71.4953343 C85.0171781,64.4910638 74.6464677,56.2579416 66.6695083,47.752196 C70.0963393,55.6604321 74.2459335,62.5880409 79.118291,68.5350224 C66.4431108,63.0120855 57.8126345,54.1324394 53.2268621,41.8960843 C52.8490267,42.8180234 52.455505,43.738913 52.0461952,44.6582378 C42.206947,66.7575512 25.5911314,82.6819966 8.46130289,88.6935361 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/LongHair/Straight-+-Strand' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Hair' stroke-width='1' fill='none' fill-rule='evenodd' transform='translate(59.000000, 18.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n      <path\r\n        d='M59,102.418954 L59,108.837908 C78.9453743,105.750496 99.5895621,88.3902571 111.046195,62.6582378 C111.455505,61.738913 111.849027,60.8180234 112.226862,59.8960843 C116.231662,70.5822127 123.321236,78.70828 133.495584,84.2742862 C134.956498,86.4697241 136.497401,88.5566361 138.118291,90.5350224 C125.443111,85.0120855 116.812635,76.1324394 112.226862,63.8960843 C111.849027,64.8180234 111.455505,65.738913 111.046195,66.6582378 C99.5895621,92.3902571 78.9453743,109.750496 59,112.837908 L59,102.418954 Z M207,101.140388 L207,110.280776 C192.046922,109.412723 173.901259,103.744646 156.14893,93.4953343 C145.87623,87.5643877 136.866205,80.7523483 129.502994,73.639773 C128.137922,71.1289501 126.860094,68.4997578 125.669508,65.752196 C133.646468,74.2579416 144.017178,82.4910638 156.14893,89.4953343 C173.901259,99.7446457 192.046922,105.412723 207,106.280776 L207,101.140388 Z'\r\n        id='Shadow' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>   </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopLongHairStraightStrandComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopNoHairComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.NoHair;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopNoHairComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-no-hair]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/No-Hair' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>  </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopNoHairComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairDreads1Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairDreads01;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopShortHairDreads1Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-dreads1]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M185.831676,73.928751 C187.588868,74.9173665 188.980206,84.8279256 189.047535,88.6176558 C189.08965,90.9562115 189.127358,99.8740101 186.654049,99.1031293 C185.901013,98.868423 184.751682,94.1472484 184.58821,91.3840965 C184.424737,88.6209446 182.855069,79.2200034 180.446757,74.8947261 C179.896491,73.9063366 178.320781,72.1708928 179.001547,71.3348066 C179.846064,70.2980597 180.666198,70.8995898 181.697184,71.3146953 C182.8124,71.7641482 185.6344,73.8180261 185.831676,73.928751 Z M186.636742,70.9565876 C185.890663,71.9188016 180.795829,69.217693 178.671174,68.0439722 C160.825581,58.1840558 157.361562,55.0486831 129.245707,55.4578453 C101.129853,55.8670074 81.8674779,69.0400225 80.7839818,70.3874406 C80.0301584,71.3248831 79.0677773,73.8279219 78.2764086,80.8005402 C77.48504,87.7731584 78.4952061,100.277789 75.6304859,100.262618 C73.1915094,100.249702 72.6608912,76.4770353 73.7137309,67.0463924 C73.8753757,65.5984852 74.4983655,63.0083957 74.0474223,61.7058802 C73.6532986,60.5682485 71.7253768,60.5705662 72.0331217,58.6750651 C72.3829065,56.5173393 74.5584694,57.5890837 75.5060085,56.5574014 C77.3005851,54.602966 74.5321945,54.1404306 74.0730403,52.4306721 C73.3905494,49.8892108 75.3628102,49.2336489 77.1396512,48.4310821 C79.1060001,47.5437559 78.8504766,48.3231462 80.4463492,46.5849138 C78.3147968,45.0224912 77.543628,42.8939014 80.4624425,41.7519655 C81.7019616,41.2669159 84.9268789,41.9089031 85.8980654,41.1801698 C86.1512899,40.9901231 86.251463,39.9008308 86.4074703,39.6780059 C87.9583471,37.4593592 87.5757186,35.8532324 87.4183976,33.3624282 C87.2889936,31.3242265 87.3064008,29.4532263 89.7466834,29.2496048 C91.3750712,29.1138571 92.6993269,30.4441843 94.1582415,30.835866 C95.7767762,31.2705896 95.1688403,31.5877757 96.4369334,30.7150174 C98.6630755,29.1817309 97.1479982,26.1942888 98.913344,24.4120212 C101.335891,21.9662454 102.923881,25.5513084 104.868882,25.8218105 C109.09126,26.4101607 107.736132,22.1218586 110.235861,20.5504965 C113.223647,18.6738677 113.512672,22.8012592 115.378847,22.948264 C116.996068,23.0750722 119.907657,19.9545311 121.317306,19.3731338 C125.499944,17.6471518 127.572378,22.5039387 131.554013,21.8844657 C134.443268,21.434843 135.223305,21.067662 137.830761,22.7115333 C140.361692,24.3070651 140.96306,23.1664535 143.828996,23.1436082 C145.853806,23.128378 147.093982,24.8202575 148.787729,24.9967295 C149.632467,25.085131 150.441078,24.2050888 151.347562,24.2603811 C154.58496,24.4567186 154.789576,28.6430444 157.361562,29.7955753 C159.711524,30.8487786 162.474332,29.3691289 164.806559,29.0953159 C170.497048,28.4275036 166.60015,33.7425217 166.760755,36.914713 C168.994451,37.4358517 171.261648,35.3509661 173.485163,35.7347015 C176.986623,36.3392753 175.664995,39.9680424 174.853429,42.4144804 C177.279589,42.3707762 183.612828,39.6776748 185.184725,43.1220237 C185.995306,44.8980006 184.106797,47.2689496 184.13767,49.0743937 C184.181023,51.615855 186.048513,53.7186196 186.709327,56.1240021 C187.601032,59.3710203 188.871834,68.0740038 186.636742,70.9565876 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Dreads-01' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g id='Hair' stroke-width='1' fill-rule='evenodd' transform='translate(1.000000, 0.000000)'>\r\n        <mask [attr.id]=\"mask1\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <use id='Dreads-With-Cut' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path3\" />\r\n        <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>   </g>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairDreads1Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairDreads2Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairDreads02;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopShortHairDreads2Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-dreads2]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M153.503392,98.8736491 C157.89934,100.654655 161,104.965228 161,110 L161,123 C161,128.28759 157.580126,132.776426 152.8316,134.375285 C151.985668,145.321578 147.992514,155.385777 141.755762,163.66426 C141.964657,164.471736 142.166135,165.290125 142.311896,166.167999 C142.862922,169.494538 142.191903,172.260864 143.956619,175.261034 C144.414366,176.040649 145.140008,176.50834 145.478876,177.405464 C146.012313,178.819858 145.247,181.999219 147.428222,182 C150.534993,182.00039 148.803043,176.034013 148.024863,174.616105 C146.500469,171.843533 145.563369,171.165421 145.642135,167.571852 C147.387236,168.73171 153.172487,170.947581 155.089787,169.887664 C159.522305,167.44029 148.428013,164.951924 147.651918,164.434653 C149.356221,162.768846 151.308063,161.884996 152.848916,159.689035 C154.108583,157.895569 155.254913,155.292428 157.398137,155.187802 C158.584855,155.129634 162.056295,158.072417 163.10825,156.053694 C164.07308,154.203231 161.993578,153.931908 161.181077,153.276828 C159.678802,152.06661 159.340419,153.270972 159.706723,151.14333 C160.792178,152.307873 162.495834,151.571982 162.95061,150.127527 C163.441226,148.569468 161.823998,148.10412 161.853937,147.113692 C161.842192,147.500572 162.687735,141.999153 162.554381,142.176001 C163.413669,141.041128 166.462257,141.392482 167.966582,141.555666 C170.263178,141.804346 170.13091,141.873446 171.222117,143.992109 C172.103838,145.707106 174.419542,149.169502 174.928748,144.633135 C175.050449,143.548232 174.059985,141.228907 173.478827,140.295477 C172.851533,139.287873 170.962455,138.651922 170.567003,137.868403 C169.622984,135.99803 172.731819,131.833707 172.206,129.014288 C173.298856,129.431618 176.063377,135.941423 177.404406,130.612948 C178.111059,127.812658 170.89879,121.667871 173.890225,120.718825 C176.178665,119.993084 178.501504,122.944066 179.140297,124.762907 C179.612624,126.110544 179.400215,129.001405 180.207508,130.116368 C183.243976,134.318949 183.618438,127.375418 183.364612,125.543693 C182.806036,121.517569 181.381252,118.556438 177.742225,117.034295 C179.037272,115.426656 177.396605,114.146948 176.467109,113.140514 C177.994834,111.484467 187.90383,113.244749 185.67495,108.813788 C185.137049,107.742159 183.193837,107.552037 182.208315,107.158911 C179.717195,106.166532 177.22313,104.1482 175.950562,101.597371 C177.79234,101.136708 183.230278,102.394554 182.515816,98.6011044 C181.952817,95.619282 177.112955,96.5335826 175.237767,96.9915137 C176.930155,95.9749301 180.211017,96.8166176 180.67198,94.0499017 C181.203002,90.8666365 177.383839,90.9736042 175.591269,91.6482034 C175.17003,88.2904324 181.122531,85.8176826 182.804663,83.2477249 C183.373237,82.3806618 184.275583,82.0835727 183.551013,80.6153042 C182.244616,77.9719526 178.870779,81.7013778 177.758771,82.7050785 C178.635221,81.0771393 181.079608,74.3018671 180.708517,72.5829664 C180.162561,70.057123 178.355898,69.967723 176.919931,72.0153348 C175.988608,73.3450137 175.729666,76.7176196 175.238294,78.4419859 C173.199533,76.9046179 173.095791,78.6883239 172.991008,76.2507095 C172.923099,74.6707886 174.992708,71.5499862 175.522623,70.0032488 C175.978715,68.6739603 177.190719,66.2433729 176.465593,64.9570277 C174.690293,61.8139729 172.993447,66.1289878 172.525841,67.608968 C171.737261,64.1977131 174.740084,61.5524095 175.629329,58.1778516 C176.170088,56.1298495 177.605245,50.5995409 175.118415,49.6165311 C171.724815,48.2755308 172.918922,54.5725714 172.440664,56.6162793 C172.07606,58.1758997 171.519076,60.6935447 170.302082,61.4622287 C170.125896,61.5734908 167.481496,61.8046035 167.354151,61.6554733 C165.620359,59.6336275 170.392027,55.207741 170.637754,53.3037939 C170.861461,51.5731813 170.198398,50.4792998 168.576831,50.3754553 C167.767833,50.323533 166.456472,51.5751333 166.081721,51.4935411 C164.602506,51.1718572 166.529338,44.4051737 166.669221,42.5269926 C166.819045,40.5238856 166.575417,35.355081 163.186097,37.7423348 C163.413049,35.0454993 163.549887,32.5063826 163.920134,29.8505384 C164.114962,28.45176 165.31836,27.2060156 163.546466,26.0840259 C161.389659,24.7192116 160.195301,27.5757179 159.703512,29.2516754 C158.858129,32.1374612 160.604934,36.6265913 156.546177,36.7183337 C151.880955,36.8237399 155.102123,31.9875502 155.331481,28.8503513 C155.459059,27.1091981 154.318536,22.4287754 152.06891,25.5866651 C151.173373,26.8456828 151.481865,31.2813291 150.985494,32.7702884 C149.878539,32.2772219 151.717562,28.2546115 150.755804,27.2056252 C148.695236,24.958913 146.966535,28.2315783 145.655991,28.8975889 C145.57044,27.4527441 145.468923,26.0067281 145.407913,24.5603216 C145.315305,22.3600662 146.663012,17.7307849 145.2945,16.2125461 C142.95772,13.6238495 141.471891,16.6443209 140.789049,18.7364375 C140.175628,20.6196938 140.091904,22.4795265 137.555716,22.7360147 C137.763741,20.0192692 135.29832,14.3004008 136.520803,12.0087933 C137.073558,10.9742516 138.200031,11.7078002 138.699701,10.5498943 C139.521287,8.64672801 138.176249,7.83939509 136.714154,7.77771298 C129.921887,7.49233563 135.152043,16.9117402 132.745372,19.2693241 C131.646423,18.2285361 132.817064,17.1557359 131.680174,15.6730229 C130.456777,14.0782671 128.507084,14.2133431 126.762486,14.9351799 C126.706116,13.3220757 129.125524,2.01512054 123.682122,7.11833905 C122.329503,8.38945896 122.708203,10.5112454 121.988704,12.004499 C121.293397,13.448563 119.599928,15.6019713 118.647561,16.7751026 C118.138071,14.7079712 118.919891,12.1450405 119.467423,10.1091405 C119.848493,8.69357518 122.399415,4.30399525 121.855094,2.8653967 C120.275192,-1.30204956 115.532497,5.5840942 114.282756,6.69671451 C112.701004,8.10642397 106.402711,12.7415612 104.381766,11.3369268 C103.680648,10.8501066 104.312204,9.04610014 103.355021,8.20948774 C102.885296,7.799575 100.877713,7.60828238 100.304676,7.66059506 C100.663044,6.16656069 99.9590183,4.23411488 98.2500992,4.75060494 C96.1010516,5.40060944 97.031157,8.58855944 95.6691727,9.75271164 C93.1402627,11.9174413 90.1353523,7.6410754 87.4245062,7.76092608 C87.8388134,6.00571874 90.9097688,-0.301081675 86.0261697,1.61691959 C84.7804466,2.10647253 83.8958015,4.9680539 83.5854252,6.15758165 C82.7941498,9.19327834 83.364323,9.74958849 80.0771587,10.6065013 C80.3338947,8.84621888 79.876509,6.65923677 80.7256589,5.08595261 C81.4218191,3.79726501 85.0314735,0.441445987 81.1879964,0.0233349851 C76.4475113,-0.492764683 76.9137424,7.69455926 76.3331882,10.4628367 C72.1267344,7.91396017 69.3589223,11.5606221 66.8533479,14.7153886 C67.3001674,13.2963097 68.4061862,-0.841776108 63.8882057,3.47753307 C62.5963925,4.71468878 64.0256621,6.54407081 63.9388761,7.95573223 C63.8604755,9.23622158 63.4388415,10.377731 62.9428241,11.5742858 C62.1474037,13.4950198 61.2224184,15.460649 59.9693808,17.0979577 C58.3962141,19.1568908 58.9543722,19.318904 57.1484939,17.9212967 C54.7243438,16.0478003 53.5723002,11.2974971 53.6920659,8.39570525 C53.781581,6.23526987 54.8879763,1.84842269 51.3078111,2.86461591 C47.8009276,3.86128948 49.6590375,10.8387852 50.0116201,13.3177814 C50.3931233,16.0052474 50.6468605,18.7543956 50.1948883,21.4906608 C47.2109167,18.4409099 46.7758614,24.7926055 46.1779169,25.8763368 C45.1988562,27.6534061 43.310101,28.5232019 41.8428337,29.7357629 C41.0431153,26.9417195 44.2482173,24.5790605 43.6123112,22.3561622 C42.4186453,18.1910583 39.0417626,24.0719399 38.2998862,25.2263323 C37.6814572,26.1886512 35.6651905,31.6682087 34.9351609,32.1593232 C33.9115906,32.848367 27.3301947,29.6315279 26.6642795,29.0186108 C25.4417603,27.8938883 25.8867201,24.7465391 24.3487748,24.0297774 C19.6293173,21.8322547 22.4173261,29.7638712 23.3441752,31.4035222 C25.7628153,35.687696 26.8597232,40.8604044 26.2928172,45.9077967 C25.4350389,45.6056325 24.378271,44.5964663 23.8253733,43.8305151 C22.7491426,42.3411654 23.1404237,39.9656235 22.017351,38.8436337 C18.7294809,35.5639414 18.3438318,41.7216116 18.6111593,43.6353185 C19.1118632,47.2226407 20.9020846,48.3856217 22.3890054,51.3693961 C23.7571524,54.1197154 21.943774,57.4376663 21.5613192,60.4944442 C18.1321771,57.1944514 3.36588279,59.9510171 7.16521769,64.996067 C9.14262534,67.628878 11.4834592,62.6185731 13.763287,62.7450604 C17.8464603,62.9714884 19.9981829,68.0411331 19.730271,71.5921487 C19.2330959,69.6940575 17.308498,67.8307112 15.9842104,70.148475 C15.0865685,71.7213688 16.6185854,74.4088349 17.3583008,75.9707976 C16.4523462,75.5265303 11.9860935,73.4504198 11.1123314,73.8095815 C7.67255627,75.2239756 12.4125819,77.9610216 13.6493116,78.5079623 C17.8734551,80.3759933 20.5363542,82.427509 21.8496116,87.4998864 C19.4819334,86.7425238 19.8941915,85.6220957 18.2972545,84.4567723 C16.830792,83.3870952 16.5566308,83.9387206 15.2071591,83.5889284 C12.8451619,82.9775728 9.76564295,82.1620417 7.09694168,83.2707581 C5.12707484,84.0898028 1.809527,86.5809011 1.19123199,88.9213077 C0.433581882,91.7946008 2.03522104,92.5273687 4.0949367,91.063785 C6.54565844,89.3249741 6.99233616,85.9593953 10.6783285,86.1030599 C12.4468385,86.1721595 14.198865,87.0989527 15.3182307,88.4286316 C16.1532654,89.4217916 16.6409799,90.859219 17.4378821,91.9242113 C18.1406712,92.8638875 20.0019971,94.1826354 20.3954288,95.1781378 C21.8129983,98.7732678 19.1191629,101.97332 17.3124291,104.492136 C16.8931801,103.937778 13.8353612,102.734196 13.2017458,102.613565 C10.2619363,102.05257 9.16499332,103.411918 11.003339,106.125931 C11.5823428,106.981673 12.8005957,107.342006 13.4385893,108.120059 C14.1501828,108.989074 14.5506213,110.319534 15.2570206,111.263504 C16.6502186,113.127241 18.3720966,114.086046 20.0353361,115.585546 C19.4216552,115.995069 19.4893606,114.962089 18.9332619,115.176024 C18.5290809,115.331791 17.8260425,115.020647 17.3157029,115.190078 C16.4875948,115.464915 16.5976214,116.907417 16.0678004,117.11862 C12.7691062,118.433464 9.44069672,113.504361 6.48191847,113.343909 C4.86832034,113.256461 3.50714906,114.33785 4.28187338,116.365942 C4.82030298,117.777604 7.1521321,118.543555 8.31806645,119.133048 C11.5636759,120.776994 14.7956022,122.001266 18.2658233,120.739516 C21.0634173,123.177911 24.4247131,124.380712 27.9404633,124.415457 C25.9286815,125.412912 23.9404919,126.650458 23.2377959,129.136091 C22.0492883,127.906352 19.1297602,122.18397 17.6048295,126.674272 C16.5600021,129.760719 21.328009,133.54519 23.5253695,134.93577 C20.9696368,135.690791 18.8477815,135.842653 16.2480678,135.542832 C14.8906605,135.386674 11.9114372,133.569004 13.0097195,137.290621 C14.1918233,141.306595 21.2508358,139.501808 23.4900552,138.806518 C23.573221,137.609182 12.720439,150.91495 20.3316507,148.295803 C22.5082405,147.54781 22.7169752,143.295258 25.7496614,142.923213 C29.2527527,142.493 29.604919,146.000291 31.6318019,148.569078 C32.6420388,149.851129 37.301235,152.734182 37.0806939,153.833919 C36.8900419,154.785698 34.3317238,155.329905 33.7876434,156.661927 C33.1549566,158.211397 33.4406255,159.407952 34.3203529,160.740363 C35.8579788,163.072962 38.6803216,163.431343 40.9122645,164.344472 C44.0760798,165.639406 45.222862,167.210738 46.6413081,170.561482 C44.1404008,170.681333 37.0221866,177.920783 41.3837473,179.20908 C43.008912,179.689263 42.7562908,178.242857 43.4326768,177.443722 C43.7062927,176.928403 43.9803807,176.413865 44.2542196,175.898937 C44.712395,174.701211 45.2188422,174.627817 45.7732734,175.678365 C45.8972683,175.647914 47.3835007,176.067196 47.7210266,176.087887 C49.4285338,176.192512 50.5714284,174.896017 51.9872076,174.195261 C53.0103456,173.688921 54.0114437,173.77676 54.7822568,172.609485 C54.6931475,172.74417 55.3356677,170.098476 55.3468697,170.07271 C55.6226004,169.435623 56.3317095,169.525891 56.6573761,168.839152 C47.908417,159.753669 42.1996805,147.719969 41.1683996,134.375285 C36.4198742,132.776426 33,128.28759 33,123 L33,110 C33,104.965228 36.1006595,100.654655 40.4966083,98.8736491 C41.0282518,99.2483349 41.7670825,98.8748923 42,98.0318338 C41.5372601,96.526107 45.2959449,70.1780326 55,63.1563695 C58.618222,60.7183684 78.0082164,60.5372207 97.3126144,60.5504522 C116.408606,60.5635409 135.42084,60.7446886 139,63.1563695 C148.704055,70.1780326 152.46274,96.526107 152,98.0318338 C152.232917,98.8748923 152.971748,99.2483349 153.503392,98.8736491 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Dreads-02' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <g id='Hair' stroke-width='1' fill-rule='evenodd' transform='translate(36.000000, 0.000000)'>\r\n        <mask [attr.id]=\"mask1\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <use id='Dreads' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path3\" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairDreads2Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairFrizzleComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairFrizzle;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairFrizzleComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-frizzle]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Frizzle' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Hair-Maks' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairFrizzleComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairShaggyComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairShaggy;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairShaggyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-shaggy]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <path\r\n      d='M198.74696,37.856181 C193.606255,34.0244119 187.528383,30.7396605 181.187893,29.4782789 C174.741035,28.1960616 170.829392,27.8846292 164.483286,29.4052984 C162.85043,29.796545 162.299428,30.1854765 160.862131,29.2568033 C159.651446,28.4743102 151.200134,19.7668788 125.441738,24.5998777 C99.4069464,29.4847361 91.6728211,68.675365 82.0154166,70.1662691 C78.5349852,70.703365 74.2336661,69.781637 74.0992189,67.6388757 C70.1355043,73.6726057 69.0913088,81.6460323 70.7717335,88.7129442 C72.2186099,94.7989286 75.2686121,100.517478 80.7607964,103.849523 C85.4865987,106.716901 92.0203357,107.966046 97.4817987,107.437218 C99.9669245,107.196782 102.227091,106.673576 104.513684,105.671152 C107.272659,104.461694 109.470722,102.280238 112.177835,101.127995 C109.351471,103.576015 106.275372,105.735312 103.001731,107.546357 C101.362599,108.452872 99.6980301,109.07761 97.8887739,109.570058 C96.6533133,109.906073 94.127556,111.05104 92.9327267,110.752066 C100.740244,112.148383 108.093217,110.931649 115.252282,107.589351 C118.483309,106.08125 121.59079,104.256976 124.44325,102.112561 C127.276221,99.9826977 130.537639,97.8062025 132.753871,95.0036468 C131.823641,96.2071517 133.450882,94.4169423 133.665931,94.1980029 C134.274082,93.578226 134.869349,92.9458816 135.453055,92.302954 C136.455298,91.1993278 137.450603,90.0751967 138.383805,88.9120401 C140.37772,86.426318 142.234875,83.8298033 143.891185,81.1086057 C145.568637,78.352682 152.249704,67.2357231 154.266412,64.6190342 C152.361358,70.327001 150.286511,76.0372828 147.858864,81.5445 C152.572444,80.0744315 157.142657,76.0002417 160.15401,72.2035294 C163.545911,67.9275978 165.554691,62.9359795 166.262273,57.5379012 C170.087576,67.953725 179.047309,76.1675881 188.294435,81.8328914 C186.29094,78.1026546 183.238626,74.9478777 181.242068,71.1548033 C190.433037,80.4838679 205.809898,85.0481908 209.837367,98.7289227 C210.869671,93.9714569 214.189889,90.1482867 215.184533,85.2955724 C216.28885,79.9070851 217.081329,74.1868816 216.90592,68.6796644 C216.508524,56.4379129 208.273882,44.9574883 198.74696,37.856181 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Shaggy' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\" [accessoriesColor]=\"accessoriesColor\" />\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" transform='scale(-1, 1)' />\r\n      </mask>\r\n      <use id='Shaggy-Hair' stroke='none' [attr.fill]='color' fill-rule='evenodd'\r\n        transform='translate(143.465161, 67.234158) scale(-1, 1) translate(-143.465161, -67.234158) '\r\n        [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairShaggyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairShaggyMulletComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairShaggyMullet;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopShortHairShaggyMulletComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-shaggy-mullet]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z M195.90592,68.6796644 C196.081329,74.1868816 195.28885,79.9070851 194.184533,85.2955724 C193.189889,90.1482867 189.869671,93.9714569 188.837367,98.7289227 C184.809898,85.0481908 169.433037,80.4838679 160.242068,71.1548033 C162.238626,74.9478777 165.29094,78.1026546 167.294435,81.8328914 C158.047309,76.1675881 149.087576,67.953725 145.262273,57.5379012 C144.554691,62.9359795 142.545911,67.9275978 139.15401,72.2035294 C136.142657,76.0002417 131.572444,80.0744315 126.858864,81.5445 C129.286511,76.0372828 131.361358,70.327001 133.266412,64.6190342 C131.249704,67.2357231 124.568637,78.352682 122.891185,81.1086057 C121.234875,83.8298033 119.37772,86.426318 117.383805,88.9120401 C116.450603,90.0751967 115.455298,91.1993278 114.453055,92.302954 C113.869349,92.9458816 113.274082,93.578226 112.665931,94.1980029 C112.450882,94.4169423 110.823641,96.2071517 111.753871,95.0036468 C109.537639,97.8062025 106.276221,99.9826977 103.44325,102.112561 C100.59079,104.256976 97.4833088,106.08125 94.2522818,107.589351 C87.0932166,110.931649 79.7402436,112.148383 71.9327267,110.752066 C73.127556,111.05104 75.6533133,109.906073 76.8887739,109.570058 C78.6980301,109.07761 80.3625987,108.452872 82.0017312,107.546357 C85.2753717,105.735312 88.3514706,103.576015 91.1778346,101.127995 C88.4707222,102.280238 86.2726593,104.461694 83.513684,105.671152 C81.2270908,106.673576 78.9669245,107.196782 76.4817987,107.437218 C71.0203357,107.966046 64.4865987,106.716901 59.7607964,103.849523 C54.2686121,100.517478 51.2186099,94.7989286 49.7717335,88.7129442 C48.0913088,81.6460323 49.1355043,73.6726057 53.0992189,67.6388757 C53.2336661,69.781637 57.5349852,70.703365 61.0154166,70.1662691 C70.6728211,68.675365 76.4180436,32.1184491 101.441738,25.5998777 C121.403017,20.3995724 135.651446,29.4743102 136.862131,30.2568033 C138.299428,31.1854765 138.85043,30.796545 140.483286,30.4052984 C146.829392,28.8846292 153.741035,28.1960616 160.187893,29.4782789 C166.528383,30.7396605 172.606255,34.0244119 177.74696,37.856181 C187.273882,44.9574883 195.508524,56.4379129 195.90592,68.6796644 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Shaggy-Mullet' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path2\" />\r\n      </mask>\r\n      <use id='Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n      <path\r\n        d='M175.126419,166.897818 C175.841424,169.13759 176.874789,171.230601 178.55519,172.685954 C180.17619,174.090053 183.068114,173.745469 185.098621,173.802748 C186.770693,173.850632 188.444623,173.856087 190.114529,173.783655 C190.95366,173.747287 191.327571,174.79771 190.648775,175.281705 C190.518773,175.374442 190.388771,175.462634 190.25846,175.543856 C189.20761,176.198779 188.11838,176.802787 187.008721,177.356184 C184.485135,178.614206 181.821334,179.600077 179.02722,180.090436 C177.110792,180.426519 175.211229,180.489668 173.372596,180.266511 C173.858877,180.986862 174.419563,181.642356 175.071506,182.207788 C176.801481,183.708407 179.887821,183.340135 182.054832,183.401352 C183.839313,183.452528 185.625776,183.458358 187.407944,183.380946 C188.303488,183.342078 188.702535,184.464709 187.978106,184.981974 C187.839364,185.081086 187.700623,185.175341 187.561551,185.262145 C186.440057,185.962089 185.2776,186.607617 184.093342,187.199055 C181.400104,188.543555 178.557223,189.597195 175.57527,190.121262 C170.075488,191.087126 164.705859,189.943766 160.380755,186.413279 C159.16361,185.419765 158.027363,184.287616 157,183.053001 L157,180.610951 C163.949635,177.309539 170.111406,172.618864 175.126419,166.897818 Z M81.3150549,151.593977 C80.572738,153.13892 79.8051751,154.672522 79.0058562,156.190972 C74.2106831,165.300379 68.2421528,176.792949 56.4993303,177.596328 C55.4105393,177.670743 54.9804404,178.942941 55.8287461,179.588187 C66.9485528,188.041497 92.2609618,193.18734 101.273548,191.569729 C104.095212,191.063278 106.638877,190.402091 109,189.610443 L109,180.610951 C96.5625107,174.702544 86.6484598,164.344483 81.3150549,151.593977 Z'\r\n        id='Shadow' stroke='none' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' />\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairShaggyMulletComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairShortCurlyComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairShortCurly;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairShortCurlyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-short-curly]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M94.2519269,52.0221149 C94.3749353,51.9677149 94.0696712,51.9468149 93.3361345,51.9595149 C94.2276637,51.9577149 94.5329279,51.9785149 94.2519269,52.0221149 M86.1169775,36.3015924 C86.1148422,36.2819924 86.1337548,36.4526924 86.1169775,36.3015924 M193.765056,70.7656665 C193.500946,67.448734 193.03295,64.1518864 192.246676,60.9110823 C191.622233,58.3353492 190.769007,55.8775343 189.760006,53.4200433 C189.150703,51.9353766 187.727538,49.8961062 187.560324,48.2944933 C187.395466,46.7168527 188.626521,44.969138 188.889285,43.1323368 C189.144311,41.3447761 189.100909,39.4652134 188.734183,37.6938503 C187.901144,33.6710288 185.140271,29.9300447 180.877167,28.8814158 C179.925362,28.6471994 177.913417,28.9358396 177.240862,28.3815597 C176.469729,27.7459682 175.932761,25.5806808 175.234637,24.7121687 C173.244224,22.2362125 170.13984,20.6417265 166.865887,21.1976261 C164.454917,21.606776 165.839391,22.1053363 164.032005,20.6864317 C163.027041,19.8976114 162.276095,18.6931622 161.300066,17.8392279 C159.832826,16.5563826 158.149588,15.4581893 156.408146,14.556958 C151.851325,12.19892 146.654249,10.4848961 141.564162,9.64942693 C132.278934,8.12523827 122.368926,9.45408458 113.368668,11.8688141 C108.890239,13.0703477 104.381531,14.5951842 100.222053,16.6117782 C98.4385542,17.4764029 97.4090304,18.1936301 95.5494951,18.4200717 C92.6207355,18.7767416 90.1404579,18.7589243 87.3661268,20.0009517 C78.8298269,23.8229236 74.9849256,32.6897818 78.3066539,41.1750259 C78.974835,42.8815988 79.8795374,44.3801954 81.1267416,45.7586062 C82.6474761,47.4392631 83.1975648,47.1085093 81.8877817,49.0411999 C79.9289949,51.9311653 78.2777195,55.0129095 76.9332826,58.2128958 C73.4043038,66.6145606 72.8138416,76.0771643 73.043634,85.0373203 C73.1240445,88.1741362 73.2586228,91.3495022 73.753198,94.4561907 C73.966841,95.8009106 74.0267283,98.3293468 75.0353925,99.3271154 C75.5471264,99.8331265 76.2762042,100.115288 77.0035997,99.9137903 C78.7130802,99.4401742 78.1253096,98.1787097 78.1650102,97.0076274 C78.364859,91.1240324 78.0950295,85.9191145 79.4943071,80.1064647 C80.5278683,75.8118486 82.2504702,71.9114806 84.4827873,68.0713675 C87.3213795,63.1871608 90.3857268,58.8977279 94.2895061,54.7155226 C95.2073299,53.7320079 95.4078515,53.3150832 96.6385698,53.243814 C97.5705244,53.1900382 98.9338023,53.8282213 99.8398505,54.0491558 C101.837665,54.5360539 103.83918,55.0174448 105.873331,55.3452831 C109.613261,55.9481556 113.316519,55.9886494 117.090094,55.8704074 C124.516459,55.6381346 131.974787,55.1172217 139.175061,53.2470535 C143.956964,52.00535 148.196516,49.7762443 152.776887,48.1422364 C152.858644,48.1130808 154.006596,47.2951049 154.207791,47.3284719 C154.488723,47.3747968 156.184746,49.1542588 156.471061,49.3784327 C158.696649,51.1238798 161.137899,51.8566566 163.541467,53.2081794 C166.504881,54.8745825 163.634999,52.4899804 165.269452,54.5668292 C165.745859,55.1716454 165.989782,56.2931632 166.371984,56.9783192 C167.587899,59.1610999 169.279548,61.0795367 171.302932,62.6017816 C173.258018,64.0725184 176.196198,64.7829426 177.193087,66.697168 C177.961865,68.1740599 178.220929,70.1812592 178.841334,71.7579279 C180.468722,75.8931602 182.617937,79.7494709 184.767152,83.6443317 C186.498502,86.7830913 188.392354,89.5250111 188.584801,93.1117947 C188.651754,94.3603012 187.463764,101.849397 190.357534,99.5716982 C190.786502,99.2341415 191.711391,95.415733 191.901483,94.7678314 C192.672616,92.135083 192.94682,89.3866841 193.29605,86.6816947 C193.990474,81.3021672 194.218584,76.1837441 193.765056,70.7656665'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Short-Curly' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Short-Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairShortCurlyComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairShortFlatComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairShortCurly;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairShortFlatComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-short-flat]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M180.14998,39.9204083 C177.390206,37.1003988 174.185913,34.7068297 171.069252,32.3065503 C170.381566,31.777442 169.682843,31.2610833 169.010544,30.7118441 C168.857687,30.5870323 167.291999,29.4657388 167.104691,29.0530544 C166.653816,28.0602634 166.915042,28.8332916 166.977255,27.6485857 C167.055857,26.150508 170.11064,21.9193194 167.831176,20.9490079 C166.828413,20.522232 165.039628,21.6579526 164.077671,22.0330592 C162.196235,22.7671676 160.291721,23.3932399 158.346734,23.9330847 C159.278588,22.0763407 161.055333,18.3594977 157.71591,19.3543018 C155.114345,20.1293431 152.690052,22.1219709 150.075777,23.0594018 C150.940735,21.6415124 154.399901,17.2479341 151.274209,17.0023366 C150.301549,16.925839 147.471201,18.7503735 146.423952,19.1395717 C143.287223,20.3054888 140.083264,21.0590571 136.789999,21.6525844 C125.59203,23.6707114 112.497238,23.0953019 102.1368,28.1934632 C94.1494796,32.1236942 86.262502,38.2220278 81.648386,45.987539 C77.2011742,53.472559 75.537818,61.6641751 74.6069673,70.2412987 C73.9239644,76.535909 73.8684412,83.0425652 74.1878671,89.3599905 C74.2922241,91.4297869 74.5250203,100.970847 77.5319724,98.0813859 C79.0300967,96.641688 79.019059,90.8282073 79.3963495,88.8604076 C80.1472513,84.9452748 80.870057,81.0126951 82.122006,77.2227096 C84.3282191,70.5439339 86.9307879,63.4296587 92.4269209,58.8297383 C95.9539853,55.8782066 98.4307906,51.8889248 101.806002,48.9112229 C103.322188,47.5738572 102.165231,47.7130963 104.602902,47.888571 C106.240504,48.006337 107.885464,48.0512961 109.52641,48.0942421 C113.322394,48.1928837 117.124399,48.16772 120.921387,48.1811407 C128.56821,48.208653 136.179243,48.316689 143.818708,47.9164188 C147.213653,47.7385955 150.617965,47.6423024 154.00388,47.3282597 C155.895349,47.152785 159.251496,45.9405668 160.808488,46.8669256 C162.233362,47.7144383 163.71309,50.4817719 164.736257,51.615144 C167.153525,54.2935659 170.035717,56.3392052 172.862385,58.5354911 C178.756547,63.114945 181.732392,68.8666908 183.522515,76.023241 C185.305949,83.1532854 184.805905,89.76815 187.013456,96.78479 C187.401784,98.0184813 188.428965,100.14498 189.695296,98.2389151 C189.930434,97.8849461 189.869559,95.9390277 189.869559,94.819339 C189.869559,90.2995934 191.014141,86.9083772 190.999758,82.3591197 C190.943566,68.5271489 190.49637,50.4908308 180.14998,39.9204083 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Short-Flat' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Short-Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairShortFlatComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairShortRoundComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairShortRound;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairShortRoundComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-short-round]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M167.308863,35.006118 C147.121091,23.3065109 127.128954,25.2219854 112.036894,29.0299707 C96.9448338,32.8379559 88.0168242,43.6513048 80.3566792,59.6480618 C76.5956048,67.5028569 74.3660182,76.7914798 74.0230569,85.4813651 C73.8884429,88.8932666 74.3484305,92.415154 75.267729,95.7003546 C75.6049405,96.9061873 77.4232441,101.086987 77.9224658,97.70885 C78.0885348,96.584253 77.4804043,95.0327505 77.4215529,93.8376154 C77.3444374,92.2693977 77.4273028,90.6807875 77.5341822,89.1149098 C77.7340739,86.1874141 78.2559568,83.3154127 79.1847257,80.524647 C80.5119249,76.5367405 82.2013644,72.212859 84.7874413,68.8480942 C91.1883705,60.5205939 102.268658,60.045883 111.066257,55.4635848 C110.302881,56.8686624 107.359637,59.1432635 108.379389,60.7268592 C109.083576,61.8207003 111.749474,61.4890712 113.022219,61.4539693 C116.370996,61.3623702 119.734993,60.7796791 123.042844,60.306974 C128.255923,59.5618115 133.140585,58.0517626 138.046555,56.2181078 C142.06299,54.7164165 146.650012,53.3257139 149.66868,50.1404701 C154.539813,55.1881187 160.809849,59.9345599 167.070414,63.1428706 C172.68835,66.0222267 181.748751,67.461069 185.182761,73.3006826 C189.2479,80.2147477 187.37751,88.7073939 188.619138,96.2008069 C189.091302,99.05041 190.164155,98.986558 190.751315,96.4378281 C191.748406,92.1082634 192.219217,87.6102098 191.901961,83.1592929 C191.183568,73.1114668 187.496636,46.7057251 167.308863,35.006118 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Short-Round' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Short-Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairShortRoundComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairShortWavedComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairShortWaved;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairShortWavedComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-short-waved]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M183.679824,38.9488198 C189.086072,33.9985622 190.387393,23.9615454 187.317704,17.4493246 C183.549263,9.45385312 175.901319,8.45217737 168.572342,11.9686703 C161.664469,15.2835661 155.515175,16.3878671 147.950196,14.7817319 C140.691624,13.2406923 133.805566,10.5226172 126.303388,10.0762471 C113.978028,9.34292483 102.003367,13.914565 93.6031232,23.1292512 C92.0003538,24.8871655 90.7089493,26.8971594 89.4882796,28.9343872 C88.5115454,30.5644351 87.4105298,32.3133822 86.9950459,34.1921885 C86.7973853,35.0855929 87.165272,37.2898774 86.7203704,38.0218712 C86.2391099,38.8123183 84.4244668,39.5373375 83.6510124,40.1238625 C82.0842713,41.3125222 80.7267597,42.6539573 79.4713836,44.1710842 C76.8052796,47.3926541 75.3376994,50.7577001 74.1034777,54.7428152 C70.0005333,67.9877849 69.6528094,83.7412616 74.9569218,96.7467724 C75.6639385,98.4811062 77.8550622,102.098564 79.1431613,98.3847912 C79.3976741,97.6508047 78.8086588,95.1907873 78.8099809,94.4501584 C78.8146084,91.7300906 80.3160587,73.7213568 86.857084,63.6330196 C88.9862338,60.3491948 98.8298903,48.0522456 100.840541,47.9536058 C101.9058,49.6464245 112.720532,60.4624529 140.783385,59.1948919 C153.445253,58.6229725 163.18265,52.9341181 165.520833,50.4680909 C166.549375,56.0008881 178.51323,64.2839965 180.33625,67.6921976 C185.602529,77.5376948 186.770677,97.9957204 188.780988,97.9573368 C190.791299,97.9189532 192.234429,92.7197798 192.647929,91.7270713 C195.719601,84.351669 196.242509,75.0948338 195.914948,67.1684434 C195.487565,56.9663626 191.276535,45.9419513 183.679824,38.9488198 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Short-Waved' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n      <mask [attr.id]=\"mask1\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Short-Hair' stroke='none' [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairShortWavedComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairSidesComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairSides;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopShortHairSidesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-sides]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M6,28 C0.923687084,28.0709555 0,26.9937684 0,23 C1.30010922e-16,17.3439836 4.0408529,6.77808536 8,2 C9.17612094,-0.170695788 11.6189856,-1.43187215 11,3 C8.3404922,11.4766099 11.4173429,27.914487 6,28 Z M120,28 C114.582657,27.914487 117.659508,11.4766099 115,3 C114.381014,-1.43187215 116.823879,-0.170695788 118,2 C121.959147,6.77808536 126,17.3439836 126,23 C126,26.9937684 125.076313,28.0709555 120,28 Z'\r\n      [attr.id]=\"path3\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask2\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/Sides' [attr.mask]=\"urlFix(mask2)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>   <g id='Hair' stroke-width='1' fill-rule='evenodd' transform='translate(70.000000, 74.000000)'>\r\n        <mask [attr.id]=\"mask1\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <use id='Sides' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path3\" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairSidesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairTheCaesarComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairTheCaesar;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairTheCaesarComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-the-caesar]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z'\r\n      [attr.id]=\"path2\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/The-Caesar' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>    <g id='Hair' stroke-width='1' fill-rule='evenodd' transform='translate(75.000000, 34.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Caesar' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairTheCaesarComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopShortHairTheCaesarSidePartComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.ShortHairTheCaesarSidePart;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopShortHairTheCaesarSidePartComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-short-hair-the-caesar-side-part]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z'\r\n      [attr.id]=\"path2\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Short-Hair/The-Caesar-+-Side-Part' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>     <g id='Hair' stroke-width='1' fill-rule='evenodd' transform='translate(75.000000, 34.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path2\" />\r\n        </mask>\r\n        <use id='Caesar' [attr.fill]=\"color\" [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopShortHairTheCaesarSidePartComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopHatComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.Hat;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopHatComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-hat]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path2\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,84.0546578 186.345324,76.495786 183.361772,69.6491845 C173.434911,53 89.3126235,53.8033992 80.7098777,69.4854816 C77.6811789,76.3752214 76,83.9912805 76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path2\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accesories/Hat' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <g id='Hat' stroke-width='1' fill-rule='evenodd' transform='translate(1.000000, 0.000000)'>\r\n        <mask [attr.id]=\"mask2\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path1\" />\r\n        </mask>\r\n        <g id='Mask-Hair' />\r\n        <path\r\n          d='M123.182388,2 L141.817612,2 L141.817612,2 C160.609055,2 176.866947,15.0804442 180.890118,33.4361631 L190,75 L75,75 L84.1098821,33.4361631 L84.1098821,33.4361631 C88.1330533,15.0804442 104.390945,2 123.182388,2 Z'\r\n          [attr.fill]=\"color2\" [attr.mask]=\"urlFix(mask2)\" fill-opacity='0.8' />\r\n        <ellipse id='Hipster' [attr.fill]=\"color2\" [attr.mask]=\"urlFix(mask2)\" cx='132' cy='87.5' rx='122'\r\n          ry='57.5' />\r\n        <ellipse id='Very' [attr.fill]=\"color2\" [attr.mask]=\"urlFix(mask2)\" cx='132' cy='82' rx='62' ry='25' />\r\n      </g>\r\n      <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n      <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopHatComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopHijabComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.Hijab;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopHijabComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-hijab]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M66.0421575,77.0749852 C71.6795257,45.2058307 99.5129755,21 133,21 L133,21 L133,21 C170.555363,21 201,51.444637 201,89 L201,119.751022 C201.875211,129.554379 202.693946,136.422143 203.456205,140.354314 C204.833317,147.458254 209.150269,145.115419 209.150269,155.220201 C209.150269,165.324983 204.822005,168.720206 204.803237,177.705482 C204.784469,186.690758 220.200444,193.836185 220.200444,205.242606 C220.200444,216.649027 213.126079,270.475928 142.577598,270.475928 C127.507235,270.475928 114.670509,266.188589 104.06742,257.613911 C104.750275,264.103957 105.394468,271.565987 106,280 L59,280 C59.9324304,256.228591 51.7156549,242.936205 51.7156549,216.44564 C51.7156549,189.955074 65.3525844,151.427541 65,142 C65.019981,141.417741 65.0406721,140.728417 65.0620734,139.932027 C65.0208303,138.959828 65,137.982347 65,137 L65,89 L65,89 C65,85.0240875 65.3412247,81.1278723 65.9959868,77.3390417 C65.9973236,77.2261704 65.9986613,77.1131564 66,77 C66.0140661,77.0249783 66.0281186,77.0499734 66.0421575,77.0749852 Z M132.5,53 L132.5,53 C102.400481,53 78,77.4004811 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,107.5 C188,77.4004811 163.599519,53 133.5,53 L133.5,53 L132.5,53 Z'\r\n      [attr.id]=\"path2\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accesories/Hijab' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform='translate(-1.000000, 0.000000)'>\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path2\" />\r\n      </mask>\r\n      <use id='Hijab-Mask' stroke='none' [attr.fill]=\"color2\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n      <path\r\n        d='M72.0744416,104.959767 C71.3690172,101.246903 71,97.4161983 71,93.5 C71,59.5344879 98.7583455,32 133,32 C167.241654,32 195,59.5344879 195,93.5 C195,97.4161983 194.630983,101.246903 193.925558,104.959767 C192.341315,72.6827942 165.669927,47 133,47 C100.330073,47 73.6586845,72.6827942 72.0744428,104.959774 Z'\r\n        id='Band' stroke='none' fill-opacity='0.5' fill='#FFFFFF' fill-rule='evenodd'\r\n        [attr.mask]=\"urlFix(mask2)\" />\r\n      <path\r\n        d='M187.929085,104.69543 C188.631457,108.187732 189,111.800827 189,115.5 L189,138.5 C189,168.599519 164.599519,193 134.5,193 L131.5,193 C101.400481,193 77,168.599519 77,138.5 L77,115.5 L77,115.5 C77,111.800827 77.3685433,108.187732 78.0709154,104.69543 C78.0238287,105.624341 78,106.559388 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,130.5 L188,107.5 C188,106.559388 187.976171,105.624341 187.929085,104.69543 Z M114.16682,206.995462 C120.651206,211.981028 135.663493,213.708321 152.404574,210.756416 C169.145655,207.804512 182.661822,201.046883 187.049987,194.144193 C187.118291,194.396526 187.175421,194.652296 187.221114,194.911435 C188.930607,204.606451 173.985409,215.345413 153.84008,218.897578 C133.694752,222.449742 115.977919,217.469978 114.268426,207.774963 C114.222732,207.515823 114.188938,207.255938 114.166824,206.995464 Z M126.034638,235.921439 C134.227056,241.574977 150.421729,241.843835 167.103682,235.772101 C183.785635,229.700366 196.018656,219.084674 198.660388,209.487828 C198.803116,209.80837 198.935124,210.134883 199.056117,210.46731 C203.582768,222.904181 190.979008,238.909268 170.904831,246.215671 C150.830654,253.522074 130.887742,249.363007 126.361091,236.926135 C126.240098,236.593709 126.131343,236.258733 126.034643,235.921442 Z'\r\n        id='Shadows' stroke='none' fill-opacity='0.16' fill='#000000' fill-rule='evenodd' opacity='0.899999976'\r\n        [attr.mask]=\"urlFix(mask2)\" />\r\n        <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopHijabComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopTurbanComponent extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.Turban;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.mask3 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopTurbanComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-turban]',
                template: "<svg:g id='Top' stroke-width='1' fill-rule='evenodd'>\r\n  <defs>\r\n    <rect [attr.id]=\"path1\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M83.9715543,55.8170792 C107.404232,69.414362 145.114919,82.1112884 139,138 C158.377483,132.360101 168.044149,116.801277 168,91.3235294 C167.918252,44.1482824 115.850571,6.80154462e-15 86,0 C85.3259486,0 84.6559706,0.0296343787 83.9916946,0.0880669528 C83.3328225,0.0296343217 82.6684563,0 82.0002187,0 C52.0737254,6.80154462e-15 0.0804892181,44.1482783 0.00021866091,91.3235294 C-0.0442202163,117.440393 9.62244645,132.999216 29.0002187,138 C22.8618971,82.1112789 60.5101967,69.4143577 83.9715662,55.8170722 Z'\r\n      [attr.id]=\"path3\" />\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accesories/Turban' [attr.mask]=\"urlFix(mask1)\">\r\n    <g transform=' translate(-1.000000, 0.000000)'>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n    <g id='Behind' stroke-width='1' fill-rule='evenodd' transform='translate(1.000000, 0.000000)'>\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path2\" />\r\n      </mask>\r\n      <g id='Mask-Hair' />\r\n    </g>\r\n    <g id='Turban' stroke-width='1' fill-rule='evenodd' transform='translate(1.000000, 0.000000)'>\r\n      <path\r\n        d='M74.5304294,97.5 C73.529284,95.0905557 73,92.5798498 73,90 C73,71.7746033 99.4151998,57 132,57 C164.5848,57 191,71.7746033 191,90 C191,92.5798498 190.470716,95.0905557 189.469571,97.5 C183.398106,82.8878805 159.972341,72 132,72 C104.027659,72 80.6018941,82.8878805 74.5304294,97.5 Z'\r\n        id='Band' fill='#EDECE3' />\r\n      <g transform='translate(48.000000, 3.000000)'>\r\n        <mask [attr.id]=\"mask3\" fill='white'>\r\n          <use [attr.xlink:href]=\"'#' + path3\" />\r\n        </mask>\r\n        <use id='Turban-Mask' [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path3\" />\r\n      </g>\r\n      <path\r\n        d='M48.0110963,96.0123559 C48.3807929,121.112082 58.0438337,136.107963 77.0002187,141 C57.6224465,136.289117 47.9557798,121.632254 48.0002187,97.0294118 C48.0008313,96.6902213 48.0044682,96.351197 48.0110963,96.0123559 Z M152.645822,30.4681115 C153.39011,36.1953086 152.126202,42.8891982 148.000219,50.135763 C136.847465,71.5667661 76.561434,72.0039826 76.3339794,129.679698 C76.1051437,67.7612631 136.805324,67.3799133 148.000219,44.5441176 C150.669864,39.5668152 152.141299,34.8351296 152.645822,30.4681115 Z'\r\n        id='Shadow' fill-opacity='0.16' fill='#000000' />\r\n    </g>\r\n  </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopTurbanComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopWinterHat1Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.WinterHat1;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopWinterHat1Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-winter-hat1]',
                template: "<svg:g id=\"Top\">\r\n  <defs>\r\n    <rect [attr.id]=\"path3\" x=\"0\" y=\"0\" width=\"264\" height=\"280\" />\r\n    <path\r\n      d=\"M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z\"\r\n      [attr.id]=\"path1\" />\r\n    <filter x=\"-0.8%\" y=\"-2.8%\" width=\"101.7%\" height=\"111.1%\" filterUnits=\"objectBoundingBox\" [attr.id]=\"filter1\">\r\n      <feOffset dx=\"0\" dy=\"2\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\" />\r\n      <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0\" type=\"matrix\" in=\"shadowOffsetOuter1\" />\r\n    </filter>\r\n    <rect [attr.id]=\"path2\" x=\"74\" y=\"50\" width=\"118\" height=\"36\" rx=\"8\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill=\"white\">\r\n    <use [attr.xlink:href]=\"'#' + path3\" />\r\n  </mask>\r\n  <g id=\"Mask\" />\r\n  <g id=\"Top/Accessories/Winter-Hat-1\" transform=\"translate(-1.000000, 0.000000)\">\r\n    <g id=\"hat\" stroke-width=\"1\" fill-rule=\"evenodd\" transform=\"translate(63.000000, 20.000000)\">\r\n      <path\r\n        d=\"M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z\"\r\n        id=\"inside\" fill=\"#F4F4F4\" />\r\n      <mask [attr.id]=\"mask2\" fill=\"white\">\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id=\"hat-mask\" [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n    <g id=\"hat-front\">\r\n      <use fill=\"black\" fill-opacity=\"1\" [attr.filter]=\"urlFix(path2)\" [attr.xlink:href]=\"'#' + path2\" />\r\n      <use fill=\"#F4F4F4\" fill-rule=\"evenodd\" [attr.xlink:href]=\"'#' + path2\" />\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopWinterHat1Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopWinterHat2Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.WinterHat2;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
    }
}
CustomAvatarTopWinterHat2Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-winter-hat2]',
                template: "<svg:g id='Top'>\r\n  <defs>\r\n    <rect [attr.id]=\"path3\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M72,21 C126.772655,21 144,68.8032255 144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L72,77.5347425 L32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 -1.41137102e-14,196.404852 0,176.910255 L0,103.04488 C-7.11930515e-15,68.8032255 17.2273451,21 72,21 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path3\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accessories/Winter-Hat-2' transform='translate(-1.000000, 0.000000)'>\r\n    <g id='hat' stroke-width='1' fill-rule='evenodd' transform='translate(61.000000, 0.000000)'>\r\n      <g id='string' transform='translate(0.000000, 176.000000)' fill='#F4F4F4'>\r\n        <circle id='puff' cx='9' cy='65' r='9' />\r\n        <rect x='8' y='0' width='2' height='58' />\r\n      </g>\r\n      <g id='string' transform='translate(126.000000, 168.000000)' fill='#F4F4F4'>\r\n        <circle id='puff' cx='9' cy='65' r='9' />\r\n        <rect x='8' y='0' width='2' height='58' />\r\n      </g>\r\n      <circle id='puff' fill='#F4F4F4' cx='72' cy='20' r='20' />\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='Combined-Shape' [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n      <rect id='color-dark' fill-opacity='0.2' fill='#000000' x='-1' y='21' width='146' height='46'\r\n        [attr.mask]=\"urlFix(mask2)\" />\r\n      <g id='light-triangles' transform='translate(29.000000, 32.000000)' fill='#FFFFFF' fill-opacity='0.5'>\r\n        <polygon id='Triangle'\r\n          transform='translate(12.500000, 9.000000) rotate(180.000000) translate(-12.500000, -9.000000) '\r\n          points='12.5 0 25 18 0 18' />\r\n        <polygon id='Triangle'\r\n          transform='translate(43.500000, 9.000000) rotate(180.000000) translate(-43.500000, -9.000000) '\r\n          points='43.5 0 56 18 31 18' />\r\n        <polygon id='Triangle'\r\n          transform='translate(74.500000, 9.000000) rotate(180.000000) translate(-74.500000, -9.000000) '\r\n          points='74.5 0 87 18 62 18' />\r\n      </g>\r\n      <g id='dark-triangles' transform='translate(13.000000, 41.000000)' fill='#000000' fill-opacity='0.5'>\r\n        <polygon id='Triangle' points='12.5 0 25 18 0 18' />\r\n        <polygon id='Triangle' points='43.5 0 56 18 31 18' />\r\n        <polygon id='Triangle' points='74.5 0 87 18 62 18' />\r\n        <polygon id='Triangle' points='105.5 0 118 18 93 18' />\r\n      </g>\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopWinterHat2Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopWinterHat3Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.WinterHat3;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopWinterHat3Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-winter-hat3]',
                template: "<svg:g id='Top'>\r\n  <defs>\r\n    <rect [attr.id]=\"path3\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.7%' y='-1.7%' width='101.4%' height='106.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowOffsetOuter1' />\r\n    </filter>\r\n    <path\r\n      d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path3\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accessories/Winter-Hat-3' transform='translate(-1.000000, 0.000000)'>\r\n    <g id='hat' stroke-width='1' fill-rule='evenodd' transform='translate(67.000000, 12.000000)'>\r\n      <circle id='puff' fill='#F4F4F4' cx='66' cy='8' r='20' />\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='hat-mask' [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n    <g id='hat-front'>\r\n      <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(path2)\" [attr.xlink:href]=\"'#' + path2\" />\r\n      <use fill='#F4F4F4' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopWinterHat3Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarTopWinterHat4Component extends CustomAvatarTopBaseComponent {
    constructor() {
        super();
        this.option = TopType.WinterHat3;
        this.mask1 = randomId('kip-mask');
        this.mask2 = randomId('kip-mask');
        this.mask3 = randomId('kip-mask');
        this.mask4 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.path3 = randomId('kip-path');
        this.path4 = randomId('kip-path');
        this.path5 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarTopWinterHat4Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-top-winter-hat4]',
                template: "<svg:g id='Top'>\r\n  <defs>\r\n    <rect [attr.id]=\"path5\" x='0' y='0' width='264' height='280' />\r\n    <path\r\n      d='M129.659138,38.3566287 C132.459581,45.3577056 134,52.9989608 134,61 L134,69 L2,69 L2,61 C2,52.9748603 3.54971254,45.3116754 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.141056,2.84355825 18.8342301,4.64979084 28.7156778,10.5389901 C38.4862647,3.88774159 50.289117,-4.77047603e-15 63,-7.10542736e-15 L73,-7.10542736e-15 C85.7221104,-9.44244112e-15 97.5345852,3.89461262 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M28.7156857,10.5389848 C18.758718,17.3171083 10.9122881,26.9651756 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.1410556,2.84355836 18.8342292,4.64979066 28.7156763,10.5389892 Z M129.659138,38.3566287 C125.120833,27.0109143 117.273404,17.34646 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'\r\n      [attr.id]=\"path2\" />\r\n    <path\r\n      d='M21.8615933,15.9591438 C17.3889306,20.0465694 13.5271638,24.7913314 10.4291788,30.040544 C7.50356643,21.9322189 7.00287124,16.3214118 8.92709323,13.2081228 C11.5782173,12.0615989 15.8897174,12.9786059 21.8615933,15.9591438 Z M125.352616,29.6737564 C122.278044,24.5465519 118.471613,19.9084198 114.077736,15.903773 C119.880509,13.0520429 124.083178,12.1889392 126.68574,13.3144617 C128.572308,16.3668294 128.127934,21.8199276 125.352616,29.6737564 Z'\r\n      [attr.id]=\"path3\" />\r\n    <filter x='-0.7%' y='-1.7%' width='101.4%' height='106.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowOffsetOuter1' />\r\n    </filter>\r\n    <path\r\n      d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'\r\n      [attr.id]=\"path4\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path5\" />\r\n  </mask>\r\n  <g id='Mask' />\r\n  <g id='Top/Accessories/Winter-Hat-4' transform='translate(-1.000000, 0.000000)'>\r\n    <g id='hat' stroke-width='1' fill-rule='evenodd' transform='translate(65.000000, 4.000000)'>\r\n      <mask [attr.id]=\"mask2\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path1\" />\r\n      </mask>\r\n      <use id='hat-mask' [attr.fill]=\"color2\" [attr.xlink:href]=\"'#' + path1\" />\r\n      <mask [attr.id]=\"mask3\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path2\" />\r\n      </mask>\r\n      <use id='shadow' fill-opacity='0.24' fill='#000000' [attr.xlink:href]=\"'#' + path2\" />\r\n      <mask [attr.id]=\"mask4\" fill='white'>\r\n        <use [attr.xlink:href]=\"'#' + path3\" />\r\n      </mask>\r\n      <use id='light' fill-opacity='0.300000012' fill='#FFFFFF' [attr.xlink:href]=\"'#' + path3\" />\r\n    </g>\r\n    <g id='hat-front'>\r\n      <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(path4)\" [attr.xlink:href]=\"'#' + path4\" />\r\n      <use fill='#F4F4F4' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path4\" />\r\n    </g>\r\n    <g kip-custom-avatar-facial-hair [facialHairType]=\"facialHairType\" [facialHairColor]=\"facialHairColor\" />\r\n    <g kip-custom-avatar-accessories [accessoriesType]=\"accessoriesType\"  [accessoriesColor]=\"accessoriesColor\"/>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];
/** @nocollapse */
CustomAvatarTopWinterHat4Component.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesComponent {
}
CustomAvatarAccessoriesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-accessories]',
                template: "<svg:g [ngSwitch]=\"accessoriesType\">\r\n  <g *ngSwitchCase=\"'Prescription01'\" kip-custom-avatar-accessories-prescription1 [accessoriesColor]=\"accessoriesColor\" />\r\n  <g *ngSwitchCase=\"'Prescription02'\" kip-custom-avatar-accessories-prescription2  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Kurt'\" kip-custom-avatar-accessories-kurt  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Round'\" kip-custom-avatar-accessories-round  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Sunglasses'\" kip-custom-avatar-accessories-sunglasses  [accessoriesColor]=\"accessoriesColor\"/>\r\n  <g *ngSwitchCase=\"'Wayfarers'\" kip-custom-avatar-accessories-wayfarers  [accessoriesColor]=\"accessoriesColor\"/>\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarAccessoriesComponent.propDecorators = {
    accessoriesType: [{ type: Input }],
    accessoriesColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesBaseComponent {
    constructor() {
        this.option = AccessoriesType.Blank;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set accessoriesColor(value) {
        if (this._accessoriesColor !== value) {
            this._accessoriesColor = value;
            this._color = accessoriesColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get accessoriesColor() {
        return this._accessoriesColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    urlFix(path) {
        return urlfix(path);
    }
}
CustomAvatarAccessoriesBaseComponent.propDecorators = {
    accessoriesColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesPrescription01Component extends CustomAvatarAccessoriesBaseComponent {
    constructor() {
        super(...arguments);
        this.option = AccessoriesType.Prescription01;
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarAccessoriesPrescription01Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-accessories-prescription1]',
                template: "<svg:g id='Top/_Resources/Prescription-01' fill='none' transform='translate(62.000000, 85.000000)' stroke-width='1'>\r\n  <defs>\r\n    <filter x='-0.8%' y='-2.4%' width='101.5%' height='109.8%' filterUnits='objectBoundingBox' [id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'></feOffset>\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1'></feColorMatrix>\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1'></feMergeNode>\r\n        <feMergeNode in='SourceGraphic'></feMergeNode>\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <g id='Glasses' [attr.filter]=\"urlFix(filter1)\" transform='translate(8.000000, 8.000000)' [attr.fill]=\"color\">\r\n    <path\r\n      d='M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z'\r\n      id='Frame-Stuff'></path>\r\n    <path\r\n      d='M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z'\r\n      id='Frame-Stuff'></path>\r\n    <path\r\n      d='M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267'\r\n      id='Frame-Stuff'></path>\r\n    <path\r\n      d='M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267'\r\n      id='Frame-Stuff'></path>\r\n    <path\r\n      d='M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333'\r\n      id='Frame-Stuff'></path>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesPrescription02Component extends CustomAvatarAccessoriesBaseComponent {
    constructor() {
        super(...arguments);
        this.option = AccessoriesType.Prescription02;
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarAccessoriesPrescription02Component.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-accessories-prescription2]',
                template: "<svg:g id='Top/_Resources/Prescription-02' fill='none' transform='translate(62.000000, 85.000000)' stroke-width='1'>\r\n  <defs>\r\n    <filter x='-0.8%' y='-2.4%' width='101.5%' height='109.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <g id='Wayfarers' [attr.filter]=\"urlFix(filter1)\" transform='translate(6.000000, 7.000000)' [attr.fill]='color'>\r\n    <path\r\n      d='M34,41 L31.2421498,41 C17.3147125,41 9,33.3359286 9,20.5 C9,10.127 10.8170058,0 32.5299306,0 L35.4700694,0 C57.1829942,0 59,10.127 59,20.5 C59,32.5686429 48.7212748,41 34,41 Z M32.3853606,6 C13,6 13,12.8410159 13,21.5015498 C13,28.5719428 16.116254,37 30.9709365,37 L34,37 C46.3649085,37 55,30.6270373 55,21.5015498 C55,12.8410159 55,6 35.6146394,6 L32.3853606,6 Z'\r\n      id='Left' fill-rule='nonzero' />\r\n    <path\r\n      d='M96,41 L93.2421498,41 C79.3147125,41 71,33.3359286 71,20.5 C71,10.127 72.8170058,0 94.5299306,0 L97.4700694,0 C119.182994,0 121,10.127 121,20.5 C121,32.5686429 110.721275,41 96,41 Z M94.3853606,6 C75,6 75,12.8410159 75,21.5015498 C75,28.5719428 78.1194833,37 92.9709365,37 L96,37 C108.364909,37 117,30.6270373 117,21.5015498 C117,12.8410159 117,6 97.6146394,6 L94.3853606,6 Z'\r\n      id='Right' fill-rule='nonzero' />\r\n    <path\r\n      d='M2.95454545,5.77156439 C3.64590909,5.09629136 11.2095455,0 32.5,0 C50.3513636,0 54.1302273,1.85267217 59.8502273,4.6518809 L60.2689233,4.85850899 C60.6666014,4.99901896 62.7002447,5.68982981 65.0790606,5.76579519 C67.2462948,5.67278567 69.1000195,5.08540191 69.641698,4.89719767 C76.1703915,1.7220864 82.5610971,0 97.5,0 C118.790455,0 126.354091,5.09629136 127.045455,5.77156439 C128.679318,5.77156439 130,7.06150904 130,8.65734659 L130,11.5431288 C130,13.1389663 128.679318,14.428911 127.045455,14.428911 C127.045455,14.428911 120.143997,14.428911 120.143997,17.3146932 C120.143997,20.2004754 118.181818,13.1389663 118.181818,11.5431288 L118.181818,8.73240251 C114.578575,7.35340151 108.128411,4.78617535 97.5,4.78617535 C85.6584651,4.78617535 79.7610984,6.88602813 74.7022935,8.97112368 L74.7588636,9.10752861 L74.7563667,11.0937608 L72.5391666,16.4436339 L69.8004908,15.3608351 C69.5558969,15.2641292 69.0281396,15.090392 68.2963505,14.9099044 C66.256272,14.4067419 64.1589087,14.253569 62.3040836,14.6343084 C61.6235903,14.7739931 60.9922286,14.9836085 60.4128127,15.266732 L57.7704824,16.5578701 L55.1266751,11.3962031 L55.2440909,9.10175705 L55.3248203,8.90683855 C50.9620526,6.87386374 46.9392639,4.78617535 32.5,4.78617535 C21.8721459,4.78617535 15.422131,7.3524397 11.8181818,8.7314671 L11.8181818,11.5431288 C11.8181818,13.1389663 8.86363636,20.2004754 8.86363636,17.3146932 C8.86363636,14.428911 2.95454545,14.428911 2.95454545,14.428911 C1.32363636,14.428911 0,13.1389663 0,11.5431288 L0,8.65734659 C0,7.06150904 1.32363636,5.77156439 2.95454545,5.77156439 Z'\r\n      id='Stuff' fill-rule='nonzero' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesKurtComponent extends CustomAvatarAccessoriesBaseComponent {
    constructor() {
        super(...arguments);
        this.option = AccessoriesType.Kurt;
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarAccessoriesKurtComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-accessories-kurt]',
                template: "<svg:g id='Top/_Resources/Kurt' fill='none' transform='translate(62.000000, 85.000000)' stroke-width='1'>\r\n  <defs>\r\n    <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n  </defs>\r\n  <g id='Kurts' [attr.filter]=\"urlFix(filter1)\" transform='translate(5.000000, 2.000000)'>\r\n    <path\r\n      d='M66,11.1111111 C54.9625586,11.1111111 53.3705645,2.0266011 30.6705882,0.740740741 C7.98552275,-0.283199952 0.815225204,6.4494855 0.776470588,11.1111111 C0.813236892,15.4042795 -0.352293566,26.5612661 14.3647059,39.6296296 C29.1367705,55.1420807 44.2704162,49.8818301 49.6941176,44.8148148 C55.1352081,42.4731118 61.3403442,21.4596351 66,21.4814815 C70.6596558,21.5033279 76.8647919,42.4731118 82.3058824,44.8148148 C87.7295838,49.8818301 102.86323,55.1420807 117.635294,39.6296296 C132.352294,26.5612661 131.186763,15.4042795 131.223529,11.1111111 C131.184775,6.4494855 124.014477,-0.283199952 101.329412,0.740740741 C78.6294355,2.0266011 77.0374414,11.1111111 66,11.1111111 Z'\r\n      id='It!' [attr.fill]='color' fill-rule='nonzero' />\r\n    <path\r\n      d='M55.1294118,21.4814815 C55.5103632,13.8233491 42.2156493,5.64243259 27.9529412,5.92592593 C13.6973442,6.22450879 11.8417942,15.3786982 11.6470588,18.8888889 C11.2982286,27.0220633 20.014463,45.3037598 36.1058824,44.8148148 C52.1972736,44.305848 54.9092435,26.5344305 55.1294118,21.4814815 Z'\r\n      id='Did' fill='#2F383B' fill-rule='nonzero' />\r\n    <path\r\n      d='M120.352941,21.4814815 C120.733893,13.8233491 107.439179,5.64243259 93.1764706,5.92592593 C78.9208736,6.22450879 77.0653236,15.3786982 76.8705882,18.8888889 C76.521758,27.0220633 85.2379924,45.3037598 101.329412,44.8148148 C117.420803,44.305848 120.132773,26.5344305 120.352941,21.4814815 Z'\r\n      id='Courtney' fill='#2F383B' fill-rule='nonzero'\r\n      transform='translate(98.611765, 25.370370) scale(-1, 1) translate(-98.611765, -25.370370) ' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesRoundComponent extends CustomAvatarAccessoriesBaseComponent {
    constructor() {
        super(...arguments);
        this.option = AccessoriesType.Round;
        this.path1 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
    }
}
CustomAvatarAccessoriesRoundComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-accessories-round]',
                template: "<svg:g id='Top/_Resources/Round' fill='none' transform='translate(62.000000, 85.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M80.4646192,16.3941179 C84.3801509,8.45869677 92.552602,3 102,3 C110.919691,3 118.702887,7.86591082 122.839921,15.0880638 C123.050197,15.0306504 123.271519,15 123.5,15 L131.5,15 C132.880712,15 134,16.1192881 134,17.5 C134,18.8807119 132.880712,20 131.5,20 L124.963126,20 C125.637355,22.2145921 126,24.5649459 126,27 C126,40.254834 115.254834,51 102,51 C88.745166,51 78,40.254834 78,27 C78,25.5781066 78.1236513,24.1850936 78.3607874,22.8311273 C78.2762458,18.4553035 74.9135957,15 70.8624171,15 C67.1256697,15 63.9747186,17.9397535 63.4417635,21.8300629 C63.8073299,23.4951922 64,25.2250958 64,27 C64,40.254834 53.254834,51 40,51 C26.745166,51 16,40.254834 16,27 C16,24.5649459 16.3626451,22.2145921 17.0368738,20 L10.5,20 C9.11928813,20 8,18.8807119 8,17.5 C8,16.1192881 9.11928813,15 10.5,15 L10.5,15 L18.5,15 C18.728481,15 18.9498033,15.0306504 19.1600793,15.0880638 C23.2971127,7.86591082 31.0803092,3 40,3 C49.3521568,3 57.4549431,8.34919095 61.415666,16.15488 C63.4929212,13.0392725 66.9494432,11 70.8624171,11 C74.8746823,11 78.4070368,13.1440781 80.4646192,16.3941179 Z M40,47 C51.045695,47 60,38.045695 60,27 C60,15.954305 51.045695,7 40,7 C28.954305,7 20,15.954305 20,27 C20,38.045695 28.954305,47 40,47 Z M102,47 C113.045695,47 122,38.045695 122,27 C122,15.954305 113.045695,7 102,7 C90.954305,7 82,15.954305 82,27 C82,38.045695 90.954305,47 102,47 Z'\r\n      [attr.id]=\"path1\" />\r\n    <filter x='-0.8%' y='-2.1%' width='101.6%' height='108.3%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowOffsetOuter1' />\r\n    </filter>\r\n  </defs>\r\n  <g id='Lennon-Glasses'>\r\n    <use fill='black' fill-opacity='1' [attr.filter]=\"urlFix(filter1)\" [attr.xlink:href]=\"'#' + path1\" />\r\n    <use [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesSunglassesComponent extends CustomAvatarAccessoriesBaseComponent {
    constructor() {
        super(...arguments);
        this.option = AccessoriesType.Sunglasses;
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
        this.linearGradient1 = randomId('kip-linear-gradient');
        this.linearGradient2 = randomId('kip-linear-gradient');
    }
}
CustomAvatarAccessoriesSunglassesComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-accessories-sunglasses]',
                template: "<svg:g id='Top/_Resources/Sunglasses' fill='none' transform='translate(62.000000, 85.000000)' stroke-width='1'>\r\n  <defs>\r\n    <filter x='-0.8%' y='-2.6%' width='101.6%' height='110.5%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <path\r\n      d='M47.0104611,6.27728008 C49.5212682,6.30134922 50.7082016,6.72633117 51.1359635,9.39189846 C51.5693724,12.0919529 51.1479634,15.1275382 50.648202,17.7869984 C49.8855011,21.8478573 48.6170388,25.8264499 45.6643523,28.794498 C44.1089507,30.3575551 42.2119044,31.6034024 40.1941529,32.4540848 C39.1226305,32.9060098 37.9911085,33.2322006 36.8599395,33.4797175 C36.5292357,33.5519249 33.7060778,33.9478084 35.4375958,33.7466335 C31.3967988,34.2161613 27.0129452,34.1974808 23.6381438,31.5793333 C19.8980507,28.6777448 17.3367734,24.0862872 16.2105455,19.5127916 C15.5516086,16.8368063 14.1670294,10.4365709 16.6968952,8.29693227 C19.5948762,5.84547255 47.0104611,6.27728008 47.0104611,6.27728008 L47.0104611,6.27728008 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M78.9192315,6.27468008 C76.4084239,6.29910846 75.2214902,6.72373117 74.7937283,9.38929846 C74.3603192,12.0893529 74.7817283,15.1249382 75.2811369,17.7843984 C76.0441909,21.8452573 77.3126534,25.8238499 80.2653406,28.791898 C81.8207425,30.3549551 83.7177893,31.6008024 85.7355412,32.4518441 C86.8070638,32.9034098 87.938586,33.2296006 89.0697553,33.4771175 C89.4004591,33.5493249 92.2232647,33.9455676 90.4920992,33.7440335 C94.5328971,34.2135613 98.9167517,34.1948808 102.291554,31.5767333 C106.031648,28.6751448 108.592926,24.0840464 109.719154,19.5105508 C110.378091,16.8342063 111.762317,10.4343302 109.232804,8.29433227 C106.334822,5.84287255 78.9192315,6.27468008 78.9192315,6.27468008 L78.9192315,6.27468008 Z'\r\n      [attr.id]=\"path2\" />\r\n    <linearGradient x1='50%' y1='0%' x2='50%' y2='70.5058195%' [attr.id]=\"linearGradient1\">\r\n      <stop stop-color='#FFFFFF' stop-opacity='0.5' offset='0%' />\r\n      <stop stop-color='#000000' stop-opacity='0.5' offset='100%' />\r\n    </linearGradient>\r\n    <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' [attr.id]=\"linearGradient2\">\r\n      <stop stop-color='#FFFFFF' stop-opacity='0.5' offset='0%' />\r\n      <stop stop-color='#000000' stop-opacity='0.5' offset='70.5058195%' />\r\n    </linearGradient>\r\n  </defs>\r\n  <g id='Sunglasses' [attr.filter]=\"urlFix(filter1)\" transform='translate(8.000000, 8.000000)'>\r\n    <g id='shades'>\r\n      <use fill-opacity='0.700000048' fill='#000000' [attr.xlink:href]=\"'#' + path1\" />\r\n      <use [attr.fill]=\"urlFix(linearGradient1)\" style=\"mix-blend-mode: 'screen'\"\r\n        [attr.xlink:href]=\"'#' + path1\" />\r\n    </g>\r\n    <g id='shades'>\r\n      <use fill-opacity='0.700000048' fill='#000000' [attr.xlink:href]=\"'#' + path2\" />\r\n      <use [attr.fill]=\"urlFix(linearGradient2)\" style=\"mix-blend-mode: 'screen'\"\r\n        [attr.xlink:href]=\"'#' + path2\" />\r\n    </g>\r\n    <g id='Glasses' [attr.fill]='color'>\r\n      <path\r\n        d='M46.2491397,7.27516667 C48.6207695,7.2975 49.7419096,7.69183333 50.1459601,10.1651667 C50.5553446,12.6705 50.1572949,15.4871667 49.6852359,17.9548333 C48.9648125,21.7228333 47.7666627,25.4145 44.9776475,28.1685 C43.5084639,29.6188333 41.7165732,30.7748333 39.8106684,31.5641667 C38.7985419,31.9835 37.7297416,32.2861667 36.6612747,32.5158333 C36.3489024,32.5828333 33.6822357,32.9501667 35.3177735,32.7635 C31.5009631,33.1991667 27.3601122,33.1818333 24.1723805,30.7525 C20.6396056,28.0601667 18.2203032,23.7998333 17.1565036,19.5561667 C16.5340925,17.0731667 15.2262624,11.1345 17.6158944,9.14916667 C20.3532365,6.8745 46.2491397,7.27516667 46.2491397,7.27516667 L46.2491397,7.27516667 Z M22.2178029,0.4905 C16.7774562,0.677833333 13.1466691,1.63383333 10.4633337,7.06916667 C5.54571911,17.0301667 13.9627711,31.9688333 23.352278,36.0395 C34.3293166,40.7991667 46.5921826,35.5318333 52.3955746,26.0058333 C55.4689587,20.9621667 57.0224862,13.3231667 56.9224737,7.50383333 C56.7951245,0.0765 51.6071427,-0.1295 45.5090472,0.0338333333 L22.2178029,0.4905 Z'\r\n        id='Frame' />\r\n      <path\r\n        d='M79.6805515,7.27256667 C77.3089217,7.29523333 76.1877816,7.68923333 75.7837311,10.1625667 C75.3743466,12.6679 75.7723963,15.4845667 76.244122,17.9522333 C76.9648787,21.7202333 78.1630285,25.4119 80.9520437,28.1659 C82.4212273,29.6162333 84.213118,30.7722333 86.1190228,31.5619 C87.1311493,31.9809 88.1999496,32.2835667 89.2684165,32.5132333 C89.5807888,32.5802333 92.2471221,32.9479 90.6119177,32.7609 C94.4287281,33.1965667 98.569579,33.1792333 101.757311,30.7499 C105.290086,28.0575667 107.709388,23.7975667 108.773188,19.5539 C109.395599,17.0705667 110.703095,11.1322333 108.313797,9.14656667 C105.576455,6.8719 79.6805515,7.27256667 79.6805515,7.27256667 L79.6805515,7.27256667 Z M103.711555,0.4879 C109.152235,0.675233333 112.783022,1.63156667 115.466357,7.06656667 C120.383639,17.0275667 111.96692,31.9662333 102.577413,36.0372333 C91.6003746,40.7965667 79.3375086,35.5292333 73.5337832,26.0035667 C70.4607325,20.9595667 68.907205,13.3205667 69.0068841,7.50123333 C69.1345667,0.0739 74.3225485,-0.1321 80.420644,0.0315666667 L103.711555,0.4879 Z'\r\n        id='Frame' />\r\n      <path\r\n        d='M13.1969483,4.9267 C9.78501392,5.11836667 5.88606327,5.16436667 2.69005822,6.63936667 C-0.69461078,8.20136667 -1.2176675,11.7387 3.04920921,12.2260333 C4.97094906,12.4457 6.89488267,12.0827 8.78716336,11.7450333 C10.336903,11.4683667 12.4419791,11.5580333 13.9064752,10.9657 C16.6355213,9.86236667 16.4603333,4.74003333 13.1969483,4.9267'\r\n        id='Frame' />\r\n      <path\r\n        d='M112.73467,4.9267 C116.146606,5.11836667 120.045559,5.16436667 123.241565,6.63936667 C126.626236,8.20136667 127.149293,11.7387 122.882414,12.2260333 C120.960673,12.4457 119.036739,12.0827 117.144457,11.7450333 C115.594717,11.4683667 113.489639,11.5580333 112.025143,10.9657 C109.295782,9.86236667 109.471283,4.74003333 112.73467,4.9267'\r\n        id='Frame' />\r\n      <path\r\n        d='M73.1094302,7.01263333 C71.1631869,4.71263333 66.0912197,3.38463333 62.8914864,3.38463333 C59.6914198,3.38463333 54.7681378,4.71263333 52.8222279,7.01263333 C51.8407719,8.1723 51.8074344,9.72396667 53.5083137,10.4509667 C55.6262451,11.3566333 57.5174814,9.7143 59.2126933,8.8553 C61.3809643,7.75663333 64.7120473,7.8773 66.7189648,8.8553 C68.4271783,9.68796667 70.3050797,11.3566333 72.4233444,10.4509667 C74.1242237,9.72396667 74.0908862,8.1723 73.1094302,7.01263333'\r\n        id='Frame' />\r\n    </g>\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAccessoriesWayfarersComponent extends CustomAvatarAccessoriesBaseComponent {
    constructor() {
        super(...arguments);
        this.option = AccessoriesType.Wayfarers;
        this.path1 = randomId('kip-path');
        this.path2 = randomId('kip-path');
        this.filter1 = randomId('kip-filter');
        this.linearGradient1 = randomId('kip-linear-gradient');
    }
}
CustomAvatarAccessoriesWayfarersComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-accessories-wayfarers]',
                template: "<svg:g id='Top/_Resources/Wayfarers' fill='none' transform='translate(62.000000, 85.000000)' stroke-width='1'>\r\n  <defs>\r\n    <filter x='-0.8%' y='-2.4%' width='101.6%' height='109.8%' filterUnits='objectBoundingBox' [attr.id]=\"filter1\">\r\n      <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1' />\r\n      <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0' type='matrix' in='shadowOffsetOuter1'\r\n        result='shadowMatrixOuter1' />\r\n      <feMerge>\r\n        <feMergeNode in='shadowMatrixOuter1' />\r\n        <feMergeNode in='SourceGraphic' />\r\n      </feMerge>\r\n    </filter>\r\n    <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' [attr.id]=\"linearGradient1\">\r\n      <stop stop-color='#FFFFFF' stop-Opacity='0.5' offset='0%' />\r\n      <stop stop-color='#000000' stop-Opacity='0.5' offset='70.5058195%' />\r\n    </linearGradient>\r\n    <path\r\n      d='M44.9178864,17.5714286 C44.9178864,27.2737857 36.66775,35.1428571 22.9204545,35.1428571 L20.1704091,35.1428571 C6.42311364,35.1428571 0.923022727,27.2708571 0.923022727,17.5714286 L0.923022727,17.5714286 C0.923022727,7.86614286 2.20715909,0 21.4545455,0 L24.3863636,0 C43.63375,0 44.9178864,7.86614286 44.9178864,17.5714286 L44.9178864,17.5714286 Z'\r\n      [attr.id]=\"path1\" />\r\n    <path\r\n      d='M106.486068,17.5714286 C106.486068,27.2737857 98.2388636,35.1428571 84.4886364,35.1428571 L81.7385909,35.1428571 C67.9912955,35.1428571 62.4912045,27.2708571 62.4912045,17.5714286 L62.4912045,17.5714286 C62.4912045,7.86614286 63.7753409,0 83.0227273,0 L85.9545455,0 C105.199,0 106.486068,7.86614286 106.486068,17.5714286 L106.486068,17.5714286 Z'\r\n      [attr.id]=\"path2\" />\r\n  </defs>\r\n  <g id='Wayfarers' [attr.filter]=\"urlFix(filter1)\" transform='translate(7.000000, 7.000000)'>\r\n    <g id='Shades' transform='translate(10.795455, 2.928571)' fill-rule='nonzero'>\r\n      <g id='Shade'>\r\n        <use fill-opacity='0.700000048' fill='#000000' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n        <use [attr.fill]=\"urlFix(linearGradient1)\" fill-rule='evenodd' style=\"mix-blend-mode: 'screen'\"\r\n          [attr.xlink:href]=\"'#' + path1\" />\r\n      </g>\r\n      <g id='Shade'>\r\n        <use fill-opacity='0.700000048' fill='#000000' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path2\" />\r\n        <use [attr.fill]=\"urlFix(linearGradient1)\" fill-rule='evenodd' style=\"mix-blend-mode: 'screen'\"\r\n          [attr.xlink:href]=\"'#' + path2\" />\r\n      </g>\r\n    </g>\r\n    <path\r\n      d='M33.7159091,41 L30.9658636,41 C17.0778409,41 8.78665909,33.3359286 8.78665909,20.5 C8.78665909,10.127 10.5985227,0 32.25,0 L35.1818182,0 C56.8332955,0 58.6451591,10.127 58.6451591,20.5 C58.6451591,32.5686429 48.3955227,41 33.7159091,41 Z M32.25,5.85421429 C14.6502955,5.85421429 14.6502955,12.3175714 14.6502955,20.5 C14.6502955,27.1800714 17.4795,35.1428571 30.9658636,35.1428571 L33.7159091,35.1428571 C44.9418409,35.1428571 52.7815227,29.1217143 52.7815227,20.5 C52.7815227,12.3175714 52.7815227,5.85421429 35.1818182,5.85421429 L32.25,5.85421429 Z'\r\n      id='Left' [attr.fill]=\"color\" fill-rule='nonzero' />\r\n    <path\r\n      d='M95.2840909,41 L92.5340455,41 C78.6460227,41 70.3548409,33.3359286 70.3548409,20.5 C70.3548409,10.127 72.1667045,0 93.8181818,0 L96.75,0 C118.401477,0 120.213341,10.127 120.213341,20.5 C120.213341,32.5686429 109.963705,41 95.2840909,41 Z M93.8181818,5.85421429 C76.2184773,5.85421429 76.2184773,12.3175714 76.2184773,20.5 C76.2184773,27.1800714 79.0506136,35.1428571 92.5340455,35.1428571 L95.2840909,35.1428571 C106.510023,35.1428571 114.349705,29.1217143 114.349705,20.5 C114.349705,12.3175714 114.349705,5.85421429 96.75,5.85421429 L93.8181818,5.85421429 Z'\r\n      id='Right' [attr.fill]=\"color\" fill-rule='nonzero' />\r\n    <path\r\n      d='M2.93181818,5.85714286 C3.61786364,5.17185714 11.1233182,0 32.25,0 C49.9640455,0 53.7138409,1.88014286 59.3898409,4.72085714 L59.8053162,4.93054903 C60.1999353,5.07314243 62.2179351,5.77419634 64.5784525,5.85128811 C66.7290156,5.75689949 68.5684809,5.16080623 69.1059926,4.96981137 C75.5844654,1.74762081 81.9260118,0 96.75,0 C117.876682,0 125.382136,5.17185714 126.068182,5.85714286 C127.689477,5.85714286 129,7.16621429 129,8.78571429 L129,11.7142857 C129,13.3337857 127.689477,14.6428571 126.068182,14.6428571 C126.068182,14.6428571 120.204545,14.6428571 120.204545,17.5714286 C120.204545,20.5 117.272727,13.3337857 117.272727,11.7142857 L117.272727,8.8618831 C113.697201,7.46243482 107.296654,5.85714286 96.75,5.85714286 C84.9995538,5.85714286 79.1475515,6.98813142 74.1276604,9.10414393 L74.1837955,9.24257143 L71.6878772,10.2500422 L74.1813177,11.2582547 L71.981173,16.6874536 L69.263564,15.5885995 C69.0208516,15.4904597 68.4971539,15.3141463 67.770994,15.1309826 C65.7466083,14.6203594 63.6653786,14.4649153 61.8248214,14.8513001 C61.1495627,14.993056 60.5230576,15.2057795 59.9480988,15.4931011 L57.3260941,16.8033836 L54.7026238,11.5651815 L57.3246285,10.2548989 L57.3310023,10.251716 L54.8191364,9.23671429 L54.8992448,9.03890561 C50.5700368,6.97578666 46.5781927,5.85714286 32.25,5.85714286 C21.7038986,5.85714286 15.3034993,7.46145875 11.7272727,8.86093383 L11.7272727,11.7142857 C11.7272727,13.3337857 8.79545455,20.5 8.79545455,17.5714286 C8.79545455,14.6428571 2.93181818,14.6428571 2.93181818,14.6428571 C1.31345455,14.6428571 0,13.3337857 0,11.7142857 L0,8.78571429 C0,7.16621429 1.31345455,5.85714286 2.93181818,5.85714286 Z'\r\n      id='Stuff' [attr.fill]=\"color\" fill-rule='nonzero' />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFacialHairComponent {
}
CustomAvatarFacialHairComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-facial-hair]',
                template: "<svg:g [ngSwitch]=\"facialHairType\">\r\n  <g *ngSwitchCase=\"'BeardMajestic'\" kip-custom-avatar-facial-hair-beard-majestic\r\n    [facialHairColor]=\"facialHairColor\" />\r\n  <g *ngSwitchCase=\"'BeardLight'\" kip-custom-avatar-facial-hair-beard-light\r\n    [facialHairColor]=\"facialHairColor\" />\r\n  <g *ngSwitchCase=\"'BeardMedium'\" kip-custom-avatar-facial-hair-beard-medium\r\n    [facialHairColor]=\"facialHairColor\" />\r\n  <g *ngSwitchCase=\"'MoustacheFancy'\" kip-custom-avatar-facial-hair-moustache-fancy\r\n    [facialHairColor]=\"facialHairColor\" />\r\n    <g *ngSwitchCase=\"'MoustacheMagnum'\" kip-custom-avatar-facial-hair-moustache-magnum\r\n    [facialHairColor]=\"facialHairColor\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarFacialHairComponent.propDecorators = {
    facialHairType: [{ type: Input }],
    facialHairColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFacialHairBaseComponent {
    constructor() {
        this.option = FacialHairType.BeardLight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set facialHairColor(value) {
        if (this._hairColor !== value) {
            this._hairColor = value;
            this._color = hairColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get facialHairColor() {
        return this._hairColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
}
CustomAvatarFacialHairBaseComponent.propDecorators = {
    facialHairColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFacialHairBeardLightComponent extends CustomAvatarFacialHairBaseComponent {
    constructor() {
        super(...arguments);
        this.option = FacialHairType.BeardLight;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarFacialHairBeardLightComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-facial-hair-beard-light]',
                template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26'\r\n      [id]=\"path1\"></path>\r\n  </defs>\r\n  <mask [id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\"></use>\r\n  </mask>\r\n  <use [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\"></use>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFacialHairBeardMajesticComponent extends CustomAvatarFacialHairBaseComponent {
    constructor() {
        super(...arguments);
        this.option = FacialHairType.BeardMajestic;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarFacialHairBeardMajesticComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-facial-hair-beard-majestic]',
                template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M65.1802189,77.7372986 C67.3631845,76.1045334 80.4065113,75.4786511 82.757829,74.0894494 C83.4916461,73.6553857 84.0610723,73.215719 84.4997781,72.7800074 C84.938814,73.215719 85.5085703,73.6553857 86.2423874,74.0894494 C88.593375,75.4786511 101.636702,76.1045334 103.819667,77.7372986 C106.030032,79.3908276 107.643571,83.1846831 107.466966,86.15095 C107.255041,89.7101408 103.361486,98.2028927 93.6723269,99.1811016 C91.5576925,96.8281927 88.2368647,95.3104528 84.4997781,95.3104528 C80.7633517,95.3104528 77.4421938,96.8281927 75.3275594,99.1811016 C65.6387308,98.2028927 61.7451757,89.7101408 61.5332501,86.15095 C61.3566455,83.1846831 62.9701849,79.3908276 65.1802189,77.7372986 M103.141638,94.9063813 C103.142958,94.9057221 103.144609,94.905063 103.145929,94.9047334 C103.144278,94.905063 103.142958,94.9057221 103.141638,94.9063813 M65.8453747,94.9014375 C65.8493359,94.9030855 65.8565982,94.9057221 65.8618798,94.9076997 C65.8565982,94.9057221 65.8509864,94.9034151 65.8453747,94.9014375 M144.86259,55.9853335 C144.47439,50.0303878 143.277769,44.1519058 142.233986,38.2862777 C141.952739,36.7072349 140.423706,26 139.734783,26 C139.502391,35.1094058 138.701893,44.0803858 137.669664,53.1393651 C137.361018,55.8475668 137.037848,58.5564277 136.825262,61.2741874 C136.653609,63.4695546 136.959614,66.1220564 136.427819,68.2455739 C135.749129,70.9524573 132.348087,73.4783984 129.702978,74.410795 C123.102915,76.7373371 117.597802,67.1077689 111.960977,64.2911336 C104.643272,60.6347152 92.0637391,59.7639895 84.5816434,64.5297918 C76.9361472,59.7639895 64.356614,60.6347152 57.0389092,64.2911336 C51.4024147,67.1077689 45.8969708,76.7373371 39.2972383,74.410795 C36.6521296,73.4783984 33.2504268,70.9524573 32.572397,68.2455739 C32.0402723,66.1220564 32.346277,63.4695546 32.174954,61.2741874 C31.9623682,58.5564277 31.6388681,55.8475668 31.3302226,53.1393651 C30.2983232,44.0803858 29.4974953,35.1094058 29.2654335,26 C28.5761802,26 27.0468169,36.7072349 26.7658999,38.2862777 C25.7221169,44.1519058 24.5258266,50.0303878 24.1376265,55.9853335 C23.738533,62.1047422 24.2148704,68.1674622 25.4695887,74.1632765 C26.0687242,77.0277016 26.7685407,79.8756475 27.518863,82.7041478 C28.352701,85.8467429 27.198994,91.9661516 27.5723395,95.1921317 C28.2787581,101.29572 31.1542781,113.199679 34.3833375,118.45096 C35.9440605,120.989096 37.7734867,122.573742 39.816489,124.619148 C41.7825775,126.58809 42.6038717,129.640049 44.7260985,131.73687 C48.6820428,135.645092 54.4456266,137.971304 60.3656788,138.543134 C65.6773527,143.050212 74.505605,146 84.4997781,146 C94.4946114,146 103.322534,143.050212 108.634538,138.543134 C114.55393,137.971304 120.317843,135.645092 124.274118,131.73687 C126.396015,129.640049 127.217309,126.58809 129.183727,124.619148 C131.2264,122.573742 133.055826,120.989096 134.616879,118.45096 C137.845608,113.199679 140.721458,101.29572 141.427547,95.1921317 C141.800892,91.9661516 140.647185,85.8467429 141.481353,82.7041478 C142.231676,79.8756475 142.931162,77.0277016 143.530628,74.1632765 C144.784686,68.1674622 145.261353,62.1047422 144.86259,55.9853335 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use [attr.fill]='color' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFacialHairBeardMediumComponent extends CustomAvatarFacialHairBaseComponent {
    constructor() {
        super(...arguments);
        this.option = FacialHairType.BeardMedium;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarFacialHairBeardMediumComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-facial-hair-beard-medium]',
                template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M105.017591,94.1296214 C101.150441,99.7213834 98.257542,95.9467308 94.1374777,92.8762163 C91.6567227,91.0272796 87.9608129,88.7275108 84.5044337,88.8410391 C81.0477114,88.7275108 77.3518016,91.0272796 74.8710466,92.8762163 C70.7509822,95.9467308 67.8580835,99.7213834 63.9909333,94.1296214 C61.0884259,89.9323547 62.3028943,82.8739117 65.014944,78.9027173 C68.8738581,73.2512381 74.1088724,75.9847769 79.9622738,75.3400279 C81.5538829,75.1648137 83.1526985,74.7228407 84.5044337,74 C85.856169,74.7228407 87.4546414,75.1648137 89.0462504,75.3400279 C94.899995,75.9847769 100.134666,73.2512381 103.993923,78.9027173 C106.70563,82.8739117 107.920098,89.9323547 105.017591,94.1296214 M140.39109,26 C136.966521,40.0748212 135.393023,54.4337754 132.909944,68.6711471 C132.392536,71.6390145 131.826063,74.5963095 131.224594,77.5496398 C131.098329,78.1697764 130.973781,80.4725746 130.362704,80.7643064 C128.511632,81.6484223 124.739149,76.9466834 123.730409,75.8851496 C121.196893,73.219256 118.684993,70.5292442 115.599415,68.437233 C109.364783,64.2102603 102.065485,61.7108818 94.4700836,61.117837 C91.2922091,60.8693859 86.9951134,61.3025234 84.000116,63.1104016 C81.0051185,61.3025234 76.7080229,60.8693859 73.5298053,61.117837 C65.9344039,61.7108818 58.6351055,64.2102603 52.4004739,68.437233 C49.3148957,70.5292442 46.8033387,73.219256 44.2694796,75.8851496 C43.2607395,76.9466834 39.4882573,81.6484223 37.6371849,80.7643064 C37.0261079,80.4725746 36.9015594,78.1697764 36.7752954,77.5496398 C36.1738255,74.5963095 35.6073527,71.6390145 35.0899445,68.6711471 C32.6072086,54.4337754 31.0337113,40.0748212 27.6091415,26 C26.6127533,26 25.7385119,44.7478165 25.6273446,46.4945731 C25.174784,53.5889755 24.6463963,60.5254529 25.3216346,67.6261326 C26.485803,79.8749043 27.6993791,95.2339402 37.032627,104.58753 C45.4659003,113.039493 57.7103052,114.806417 68.2713185,120.141327 C69.631059,120.828202 71.4347824,121.676306 73.3798667,122.37111 C75.4289129,123.934171 79.4926946,125 84.1740722,125 C89.0846465,125 93.3155222,123.827456 95.2540874,122.137856 C96.9548781,121.49261 98.5180822,120.752874 99.7285704,120.141327 C110.288776,114.805245 122.533989,113.039493 130.967262,104.58753 C140.30051,95.2339402 141.514086,79.8749043 142.678597,67.6261326 C143.353493,60.5254529 142.825105,53.5889755 142.372887,46.4945731 C142.261377,44.7478165 141.387136,26 140.39109,26 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFacialHairMoustacheFancyComponent extends CustomAvatarFacialHairBaseComponent {
    constructor() {
        super(...arguments);
        this.option = FacialHairType.MoustacheFancy;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarFacialHairMoustacheFancyComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-facial-hair-moustache-fancy]',
                template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M84.0002865,69.2970648 C77.2083681,65.7112456 67.5782013,65.1489138 62.3885276,67.1316942 C56.6144416,69.3374281 51.5052994,75.5829845 42.6388201,72.8283797 C42.2699314,72.7136458 41.9094725,73.0449523 42.0204089,73.408662 C43.3937943,77.9183313 51.0278347,81.0068878 53.6221945,81.1080652 C64.961124,81.549609 74.0949802,72.8302891 84.0002865,72.1614794 C93.9055921,72.8302891 103.03945,81.549609 114.378714,81.1080652 C116.972736,81.0068878 124.607113,77.9183313 125.980498,73.408662 C126.091098,73.0449523 125.730639,72.7136458 125.36175,72.8283797 C116.495271,75.5829845 111.386129,69.3374281 105.612044,67.1316942 C100.422371,65.1489138 90.7922044,65.7112456 84.0002865,69.2970648 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use [attr.fill]=\"color\" fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarFacialHairMoustacheMagnumComponent extends CustomAvatarFacialHairBaseComponent {
    constructor() {
        super(...arguments);
        this.option = FacialHairType.MoustacheMagnum;
        this.mask1 = randomId('kip-mask');
        this.path1 = randomId('kip-path');
    }
}
CustomAvatarFacialHairMoustacheMagnumComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-facial-hair-moustache-magnum]',
                template: "<svg:g transform='translate(49.000000, 72.000000)'>\r\n  <defs>\r\n    <path\r\n      d='M83.9980103,74.839711 C83.4569991,75.6087366 82.761047,76.2496937 81.949688,76.6891498 C73.0477917,81.5102869 63.8767499,77.3322546 58.8763101,77.6298353 C56.459601,77.7739966 53.3405442,79.4153191 52.2155358,77.6791014 C50.9768736,75.7669804 55.0680827,65.2207224 64.7214121,63.4643353 C71.7310704,62.1893309 81.4972391,63.6024033 83.9980103,66.9380109 C86.4987814,63.6024033 96.2649453,62.1893309 103.274279,63.4643353 C112.927938,65.2207224 117.019147,75.7669804 115.780485,77.6791014 C114.655476,79.4153191 111.53642,77.7739966 109.119711,77.6298353 C104.118941,77.3322546 94.948229,81.5102869 86.0463327,76.6891498 C85.2349736,76.2496937 84.5390216,75.6087366 83.9980103,74.839711 Z'\r\n      [attr.id]=\"path1\" />\r\n  </defs>\r\n  <mask [attr.id]=\"mask1\" fill='white'>\r\n    <use [attr.xlink:href]=\"'#' + path1\" />\r\n  </mask>\r\n  <use [attr.fill]='color' fill-rule='evenodd' [attr.xlink:href]=\"'#' + path1\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetComponent {
    constructor() {
        this.petType = PetType.Dog;
    }
}
CustomAvatarPetComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet]',
                template: "<svg:g [ngSwitch]=\"petType\">\r\n  <g *ngSwitchCase=\"'Cat'\" kip-custom-avatar-pet-cat />\r\n  <g *ngSwitchCase=\"'Dog'\" kip-custom-avatar-pet-dog />\r\n  <g *ngSwitchCase=\"'Chick'\" kip-custom-avatar-pet-chick />\r\n  <g *ngSwitchCase=\"'Rabbit'\" kip-custom-avatar-pet-rabbit />\r\n  <g *ngSwitchCase=\"'Rat'\" kip-custom-avatar-pet-rat />\r\n  <g *ngSwitchCase=\"'Snake'\" kip-custom-avatar-pet-snake />\r\n  <g *ngSwitchCase=\"'Parrot'\" kip-custom-avatar-pet-parrot />\r\n  <g *ngSwitchCase=\"'Turtle'\" kip-custom-avatar-pet-turtle />\r\n  <g *ngSwitchCase=\"'Bird'\" kip-custom-avatar-pet-bird />\r\n  <g *ngSwitchCase=\"'Flea'\" kip-custom-avatar-pet-flea />\r\n  <g *ngSwitchCase=\"'Spider'\" kip-custom-avatar-pet-spider />\r\n  <g *ngSwitchCase=\"'Hamster'\" kip-custom-avatar-pet-hamster />\r\n  <g *ngSwitchCase=\"'Fish'\" kip-custom-avatar-pet-fish />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarPetComponent.propDecorators = {
    petType: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetDogComponent {
    constructor() {
        this.option = PetType.Dog;
    }
}
CustomAvatarPetDogComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-dog]',
                template: "<svg:g>\r\n  <path style=\"fill:#FF8E4F;\" d=\"M512,256c0,91.209-47.7,171.28-119.515,216.618C352.977,497.57,306.176,512,256,512\r\n\tc-25.213,0-49.58-3.647-72.589-10.439c-31.033-9.153-59.611-24.043-84.511-43.426C38.713,411.293,0,338.171,0,256\r\n\tC0,114.615,114.615,0,256,0S512,114.615,512,256z\" />\r\n  <path style=\"fill:#A03510;\"\r\n    d=\"M372.955,134.764L365.693,9.175c-0.479-8.277-10.959-11.541-16.053-4.999l-60.213,77.341\" />\r\n  <path style=\"fill:#BA4C20;\" d=\"M392.485,472.618C352.977,497.57,306.176,512,256,512c-25.213,0-49.58-3.647-72.589-10.439\r\n\tc-31.033-9.153-59.611-24.043-84.511-43.426l21.776-376.623h223.952c14.173,0,25.885,11.054,26.704,25.204l1.624,28.044\r\n\tL392.485,472.618z\" />\r\n  <path style=\"fill:#A03510;\" d=\"M175.008,81.523l8.403,420.039c-31.033-9.153-59.611-24.043-84.511-43.426l21.776-376.623\r\n\tL175.008,81.523z\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"341.608\" cy=\"165.773\" rx=\"20.431\" ry=\"31.799\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"348.839\" cy=\"163.088\" rx=\"6.669\" ry=\"16.226\" />\r\n  <path style=\"fill:#BA4C20;\" d=\"M201.127,81.522l-36.288,23.126l-11.549,7.361l-8.856,5.655\r\n\tc-11.202,7.081-25.766-1.481-24.993-14.737l5.415-93.756c0.48-8.268,10.963-11.536,16.057-5.001L201.127,81.522z\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"256.575\" cy=\"165.773\" rx=\"20.431\" ry=\"31.799\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"263.805\" cy=\"163.088\" rx=\"6.669\" ry=\"16.226\" />\r\n  <path style=\"fill:#D8D8D8;\" d=\"M237.282,205.105h204.032v122.296c0,18.057-10.703,34.397-27.255,41.613l-75.634,32.969\r\n\tc-28.342,12.354-61.129-2.681-70.259-32.22l-44.985-145.54C220.247,214.728,227.345,205.105,237.282,205.105z\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M409.87,242.616v93.795c0,20.898-12.377,39.81-31.528,48.172c-0.014,0-0.014,0.014-0.027,0.014\r\n\tl-39.889,17.39c-28.34,12.35-61.135-2.68-70.257-32.22l-44.983-145.542c-2.934-9.496,4.161-19.125,14.097-19.125h164.252\r\n\tL409.87,242.616z\" />\r\n  <path style=\"fill:#3C363F;\" d=\"M434.645,205.105h-60.459c-11.54,0-20.894,9.355-20.894,20.894l0,0\r\n\tc0,11.54,9.355,20.894,20.894,20.894h60.459c11.54,0,20.894-9.355,20.894-20.894l0,0\r\n\tC455.539,214.459,446.185,205.105,434.645,205.105z\" />\r\n  <path style=\"fill:#5C5560;\" d=\"M438.423,211.774h-30.229c-5.77,0-10.447,4.677-10.447,10.447l0,0c0,5.77,4.677,10.447,10.447,10.447\r\n\th30.229c5.77,0,10.447-4.677,10.447-10.447l0,0C448.87,216.451,444.193,211.774,438.423,211.774z\" />\r\n  <g>\r\n    <circle style=\"fill:#D8D8D8;\" cx=\"294.484\" cy=\"305.737\" r=\"16.004\" />\r\n    <circle style=\"fill:#D8D8D8;\" cx=\"352.277\" cy=\"305.737\" r=\"16.004\" />\r\n    <circle style=\"fill:#D8D8D8;\" cx=\"325.601\" cy=\"340.417\" r=\"16.004\" />\r\n  </g>\r\n  <path style=\"fill:#F9B7D2;\" d=\"M164.843,104.647l-11.557,7.367l-8.85,5.653c-0.313,0.199-0.627,0.387-0.951,0.554\r\n\tc-0.052,0.031-0.104,0.052-0.157,0.084c-11.024,5.883-24.639-2.55-23.886-15.381l5.413-93.748\r\n\tc0.481-8.276,10.961-11.536,16.06-5.005c4.65,11.337,11.431,29.111,17.816,46.122c1.797,4.786,3.553,9.498,5.235,14.002\r\n\tc2.884,7.774,5.517,14.89,7.586,20.511C174.258,92.181,171.468,100.415,164.843,104.647z\" />\r\n  <g>\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetCatComponent {
    constructor() {
        this.option = PetType.Cat;
    }
}
CustomAvatarPetCatComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-cat]',
                template: "<svg:g>\r\n  <path style=\"fill:#6095C4;\" d=\"M512,256c0,79.987-36.686,151.406-94.145,198.343C373.75,490.381,317.409,512,256,512\r\n\ts-117.76-21.619-161.865-57.668C36.676,407.395,0,335.976,0,256C0,114.615,114.615,0,256,0S512,114.615,512,256z\" />\r\n  <path style=\"fill:#FFB133;\" d=\"M417.855,454.343C373.75,490.381,317.409,512,256,512s-117.76-21.619-161.865-57.668\r\n\tC131.197,326.363,256,292.091,256,292.091S380.792,326.363,417.855,454.343z\" />\r\n  <path style=\"fill:#FFFFFF;\" d=\"M341.655,359.727c0,0,48.583,50.678,33.797,68.963c-14.785,18.286-33.374-22.465-44.781-8.359\r\n\tc-11.406,14.106,17.743,42.841-1.69,57.469s-23.235-40.229-38.022-33.437c-14.786,6.792-6.237,56.424-34.964,56.424\r\n\ts-20.178-49.633-34.964-56.424c-14.786-6.792-18.588,48.065-38.022,33.437s9.716-43.363-1.69-57.469\r\n\tc-11.406-14.106-29.995,26.645-44.78,8.359c-14.785-18.286,33.797-68.963,33.797-68.963\" />\r\n  <path style=\"fill:#FFDF5E;\" d=\"M450.64,305.568c0,0-64.884,96.264-194.636,117.195C126.236,401.832,61.353,305.568,61.353,305.568\r\n\tc10.479-49.297,31.66-87.879,56.344-117.809C40.199,76.661,132.92,0.001,132.92,0.001s0,0.014,0.014,0.028l85.883,109.06\r\n\tc22.018-10.716,37.186-14.916,37.186-14.916s15.168,4.2,37.172,14.916L379.073,0.001c0,0,92.72,76.66,15.237,187.758\r\n\tC418.98,217.689,440.161,256.27,450.64,305.568z\" />\r\n  <g>\r\n    <path style=\"fill:#FFB133;\" d=\"M255.997,422.771C126.244,401.841,61.361,305.563,61.361,305.563\r\n\t\tC96.662,139.447,253.513,94.88,255.969,94.195c-1.507,0.712-62.511,30.139-96.809,129.167\r\n\t\tc-22.604,65.247-1.256,138.25,54.669,178.772C226.304,411.162,240.355,418.515,255.997,422.771z\" />\r\n    <path style=\"fill:#FFB133;\" d=\"M394.324,187.772c-33.251-40.326-72.851-64.898-101.135-78.669L379.073,0.001\r\n\t\tC379.073,0.001,471.808,76.676,394.324,187.772z\" />\r\n  </g>\r\n  <g>\r\n    <ellipse style=\"fill:#3C363F;\" cx=\"185.072\" cy=\"263.837\" rx=\"21.377\" ry=\"33.271\" />\r\n    <ellipse style=\"fill:#3C363F;\" cx=\"326.928\" cy=\"263.837\" rx=\"21.377\" ry=\"33.271\" />\r\n    <ellipse style=\"fill:#3C363F;\" cx=\"256\" cy=\"320.209\" rx=\"35.579\" ry=\"29.309\" />\r\n  </g>\r\n  <path style=\"fill:#FFFFFF;\" d=\"M287.134,302.077c-13.113,0-24.617,6.866-31.133,17.194c-6.516-10.328-18.019-17.194-31.133-17.194\r\n\tc-20.32,0-36.793,16.473-36.793,36.793s16.473,36.793,36.793,36.793c13.113,0,24.617-6.866,31.133-17.194\r\n\tc6.516,10.328,18.019,17.194,31.133,17.194c20.32,0,36.793-16.473,36.793-36.793S307.454,302.077,287.134,302.077z\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M209.006,338.87c0-16.677,11.098-30.753,26.308-35.268c-3.313-0.981-6.814-1.525-10.446-1.525\r\n\tc-20.32,0-36.793,16.473-36.793,36.793s16.473,36.793,36.793,36.793c3.632,0,7.132-0.543,10.446-1.525\r\n\tC220.104,369.623,209.006,355.546,209.006,338.87z\" />\r\n  <g>\r\n    <path style=\"fill:#BA4C20;\" d=\"M294.879,327.146c-1.837,0-3.596-1.041-4.426-2.814c-1.144-2.443-0.091-5.35,2.351-6.494\r\n\t\tl73.488-34.418c2.442-1.144,5.35-0.091,6.494,2.352s0.091,5.35-2.351,6.494l-73.488,34.418\r\n\t\tC296.277,326.998,295.572,327.146,294.879,327.146z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M375.337,398.18c-0.694,0-1.398-0.148-2.068-0.462l-73.488-34.418\r\n\t\tc-2.443-1.144-3.495-4.051-2.351-6.494c1.144-2.442,4.052-3.496,6.494-2.352l73.489,34.418c2.443,1.144,3.495,4.051,2.351,6.494\r\n\t\tC378.933,397.14,377.174,398.18,375.337,398.18z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M392.549,342.958h-83.72c-2.697,0-4.884-2.186-4.884-4.884c0-2.697,2.186-4.884,4.884-4.884h83.72\r\n\t\tc2.697,0,4.884,2.186,4.884,4.884C397.433,340.773,395.246,342.958,392.549,342.958z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M217.122,327.146c-0.694,0-1.398-0.148-2.068-0.462l-73.488-34.418\r\n\t\tc-2.443-1.144-3.495-4.051-2.351-6.494c1.144-2.442,4.052-3.495,6.494-2.352l73.488,34.418c2.443,1.144,3.495,4.051,2.351,6.494\r\n\t\tC220.719,326.105,218.959,327.146,217.122,327.146z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M136.664,398.18c-1.837,0-3.595-1.041-4.426-2.814c-1.144-2.443-0.091-5.35,2.351-6.494\r\n\t\tl73.488-34.418c2.443-1.144,5.35-0.091,6.494,2.352s0.091,5.35-2.351,6.494l-73.488,34.418\r\n\t\tC138.062,398.032,137.358,398.18,136.664,398.18z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M203.173,342.958h-83.72c-2.697,0-4.884-2.186-4.884-4.884c0-2.697,2.186-4.884,4.884-4.884h83.72\r\n\t\tc2.697,0,4.884,2.186,4.884,4.884C208.057,340.773,205.87,342.958,203.173,342.958z\" />\r\n  </g>\r\n  <g>\r\n    <ellipse style=\"fill:#5C5560;\" cx=\"193.567\" cy=\"261.036\" rx=\"6.977\" ry=\"16.976\" />\r\n    <ellipse style=\"fill:#5C5560;\" cx=\"334.493\" cy=\"261.036\" rx=\"6.977\" ry=\"16.976\" />\r\n  </g>\r\n  <path style=\"fill:#E86523;\"\r\n    d=\"M137.176,164.652c-0.265,0.433-0.544,0.852-0.809,1.284c-4.981,7.744-11.134,15.084-18.669,21.823\r\n\tC40.199,76.661,132.92,0.001,132.92,0.001s0,0.014,0.014,0.028c0.321,0.656,5.163,11.024,10.227,26.986\r\n\tc2.916,9.223,5.903,20.331,8.121,32.512c0.656,3.586,1.241,7.256,1.744,10.995C157.018,100.578,155.386,135.392,137.176,164.652z\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M137.176,164.652c-0.265,0.433-0.544,0.852-0.809,1.284c-6.391-1.619-11.498-5.023-12.572-11.582\r\n\tc-3.251-19.995,15.349-15.349,15.349-24.655c0-9.293-25.116,0-25.116-16.744s25.116-8.372,25.116-22.325\r\n\ts-26.037-15.809-20.456-29.763c5.582-13.954,32.596-1.34,32.596-1.34l1.744,10.995C157.018,100.578,155.386,135.392,137.176,164.652\r\n\tz\" />\r\n  <path style=\"fill:#FF8E4F;\"\r\n    d=\"M374.831,164.652c0.265,0.433,0.544,0.852,0.809,1.284c4.981,7.744,11.134,15.084,18.669,21.823\r\n\tC471.806,76.661,379.086,0.001,379.086,0.001s0,0.014-0.014,0.028c-0.321,0.656-5.163,11.024-10.227,26.986\r\n\tc-2.916,9.223-5.903,20.331-8.121,32.512c-0.656,3.586-1.241,7.256-1.744,10.995C354.989,100.578,356.622,135.392,374.831,164.652z\" />\r\n  <path style=\"fill:#FFFFFF;\" d=\"M374.831,164.652c0.265,0.433,0.544,0.852,0.809,1.284c6.391-1.619,11.498-5.023,12.572-11.582\r\n\tc3.251-19.995-15.349-15.349-15.349-24.655c0-9.293,25.116,0,25.116-16.744s-25.116-8.372-25.116-22.325S398.9,74.82,393.319,60.866\r\n\tc-5.582-13.954-32.596-1.34-32.596-1.34l-1.744,10.995C354.989,100.578,356.622,135.392,374.831,164.652z\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M271.27,338.87c0-16.677,11.098-30.753,26.308-35.268c-3.313-0.981-6.814-1.525-10.446-1.525\r\n\tc-13.113,0-24.617,6.866-31.133,17.194v39.198l0,0c6.516,10.328,18.019,17.194,31.133,17.194c3.632,0,7.132-0.543,10.446-1.525\r\n\tC282.368,369.623,271.27,355.546,271.27,338.87z\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetChickComponent {
    constructor() {
        this.option = PetType.Chick;
    }
}
CustomAvatarPetChickComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-chick]',
                template: "<svg:g>\r\n  C404.125,476.975,334.148,512,256,512c-78.169,0-148.156-35.035-195.103-90.258c-27.784-32.664-47.501-72.401-56.09-116.12\r\n  C1.651,289.573,0,272.98,0,256c0-58.89,19.884-113.131,53.3-156.379c20.668-26.749,46.519-49.309,76.048-66.142\r\n  C166.693,12.173,209.92,0.01,255.979,0H256c82.505,0,155.899,39.027,202.71,99.631C492.126,142.879,512,197.12,512,256z\"/>\r\n  <g>\r\n    <path style=\"fill:#FFB133;\"\r\n      d=\"M433.429,187.959c30.067,42.861,80.22,130.628,47.307,163.54s-57.989,25.076-57.989,25.076\" />\r\n    <path style=\"fill:#FFB133;\"\r\n      d=\"M79.612,187.959c-30.067,42.861-80.22,130.627-47.307,163.54s57.989,25.076,57.989,25.076\" />\r\n  </g>\r\n  <path style=\"fill:#FFDF5E;\" d=\"M455.659,347.418c0,25.527-1.578,50.395-4.577,74.355C404.125,476.975,334.148,512,256,512\r\n\tc-78.169,0-148.156-35.035-195.103-90.258c-2.999-23.949-4.577-48.818-4.577-74.324c0-93.602,21.274-178.563,55.871-241.037\r\n\tc20.292-36.645,45.171-65.557,73.038-83.926C207.214,7.941,231.069,0,255.979,0H256c24.91,0,48.755,7.941,70.74,22.434\r\n\tc27.867,18.38,52.757,47.303,73.049,83.958C434.395,168.866,455.659,253.816,455.659,347.418z\" />\r\n  <path style=\"fill:#FFB133;\" d=\"M256,512c-78.169,0-148.156-35.035-195.103-90.258c-2.999-23.949-4.577-48.818-4.577-74.324\r\n\tC56.32,155.554,145.701,0.01,255.979,0c-64.575,0.01-116.903,155.554-116.903,347.418c0,25.506,0.92,50.375,2.675,74.324\r\n\tC169.242,476.965,210.223,512,256,512z\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M507.193,305.622C484.091,423.257,380.406,512,256,512S27.909,423.257,4.807,305.622l83.728,41.796\r\n\tl83.728-41.796l83.728,41.796l83.738-41.796l83.728,41.796L507.193,305.622z\" />\r\n  <path style=\"fill:#D8D8D8;\" d=\"M256,512C131.594,512,27.909,423.257,4.807,305.622l83.728,41.796l25.64-12.801\r\n\tC128.374,443.422,199.147,512,256,512z\" />\r\n  <path style=\"fill:#FFB133;\" d=\"M399.788,106.392l-60.061,29.978L255.99,94.574l-83.728,41.796l-60.071-29.989\r\n\tc20.292-36.645,45.171-65.557,73.038-83.926c22.476-6.457,46.205-9.905,70.75-9.916H256c24.545,0,48.274,3.459,70.74,9.895\r\n\tC354.607,40.814,379.496,69.736,399.788,106.392z\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M458.71,99.631l-35.255-17.596l-83.728,41.796L255.99,82.035l-83.728,41.796L88.534,82.035\r\n\tL53.3,99.621C100.112,39.027,173.495,0.01,255.979,0H256C338.505,0,411.899,39.027,458.71,99.631z\" />\r\n  <path style=\"fill:#D8D8D8;\" d=\"M129.348,33.479c-7.022,18.62-12.278,39.152-15.172,61.356l-25.642-12.8L53.3,99.621\r\n\tC73.968,72.871,99.819,50.312,129.348,33.479z\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"338.819\" cy=\"168.584\" rx=\"27.251\" ry=\"30.047\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"348.473\" cy=\"166.055\" rx=\"8.894\" ry=\"15.332\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"173.16\" cy=\"168.584\" rx=\"27.251\" ry=\"30.047\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"182.805\" cy=\"166.055\" rx=\"8.894\" ry=\"15.332\" />\r\n  <polygon style=\"fill:#E86523;\" points=\"255.99,256.414 307.082,208.108 204.897,208.108 \" />\r\n  <polygon style=\"fill:#FF8E4F;\" points=\"255.99,113.793 204.897,208.108 307.082,208.108 \" />\r\n  <polygon style=\"fill:#E86523;\" points=\"255.99,113.793 240.944,208.108 204.897,208.108 \" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetRabbitComponent {
    constructor() {
        this.option = PetType.Rabbit;
    }
}
CustomAvatarPetRabbitComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-rabbit]',
                template: "<svg:g>\r\n  <path style=\"fill:#6EB585;\"\r\n    d=\"M512,256c0,23.165-3.082,45.62-8.85,66.957c-0.888,3.291-1.839,6.541-2.853,9.77\r\n\tc-4.639,14.817-10.606,29.059-17.732,42.58c-1.536,2.884-3.114,5.747-4.744,8.568c-17.136,29.654-40.04,55.557-67.197,76.163\r\n\tc-39.56,30.03-88.106,48.818-140.905,51.597c-4.545,0.24-9.122,0.366-13.72,0.366c-4.598,0-9.174-0.125-13.72-0.366\r\n\tc-43.353-2.288-83.843-15.36-118.847-36.592C49.434,430.164,0,348.86,0,256C0,114.615,114.615,0,256,0S512,114.615,512,256z\" />\r\n  <path style=\"fill:#C6C6C6;\"\r\n    d=\"M113.876,0.001l276.347,243.084c0,0-148.374,85.315-237.399-3.709S113.876,0.001,113.876,0.001z\" />\r\n  <path style=\"fill:#D8D8D8;\"\r\n    d=\"M22.997,0.001l276.347,243.084c0,0-148.374,85.315-237.399-3.709S22.997,0.001,22.997,0.001z\" />\r\n  <path style=\"fill:#F9B7D2;\" d=\"M211.167,214.82L48.17,75.332c0,0-45.333,152.147,119.112,189.64L211.167,214.82z\" />\r\n  <path style=\"fill:#D8D8D8;\" d=\"M410.624,280.054v179.984c-39.56,30.03-88.106,48.818-140.905,51.597h-27.439\r\n\tc-43.353-2.288-83.843-15.36-118.847-36.592V280.054c0-79.308,64.293-143.6,143.6-143.6\r\n\tC346.331,136.453,410.624,200.746,410.624,280.054z\" />\r\n  <path style=\"fill:#C6C6C6;\" d=\"M290.764,138.407c-68.012,11.316-119.86,70.426-119.86,141.646v217.454\r\n\tc-16.687-5.872-32.569-13.427-47.47-22.465V280.054c0-79.308,64.293-143.6,143.6-143.6\r\n\tC275.111,136.453,283.042,137.122,290.764,138.407z\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"357.919\" cy=\"239.323\" rx=\"20.431\" ry=\"31.799\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"365.16\" cy=\"236.638\" rx=\"6.669\" ry=\"16.226\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"272.896\" cy=\"239.323\" rx=\"20.431\" ry=\"31.799\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"280.127\" cy=\"236.638\" rx=\"6.669\" ry=\"16.226\" />\r\n  <circle style=\"fill:#3C363F;\" cx=\"331.724\" cy=\"302.467\" r=\"33.35\" />\r\n  <circle style=\"fill:#C6C6C6;\" cx=\"331.724\" cy=\"369.162\" r=\"33.35\" />\r\n  <g>\r\n    <path style=\"fill:#BA4C20;\" d=\"M407.146,316.915c-1.837,0-3.596-1.041-4.426-2.814c-1.144-2.443-0.091-5.35,2.351-6.494\r\n\t\tl73.488-34.418c2.442-1.144,5.35-0.091,6.494,2.352c1.144,2.443,0.091,5.35-2.351,6.494l-73.488,34.418\r\n\t\tC408.544,316.766,407.839,316.915,407.146,316.915z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M482.565,375.306c-1.536,2.884-3.114,5.747-4.744,8.568l-65.776-30.804\r\n\t\tc-2.435-1.149-3.49-4.054-2.351-6.499c1.149-2.435,4.054-3.49,6.499-2.351L482.565,375.306z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M503.15,322.957c-0.888,3.291-1.839,6.541-2.853,9.77h-79.203c-2.696,0-4.88-2.184-4.88-4.88\r\n\t\tc0-2.696,2.184-4.89,4.88-4.89H503.15z\" />\r\n  </g>\r\n  <path style=\"fill:#FFFFFF;\" d=\"M382.544,274.401c-21.405,0-40.182,11.208-50.817,28.065c-10.635-16.857-29.412-28.065-50.817-28.065\r\n\tc-33.168,0-60.057,26.888-60.057,60.057s26.888,60.057,60.057,60.057c21.405,0,40.182-11.208,50.817-28.065\r\n\tc10.635,16.857,29.412,28.065,50.817,28.065c33.168,0,60.057-26.888,60.057-60.057C442.601,301.288,415.713,274.401,382.544,274.401\r\n\tz\" />\r\n  <g>\r\n    <path style=\"fill:#EAEAEA;\" d=\"M255.018,334.456c0-27.22,18.114-50.197,42.942-57.568c-5.407-1.601-11.122-2.489-17.05-2.489\r\n\t\tc-33.168,0-60.057,26.888-60.057,60.057s26.888,60.057,60.057,60.057c5.928,0,11.642-0.887,17.05-2.488\r\n\t\tC273.133,384.654,255.018,361.677,255.018,334.456z\" />\r\n    <path style=\"fill:#EAEAEA;\" d=\"M356.652,334.456c0-27.22,18.114-50.197,42.942-57.568c-5.407-1.601-11.122-2.489-17.05-2.489\r\n\t\tc-21.405,0-40.182,11.208-50.817,28.065v63.983l0,0c10.635,16.857,29.412,28.065,50.817,28.065c5.928,0,11.642-0.887,17.05-2.488\r\n\t\tC374.766,384.654,356.652,361.677,356.652,334.456z\" />\r\n  </g>\r\n  <g>\r\n    <path style=\"fill:#BA4C20;\" d=\"M277.141,316.915c-0.694,0-1.398-0.148-2.068-0.462l-73.488-34.418\r\n\t\tc-2.443-1.144-3.495-4.051-2.351-6.494c1.144-2.442,4.052-3.495,6.494-2.352l73.488,34.418c2.443,1.144,3.495,4.051,2.351,6.494\r\n\t\tC280.738,315.875,278.978,316.915,277.141,316.915z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M196.683,387.95c-1.837,0-3.595-1.041-4.426-2.814c-1.144-2.443-0.091-5.35,2.351-6.494\r\n\t\tl73.488-34.418c2.443-1.144,5.35-0.091,6.494,2.352c1.144,2.443,0.091,5.35-2.351,6.494l-73.488,34.418\r\n\t\tC198.081,387.801,197.377,387.95,196.683,387.95z\" />\r\n    <path style=\"fill:#BA4C20;\" d=\"M263.192,332.728h-83.72c-2.697,0-4.884-2.186-4.884-4.884c0-2.697,2.186-4.884,4.884-4.884h83.72\r\n\t\tc2.697,0,4.884,2.186,4.884,4.884S265.889,332.728,263.192,332.728z\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetRatComponent {
    constructor() {
        this.option = PetType.Rat;
    }
}
CustomAvatarPetRatComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-rat]',
                template: "<svg:g>\r\n  <circle style=\"fill:#BA4C20;\" cx=\"256\" cy=\"256\" r=\"256\" />\r\n  <path style=\"fill:#C6C6C6;\" d=\"M490.151,359.633c-7.461,16.854-16.687,32.737-27.449,47.428C416.131,470.685,340.887,512,256,512\r\n      S95.869,470.685,49.288,407.061c-10.752-14.691-19.978-30.574-27.439-47.417C74,286.647,159.441,239.052,256,239.052\r\n      S438,286.636,490.151,359.633z\" />\r\n  <path style=\"fill:#D8D8D8;\" d=\"M71.411,107.846c8.595,25.901,25.983,64.508,55.105,73.196h0.011l64.355-81.474\r\n      c0,0-32.482-43.958-106.251-58.009c0,0-0.317,0.351-0.855,0.996C68.555,60.657,63.964,85.4,71.411,107.846z\" />\r\n  <path style=\"fill:#F9B7D2;\" d=\"M71.411,107.846c8.595,25.901,25.983,64.508,55.105,73.196h0.011l17.529-24.286\r\n      c-3.22-61.627-60.28-114.202-60.28-114.202C68.555,60.657,63.964,85.4,71.411,107.846z\" />\r\n  <path style=\"fill:#C6C6C6;\" d=\"M440.582,107.846c-8.595,25.901-25.983,64.508-55.105,73.196h-0.011l-64.355-81.474\r\n      c0,0,32.482-43.958,106.251-58.009c0,0,0.317,0.351,0.855,0.996C443.439,60.657,448.029,85.4,440.582,107.846z\" />\r\n  <path style=\"fill:#F9B7D2;\" d=\"M440.582,107.846c-8.595,25.901-25.983,64.508-55.105,73.196h-0.011l-17.529-24.286\r\n      c3.22-61.627,60.28-114.202,60.28-114.202C443.439,60.657,448.029,85.4,440.582,107.846z\" />\r\n  <g>\r\n    <polyline style=\"fill:#FFFFFF;\" points=\"212.744,394.909 231.094,444.713 250.463,444.713 250.463,343.998 \t\" />\r\n    <polyline style=\"fill:#FFFFFF;\" points=\"299.248,394.909 280.899,444.713 261.531,444.713 261.531,343.998 \t\" />\r\n  </g>\r\n  <path style=\"fill:#D8D8D8;\" d=\"M441.937,306.835l-78.727,78.727c-6.561,6.561-14.291,11.683-22.707,15.178\r\n      c-8.416,3.482-17.503,5.324-26.793,5.324c-18.848,0-36.903-7.609-50.078-21.093l-7.636-7.811l-7.636,7.811\r\n      c-6.588,6.735-14.399,12.018-22.908,15.609c-8.523,3.576-17.745,5.485-27.169,5.485c-18.566,0-36.379-7.38-49.5-20.502\r\n      l-78.727-78.727c-13.712-13.712-15.447-35.33-4.1-51.059l109.795-152.103c10.714-14.828,27.896-23.621,46.193-23.621h68.106\r\n      c18.297,0,35.477,8.792,46.193,23.621l109.795,152.103C457.384,271.505,455.65,293.123,441.937,306.835z\" />\r\n  <path style=\"fill:#C6C6C6;\" d=\"M170.858,307.252c-2.612-5.115-4.672-10.45-6.251-15.954l30.445,4.302l40.331-23.665l-14.777-12.863\r\n      c-9.943-8.655-15.517-21.288-15.208-34.466l0.303-12.902c0.194-8.304-1.948-16.496-6.185-23.641l0,0\r\n      c-8.409-14.184-8.203-31.842,0.416-45.9c22.215-36.229,47.829-62.112,59.653-62.112h-37.642c-18.297,0-35.477,8.792-46.193,23.621\r\n      L65.956,255.776c-11.347,15.729-9.612,37.347,4.1,51.059l78.727,78.727c13.121,13.121,30.934,20.502,49.5,20.502\r\n      c9.424,0,18.646-1.909,27.169-5.485c8.51-3.589,16.32-8.873,22.908-15.609l7.636-7.811\r\n      C255.997,377.159,213.877,391.503,170.858,307.252z\" />\r\n  <g>\r\n    <path style=\"fill:#EAEAEA;\" d=\"M441.937,306.835l-78.727,78.727c-6.561,6.561-14.291,11.683-22.707,15.178\r\n        c-8.416,3.482-17.503,5.324-26.793,5.324c-18.848,0-36.903-7.609-50.078-21.093l-7.636-7.811l-7.636,7.811\r\n        c-6.588,6.735-14.399,12.018-22.908,15.609c-8.523,3.576-17.745,5.485-27.169,5.485c-18.566,0-36.379-7.38-49.5-20.502\r\n        l-78.727-78.727l14.532-3.751c10.714-2.769,21.483-5.27,32.292-7.501c0.014,0,0.014,0,0.014,0\r\n        c14.949-3.105,29.967-5.686,45.036-7.771c0.551-0.08,1.116-0.161,1.68-0.229c15.823-2.151,31.7-3.751,47.618-4.786\r\n        c29.805-1.962,59.731-1.962,89.535,0c16.482,1.075,32.924,2.743,49.298,5.014c15.071,2.083,30.087,4.665,45.036,7.771\r\n        c0,0,0,0,0.014,0c10.808,2.232,21.577,4.732,32.292,7.501L441.937,306.835z\" />\r\n    <path style=\"fill:#EAEAEA;\" d=\"M428.211,320.561c-5.592,1.95-9.989,2.823-9.989,2.823l-134.438-18.822h-55.576l-54.743,7.663\r\n        L93.77,323.384c0,0-4.396-0.874-9.989-2.823c-11.374-3.953-27.708-12.328-22.37-26.713c6.467-17.396,38.892-5.459,50.951-0.309\r\n        c-5.216-2.931-11.938-9.075-2.46-18.552c9.841-9.827,31.808,0.685,43.813,7.663c-4.813-4.181-8.577-10.634-0.793-18.418\r\n        c1.989-1.989,4.611-3.025,7.636-3.348c12.099-1.277,30.705,8.981,41.689,15.891c-3.509-3.63-6.144-8.954-3.616-16.132\r\n        c5.377-15.231,57.364,8.967,57.364,8.967s51.987-24.199,57.364-8.967c2.528,7.178-0.108,12.502-3.616,16.132\r\n        c13.726-8.644,39.363-22.491,49.325-12.543c7.783,7.783,4.02,14.237-0.793,18.418c12.005-6.977,33.972-17.491,43.813-7.663\r\n        c9.478,9.478,2.756,15.621-2.46,18.552c12.059-5.149,44.485-17.087,50.951,0.309C455.918,308.233,439.584,316.609,428.211,320.561z\r\n        \" />\r\n    <ellipse style=\"fill:#EAEAEA;\" cx=\"256\" cy=\"271.935\" rx=\"20.614\" ry=\"24.283\" />\r\n  </g>\r\n  <path style=\"fill:#D8D8D8;\" d=\"M225.452,400.578c-8.523,3.576-17.745,5.485-27.169,5.485c-18.566,0-36.379-7.38-49.5-20.502l-65-65\r\n      c-11.374-3.953-27.708-12.328-22.37-26.713c6.467-17.396,38.892-5.459,50.951-0.309c-5.216-2.931-11.938-9.075-2.46-18.552\r\n      c9.841-9.827,31.808,0.685,43.813,7.663c-4.813-4.181-8.577-10.634-0.793-18.418c1.99-1.989,4.611-3.025,7.636-3.348\r\n      C160.56,354.753,225.452,400.578,225.452,400.578z\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"298.517\" cy=\"214.883\" rx=\"20.431\" ry=\"31.799\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"305.748\" cy=\"212.208\" rx=\"6.669\" ry=\"16.226\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"213.483\" cy=\"214.883\" rx=\"20.431\" ry=\"31.799\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"220.714\" cy=\"212.208\" rx=\"6.669\" ry=\"16.226\" />\r\n  <path style=\"fill:#E86523;\"\r\n    d=\"M290.454,347.306c-20.677-14.279-48.238-14.279-68.915,0c-4.789,3.307-5.409,10.153-1.294,14.269\r\n      l18.334,18.334c9.619,9.619,25.215,9.619,34.835,0l18.334-18.334C295.863,357.46,295.243,350.613,290.454,347.306z\" />\r\n  <ellipse style=\"fill:#FF8E4F;\" cx=\"264.955\" cy=\"355.203\" rx=\"15.237\" ry=\"8.515\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetSnakeComponent {
    constructor() {
        this.option = PetType.Snake;
    }
}
CustomAvatarPetSnakeComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-snake]',
                template: "<svg:g>\r\n  <path style=\"fill:#FFDF5E;\"\r\n    d=\"M490,245c0,59.02-20.87,113.17-55.64,155.46C389.43,455.13,321.29,490,245,490   c-73.16,0-138.83-32.07-183.72-82.91C23.14,363.9,0,307.15,0,245c0-37.12,8.25-72.31,23.03-103.84C62.11,57.76,146.81,0,245,0   c25.09,0,49.29,3.77,72.08,10.78C417.21,41.55,490,134.78,490,245z\" />\r\n  <path style=\"fill:#EA5A52;\"\r\n    d=\"M423.221,109.404c-16.237-7.49-38.258,4.913-66.135,20.613c-1.977,1.113-3.987,2.245-6.03,3.391   c-7.724,4.328-13.932,5.177-18.454,2.528C318,127.38,318,86.653,318,73.269h-10c0,27.862,2.222,61.144,19.547,71.294   c3.313,1.941,6.94,2.911,10.863,2.911c5.319,0,11.182-1.783,17.534-5.343c2.05-1.149,4.066-2.284,6.049-3.401   c21.014-11.836,38.369-21.604,50.304-21.588l-2.717,31.133l12.27-28.018c5.05,4.035,21.057,23.05,21.057,23.05   C439.256,124.687,433,113.914,423.221,109.404z\" />\r\n  <circle style=\"fill:#3C363F;\" cx=\"358.537\" cy=\"50.966\" r=\"16.369\" />\r\n  <path style=\"fill:#6EB585;\"\r\n    d=\"M443.72,347.32c-0.05,18.66-3.35,36.54-9.36,53.14C389.43,455.13,321.29,490,245,490   c-73.16,0-138.83-32.07-183.72-82.91h222.31c33.05,0,60.62-26.24,61.13-59.28c0.51-33.63-26.7-61.16-60.21-61.16h-116.6   c-79.09,0-144.44-63.4-144.9-142.48c-0.01-1.01,0-2.01,0.02-3.01C24.19,63.12,88.04,0,166.34,0h105.79   c16.18,0,31.46,3.89,44.95,10.78c32.08,16.37,54.04,49.73,54.04,88.21H167.17c-24.21,0-44.58,19.07-45.15,43.27   c-0.59,24.93,19.51,45.4,44.32,45.4h118.17C372.45,187.66,443.96,259.33,443.72,347.32z\" />\r\n  <g>\r\n    <path style=\"fill:#488C5B;\"\r\n      d=\"M167.912,286.654h35.998c-79.089,0-144.447-63.401-144.901-142.489    C58.553,64.752,123.024,0.001,202.334,0.001h-35.998c-79.31,0-143.781,64.751-143.324,144.164    C23.466,223.253,88.823,286.654,167.912,286.654z\" />\r\n    <path style=\"fill:#488C5B;\"\r\n      d=\"M283.594,407.086h35.998c33.044,0,60.619-26.24,61.123-59.281    c0.513-33.63-26.694-61.151-60.208-61.151h-35.998c33.513,0,60.721,27.522,60.208,61.151    C344.212,380.846,316.638,407.086,283.594,407.086z\" />\r\n  </g>\r\n  <circle style=\"fill:#3C363F;\" cx=\"278.573\" cy=\"50.966\" r=\"16.369\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetParrotComponent {
    constructor() {
        this.option = PetType.Parrot;
    }
}
CustomAvatarPetParrotComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-parrot]',
                template: "<svg:g>\r\n  <path style=\"fill:#60C5E8;\" d=\"M512,256c0,49.368-14.05,95.444-38.392,134.449c-0.675,1.08-1.36,2.15-2.046,3.219\r\n    c-9.045,14.03-19.44,27.135-30.998,39.077c-0.114,0.125-0.228,0.239-0.343,0.363c-11.496,11.859-24.134,22.597-37.748,32.036\r\n    c-0.779,0.54-1.558,1.08-2.347,1.61c-4.808,3.261-9.72,6.355-14.746,9.284c-0.717,0.415-1.433,0.831-2.16,1.236\r\n    c-10.011,5.701-20.447,10.738-31.247,15.047c-29.191,11.683-61.04,18.1-94.395,18.1c-54.197,0-104.427-16.948-145.695-45.827\r\n    c-19.481-13.624-36.969-29.918-51.912-48.34C24.436,372.514,3.158,316.739,3.158,256c0-140.513,113.908-254.421,254.421-254.421\r\n    S512,115.487,512,256z\" />\r\n  <path style=\"fill:#D33531;\" d=\"M0,131.569c7.579,32.461,72.942,44.95,145.994,27.896s126.127-57.196,118.549-89.657\" />\r\n  <path style=\"fill:#EA5A52;\" d=\"M351.974,52.588v439.733c-29.191,11.683-61.04,18.1-94.395,18.1\r\n    c-54.197,0-104.427-16.948-145.695-45.827c-19.481-13.624-36.969-29.918-51.912-48.34V267.579\r\n    c0-84.187,48.382-157.066,118.861-192.353c28.931-14.486,61.58-22.638,96.13-22.638L351.974,52.588L351.974,52.588z\" />\r\n  <path style=\"fill:#D33531;\" d=\"M326.875,52.588c-34.549,0-67.198,8.152-96.13,22.638c-70.48,35.287-118.861,108.165-118.861,192.353\r\n    v197.015c-19.481-13.624-36.969-29.918-51.912-48.34V267.579c0-84.187,48.382-157.066,118.861-192.353\r\n    c28.931-14.486,61.58-22.638,96.13-22.638L326.875,52.588L326.875,52.588z\" />\r\n  <path style=\"fill:#EA5A52;\" d=\"M3.304,52.591c0,33.334,60.813,60.357,135.829,60.357s135.829-27.023,135.829-60.357\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M351.972,52.591v264.017h-16.554c-68.124,0-128.186-34.515-163.652-87.013\r\n    c-6.681-9.889-12.489-28.259-17.314-48.811c-15.3-65.167,34.157-127.874,101.095-128.19c0.427-0.002,0.853-0.003,1.28-0.003\r\n    L351.972,52.591L351.972,52.591z\" />\r\n  <path style=\"fill:#5C5560;\" d=\"M506.943,207.567v58.725H351.964V52.588c42.795,0,81.539,17.353,109.588,45.391\r\n    C489.59,126.027,506.943,164.772,506.943,207.567z\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"297.963\" cy=\"136.712\" rx=\"31.496\" ry=\"44.799\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"308.514\" cy=\"136.712\" rx=\"15.743\" ry=\"22.398\" />\r\n  <path style=\"fill:#3C363F;\" d=\"M506.943,266.291H351.964v-74.395C351.964,220.973,413.607,266.291,506.943,266.291z\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetTurtleComponent {
    constructor() {
        this.option = PetType.Turtle;
    }
}
CustomAvatarPetTurtleComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-turtle]',
                template: "<svg:g>\r\n  <path style=\"fill:#60C5E8;\" d=\"M512,256c0,53.279-16.279,102.765-44.136,143.735c-7.565,11.149-15.997,21.65-25.182,31.441\r\n    l-0.01,0.01c-8.411,8.955-17.45,17.303-27.063,24.973c-43.76,34.952-99.244,55.839-159.607,55.839\r\n    c-39.163,0-76.267-8.788-109.452-24.513c-29.205-13.834-55.379-33.029-77.228-56.32c0,0-0.01,0-0.01-0.01\r\n    c-9.195-9.791-17.617-20.292-25.182-31.43C16.272,358.755,0.003,309.279,0.003,256c0-141.384,114.614-255.998,255.998-255.998\r\n    S512,114.616,512,256z\" />\r\n  <g>\r\n    <path style=\"fill:#6EB585;\" d=\"M370.052,126.852l-24.858,76.507c-6.896,21.222-26.666,35.579-48.974,35.579h-80.446\r\n      c-17.199,0-32.893-8.537-42.329-22.183c-2.811-4.044-5.068-8.537-6.646-13.396l-24.858-76.507\r\n      c-6.896-21.222,0.658-44.46,18.704-57.574l65.086-47.281c8.746-6.363,18.996-9.634,29.299-9.812h0.052\r\n      c10.919-0.209,21.901,3.062,31.18,9.812l65.086,47.281C369.393,82.391,376.948,105.63,370.052,126.852z\" />\r\n    <path style=\"fill:#6EB585;\" d=\"M504.158,209.577L455.4,160.818c-10.452-10.452-27.398-10.452-37.85,0l-88.681,88.681l86.61,86.61\r\n      l88.68-88.68C514.61,236.975,514.61,220.029,504.158,209.577z\" />\r\n  </g>\r\n  <path style=\"fill:#488C5B;\" d=\"M482.956,188.376l-27.558-27.558c-10.452-10.452-27.398-10.452-37.85,0l-88.681,88.681l27.558,27.558\r\n    l88.68-88.68C455.558,177.923,472.504,177.923,482.956,188.376z\" />\r\n  <path style=\"fill:#6EB585;\" d=\"M56.598,160.818L7.839,209.577c-10.452,10.452-10.452,27.398,0,37.851l88.68,88.68l86.61-86.61\r\n    l-88.68-88.681C83.997,150.366,67.051,150.366,56.598,160.818z\" />\r\n  <g>\r\n    <path style=\"fill:#488C5B;\" d=\"M35.397,182.019L7.839,209.577c-10.452,10.452-10.452,27.398,0,37.851l88.68,88.68l27.558-27.558\r\n      l-88.68-88.681C24.945,209.418,24.945,192.471,35.397,182.019z\" />\r\n    <path style=\"fill:#488C5B;\" d=\"M226.745,190.454c43.175,43.175-3.323,38.776-53.3,26.3c-2.811-4.044-5.068-8.537-6.646-13.395\r\n      l-24.858-76.507c-6.896-21.222,0.658-44.46,18.704-57.574l65.086-47.281c8.746-6.363,18.996-9.634,29.299-9.812\r\n      C224.112,14.296,149.736,113.446,226.745,190.454z\" />\r\n  </g>\r\n  <path style=\"fill:#FF8E4F;\" d=\"M468.094,389.757c0,3.344-0.073,6.666-0.23,9.979c-7.565,11.149-15.997,21.65-25.182,31.441\r\n    l-0.01,0.01c-8.411,8.955-17.45,17.303-27.063,24.973c-43.76,34.952-99.244,55.839-159.607,55.839\r\n    c-73.623,0-139.984-31.075-186.68-80.833c-9.195-9.791-17.627-20.302-25.192-31.441c-0.157-3.302-0.23-6.625-0.23-9.968\r\n    c0-117.132,94.96-212.092,212.103-212.092C373.134,177.665,468.094,272.624,468.094,389.757z\" />\r\n  <path style=\"fill:#BA4C20;\" d=\"M447.196,389.757c0,14.221-1.557,28.087-4.524,41.43c-8.411,8.955-17.45,17.303-27.063,24.973\r\n    c-43.76,34.952-99.244,55.839-159.607,55.839c-73.623,0-139.984-31.075-186.68-80.833c-2.967-13.343-4.524-27.199-4.524-41.409\r\n    c0-77.792,46.717-144.895,113.58-174.716c3.939-1.755,7.941-3.385,12.016-4.88c20.469-7.502,42.569-11.598,65.609-11.598\r\n    c27.616,0,53.895,5.883,77.625,16.467C400.479,244.851,447.196,311.954,447.196,389.757z\" />\r\n  <g>\r\n    <path style=\"fill:#A03510;\" d=\"M346.124,389.759c0,49.697-40.428,90.129-90.125,90.129c-10.861,0-21.277-1.931-30.927-5.467\r\n      c-34.512-12.648-59.204-45.826-59.204-84.662c0-38.831,24.691-72.009,59.204-84.657c9.649-3.536,20.066-5.467,30.927-5.467\r\n      C305.696,299.635,346.124,340.067,346.124,389.759z\" />\r\n    <path style=\"fill:#A03510;\" d=\"M333.627,215.03c-15.694,26.551-44.617,44.387-77.625,44.387c-10.867,0-21.284-1.933-30.929-5.465\r\n      c-19.675-7.22-36.164-21.107-46.696-38.912c3.939-1.755,7.941-3.385,12.016-4.88c20.469-7.502,42.569-11.598,65.609-11.598\r\n      C283.618,198.562,309.897,204.445,333.627,215.03z\" />\r\n  </g>\r\n  <path style=\"fill:#E86523;\" d=\"M132.705,389.757c0,35.244,4.995,68.482,13.845,97.729c-29.205-13.834-55.379-33.029-77.228-56.32\r\n    c0,0-0.01,0-0.01-0.01c-9.195-9.791-17.617-20.292-25.182-31.43c-0.157-3.302-0.23-6.625-0.23-9.968\r\n    c0-117.132,94.96-212.092,212.103-212.092C187.906,177.665,132.705,272.624,132.705,389.757z\" />\r\n  <g>\r\n    <path style=\"fill:#A03510;\" d=\"M132.705,389.757c0,35.244,4.995,68.493,13.845,97.729c-29.205-13.834-55.379-33.029-77.228-56.32\r\n      c0,0-0.01,0-0.01-0.01c-2.957-13.333-4.514-27.188-4.514-41.399c0-82.379,52.38-152.763,125.596-179.596\r\n      C155.734,247.704,132.705,314.107,132.705,389.757z\" />\r\n    <path style=\"fill:#A03510;\" d=\"M447.196,389.757c0,14.211-1.557,28.076-4.514,41.419c-8.411,8.955-17.46,17.314-27.073,24.983\r\n      c-17.972-16.467-29.267-40.145-29.267-66.403c0-10.856,1.943-21.284,5.475-30.929c7.22-19.665,21.096-36.153,38.912-46.696\r\n      c1.755,3.939,3.385,7.952,4.88,12.016C443.111,344.628,447.196,366.717,447.196,389.757z\" />\r\n  </g>\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"196.576\" cy=\"103.224\" rx=\"16.457\" ry=\"21.42\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"200.588\" cy=\"99.734\" rx=\"6.154\" ry=\"8.011\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"315.422\" cy=\"103.224\" rx=\"16.457\" ry=\"21.42\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"319.434\" cy=\"99.734\" rx=\"6.154\" ry=\"8.011\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetBirdComponent {
    constructor() {
        this.option = PetType.Bird;
    }
}
CustomAvatarPetBirdComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-bird]',
                template: "<svg:g>\r\n  <path style=\"fill:#FFDF5E;\" d=\"M511.999,256c0,139.827-112.106,253.48-251.348,255.956c-1.546,0.031-3.093,0.042-4.65,0.042\r\n    c-89.411,0-168.123-45.839-213.91-115.304C15.489,356.32,0.004,307.962,0.004,256c0-141.384,114.614-255.998,255.998-255.998\r\n    S511.999,114.616,511.999,256z\" />\r\n  <path style=\"fill:#FF8E4F;\" d=\"M354.222,61.444c0,0,29.284-14.724,42.879-47.632c4.507-10.91,20.774-8.514,22.029,3.222\r\n    c2.622,24.527-5.098,59.579-46.816,101.297\" />\r\n  <g>\r\n    <path style=\"fill:#60C5E8;\" d=\"M377.094,253.764c-35.714,35.714-86.36,47.375-131.823,34.993\r\n      c-22.068-5.998-42.924-17.669-60.248-34.993c-53.049-53.039-53.049-139.033,0-192.072c30.218-30.218,71.126-43.217,110.539-38.995\r\n      h0.01c29.769,3.176,58.702,16.175,81.522,38.995C430.132,114.731,430.132,200.725,377.094,253.764z\" />\r\n    <path style=\"fill:#60C5E8;\" d=\"M377.094,443.317c-11.442,11.442-23.667,21.64-36.488,30.605\r\n      c-24.795,17.324-51.847,29.999-79.955,38.034c-1.546,0.031-3.093,0.042-4.65,0.042c-34.659,0-67.709-6.886-97.854-19.372\r\n      c-47.637-19.717-88.021-53.394-116.056-95.931l142.93-142.93l39.204-39.204L377.094,61.692c0.895,0.895,1.773,1.801,2.637,2.716\r\n      c28.845,29.651,49.539,64.267,62.04,101.073C473.798,259.73,452.242,368.169,377.094,443.317z\" />\r\n  </g>\r\n  <path style=\"fill:#3AA5C9;\" d=\"M274.935,272.812c0,0-12.518,5.235-29.664,15.945c-45.286,28.285-122.827,94.771-87.123,203.868\r\n    c-47.637-19.717-88.021-53.394-116.056-95.931l142.93-142.93c-53.049-53.039-53.049-139.033,0-192.072\r\n    c30.218-30.218,71.126-43.217,110.539-38.995c-60.729,0.01-115.21,105.085-71.335,191.863\r\n    C234.884,235.645,251.341,255.655,274.935,272.812z\" />\r\n  <g>\r\n    <path style=\"fill:#EAEAEA;\" d=\"M377.094,443.317c-11.442,11.442-23.667,21.64-36.488,30.605\r\n      c-32.036-94.259-10.47-202.698,64.679-277.836c11.442-11.442,23.667-21.65,36.488-30.605\r\n      C473.798,259.73,452.242,368.169,377.094,443.317z\" />\r\n    <path style=\"fill:#EAEAEA;\" d=\"M262.012,240.789c46.279,46.279,17.677,125.852-47.521,131.565\r\n      c-55.135,4.832-111.915-13.463-154.586-54.887c-0.728-0.694-1.446-1.399-2.151-2.105c-27.862-27.862-45.627-61.97-53.33-97.813\r\n      c-10.838-50.37-1.759-104.163,27.214-148.795c0.074-0.114,0.148-0.228,0.223-0.342c11.764-18.042,37.253-20.521,52.484-5.29\r\n      L262.012,240.789z\" />\r\n  </g>\r\n  <circle style=\"fill:#3C363F;\" cx=\"308.827\" cy=\"95.273\" r=\"35.062\" />\r\n  <circle style=\"fill:#5C5560;\" cx=\"320.707\" cy=\"88.732\" r=\"15.969\" />\r\n  <path style=\"fill:#C6C6C6;\" d=\"M219.317,291.132c-15.614,15.614-78.07-65.926-98.888-45.107s57.667,79.389,38.168,98.877\r\n    c-19.072,19.072-66.712,3.158-98.692-27.435c-0.728-0.694-1.446-1.399-2.151-2.105c-27.862-27.862-45.627-61.97-53.33-97.813\r\n    c-10.838-50.37-1.759-104.163,27.214-148.795C67.214,104.33,147.782,184.898,168,205.116\r\n    C194.162,231.279,234.931,275.518,219.317,291.132z\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetFleaComponent {
    constructor() {
        this.option = PetType.Flea;
    }
}
CustomAvatarPetFleaComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-flea]',
                template: "<svg:g>\r\n  <path style=\"fill:#6095C4;\"\r\n    d=\"M493.339,256v1.053c-0.088,19.139-2.418,37.741-6.747,55.554\r\n    c-16.994,69.906-64.739,127.79-128.102,158.483c-6.942,3.364-14.069,6.396-21.362,9.097c-7.332,2.701-14.839,5.05-22.493,7.03\r\n    c-4.378,1.141-8.794,2.155-13.269,3.042c-0.214,0.049-0.439,0.098-0.653,0.137c-3.412,0.673-6.864,1.267-10.335,1.794\r\n    c-2.71,0.41-5.431,0.77-8.161,1.082c-9.097,1.053-18.359,1.599-27.748,1.599c-1.716,0-3.422-0.019-5.128-0.059\r\n    c-2.272-0.049-4.524-0.127-6.776-0.234c-4.855-0.244-9.682-0.624-14.449-1.16c-0.468-0.039-0.926-0.098-1.394-0.146\r\n    c-2.73-0.312-5.45-0.682-8.161-1.092c-9.799-1.482-19.402-3.549-28.781-6.181c-3.832-1.072-7.624-2.242-11.378-3.51\r\n    c-9.535-3.188-18.798-6.981-27.748-11.3c-3.412-1.648-6.766-3.373-10.081-5.177c-63.559-34.534-109.685-97.079-121.804-171.07\r\n    C16.682,282.266,15.6,269.26,15.6,256c0-4.202,0.107-8.375,0.331-12.519c0.127-2.632,0.302-5.255,0.526-7.858\r\n    c1.989-23.516,7.381-46.058,15.687-67.137c1.033-2.642,2.125-5.265,3.256-7.858c13.572-31.131,33.578-58.801,58.352-81.342\r\n    c1.267-1.15,2.545-2.291,3.841-3.422C139.558,39.282,194.42,17.13,254.469,17.13c98.015,0,182.243,59.035,219.068,143.497\r\n    c1.131,2.593,2.223,5.206,3.266,7.849c9.964,25.31,15.736,52.727,16.458,81.401C493.31,251.905,493.339,253.953,493.339,256z\" />\r\n  <path style=\"fill:#FFDF5E;\" d=\"M512,248.99c0,0-7.03,2.194-18.661,8.063c-38.346,19.324-126.767,78.486-178.704,230.163\r\n    c-4.378,1.141-8.794,2.155-13.269,3.042c-0.214,0.049-0.439,0.098-0.653,0.137c-3.412,0.673-6.864,1.267-10.335,1.794\r\n    c-11.71,1.765-23.702,2.681-35.908,2.681c-1.716,0-3.422-0.019-5.128-0.059c31.375-80.601,107.969-232.035,243.92-244.934\r\n    C499.384,249.292,505.633,248.99,512,248.99z\" />\r\n  <g>\r\n    <path style=\"fill:#FFB133;\" d=\"M486.592,312.607c-16.994,69.906-64.739,127.79-128.102,158.483\r\n      c-6.942,3.364-14.069,6.396-21.362,9.097C369.546,416.218,418.002,347.853,486.592,312.607z\" />\r\n    <path style=\"fill:#FFB133;\" d=\"M282.217,493.271c-9.097,1.053-18.359,1.599-27.748,1.599c-1.716,0-3.422-0.019-5.128-0.059\r\n      c-7.166-0.146-14.244-0.614-21.225-1.394c-0.468-0.039-0.926-0.098-1.394-0.146c-2.73-0.312-5.45-0.682-8.161-1.092\r\n      C166.682,273.998,70.598,193.016,32.145,168.486c-10.364-6.62-16.545-9.145-16.545-9.145c6.737,0,13.338,0.439,19.802,1.287\r\n      C176.764,179.142,253.699,392.994,282.217,493.271z\" />\r\n    <path style=\"fill:#FFB133;\"\r\n      d=\"M242.565,494.577c-4.855-0.244-9.682-0.624-14.449-1.16c-0.468-0.039-0.926-0.098-1.394-0.146\r\n      c-2.73-0.312-5.45-0.682-8.161-1.092c-9.799-1.482-19.402-3.549-28.781-6.181c-3.832-1.072-7.624-2.242-11.378-3.51\r\n      C124.885,327.476,49.519,264.921,16.545,243.881c-0.205-0.136-0.409-0.263-0.614-0.4C5.938,237.163,0,234.736,0,234.736\r\n      c5.577,0,11.066,0.302,16.458,0.887c1.121,0.117,2.233,0.253,3.344,0.4C131.915,250.706,203.507,388.256,242.565,494.577z\" />\r\n    <path style=\"fill:#FFB133;\" d=\"M150.654,471.187c-3.412-1.648-6.766-3.373-10.081-5.177\r\n      c-63.559-34.534-109.685-97.079-121.804-171.07C76.546,332.195,119.903,402.588,150.654,471.187z\" />\r\n    <path style=\"fill:#FFB133;\" d=\"M493.339,159.341c0,0-6.172,2.515-16.536,9.136c-38.443,24.53-134.557,105.512-186.426,323.712\r\n      c-11.71,1.765-23.702,2.681-35.908,2.681c-9.389,0-18.651-0.546-27.748-1.599c28.508-100.277,105.444-314.128,246.816-332.643\r\n      C480.001,159.779,486.602,159.341,493.339,159.341z\" />\r\n  </g>\r\n  <g>\r\n    <path style=\"fill:#FFDF5E;\" d=\"M460.131,338.483c0,0-60.137,35.665-101.641,132.607c-18.105,8.775-37.478,15.327-57.777,19.305\r\n      C330.235,421.912,379.169,357.641,460.131,338.483z\" />\r\n    <path style=\"fill:#FFDF5E;\" d=\"M189.779,485.997c-17.277-4.846-33.754-11.592-49.207-19.987\r\n      c-15.317-114.579-88.635-179.874-88.635-179.874C141.294,336.894,176.578,418.617,189.779,485.997z\" />\r\n  </g>\r\n  <g>\r\n\r\n    <line style=\"fill:none;stroke:#2B272D;stroke-width:20;stroke-linecap:round;stroke-miterlimit:10;\" x1=\"346.77\"\r\n      y1=\"167.218\" x2=\"375.367\" y2=\"149.337\" />\r\n\r\n    <line style=\"fill:none;stroke:#2B272D;stroke-width:20;stroke-linecap:round;stroke-miterlimit:10;\" x1=\"245.012\"\r\n      y1=\"167.218\" x2=\"216.416\" y2=\"149.337\" />\r\n\r\n    <line style=\"fill:none;stroke:#2B272D;stroke-width:20;stroke-linecap:round;stroke-miterlimit:10;\" x1=\"358.47\"\r\n      y1=\"215.314\" x2=\"395.519\" y2=\"215.314\" />\r\n\r\n    <line style=\"fill:none;stroke:#2B272D;stroke-width:20;stroke-linecap:round;stroke-miterlimit:10;\" x1=\"341.896\"\r\n      y1=\"264.385\" x2=\"365.617\" y2=\"286.809\" />\r\n  </g>\r\n  <g>\r\n    <path style=\"fill:#D8D8D8;\" d=\"M284.45,95.393c-18.039,0-32.662,14.623-32.662,32.662s14.623,32.662,32.662,32.662\" />\r\n    <path style=\"fill:#D8D8D8;\" d=\"M306.387,95.393c18.039,0,32.662,14.623,32.662,32.662s-14.623,32.662-32.662,32.662\" />\r\n  </g>\r\n  <path style=\"fill:#D33531;\" d=\"M375.367,215.314c0,38.356-27.007,70.403-63.052,78.154c-5.44,1.18-11.095,1.794-16.896,1.794\r\n    c-44.157,0-79.948-35.791-79.948-79.948s35.791-79.948,79.948-79.948c5.801,0,11.456,0.614,16.896,1.794\r\n    C348.36,144.911,375.367,176.959,375.367,215.314z\" />\r\n  <path style=\"fill:#EA5A52;\" d=\"M375.367,215.314c0,38.356-27.007,70.403-63.052,78.154c-36.035-7.751-63.042-39.799-63.042-78.154\r\n    s27.007-70.403,63.042-78.154C348.36,144.911,375.367,176.959,375.367,215.314z\" />\r\n  <g>\r\n    <circle style=\"fill:#3C363F;\" cx=\"275.431\" cy=\"169.49\" r=\"17.55\" />\r\n    <circle style=\"fill:#3C363F;\" cx=\"315.405\" cy=\"169.49\" r=\"17.55\" />\r\n  </g>\r\n  <path style=\"fill:#FFDF5E;\"\r\n    d=\"M301.366,490.258c-0.214,0.049-0.439,0.098-0.653,0.137c-3.412,0.673-6.864,1.267-10.335,1.794\r\n    c-11.71,1.765-23.702,2.681-35.908,2.681c-8.911,0-17.706-0.487-26.354-1.453C224.459,392.76,203.692,170.884,93.754,79.285\r\n    c-4.339-3.617-8.804-7.03-13.425-10.218c0,0,6.484,1.638,17.267,6.796C144.004,98.102,270.049,185.772,301.366,490.258z\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetSpiderComponent {
    constructor() {
        this.option = PetType.Spider;
    }
}
CustomAvatarPetSpiderComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-spider]',
                template: "<svg:g>\r\n  <path style=\"fill:#FF8E4F;\" d=\"M512,256c0,28.975-4.817,56.832-13.688,82.808c-2.456,7.199-5.235,14.252-8.307,21.149\r\n    c-22.915,51.513-62.349,94.063-111.564,120.916C342.068,500.715,300.345,512,256,512c-9.759,0-19.393-0.543-28.881-1.609\r\n    c-33.593-3.772-65.212-14.043-93.592-29.539h-0.01C84.313,453.987,44.899,411.46,21.985,359.946\r\n    c-3.072-6.886-5.841-13.939-8.296-21.138C4.817,312.832,0,284.975,0,256c0-10.961,0.69-21.776,2.027-32.371\r\n    c1.16-9.195,2.811-18.223,4.921-27.084c5.392-22.716,13.824-44.262,24.837-64.188c6.635-12.016,14.211-23.437,22.622-34.168\r\n    c36.143-46.101,87.761-79.496,147.028-92.359c5.851-1.275,11.776-2.341,17.763-3.197C231.215,0.899,243.503,0,256,0\r\n    c12.497,0,24.785,0.899,36.801,2.633c5.987,0.857,11.912,1.923,17.753,3.197c59.267,12.863,110.885,46.247,147.028,92.348\r\n    c8.411,10.731,15.987,22.152,22.622,34.168c11.013,19.926,19.446,41.472,24.848,64.188c2.111,8.861,3.762,17.889,4.921,27.084\r\n    C511.31,234.224,512,245.029,512,256z\" />\r\n  <path style=\"fill:#3C363F;\" d=\"M346.509,263.199l151.803,75.609c-2.456,7.199-5.235,14.252-8.307,21.149l-194.226-96.758h-79.559\r\n    L21.985,359.946c-3.072-6.886-5.841-13.939-8.296-21.138l151.803-75.609H46.279c-2.999,0-5.883-1.202-7.993-3.312L2.027,223.629\r\n    c1.16-9.195,2.811-18.223,4.921-27.084l44.011,44.022h111.815L38.296,182.23c-3.971-1.86-6.51-5.862-6.51-10.24V79.611\r\n    c0-6.259,5.068-11.316,11.306-11.316c6.248,0,11.316,5.057,11.316,11.316v85.191l115.419,54.094L127.885,88.054\r\n    c-1.296-4.044-0.23-8.453,2.769-11.452l70.781-70.771l0.825-0.825l1.693-1.693C206.148,1.108,209.053,0,211.947,0\r\n    c2.445,0,4.901,0.784,6.928,2.372c0.115,0.084,0.219,0.167,0.324,0.261c0.261,0.209,0.502,0.439,0.742,0.679\r\n    c4.42,4.42,4.42,11.577,0,15.997l-68.399,68.409l46.237,144.28l18.296,8.568h79.851l18.296-8.568l46.247-144.28l-68.42-68.409\r\n    c-4.42-4.42-4.42-11.577,0-15.997c0.24-0.24,0.491-0.47,0.752-0.679c0.104-0.094,0.209-0.178,0.313-0.261\r\n    C295.142,0.784,297.587,0,300.042,0c2.894,0,5.789,1.108,7.993,3.312l2.518,2.518l70.781,70.771\r\n    c2.999,2.999,4.075,7.408,2.769,11.452l-41.932,130.842l115.409-54.094V79.611c0-6.259,5.068-11.316,11.306-11.316\r\n    c6.249,0,11.316,5.057,11.316,11.316v92.379c0,4.378-2.539,8.38-6.51,10.24l-124.468,58.337H461.03l44.022-44.032\r\n    c2.111,8.861,3.762,17.889,4.921,27.084l-36.268,36.268c-2.111,2.111-4.995,3.312-8.004,3.312H346.509z\" />\r\n  <g>\r\n    <path style=\"fill:#FFFFFF;\" d=\"M238.942,121.858c-2.895,0-5.79,1.104-7.999,3.313c-12.599,12.599-17.577,30.443-13.316,47.733\r\n      c1.495,6.066,7.629,9.77,13.69,8.277c6.066-1.495,9.772-7.625,8.277-13.69c-2.349-9.533,0.397-19.373,7.347-26.323\r\n      c4.418-4.417,4.418-11.58,0-15.997C244.732,122.963,241.836,121.858,238.942,121.858z\" />\r\n    <path style=\"fill:#FFFFFF;\" d=\"M273.058,121.858c-2.894,0-5.79,1.104-8,3.313c-4.417,4.417-4.417,11.58,0,15.997\r\n      c6.951,6.95,9.698,16.79,7.349,26.323c-1.495,6.066,2.211,12.195,8.277,13.69c6.066,1.492,12.196-2.211,13.69-8.277\r\n      c4.261-17.29-0.717-35.134-13.316-47.733C278.848,122.963,275.952,121.858,273.058,121.858z\" />\r\n  </g>\r\n  <path style=\"fill:#5C5560;\" d=\"M256,271.311c31.703,0,57.419-25.716,57.419-57.419c0-21.794-12.142-40.753-30.029-50.481\r\n    c-8.145-4.419-17.481-6.938-27.39-6.938c-9.924,0-19.245,2.519-27.39,6.938c-17.888,9.728-30.029,28.687-30.029,50.481\r\n    C198.581,245.595,224.282,271.311,256,271.311z\" />\r\n  <path style=\"fill:#3C363F;\"\r\n    d=\"M274.184,163.411c-17.888,9.728-30.029,28.687-30.029,50.481c0,23.607,14.255,43.886,34.629,52.708\r\n    c-6.986,3.025-14.688,4.711-22.784,4.711c-31.719,0-57.419-25.716-57.419-57.419c0-21.794,12.142-40.753,30.029-50.481\r\n    c8.145-4.419,17.465-6.938,27.39-6.938c8.095,0,15.794,1.704,22.786,4.728C277.22,161.879,275.676,162.601,274.184,163.411z\" />\r\n  <path style=\"fill:#5C5560;\" d=\"M403.216,399.099c0,30.26-9.122,58.378-24.775,81.774C342.068,500.715,300.345,512,256,512\r\n    c-44.356,0-86.089-11.285-122.472-31.148c-15.642-23.385-24.764-51.503-24.764-81.753c0-81.314,65.923-147.216,147.237-147.216\r\n    S403.216,317.785,403.216,399.099z\" />\r\n  <path style=\"fill:#3C363F;\" d=\"M227.119,510.391c-33.593-3.772-65.212-14.043-93.592-29.539h-0.01\r\n    c-15.632-23.385-24.754-51.503-24.754-81.753c0-81.314,65.923-147.216,147.237-147.216c11.609,0,22.915,1.348,33.75,3.887\r\n    c-65.045,15.256-113.486,73.634-113.486,143.329C176.264,443.549,195.971,483.401,227.119,510.391z\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetHamsterComponent {
    constructor() {
        this.option = PetType.Hamster;
    }
}
CustomAvatarPetHamsterComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-hamster]',
                template: "<svg:g>\r\n  <path style=\"fill:#BA4C20;\" d=\"M512,256c0,13.479-1.045,26.718-3.051,39.633c-3.333,21.42-9.31,41.963-17.607,61.262\r\n    c-0.387,0.92-0.784,1.829-1.191,2.738c-5.235,11.818-11.327,23.155-18.213,33.938c-2.936,4.598-6.019,9.101-9.237,13.49\r\n    C416.131,470.685,340.887,512,256,512S95.869,470.685,49.288,407.061c-3.208-4.389-6.29-8.892-9.226-13.49\r\n    c-6.52-10.219-12.34-20.929-17.366-32.068c-0.293-0.616-0.575-1.233-0.846-1.86c-8.913-20.104-15.308-41.576-18.798-64\r\n    C1.045,282.718,0,269.479,0,256c0-2.947,0.052-5.872,0.157-8.788C4.786,109.892,117.561,0,256,0\r\n    c138.449,0,251.225,109.902,255.843,247.223C511.948,250.138,512,253.064,512,256z\" />\r\n  <path style=\"fill:#C6C6C6;\"\r\n    d=\"M471.939,393.571c-2.936,4.598-6.019,9.101-9.237,13.49C416.131,470.685,340.887,512,256,512\r\n    S95.869,470.685,49.288,407.061c-3.208-4.389-6.29-8.892-9.226-13.49l59.653-59.653c38.578-38.567,87.845-59.894,138.261-64\r\n    c5.998-0.491,12.006-0.731,18.024-0.731s12.027,0.24,18.024,0.731c50.416,4.106,99.683,25.433,138.261,64L471.939,393.571z\" />\r\n  <circle style=\"fill:#D8D8D8;\" cx=\"256.951\" cy=\"270.346\" r=\"104.605\" />\r\n  <circle style=\"fill:#C6C6C6;\" cx=\"412.285\" cy=\"108.231\" r=\"60.082\" />\r\n  <circle style=\"fill:#F9B7D2;\" cx=\"412.285\" cy=\"108.231\" r=\"31.692\" />\r\n  <g>\r\n    <polyline style=\"fill:#FFFFFF;\" points=\"219.541,315.486 235.009,357.467 251.336,357.467 251.336,272.572 \t\" />\r\n    <polyline style=\"fill:#FFFFFF;\" points=\"292.459,315.486 276.991,357.467 260.664,357.467 260.664,272.572 \t\" />\r\n  </g>\r\n  <circle style=\"fill:#C6C6C6;\" cx=\"98.22\" cy=\"108.231\" r=\"60.082\" />\r\n  <circle style=\"fill:#EAEAEA;\" cx=\"258.341\" cy=\"262.019\" r=\"66.048\" />\r\n  <circle style=\"fill:#F9B7D2;\" cx=\"98.22\" cy=\"108.231\" r=\"31.692\" />\r\n  <path style=\"fill:#EAEAEA;\" d=\"M507.099,244.893c0,25.851-9.864,51.712-29.592,71.44c-46.864,46.853-122.838,46.853-169.691,0\r\n    l-50.291-50.291L256,264.516l-1.526,1.526l-42.757,42.757l-7.534,7.534c-23.427,23.427-54.136,35.14-84.846,35.14\r\n    s-61.409-11.713-84.846-35.14c-39.455-39.455-39.455-103.424,0-142.879l65.223-65.223c38.578-38.567,87.845-59.894,138.261-64\r\n    c5.998-0.491,12.006-0.731,18.024-0.731c6.019,0,12.027,0.24,18.025,0.731c50.416,4.106,99.683,25.433,138.261,64l65.223,65.223\r\n    C497.236,193.181,507.099,219.042,507.099,244.893z\" />\r\n  <path style=\"fill:#FFFFFF;\" d=\"M274.024,44.231v221.811h-36.049V44.231c5.998-0.491,12.006-0.731,18.024-0.731\r\n    S268.027,43.739,274.024,44.231z\" />\r\n  <path style=\"fill:#E86523;\"\r\n    d=\"M291.867,255.492c-21.523-14.863-50.211-14.863-71.734,0c-4.985,3.442-5.631,10.569-1.347,14.853\r\n    l19.084,19.084c10.013,10.013,26.247,10.013,36.26,0l19.084-19.084C297.497,266.061,296.851,258.935,291.867,255.492z\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"176.421\" cy=\"211.644\" rx=\"22.037\" ry=\"28.687\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"181.791\" cy=\"206.984\" rx=\"8.242\" ry=\"10.728\" />\r\n  <ellipse style=\"fill:#3C363F;\" cx=\"335.579\" cy=\"211.644\" rx=\"22.037\" ry=\"28.687\" />\r\n  <ellipse style=\"fill:#5C5560;\" cx=\"340.961\" cy=\"206.984\" rx=\"8.242\" ry=\"10.728\" />\r\n  <path style=\"fill:#D8D8D8;\"\r\n    d=\"M211.717,308.799l-7.534,7.534c-23.427,23.427-54.136,35.14-84.846,35.14\r\n    s-61.409-11.713-84.846-35.14c-39.455-39.455-39.455-103.424,0-142.879l65.223-65.223c38.578-38.567,87.845-59.894,138.261-64\r\n    c5.998-0.491,12.006-0.731,18.024-0.731c-54.335,0-238.237,147.999-163.004,250.399C121.02,332.048,170.6,324.88,211.717,308.799z\" />\r\n  <ellipse style=\"fill:#FF8E4F;\" cx=\"263.837\" cy=\"264.119\" rx=\"17.241\" ry=\"8.882\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarPetFishComponent {
    constructor() {
        this.option = PetType.Fish;
    }
}
CustomAvatarPetFishComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-pet-fish]',
                template: "<svg:g>\r\n  <path style=\"fill:#5C5560;\" d=\"M512,256c0,141.385-114.615,256-256,256S0,397.385,0,256c0-80.624,37.272-152.555,95.535-199.471\r\n\tC139.431,21.159,195.239,0,256,0s116.569,21.159,160.465,56.529C474.728,103.445,512,175.376,512,256z\" />\r\n  <path style=\"fill:#60C5E8;\" d=\"M512,256c0,141.385-114.615,256-256,256S0,397.385,0,256c0-80.624,37.272-152.555,95.535-199.471\r\n\th320.93C474.728,103.445,512,175.376,512,256z\" />\r\n  <path style=\"fill:#FFFFFF;\" d=\"M429.181,77.751c0,5.433-2.288,10.689-6.562,15.673c-20.605,24.022-87.406,41.608-166.619,41.608\r\n\tc-79.224,0-146.014-17.586-166.619-41.608c-4.274-4.984-6.562-10.24-6.562-15.673C82.819,46.122,160.35,20.48,256,20.48\r\n\tC351.639,20.48,429.181,46.122,429.181,77.751z\" />\r\n  <path style=\"fill:#60C5E8;\" d=\"M429.181,77.751c0,5.433-2.288,10.689-6.562,15.673c-20.605,24.022-87.406,41.608-166.619,41.608\r\n\tc-79.224,0-146.014-17.586-166.619-41.608c-4.274-4.984-6.562-10.24-6.562-15.673C82.819,46.122,160.35,20.48,256,20.48\r\n\tC351.639,20.48,429.181,46.122,429.181,77.751z\" />\r\n  <g>\r\n    <path style=\"fill:#3AA5C9;\" d=\"M406.002,444.492c0,4.706-1.982,9.259-5.683,13.575c-17.848,20.807-75.707,36.039-144.318,36.039\r\n\t\tc-68.621,0-126.471-15.231-144.318-36.039c-3.702-4.318-5.683-8.869-5.683-13.575c0-27.396,67.155-49.605,150.002-49.605\r\n\t\tC338.838,394.887,406.002,417.097,406.002,444.492z\" />\r\n    <path style=\"fill:#3AA5C9;\" d=\"M422.619,93.424c-20.605,24.022-87.406,41.608-166.619,41.608\r\n\t\tc-79.224,0-146.014-17.586-166.619-41.608C109.986,69.413,176.776,51.827,256,51.827C335.214,51.827,402.014,69.413,422.619,93.424\r\n\t\tz\" />\r\n  </g>\r\n  <g>\r\n\r\n    <ellipse transform=\"matrix(0.5461 -0.8377 0.8377 0.5461 -91.3484 543.1863)\" style=\"fill:#82DCF4;\" cx=\"455.586\"\r\n      cy=\"355.891\" rx=\"64.26\" ry=\"19.547\" />\r\n\r\n    <ellipse transform=\"matrix(0.5 -0.866 0.866 0.5 -121.0489 128.0157)\" style=\"fill:#82DCF4;\" cx=\"50.342\" cy=\"168.841\"\r\n      rx=\"64.26\" ry=\"19.546\" />\r\n  </g>\r\n  <path style=\"fill:#EA5A52;\" d=\"M362.502,222.901c24.663-13.302,17.987-57.804-17.614-71.153\r\n\tc-35.601-13.351-173.555-31.15-194.694,105.69L362.502,222.901z\" />\r\n  <path style=\"fill:#FF8E4F;\" d=\"M286.576,369.888v3.974c0,4.26-0.945,8.293-2.632,11.912c-4.488,9.634-14.258,16.308-25.587,16.308\r\n\th-48.551l9.271-21.1l6.504-14.806L286.576,369.888z\" />\r\n  <path style=\"fill:#FFDF5E;\" d=\"M445.184,326.17c-30.45,18.201-66.285,31.54-105.434,38.449c-0.4,0.078-0.812,0.144-1.213,0.211\r\n\tc-3.327,0.589-6.686,1.113-10.047,1.602c-0.589,0.078-1.18,0.167-1.769,0.245c-3.761,0.522-7.543,0.979-11.348,1.379\r\n\tc-12.249,1.268-24.754,1.936-37.459,1.936c-63.27,0-121.399-16.399-167.269-43.823c10.258-34.945,31.162-65.34,58.965-87.422\r\n\tc29.738-23.619,67.375-37.726,108.306-37.726c22.262,0,43.556,4.172,63.136,11.804c0.011,0,0.033,0,0.045,0.011\r\n\tc3.271,1.269,6.497,2.636,9.667,4.105c0.868,0.4,1.736,0.801,2.592,1.213c3.104,1.502,6.152,3.081,9.145,4.75\r\n\tc37.381,20.782,66.307,54.937,80.358,95.978C443.681,321.286,444.461,323.711,445.184,326.17z\" />\r\n  <path style=\"fill:#E86523;\" d=\"M286.576,369.888v3.974c0,4.26-0.945,8.293-2.632,11.912c-1.999,0.042-4.016,0.06-6.032,0.06\r\n\tc-20.214,0-39.904-1.671-58.835-4.85l6.504-14.806L286.576,369.888z\" />\r\n  <g>\r\n    <path style=\"fill:#FFB133;\" d=\"M445.178,326.171c-45.877,27.426-104.012,43.827-167.267,43.827\r\n\t\tc-63.264,0-121.399-16.401-167.267-43.827c10.259-34.944,31.164-65.34,58.97-87.417c-19.201,58.54,74.552,112.145,157.38,98.081\r\n\t\tc45.497-7.72,87.367-13.928,115.865-17.952C443.685,321.286,444.46,323.716,445.178,326.171z\" />\r\n    <path style=\"fill:#FFB133;\" d=\"M445.184,326.17c-30.45,18.201-66.285,31.54-105.434,38.449c-0.4,0.078-0.812,0.144-1.213,0.211\r\n\t\tc-14.697-21.038-23.307-46.637-23.307-74.25c0-29.16,9.602-56.071,25.822-77.755c0.011,0,0.033,0,0.045,0.011\r\n\t\tc3.271,1.269,6.497,2.636,9.667,4.105c0.868,0.4,1.736,0.801,2.592,1.213c3.104,1.502,6.152,3.081,9.145,4.75\r\n\t\tc37.381,20.782,66.307,54.937,80.358,95.978C443.681,321.286,444.461,323.711,445.184,326.17z\" />\r\n  </g>\r\n  <circle style=\"fill:#FFFFFF;\" cx=\"375.871\" cy=\"295.612\" r=\"33.252\" />\r\n  <path style=\"fill:#3C363F;\" d=\"M393.989,299.227c-0.063,0.293-0.125,0.585-0.199,0.867c-2.048,8.087-9.529,13.981-17.93,13.981\r\n\tc-7.732,0-14.775-4.984-17.387-12.246c-2.56-7.147-0.366-15.402,5.433-20.313c4.535-3.835,10.648-5.162,16.269-3.835\r\n\tc1.891,0.439,3.73,1.181,5.433,2.236C392.087,283.92,395.483,291.756,393.989,299.227z\" />\r\n  <g>\r\n    <path style=\"fill:#FF8E4F;\" d=\"M34.325,272.829h23.71c29.352,0,53.147,23.794,53.147,53.147l0,0h-23.71\r\n\t\tC58.119,325.975,34.325,302.18,34.325,272.829L34.325,272.829z\" />\r\n    <path style=\"fill:#FF8E4F;\" d=\"M58.035,402.831v-23.71c0-29.352,23.794-53.147,53.147-53.147l0,0v23.71\r\n\t\tC111.181,379.037,87.387,402.831,58.035,402.831L58.035,402.831z\" />\r\n  </g>\r\n  <path style=\"fill:#5C5560;\" d=\"M393.989,299.227c-0.063,0.293-0.125,0.585-0.199,0.867c-2.247,1.776-5.089,2.842-8.182,2.842\r\n\tc-7.293,0-13.208-5.925-13.208-13.218c0-5.36,3.187-9.979,7.774-12.037c1.891,0.439,3.73,1.181,5.433,2.236\r\n\tC392.087,283.92,395.483,291.756,393.989,299.227z\" />\r\n  <g>\r\n    <circle style=\"fill:#3AA5C9;\" cx=\"414.229\" cy=\"169.765\" r=\"16.064\" />\r\n    <circle style=\"fill:#3AA5C9;\" cx=\"105.587\" cy=\"234.015\" r=\"16.064\" />\r\n    <circle style=\"fill:#3AA5C9;\" cx=\"447.676\" cy=\"229.042\" r=\"32.272\" />\r\n  </g>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardComponent {
    constructor() {
        this.awardType = AwardType.None;
    }
}
CustomAvatarAwardComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award]',
                template: "<svg:g [ngSwitch]=\"awardType\">\r\n  <g *ngSwitchCase=\"'TrophyA'\" kip-custom-avatar-award-trophy-a />\r\n  <g *ngSwitchCase=\"'TrophyB'\" kip-custom-avatar-award-trophy-b />\r\n  <g *ngSwitchCase=\"'BirthdayA'\" kip-custom-avatar-award-birthday-a />\r\n  <g *ngSwitchCase=\"'BirthdayB'\" kip-custom-avatar-award-birthday-b />\r\n  <g *ngSwitchCase=\"'BirthdayC'\" kip-custom-avatar-award-birthday-c />\r\n  <g *ngSwitchCase=\"'BirthdayD'\" kip-custom-avatar-award-birthday-d />\r\n  <g *ngSwitchCase=\"'Correct'\" kip-custom-avatar-award-correct />\r\n  <g *ngSwitchCase=\"'Incorrect'\" kip-custom-avatar-award-incorrect />\r\n  <g *ngSwitchCase=\"'ThumbUp'\" kip-custom-avatar-award-thumb-up [skinColor]=\"skinColor\" [clotheColor]=\"clotheColor\" [clotheColor2]=\"clotheColor2\"  />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarAwardComponent.propDecorators = {
    awardType: [{ type: Input }],
    skinColor: [{ type: Input }],
    clotheColor: [{ type: Input }],
    clotheColor2: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardTrophyAComponent {
    constructor() {
        this.option = AwardType.TrophyA;
    }
}
CustomAvatarAwardTrophyAComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-trophy-a]',
                template: "<svg:g>\r\n  <path style=\"fill:#43CAED;\"\r\n    d=\"M490.08,245.077c0,92.04-50.75,172.22-125.8,214.1c-16.36,9.12-33.87,16.43-52.26,21.63   c-4.31,1.23-8.67,2.33-13.07,3.32c-17.33,3.9-35.36,5.95-53.87,5.95c-3.92,0-7.82-0.09-11.69-0.28   c-15.02-0.7-29.68-2.76-43.87-6.05c-3.83-0.89-7.62-1.86-11.38-2.92c-19.68-5.58-38.35-13.56-55.67-23.6   C49.3,414.857,0.08,335.717,0.08,245.077c0-135.31,109.69-245,245-245S490.08,109.767,490.08,245.077z\" />\r\n  <path style=\"fill:#8EE7FE;\"\r\n    d=\"M488.41,216.407c-2.01,17.34-5.84,34.13-11.29,50.17c-7.54,22.2-18.18,42.97-31.41,61.8   c-44.31,63.11-117.65,104.36-200.63,104.36c-82.97,0-156.31-41.25-200.63-104.35c-13.23-18.83-23.87-39.6-31.41-61.81   c-5.45-16.04-9.28-32.83-11.29-50.17C15.94,94.607,119.47,0.077,245.08,0.077S474.22,94.607,488.41,216.407z\" />\r\n  <path style=\"fill:#FEB247;\"\r\n    d=\"M243.706,286.858h-90.543c-48.749,0-91.95-31.042-107.501-77.244L0.784,76.282   c-1.541-4.577-0.783-9.616,2.035-13.538C5.637,58.822,10.17,56.496,15,56.496h135.855v30H35.876l38.219,113.547   c11.438,33.982,43.213,56.814,79.068,56.814h90.543V286.858z\" />\r\n  <path style=\"fill:#FFE26B;\"\r\n    d=\"M336.991,286.858h-93.286v-30h93.286c35.855,0,67.63-22.832,79.068-56.814l38.219-113.547H339.299   v-30h135.855c4.83,0,9.363,2.325,12.182,6.247c2.818,3.922,3.575,8.961,2.035,13.538l-44.878,133.333   C428.941,255.816,385.74,286.858,336.991,286.858z\" />\r\n  <path style=\"fill:#FFE26B;\"\r\n    d=\"M312.02,480.807c-4.31,1.23-8.67,2.33-13.07,3.32c-17.33,3.9-35.36,5.95-53.87,5.95   c-19.11,0-37.71-2.19-55.56-6.33c-3.83-0.89-7.62-1.86-11.38-2.92l26.24-131.6h81.4l6.41,32.16L312.02,480.807z\" />\r\n  <path style=\"fill:#FEB247;\"\r\n    d=\"M388.023,35.611v164.184c0,69.759-49.971,127.847-116.078,140.411   c-8.706,1.659-17.688,2.523-26.865,2.523c-78.946,0-142.943-63.997-142.943-142.934V35.611H388.023z\" />\r\n  <path style=\"fill:#FFE26B;\"\r\n    d=\"M388.02,60.807v138.99c0,69.76-49.97,127.84-116.07,140.41c-66.11-12.57-116.08-70.65-116.08-140.41   V88.277c0-15.17,12.3-27.47,27.47-27.47h76.11v134.88l42.35-40.4l42.36,40.4V60.807H388.02z\" />\r\n  <path style=\"fill:#FEB247;\"\r\n    d=\"M292.19,381.387h-41.91c-9.33,0-16.89,7.56-16.89,16.89v91.52c-15.02-0.7-29.68-2.76-43.87-6.05   c-3.83-0.89-7.62-1.86-11.38-2.92l26.24-131.6h81.4L292.19,381.387z\" />\r\n  <g>\r\n    <path style=\"fill:#FEB247;\"\r\n      d=\"M322.456,349.23c0,5.202-2.107,9.922-5.521,13.335c-3.414,3.413-8.133,5.521-13.335,5.521H186.56    c-10.419,0-18.856-8.445-18.856-18.856c0-5.209,2.107-9.922,5.521-13.335c3.414-3.413,8.126-5.528,13.335-5.528H303.6    C314.011,330.366,322.456,338.811,322.456,349.23z\" />\r\n    <path style=\"fill:#FFE26B;\"\r\n      d=\"M322.456,349.23c0,5.202-2.107,9.922-5.521,13.335c-3.414,3.413-8.133,5.521-13.335,5.521h-78.666    c-10.411,0-18.856-8.445-18.856-18.856c0-5.209,2.108-9.922,5.521-13.335c3.414-3.413,8.133-5.528,13.335-5.528H303.6    C314.011,330.366,322.456,338.811,322.456,349.23z\" />\r\n  </g>\r\n  <path style=\"fill:#FEB247;\"\r\n    d=\"M404.21,23.317c0,7.62-6.18,13.79-13.79,13.79H99.74c-3.8,0-7.25-1.54-9.75-4.04   c-2.49-2.49-4.04-5.94-4.04-9.75c0-7.61,6.18-13.79,13.79-13.79h290.68c3.8,0,7.25,1.54,9.75,4.04   C402.66,16.067,404.21,19.507,404.21,23.317z\" />\r\n  <path style=\"fill:#FFE26B;\"\r\n    d=\"M404.21,23.317c0,7.62-6.18,13.79-13.79,13.79H157.08c-3.81,0-7.26-1.54-9.75-4.04   c-2.5-2.49-4.04-5.94-4.04-9.75c0-7.61,6.17-13.79,13.79-13.79h233.34c3.8,0,7.25,1.54,9.75,4.04   C402.66,16.067,404.21,19.507,404.21,23.317z\" />\r\n  <polygon style=\"fill:#FD5B67;\" points=\"363.053,195.686 320.7,155.288 278.348,195.686 278.348,9.527 363.053,9.527  \" />\r\n  <rect x=\"278.348\" y=\"9.527\" style=\"fill:#EF297B;\" width=\"84.706\" height=\"12.838\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardTrophyBComponent {
    constructor() {
        this.option = AwardType.TrophyB;
    }
}
CustomAvatarAwardTrophyBComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-trophy-b]',
                template: "<svg:g>\r\n    <path style=\"fill:#683C8C;\" d=\"M490,245c0,135.31-109.69,245-245,245S0,380.31,0,245c0-54.44,17.76-104.74,47.8-145.41   c12.57-17.02,27.29-32.36,43.77-45.61c11.91-9.57,24.73-18.06,38.31-25.3c17.33-9.25,35.91-16.47,55.41-21.35   C204.4,2.54,224.4,0,245,0c20.59,0,40.59,2.54,59.7,7.33c19.51,4.88,38.08,12.1,55.42,21.35c13.58,7.24,26.4,15.72,38.3,25.3   c16.48,13.24,31.2,28.58,43.78,45.6C472.24,140.25,490,190.56,490,245z\"/>\r\n    <path style=\"fill:#935AA8;\" d=\"M488.33,216.33c-2.01,17.34-5.84,34.13-11.29,50.17c-7.54,22.2-18.18,42.97-31.41,61.8   C401.32,391.41,327.98,432.66,245,432.66c-82.97,0-156.31-41.25-200.63-104.35c-13.23-18.83-23.87-39.6-31.41-61.81   c-5.45-16.04-9.28-32.83-11.29-50.17C15.86,94.53,119.39,0,245,0S474.14,94.53,488.33,216.33z\"/>\r\n    <path style=\"fill:#EF297B;\" d=\"M442.2,99.58l-74.66,155.53H185.77l1.17-2.45l25.23-52.54l32.83-68.4L304.7,7.33   c19.51,4.88,38.08,12.1,55.42,21.35c13.58,7.24,26.4,15.72,38.3,25.3C414.9,67.22,429.62,82.56,442.2,99.58z\"/>\r\n    <path style=\"fill:#BBC0E0;\" d=\"M398.42,53.98l-95.37,198.68l-1.17,2.45h-50.45l26.4-55l82.29-171.43   C373.7,35.92,386.52,44.4,398.42,53.98z\"/>\r\n    <path style=\"fill:#FD5B67;\" d=\"M304.23,255.11H122.45L47.8,99.59c12.57-17.02,27.29-32.36,43.77-45.61   c11.91-9.57,24.73-18.06,38.31-25.3c17.33-9.25,35.91-16.47,55.41-21.35L245,131.72l32.83,68.39l25.22,52.55L304.23,255.11z\"/>\r\n    <path style=\"fill:#F2F4FF;\" d=\"M238.56,255.11h-50.44l-1.18-2.45L91.57,53.98c11.91-9.57,24.73-18.06,38.31-25.3l82.29,171.44   L238.56,255.11z\"/>\r\n    <path style=\"fill:#FFE26B;\" d=\"M407.33,337.66c0,56.62-28.99,106.47-72.93,135.52C306.7,484.04,276.55,490,245,490   c-31.56,0-61.72-5.96-89.42-16.83c-43.94-29.05-72.92-78.89-72.92-135.51c0-89.65,72.68-162.33,162.34-162.33   C334.65,175.33,407.33,248.01,407.33,337.66z\"/>\r\n    <circle style=\"fill:#FEB247;\" cx=\"244.997\" cy=\"337.664\" r=\"129.468\"/>\r\n    <circle style=\"fill:#FFE26B;\" cx=\"244.997\" cy=\"337.664\" r=\"109.922\"/>\r\n    <path style=\"fill:#FEB247;\" d=\"M256.233,254.248l17.332,35.118c1.825,3.698,5.353,6.261,9.434,6.854l38.755,5.631   c10.277,1.493,14.381,14.123,6.944,21.373l-28.043,27.336c-2.953,2.879-4.301,7.026-3.604,11.091l6.62,38.598   c1.756,10.236-8.988,18.042-18.181,13.209l-34.664-18.224c-3.65-1.919-8.011-1.919-11.662,0l-34.664,18.224   c-9.192,4.833-19.936-2.973-18.181-13.209l6.62-38.598c0.697-4.065-0.65-8.212-3.604-11.091l-28.043-27.336   c-7.437-7.249-3.333-19.879,6.944-21.373l38.755-5.631c4.081-0.593,7.609-3.156,9.434-6.854l17.332-35.118   C238.357,244.935,251.637,244.935,256.233,254.248z\"/>\r\n    <path style=\"fill:#FFE26B;\" d=\"M279.34,343.1c-1.82,1.78-2.65,4.34-2.22,6.85l4.08,23.81c1.08,6.32-5.55,11.14-11.22,8.15   l-21.39-11.24c-2.25-1.18-4.94-1.18-7.19,0l-10.47,5.5l-10.92,5.74c-5.67,2.99-12.3-1.83-11.22-8.15l0.31-1.8l3.78-22.01   c0.43-2.51-0.4-5.07-2.23-6.85l-0.03-0.02l-17.27-16.84c-4.59-4.47-2.06-12.27,4.29-13.19l23.91-3.47   c2.52-0.37,4.69-1.95,5.82-4.23l10.69-21.67c2.84-5.75,11.03-5.75,13.87,0l5.98,12.11l4.71,9.56c1.13,2.28,3.31,3.86,5.83,4.23   l2.65,0.38l21.26,3.09c0.48,0.07,0.93,0.18,1.36,0.33c5.32,1.74,7.17,8.73,2.92,12.86L279.34,343.1z\"/>\r\n    <path style=\"fill:#FFDD8D;\" d=\"M212.88,349.95c0.43-2.51-0.4-5.07-2.23-6.85l-0.03-0.02l47.29-47.29l4.71,9.56   c1.13,2.28,3.31,3.86,5.83,4.23l2.65,0.38l-62,62L212.88,349.95z\"/>\r\n    <path style=\"fill:#FFDD8D;\" d=\"M279.34,343.1c-1.82,1.78-2.65,4.34-2.22,6.85l4.08,23.81c1.08,6.32-5.55,11.14-11.22,8.15   l-21.39-11.24c-2.25-1.18-4.94-1.18-7.19,0l-10.47,5.5l62.79-62.79c5.32,1.74,7.17,8.73,2.92,12.86L279.34,343.1z\"/>\r\n  </svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardBirthdayAComponent {
    constructor() {
        this.option = AwardType.BirthdayA;
    }
}
CustomAvatarAwardBirthdayAComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-birthday-a]',
                template: "<svg:g>\r\n  <path\r\n    d=\"m490 267c0 135.308594-109.691406 245-245 245s-245-109.691406-245-245 109.691406-245 245-245 245 109.691406 245 245zm0 0\"\r\n    fill=\"#ffd782\" />\r\n  <path\r\n    d=\"m421.355469 352.5v67.5c0 2.207031-1.796875 4-4 4h-108.011719v40.078125c0 2.207031-1.792969 4-4 4h-171.589844c-2.207031 0-4-1.792969-4-4v-50.976563h-4.65625c-2.203125 0-4-1.796874-4-4v-14.578124h-40.117187c-2.207031 0-4-1.792969-4-4v-38.023438h-61.636719c34.695312 93.144531 124.421875 159.5 229.65625 159.5s194.960938-66.351562 229.652344-159.5zm0 0\"\r\n    fill=\"#91e0e8\" />\r\n  <path\r\n    d=\"m304.609375 75.230469h-22.542969c-5.164062 0-12.394531 2.941406-16.066406 6.535156l-35.5625 34.816406c.019531.144531.042969.292969.042969.445313v14.347656h83.519531v-46.847656c0-5.113282-4.226562-9.296875-9.390625-9.296875zm0 0\"\r\n    fill=\"#ea2a3d\" />\r\n  <path\r\n    d=\"m191.320312 117.320312-36.320312-35.554687c-3.671875-3.59375-10.902344-6.535156-16.070312-6.535156h-22.539063c-5.164063 0-9.390625 4.183593-9.390625 9.296875v46.847656h84.320312zm0 0\"\r\n    fill=\"#ea2a3d\" />\r\n  <path\r\n    d=\"m132 131.375v-46.847656c0-4.746094 3.640625-8.683594 8.292969-9.226563-.464844-.042969-.921875-.070312-1.363281-.070312h-22.539063c-5.164063 0-9.390625 4.183593-9.390625 9.296875v46.847656zm0 0\"\r\n    fill=\"#b7092b\" />\r\n  <path\r\n    d=\"m231.480469 131.375v-14.347656c0-2.203125-1.804688-4.003906-4.007813-4.003906h-33.140625c-2.207031 0-4.011719 1.800781-4.011719 4.003906v14.347656zm0 0\"\r\n    fill=\"#fe3745\" />\r\n  <path\r\n    d=\"m75.980469 202.113281v188.410157c0 2.75 2.25 5 5 5h40.117187v-16.863282c0-2.207031 1.792969-4 4-4h35.597656v-26.488281c0-2.300781 1.894532-4.171875 4.222657-4.171875h12.53125c2.609375 0 6.382812 1.535156 8.234375 3.347656l22.925781 22.441406v-3.550781c0-.953125.773437-1.726562 1.726563-1.726562h18.429687c.953125 0 1.726563.773437 1.726563 1.726562v3.550781l22.921874-22.441406c1.855469-1.8125 5.625-3.347656 8.234376-3.347656h11.675781v-26.976562h-6.433594c-2.207031 0-4-1.792969-4-4v-30.441407c0-2.203125 1.792969-4 4-4h21.597656v-26.488281c0-2.300781 1.890625-4.171875 4.21875-4.171875h12.535157c2.609374 0 6.378906 1.535156 8.230468 3.351563l22.925782 22.441406v-3.554688c0-.949218.773437-1.726562 1.726562-1.726562h7.699219v-66.320313zm0 0\"\r\n    fill=\"#159e97\" />\r\n  <path d=\"m100.15625 390.523438v-188.410157h-24.175781v188.410157c0 2.75 2.25 5 5 5h24.175781c-2.75 0-5-2.25-5-5zm0 0\"\r\n    fill=\"#0f9390\" />\r\n  <path d=\"m62.210938 130.375c-2.75 0-5 2.25-5 5v62.738281c0 2.75 2.25 5 5 5h112.707031v-72.738281zm0 0\"\r\n    fill=\"#02af8e\" />\r\n  <path\r\n    d=\"m359.59375 130.375h-112.707031v72.738281h112.710937c2.75 0 5-2.25 5-5v-62.738281c-.003906-2.75-2.253906-5-5.003906-5zm0 0\"\r\n    fill=\"#02af8e\" />\r\n  <path\r\n    d=\"m94.613281 198.113281v-62.738281c0-2.75 2.25-5 5-5h-37.402343c-2.75 0-5 2.25-5 5v62.738281c0 2.75 2.25 5 5 5h37.402343c-2.75 0-5-2.25-5-5zm0 0\"\r\n    fill=\"#159e97\" />\r\n  <path\r\n    d=\"m178.875 202.113281v142.027344c2.417969.402344 5.269531 1.703125 6.808594 3.207031l22.925781 22.441406v-3.550781c0-.953125.773437-1.726562 1.726563-1.726562h18.429687c.953125 0 1.726563.773437 1.726563 1.726562v3.550781l12.4375-12.179687v-155.496094zm0 0\"\r\n    fill=\"#fe3745\" />\r\n  <path\r\n    d=\"m185.683594 347.347656 17.316406 16.953125v-162.1875h-24.125v142.027344c2.417969.402344 5.269531 1.703125 6.808594 3.207031zm0 0\"\r\n    fill=\"#ea2a3d\" />\r\n  <path d=\"m174.417969 130.375h72.96875v72.738281h-72.96875zm0 0\" fill=\"#ea2a3d\" />\r\n  <g fill=\"#b7092b\">\r\n    <path d=\"m174.417969 130.375h24.613281v72.738281h-24.613281zm0 0\" />\r\n    <path\r\n      d=\"m407.191406 278.582031v-26.488281c0-2.84375-2.347656-5.171875-5.21875-5.171875h-12.535156c-2.871094 0-6.890625 1.636719-8.933594 3.636719l-22.230468 21.761718v6.261719zm0 0\" />\r\n    <path\r\n      d=\"m336.40625 278.582031v-6.261719l-22.230469-21.761718c-2.042969-2-6.0625-3.636719-8.933593-3.636719h-12.535157c-2.871093 0-5.21875 2.324219-5.21875 5.171875v26.488281zm0 0\" />\r\n  </g>\r\n  <path\r\n    d=\"m300 278.582031v-26.488281c0-2.84375 2.351562-5.171875 5.21875-5.171875h-12.511719c-2.871093 0-5.21875 2.328125-5.21875 5.171875v26.488281zm0 0\"\r\n    fill=\"#a00026\" />\r\n  <path\r\n    d=\"m358.78125 278.582031v-8.421875c0-1.222656-1.003906-2.226562-2.226562-2.226562h-18.429688c-1.222656 0-2.226562 1.003906-2.226562 2.226562v8.421875zm0 0\"\r\n    fill=\"#fe3745\" />\r\n  <path\r\n    d=\"m272.324219 317.023438v26.976562h1.855469c2.328124 0 4.222656 1.871094 4.222656 4.171875v26.488281h35.597656c2.207031 0 4 1.792969 4 4v30.441406c0 2.203126-1.792969 4-4 4h-4.65625v11.898438h108.011719c2.75 0 5-2.25 5-5v-102.976562zm0 0\"\r\n    fill=\"#ffaf10\" />\r\n  <path\r\n    d=\"m274.179688 344c2.328124 0 4.222656 1.871094 4.222656 4.171875v26.488281h18.597656v-57.636718h-24.675781v26.976562zm0 0\"\r\n    fill=\"#ef9614\" />\r\n  <path d=\"m266.890625 277.582031c-2.75 0-5 2.25-5 5v30.441407c0 2.75 2.25 5 5 5h60.664063v-40.441407zm0 0\"\r\n    fill=\"#ef9614\" />\r\n  <path d=\"m427.792969 277.582031h-60.667969v40.441407h60.667969c2.75 0 5-2.25 5-5v-30.441407c0-2.75-2.25-5-5-5zm0 0\"\r\n    fill=\"#ef9614\" />\r\n  <path\r\n    d=\"m286.097656 313.023438v-30.441407c0-2.75 2.25-5 5-5h-24.207031c-2.75 0-5 2.25-5 5v30.441407c0 2.75 2.25 5 5 5h24.207031c-2.75 0-5-2.25-5-5zm0 0\"\r\n    fill=\"#ef8318\" />\r\n  <path d=\"m329.53125 317.023438h35.617188v107.976562h-35.617188zm0 0\" fill=\"#fe3745\" />\r\n  <path d=\"m329.53125 317.023438h12.46875v107.976562h-12.46875zm0 0\" fill=\"#ea2a3d\" />\r\n  <path d=\"m327.054688 277.582031h40.570312v40.441407h-40.570312zm0 0\" fill=\"#ea2a3d\" />\r\n  <path d=\"m327.054688 277.582031h12.378906v40.441407h-12.378906zm0 0\" fill=\"#b7092b\" />\r\n  <path\r\n    d=\"m422.121094 196.601562c-1.164063 1.167969-3.074219 1.167969-4.242188 0l-12.726562-12.726562c-1.167969-1.167969-1.167969-3.074219 0-4.242188l12.726562-12.730468c1.167969-1.164063 3.078125-1.164063 4.242188 0l12.730468 12.730468c1.164063 1.167969 1.164063 3.074219 0 4.242188zm0 0\"\r\n    fill=\"#ff9518\" />\r\n  <path\r\n    d=\"m40.144531 253.074219c-.875.875-2.304687.875-3.179687 0l-9.546875-9.546875c-.875-.875-.875-2.308594 0-3.183594l9.546875-9.546875c.875-.875 2.304687-.875 3.179687 0l9.546875 9.546875c.875.875.875 2.308594 0 3.183594zm0 0\"\r\n    fill=\"#ea2a3d\" />\r\n  <path\r\n    d=\"m357.121094 98.578125c-1.164063 1.167969-3.074219 1.167969-4.242188 0l-7.457031-7.457031c-1.164063-1.164063-1.164063-3.074219 0-4.242188l7.457031-7.457031c1.167969-1.164063 3.078125-1.164063 4.242188 0l7.457031 7.457031c1.164063 1.167969 1.164063 3.078125 0 4.242188zm0 0\"\r\n    fill=\"#52bbef\" />\r\n  <path\r\n    d=\"m202.121094 80.332031c-1.167969 1.167969-3.074219 1.167969-4.242188 0l-7.457031-7.457031c-1.167969-1.164062-1.167969-3.074219 0-4.242188l7.457031-7.457031c1.167969-1.164062 3.074219-1.164062 4.242188 0l7.457031 7.457031c1.167969 1.167969 1.167969 3.078126 0 4.242188zm0 0\"\r\n    fill=\"#ff9518\" />\r\n  <path\r\n    d=\"m72.730469 107.082031c-1.503907 1.5-3.960938 1.5-5.460938 0l-9.597656-9.597656c-1.5-1.503906-1.5-3.960937 0-5.460937l9.597656-9.597657c1.5-1.5 3.957031-1.5 5.460938 0l9.597656 9.597657c1.5 1.5 1.5 3.957031 0 5.460937zm0 0\"\r\n    fill=\"#f87eab\" />\r\n  <path\r\n    d=\"m227.539062 30.9375c-1.285156 1.289062-3.394531 1.289062-4.679687 0l-12.648437-12.644531c-1.285157-1.289063-1.285157-3.394531 0-4.683594l12.644531-12.644531c1.289062-1.285156 3.398437-1.285156 4.6875 0l12.644531 12.644531c1.285156 1.289063 1.285156 3.394531 0 4.683594zm0 0\"\r\n    fill=\"#37c47a\" />\r\n  <path\r\n    d=\"m279.402344 374.660156v-26.488281c0-2.847656-2.351563-5.171875-5.222656-5.171875h-12.53125c-2.875 0-6.894532 1.636719-8.933594 3.636719l-22.234375 21.761719v6.261718zm0 0\"\r\n    fill=\"#fff\" />\r\n  <path\r\n    d=\"m208.617188 374.660156v-6.261718l-22.234376-21.765626c-2.039062-1.996093-6.058593-3.632812-8.933593-3.632812h-12.53125c-2.871094 0-5.222657 2.324219-5.222657 5.167969v26.492187zm0 0\"\r\n    fill=\"#fff\" />\r\n  <path\r\n    d=\"m172 374.660156v-26.488281c0-2.847656 2.351562-5.171875 5.21875-5.171875h-12.300781c-2.871094 0-5.222657 2.324219-5.222657 5.171875v26.488281zm0 0\"\r\n    fill=\"#eef6ff\" />\r\n  <path\r\n    d=\"m230.992188 374.660156v-8.421875c0-1.226562-1.003907-2.226562-2.226563-2.226562h-18.429687c-1.226563 0-2.226563 1-2.226563 2.226562v8.421875zm0 0\"\r\n    fill=\"#eef6ff\" />\r\n  <path d=\"m128.753906 413.101562v50.976563c0 2.75 2.25 5 5 5h171.589844c2.75 0 5-2.25 5-5v-50.976563zm0 0\"\r\n    fill=\"#ea2a3d\" />\r\n  <path d=\"m153.40625 464.078125v-50.976563h-24.652344v50.976563c0 2.75 2.25 5 5 5h24.652344c-2.75 0-5-2.25-5-5zm0 0\"\r\n    fill=\"#b7092b\" />\r\n  <path d=\"m125.097656 373.660156c-2.75 0-5 2.25-5 5v30.441406c0 2.75 2.25 5 5 5h74.667969v-40.441406zm0 0\"\r\n    fill=\"#b7092b\" />\r\n  <path d=\"m314 373.660156h-74.667969v40.441406h74.667969c2.75 0 5-2.25 5-5v-30.441406c0-2.75-2.25-5-5-5zm0 0\"\r\n    fill=\"#b7092b\" />\r\n  <path\r\n    d=\"m145.097656 409.101562v-30.441406c0-2.75 2.25-5 5-5h-25c-2.75 0-5 2.25-5 5v30.441406c0 2.75 2.25 5 5 5h25c-2.75 0-5-2.25-5-5zm0 0\"\r\n    fill=\"#a00026\" />\r\n  <path d=\"m201.742188 413.101562h35.613281v55.976563h-35.613281zm0 0\" fill=\"#eef6ff\" />\r\n  <path d=\"m201.742188 413.101562h12.257812v55.976563h-12.257812zm0 0\" fill=\"#d9eafc\" />\r\n  <path d=\"m199.265625 373.660156h40.566406v40.441406h-40.566406zm0 0\" fill=\"#fff\" />\r\n  <path d=\"m199.265625 373.660156h12.167969v40.441406h-12.167969zm0 0\" fill=\"#eef6ff\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardBirthdayBComponent {
    constructor() {
        this.option = AwardType.BirthdayB;
    }
}
CustomAvatarAwardBirthdayBComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-birthday-b]',
                template: "<svg:g>\r\n  <circle style=\"fill:#55CEED;\" cx=\"256\" cy=\"256\" r=\"256\" />\r\n  <path style=\"fill:#E8F7F9;\" d=\"M401.171,237.899V121.846c0-12.162-9.951-22.113-22.113-22.113c-12.162,0-22.113,9.951-22.113,22.113\r\n      v116.053H401.171z\" />\r\n  <path style=\"fill:#C3F1FC;\" d=\"M390.115,102.722c-14.689-8.549-33.17,2.199-33.17,19.124v116.053h22.113V121.846\r\n      C379.058,113.705,383.52,106.561,390.115,102.722z\" />\r\n  <path style=\"fill:#E8F7F9;\" d=\"M278.125,237.899V121.846c0-12.162-9.951-22.113-22.113-22.113c-12.162,0-22.113,9.951-22.113,22.113\r\n      v116.053H278.125z\" />\r\n  <path style=\"fill:#C3F1FC;\" d=\"M267.069,102.722c-14.689-8.549-33.17,2.199-33.17,19.124v116.053h22.113V121.846\r\n      C256.012,113.705,260.473,106.561,267.069,102.722z\" />\r\n  <path style=\"fill:#E8F7F9;\" d=\"M155.079,237.899V121.846c0-12.162-9.951-22.113-22.113-22.113s-22.113,9.951-22.113,22.113v116.053\r\n      H155.079z\" />\r\n  <path style=\"fill:#C3F1FC;\" d=\"M144.022,102.722c-14.689-8.549-33.17,2.199-33.17,19.124v116.053h22.113V121.846\r\n      C132.966,113.705,137.427,106.561,144.022,102.722z\" />\r\n  <path style=\"fill:#FBB659;\" d=\"M147.574,83.895L147.574,83.895c-26.651,15.387-56.274-14.69-41.009-41.13l24.029-41.618\r\n      c0.883-1.529,3.09-1.529,3.973,0l24.905,43.137C167.766,58.651,162.412,76.476,147.574,83.895z\" />\r\n  <g>\r\n    <path style=\"fill:#F7A15F;\" d=\"M122.242,46.718l9.839-46.656c-1.891,0.414-0.377-0.239-25.517,42.703\r\n        c-15.267,26.445,14.361,56.515,41.009,41.13l0,0c0.602-0.301,1.182-0.625,1.753-0.96C131.14,81.511,118.537,64.286,122.242,46.718z\r\n        \" />\r\n    <path style=\"fill:#F7A15F;\" d=\"M142.005,85.422L142.005,85.422c-16.436,9.488-34.826-9.08-25.375-25.45l14.868-25.752\r\n        c0.546-0.946,1.912-0.946,2.458,0l15.41,26.691C154.499,69.801,151.186,80.831,142.005,85.422z\" />\r\n  </g>\r\n  <path style=\"fill:#D8874E;\" d=\"M146.193,82.515c-15.027-2.763-25.353-16.425-24.555-31.219l-5.009,8.676\r\n      c-6.093,10.553-0.498,24.223,11.402,27.327C134.605,89,141.381,86.964,146.193,82.515z\" />\r\n  <path style=\"fill:#474F70;\" d=\"M409.533,208.233H100.467c-13.264,0-24.115,10.852-24.115,24.115v5.551h357.297v-5.551\r\n      C433.648,219.085,422.797,208.233,409.533,208.233z\" />\r\n  <path style=\"fill:#323B5B;\" d=\"M157.081,208.233h-56.614c-13.264,0-24.115,10.852-24.115,24.115v5.551h56.614v-5.551\r\n      C132.966,219.085,143.818,208.233,157.081,208.233z\" />\r\n  <path style=\"fill:#FDD36E;\"\r\n    d=\"M465,403.862V260.58c0-15.591-12.756-28.348-28.347-28.348H73.348\r\n      C57.756,232.233,45,244.989,45,260.58v140.397C91.16,468.03,168.44,512,256,512C342.302,512,418.625,469.293,465,403.862z\" />\r\n  <path style=\"fill:#E5BC85;\" d=\"M99,260.58c0-15.591,12.756-28.348,28.348-28.348h-54C57.756,232.233,45,244.989,45,260.58v140.397\r\n      c14.965,21.738,33.204,41.046,54,57.221C99,422.869,99,264.04,99,260.58z\" />\r\n  <path style=\"fill:#E8846C;\" d=\"M413.528,457.803H98.496C141.928,491.757,196.596,512,256,512\r\n      C315.41,512,370.09,491.76,413.528,457.803z\" />\r\n  <path style=\"fill:#DD745F;\" d=\"M232.676,483.474c0-11.29,6.56-21.047,16.076-25.671H98.496C141.928,491.757,196.596,512,256,512\r\n      c1.238,0,2.47-0.022,3.704-0.039C244.646,511.182,232.676,498.726,232.676,483.474z\" />\r\n  <path style=\"fill:#FA6487;\" d=\"M436.653,232.233H73.348C57.756,232.233,45,244.989,45,260.58c0,11.573,0,86.847,0,99.266\r\n      c5.233,2.198,11.538,3.72,20.247,3.72c31.625,0,31.625-20,63.25-20c31.624,0,31.624,20,63.249,20c31.623,0,31.623-20,63.246-20\r\n      c31.625,0,31.625,20,63.249,20c31.626,0,31.626-20,63.251-20c31.627,0,31.627,20,63.254,20c8.713,0,15.019-1.522,20.254-3.721\r\n      c0-35.896,0-63.501,0-99.264C465,244.989,452.244,232.233,436.653,232.233z\" />\r\n  <path style=\"fill:#E64B78;\" d=\"M99,352.23v-91.65c0-15.591,12.756-28.348,28.348-28.348h-54C57.756,232.233,45,244.989,45,260.58\r\n      c0,11.574,0,86.847,0,99.266c5.233,2.198,11.538,3.72,20.247,3.72C82.473,363.566,90.318,357.633,99,352.23z\" />\r\n  <path style=\"fill:#F98FB0;\" d=\"M436.653,232.233H73.348C57.756,232.233,45,244.989,45,260.58v43.933\r\n      c5.233,2.198,11.538,3.719,20.247,3.719c31.625,0,31.625-20,63.25-20c31.624,0,31.624,20,63.249,20c31.623,0,31.623-20,63.246-20\r\n      c31.625,0,31.625,20,63.249,20c31.626,0,31.626-20,63.251-20c31.627,0,31.627,20,63.254,20c8.713,0,15.019-1.522,20.254-3.721\r\n      V260.58C465,244.989,452.244,232.233,436.653,232.233z\" />\r\n  <path style=\"fill:#FA6487;\" d=\"M99,296.897V260.58c0-15.591,12.756-28.348,28.348-28.348h-54C57.756,232.233,45,244.989,45,260.58\r\n      c0,15.677,0,28.143,0,43.933c5.233,2.198,11.538,3.719,20.247,3.719C82.473,308.233,90.318,302.3,99,296.897z\" />\r\n  <path style=\"fill:#FBB659;\" d=\"M270.608,83.895L270.608,83.895c-26.651,15.387-56.274-14.69-41.009-41.13l24.029-41.618\r\n      c0.883-1.529,3.09-1.529,3.973,0l24.905,43.137C290.8,58.651,285.446,76.476,270.608,83.895z\" />\r\n  <g>\r\n    <path style=\"fill:#F7A15F;\" d=\"M245.276,46.718l9.839-46.656c-0.593,0.13-1.142,0.486-1.488,1.085l-24.029,41.618\r\n        c-15.267,26.444,14.361,56.515,41.009,41.13l0,0c0.602-0.301,1.182-0.625,1.753-0.96C254.173,81.511,241.572,64.285,245.276,46.718\r\n        z\" />\r\n    <path style=\"fill:#F7A15F;\" d=\"M265.039,85.422L265.039,85.422c-16.494,9.521-34.819-9.092-25.375-25.45l14.868-25.752\r\n        c0.546-0.946,1.912-0.946,2.458,0l15.41,26.691C277.533,69.801,274.22,80.831,265.039,85.422z\" />\r\n  </g>\r\n  <path style=\"fill:#D8874E;\" d=\"M269.228,82.515c-15.027-2.763-25.353-16.425-24.555-31.219l-5.009,8.676\r\n      c-5.123,8.874-2.054,20.326,6.819,25.45l0,0C253.808,89.652,262.974,88.296,269.228,82.515z\" />\r\n  <path style=\"fill:#FBB659;\" d=\"M393.948,83.895L393.948,83.895c-26.651,15.387-56.274-14.69-41.009-41.13l24.029-41.618\r\n      c0.883-1.529,3.09-1.529,3.973,0l24.905,43.137C414.14,58.651,408.786,76.476,393.948,83.895z\" />\r\n  <g>\r\n    <path style=\"fill:#F7A15F;\" d=\"M368.616,46.718l9.839-46.656c-0.593,0.13-1.142,0.486-1.488,1.085l-24.029,41.618\r\n        c-15.267,26.444,14.361,56.515,41.009,41.13l0,0c0.602-0.301,1.182-0.625,1.753-0.96C377.515,81.511,364.911,64.287,368.616,46.718\r\n        z\" />\r\n    <path style=\"fill:#F7A15F;\" d=\"M388.379,85.422L388.379,85.422c-16.495,9.523-34.817-9.095-25.375-25.45l14.868-25.752\r\n        c0.546-0.946,1.912-0.946,2.458,0l15.41,26.691C400.873,69.801,397.56,80.831,388.379,85.422z\" />\r\n  </g>\r\n  <path style=\"fill:#D8874E;\" d=\"M392.568,82.515c-15.027-2.763-25.353-16.425-24.554-31.219l-5.009,8.676\r\n      c-5.123,8.874-2.055,20.326,6.819,25.45l0,0C377.13,89.641,386.272,88.335,392.568,82.515z\" />\r\n  <circle style=\"fill:#E64B78;\" cx=\"70.882\" cy=\"268.94\" r=\"12.94\" />\r\n  <g>\r\n    <circle style=\"fill:#FA6487;\" cx=\"194.29\" cy=\"268.94\" r=\"12.94\" />\r\n    <circle style=\"fill:#FA6487;\" cx=\"317.71\" cy=\"268.94\" r=\"12.94\" />\r\n    <circle style=\"fill:#FA6487;\" cx=\"441.12\" cy=\"268.94\" r=\"12.94\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardBirthdayCComponent {
    constructor() {
        this.option = AwardType.BirthdayC;
    }
}
CustomAvatarAwardBirthdayCComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-birthday-c]',
                template: "<svg:g>\r\n  <circle style=\"fill:#55CEED;\" cx=\"256\" cy=\"256\" r=\"256\" />\r\n  <g>\r\n    <path style=\"fill:#A5E5F9;\"\r\n      d=\"M173.288,439.409h-21.086c-3.057,0-4.752-3.427-3.01-5.939c9.393-13.547-0.345-32.181-17.368-32.181\r\n        c-27.084,0-59.036,0-86.058,0c-0.007,0.259-0.008,0.515-0.014,0.774c22.558,32.41,52.409,59.358,87.187,78.461\r\n        c23.47,0,1.914,0,40.349,0c11.306,0,20.557-9.251,20.557-20.557C193.845,448.659,184.594,439.409,173.288,439.409z\" />\r\n    <path style=\"fill:#A5E5F9;\" d=\"M451.163,90.347h-24.44c-2.833,0-4.491,2.943-3.333,5.374c10.037,13.526,0.303,32.746-16.497,32.746\r\n        c-29.906,0-54.189,0-83.931,0c-11.306,0-20.557-9.251-20.557-20.557s9.251-20.557,20.557-20.557h23.086\r\n        c3.057,0,4.752-3.427,3.01-5.939c-9.394-13.549,0.349-32.181,17.368-32.181c12.752,0,26.072,0,40.514,0\r\n        C423.253,61.161,438.099,74.971,451.163,90.347z\" />\r\n  </g>\r\n  <path style=\"fill:#FA6487;\" d=\"M485.233,169.171c-151.413-23.873-306.908-23.814-458.413,0.233l16.99,205.288\r\n      c136.732-20.05,280.421-21.177,424.43-0.211L485.233,169.171z\" />\r\n  <g>\r\n    <path style=\"fill:#E8F7F9;\"\r\n      d=\"M167.178,222.675c-5.439,0.646-10.874,1.351-16.302,2.116c1.001,7.104,2.002,14.209,3.003,21.313\r\n        c0.696,4.925-11.587,6.898-12.39,1.854c-2.634-16.631-5.268-33.261-7.902-49.892c-0.206-1.307,0.336-2.358,1.638-3.152\r\n        c3.531-2.15,11.05-2.799,11.605,1.17c0.905,6.423,1.81,12.846,2.715,19.269c5.497-0.775,11-1.489,16.508-2.143\r\n        c-0.765-6.441-1.53-12.882-2.294-19.323c-0.157-1.314,0.427-2.343,1.757-3.085c3.707-2.064,11.14-2.298,11.537,1.622\r\n        c1.7,16.752,3.4,33.504,5.099,50.256c0.511,5.009-11.843,6.385-12.437,1.369C168.87,236.923,168.024,229.799,167.178,222.675z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M186.661,240.959c-0.151-1.65,7.928-36.548,11.385-50.461c1.421-5.656,15.304-6.554,17.439-1.101\r\n        c2.026,5.206,17.658,46.591,17.711,48.625c0.139,4.23-10.295,7.835-11.974,3.255c-1.063-3.262-2.138-6.522-3.226-9.78\r\n        c-5.692,0.293-11.381,0.652-17.066,1.077c-2.128,10.698-1.816,11.141-3.304,12.006\r\n        C194.566,246.369,187.008,244.646,186.661,240.959z M214.801,222.124c-2.385-6.975-4.826-13.938-7.323-20.89\r\n        c-1.603,7.211-3.149,14.426-4.638,21.645C206.826,222.596,210.813,222.344,214.801,222.124z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M237.929,186.011c0.899-0.761,2.095-1.159,3.586-1.186c13.969-0.26,25.161-1.607,32.118,4.19\r\n        c8.641,7.194,9.805,32.843-15.284,32.769c-2.704-0.008-5.409-0.001-8.114,0.02c0.045,5.718,0.09,11.436,0.135,17.155\r\n        c0.04,5.03-12.368,5.259-12.492,0.205C236.509,184.197,236.007,187.643,237.929,186.011z M250.029,195.514\r\n        c0.044,5.586,0.088,11.172,0.132,16.757c2.739-0.022,5.478-0.028,8.217-0.02c4.703,0.014,7.505-2.548,7.572-7.883\r\n        c0.032-2.458-0.057-5.048-1.943-6.893C261.516,195.04,258.688,195.447,250.029,195.514z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M286.793,186.398c1.854-1.383,3.13-1.198,21.438,0.016c2.804,0.186,5.43,0.707,7.865,1.556\r\n        c16.209,5.666,13.983,31.741-3.128,34.969c-4.641,0.879-7.142,0.434-16.114-0.054c-0.311,5.71-0.621,11.42-0.931,17.13\r\n        c-0.274,5.069-12.672,4.446-12.483-0.572C285.489,184.499,284.773,187.907,286.793,186.398z M298.283,196.635\r\n        c-0.303,5.578-0.607,11.155-0.91,16.733c9.641,0.524,15.551,2.45,16.323-7.777c0.402-5.333-2.221-8.141-7.026-8.455\r\n        C303.875,196.954,301.079,196.787,298.283,196.635z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M343.646,222.984c-4.602-9.681-9.413-19.321-14.435-28.914c-1.315-3.084,5.197-5.492,9.47-5.041\r\n        c1.774,0.187,2.647,0.699,3.601,2.705c3.237,7.203,6.368,14.425,9.393,21.664c4.698-6.266,9.496-12.49,14.393-18.669\r\n        c0.557-0.669,1.121-1.165,1.689-1.484c0.567-0.32,1.393-0.402,2.474-0.243c0.909,0.133,1.871,0.41,2.884,0.829\r\n        c1.01,0.421,1.938,0.924,2.777,1.508c0.837,0.586,1.508,1.226,2.008,1.921s0.691,1.409,0.574,2.141\r\n        c-0.058,0.367-0.16,0.645-0.305,0.836c-0.992,1.105-21.366,23.979-21.568,25.497c-0.887,6.586-1.774,13.171-2.66,19.757\r\n        c-0.67,4.983-13.005,3.442-12.42-1.564C344.007,222.737,344.035,223.72,343.646,222.984z\" />\r\n  </g>\r\n  <path style=\"fill:#505E93;\" d=\"M482.187,375.951l18.5-223.516c0.615-7.43-4.91-13.952-12.341-14.567\r\n      c-7.427-0.613-13.952,4.91-14.567,12.341l-22.449,271.24C463.165,407.487,473.53,392.243,482.187,375.951z\" />\r\n  <path style=\"fill:#474F70;\" d=\"M487.045,153.874c0.482-5.816,4.589-10.448,9.91-11.899c-8.025-8.355-22.22-3.314-23.176,8.233\r\n      l-22.449,271.24c5.389-6.357,10.456-12.993,15.213-19.859L487.045,153.874z\" />\r\n  <path style=\"fill:#E64B78;\" d=\"M118.096,157.872c-30.711,2.907-61.15,6.751-91.276,11.532l16.99,205.288\r\n      c40.933-6.002,82.421-10.291,124.386-12.816C84.693,330.199,58.825,224.512,118.096,157.872z\" />\r\n  <path style=\"fill:#505E93;\" d=\"M29.874,376.068c8.659,16.275,19.023,31.502,30.854,45.448L38.273,150.208\r\n      c-0.616-7.431-7.141-12.958-14.568-12.341c-7.43,0.615-12.955,7.138-12.34,14.567L29.874,376.068z\" />\r\n  <path style=\"fill:#474F70;\" d=\"M24.866,152.434c-0.445-5.374,2.332-10.261,6.71-12.793c-9.35-5.422-21.112,1.892-20.21,12.793\r\n      l18.509,223.634c4.641,8.724,9.788,17.135,15.372,25.221L24.866,152.434z\" />\r\n  <g>\r\n    <path style=\"fill:#E8F7F9;\"\r\n      d=\"M127.624,275.315c-0.151-1.315,0.421-2.339,1.72-3.074c3.53-1.992,10.88-2.32,11.286,1.656\r\n        c1.728,16.749,3.456,33.498,5.184,50.247c0.513,5.03-11.852,6.37-12.423,1.355C131.469,308.77,129.546,292.042,127.624,275.315z\" />\r\n    <path style=\"fill:#E8F7F9;\"\r\n      d=\"M150.481,270.291c0.655-0.805,1.599-1.266,2.827-1.378c17.652-1.614,20.834-1.894,25.455-1.202\r\n        c4.961,0.742,9.027,3.026,11.457,7.347c1.183,2.105,1.862,4.772,2.047,7.995c0.255,4.441-0.49,8.023-2.215,10.752\r\n        c-1.726,2.73-3.961,4.712-6.714,5.956c3.7,5.618,7.348,11.254,10.942,16.908c0.292,0.409,0.453,0.877,0.482,1.404\r\n        c0.045,0.794-0.15,1.587-0.585,2.38c-0.436,0.795-1.007,1.518-1.715,2.169c-0.708,0.652-1.514,1.192-2.42,1.619\r\n        c-0.906,0.426-1.809,0.67-2.71,0.728c-0.796,0.051-1.562-0.072-2.301-0.367s-1.35-0.851-1.832-1.668\r\n        c-4.118-6.778-8.308-13.532-12.567-20.262c-1.787,0.14-3.574,0.285-5.36,0.433c0.53,6.358,1.06,12.716,1.589,19.074\r\n        c0.106,1.266-0.468,2.27-1.712,3.014c-3.592,2.143-10.371,1.882-10.729-1.904C149.215,268.516,149.078,272.017,150.481,270.291z\r\n         M163.254,278.887c0.409,4.907,0.818,9.814,1.227,14.721c8.144-0.678,11.028-0.416,13.408-2.628\r\n        c2.514-2.335,2.019-9.616-0.821-11.567c-1.403-0.962-3.268-1.358-5.594-1.181C168.733,278.44,165.993,278.659,163.254,278.887z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M233.951,264.44c5.282-0.103,5.441,11.015,0.218,11.117c-3.827,0.075-7.653,0.17-11.479,0.285\r\n        c0.43,14.369,0.86,28.738,1.29,43.108c0.038,1.27-0.586,2.242-1.868,2.918c-1.283,0.677-2.692,1.042-4.232,1.096\r\n        c-1.541,0.055-2.972-0.208-4.3-0.792c-1.329-0.583-2.019-1.508-2.072-2.778c-0.597-14.363-1.193-28.727-1.79-43.09\r\n        c-3.825,0.159-7.648,0.337-11.472,0.536c-1.276,0.066-2.273-0.437-2.999-1.511c-1.313-1.943-1.722-5.041-0.502-7.688\r\n        c0.551-1.196,1.526-1.833,2.926-1.905C209.758,265.11,221.853,264.678,233.951,264.44z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M272.449,297.066c-5.412-0.081-10.824-0.121-16.236-0.121c0,7.174-0.001,14.349-0.002,21.523\r\n        c-0.001,1.271-0.654,2.223-1.955,2.861c-3.767,1.845-10.479,0.991-10.523-2.789c-0.194-16.837-0.388-33.674-0.582-50.51\r\n        c-0.016-1.323,0.656-2.284,2.024-2.881c3.784-1.649,11.038-1.139,11.04,2.806c0,6.486-0.001,12.973-0.001,19.459\r\n        c5.459,0,10.918,0.041,16.377,0.122c0.096-6.486,0.193-12.971,0.289-19.457c0.055-3.916,7.23-4.387,11.082-2.641\r\n        c1.357,0.618,2.016,1.588,1.981,2.911c-0.446,16.832-0.892,33.664-1.338,50.496c-0.132,5.033-12.556,4.791-12.476-0.258\r\n        C272.236,311.414,272.343,304.24,272.449,297.066z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M334.993,285.77c-1.503,21.124-1.257,24.553-3.604,29.086c-2.971,5.736-8.49,9.458-18.767,8.915\r\n        c-14.857-0.785-15.997-0.285-18-1.912c-0.958-0.775-1.418-1.665-1.385-2.672c0.582-16.854,1.164-33.708,1.746-50.563\r\n        c0.087-2.547,3.246-3.621,5.84-3.519C314.601,265.653,336.581,263.536,334.993,285.77z M307.715,276.214\r\n        c-0.56,12.139-1.121,24.277-1.681,36.416c7.193,0.332,9.986,1.023,12.578-1.294c2.722-2.435,2.225-4.788,3.512-26.407\r\n        c0.319-5.366-2.32-8.101-7.009-8.348C312.648,276.45,310.181,276.328,307.715,276.214z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M336.704,319.341c6.167-15.732,12.555-31.413,19.163-47.039c2.292-5.389,15.809-4.029,17.026,1.645\r\n        c1.017,4.791,10.135,49.096,9.949,50.735c-0.425,3.569-7.839,5.341-11.053,3.341c-1.444-0.893-1.123-1.155-2.951-12.096\r\n        c-5.647-0.591-11.297-1.137-16.95-1.638c-3.88,10.366-3.635,10.711-5.21,11.307C343.151,326.941,335.268,323.657,336.704,319.341z\r\n         M367.157,306.172c-1.25-7.26-2.54-14.518-3.868-21.775c-2.693,6.868-5.347,13.746-7.964,20.632\r\n        C359.271,305.389,363.215,305.77,367.157,306.172z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M397.495,306.575c-13.833-30.456-13.928-28.522-13.759-30.005c0.354-3.085,6.327-4.383,9.437-4.002\r\n        c1.709,0.209,2.565,0.716,3.472,2.751c3.042,7.24,6.012,14.491,8.909,21.753c16.35-21.622,15.499-20.745,18.41-20.309\r\n        c3.089,0.464,8.521,3.316,8.033,6.383c-0.239,1.489,0.155-0.383-21.22,25.24c-0.553,0.6-0.243-0.613-3.287,20.791\r\n        c-0.714,5.004-13.045,3.321-12.392-1.689C397.839,306.463,397.87,307.309,397.495,306.575z\" />\r\n    <path style=\"fill:#E8F7F9;\" d=\"M80.068,281.89c-0.428-2.721,2.54-4.26,5.066-4.647c5.691-0.872,11.389-1.7,17.09-2.484\r\n        c21.824-3.001,22.196,19.872,12.999,25.11c2.483,0.591,4.81,1.466,6.576,3.294c3.903,4.049,5.857,17.22,0.529,23.624\r\n        c-4.856,5.843-12.534,5.415-28.403,7.845c-2.557,0.392-5.558-0.341-5.956-2.851C85.335,315.151,82.702,298.521,80.068,281.89z\r\n         M95.55,297.767c2.861-0.419,5.723-0.827,8.587-1.224c6.286-0.871,4.741-11.801-1.515-10.935c-2.892,0.401-5.783,0.813-8.672,1.236\r\n        C94.483,290.485,95.017,294.126,95.55,297.767z M112.493,312.401c-1.141-8.599-6.419-6.544-15.56-5.204\r\n        c0.768,5.239,1.536,10.478,2.304,15.717C109.205,321.453,113.812,322.317,112.493,312.401z\" />\r\n  </g>\r\n  <path style=\"fill:#C3F1FC;\"\r\n    d=\"M87.97,331.782c0.399,2.518,3.413,3.24,5.955,2.851c17.857-2.736,21.396-2.436,25.828-5.512\r\n      c-2.852-3.085-5.566-6.301-8.105-9.657c-1.855,2.419-3.955,2.211-12.413,3.451c-0.768-5.239-1.536-10.478-2.303-15.717\r\n      c2.006-0.294,4.013-0.577,6.021-0.859c-1.686-2.914-3.257-5.901-4.712-8.955c-0.897,0.129-1.794,0.252-2.691,0.384\r\n      c-2.728-18.618-0.452-4.334-5.118-21.315c-4.12,0.611-11.061,1.008-10.365,5.438C82.702,298.521,85.336,315.151,87.97,331.782z\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardBirthdayDComponent {
    constructor() {
        this.option = AwardType.BirthdayD;
    }
}
CustomAvatarAwardBirthdayDComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-birthday-d]',
                template: "<svg:g>\r\n  <path\r\n    d=\"m71.289062 433.226562c-44.148437-45.996093-71.289062-108.4375-71.289062-177.226562 0-141.222656 114.355469-255.742188 255.519531-256 140.269531-.257812 255.292969 113.535156 256.472657 253.800781.585937 69.914063-26.867188 133.414063-71.777344 179.945313-3.851563 3.988281-9.144532 6.253906-14.683594 6.253906h-338.417969c-5.976562 0-11.683593-2.457031-15.824219-6.773438zm0 0\"\r\n    fill=\"#f7c32a\" />\r\n  <path\r\n    d=\"m368.878906 103.25-86.570312 23.199219-9.988282 17.296875c-4.140624 7.175781-13.316406 9.632812-20.488281 5.492187-4.691406-2.710937-7.351562-7.574219-7.480469-12.621093l-10.703124 2.867187c-8 2.144531-16.226563-2.601563-18.371094-10.605469-2.144532-8 2.605468-16.226562 10.609375-18.371094l36.65625-9.820312 53.796875-93.183594c4.140625-7.175781 13.316406-9.632812 20.492187-5.492187 7.171875 4.144531 9.632813 13.316406 5.488281 20.492187l-38.800781 67.199219 57.59375-15.429687c8-2.144532 16.226563 2.601562 18.371094 10.605468s-2.601563 16.226563-10.605469 18.371094zm0 0\"\r\n    fill=\"#a0452c\" />\r\n  <path\r\n    d=\"m378.3125 81.871094c-1.871094 3.621094-5.183594 6.484375-9.433594 7.621094l-94.976562 25.449218-15.910156 27.554688c-1.660157 2.878906-4.140626 4.980468-6.964844 6.222656-6.539063-4.347656-8.667969-13.078125-4.6875-19.972656l4.382812-7.59375-17.074218 4.574218c-6.9375 1.859376-14.035157-1.46875-17.199219-7.597656 1.871093-3.621094 5.1875-6.484375 9.433593-7.621094l36.660157-9.824218 53.796875-93.179688c1.660156-2.878906 4.140625-4.984375 6.964844-6.21875 6.539062 4.34375 8.667968 13.074219 4.6875 19.96875l-42.273438 73.222656 75.394531-20.203124c6.9375-1.859376 14.035157 1.46875 17.199219 7.597656zm0 0\"\r\n    fill=\"#bb5335\" />\r\n  <path\r\n    d=\"m216.976562 44.941406c.40625 9.726563-24.457031 34.589844-34.183593 34.183594-10.875-.453125-20.335938-6.613281-23.867188-14.734375 2.125-5.820313 7.601563-10.285156 14.71875-12.027344-3.304687-6.324219-4.035156-13.105469-1.914062-18.484375 5.378906-2.117187 12.164062-1.390625 18.484375 1.914063 1.742187-7.117188 6.207031-12.59375 12.027344-14.71875 8.121093 3.53125 14.28125 12.992187 14.734374 23.867187zm0 0\"\r\n    fill=\"#65cc65\" />\r\n  <path\r\n    d=\"m240.058594 143.007812c-11.523438-1.226562-23.351563-4.699218-34.820313-10.175781-38.492187-18.378906-34.847656-47.027343-34.847656-47.027343 2.289063-11.480469 12.066406-19.433594 23.546875-21.726563 2.070312-.410156 3.769531-1.511719 4.898438-3.09375 1.582031-1.128906 2.679687-2.824219 3.09375-4.898437 2.289062-11.476563 10.246093-21.253907 21.726562-23.546876 0 0 28.644531-3.644531 47.027344 34.847657 5.476562 11.46875 8.949218 23.296875 10.171875 34.820312 1.210937 11.378907-2.683594 22.4375-10.519531 30.277344-7.839844 7.835937-18.898438 11.730469-30.277344 10.523437zm0 0\"\r\n    fill=\"#f45751\" />\r\n  <path\r\n    d=\"m263.328125 115.207031c-25.320313 6.703125-55.78125-1.730469-78.265625-24.214843-4.285156-4.28125-8.050781-8.855469-11.304688-13.625 4.308594-6.898438 11.78125-11.613282 20.179688-13.289063 2.070312-.414063 3.769531-1.511719 4.898438-3.09375 1.582031-1.128906 2.679687-2.828125 3.09375-4.898437 2.289062-11.480469 10.246093-21.257813 21.722656-23.546876 0 0 28.648437-3.644531 47.03125 34.847657 4.824218 10.101562 8.089844 20.480469 9.636718 30.683593-2.101562 8.160157-8.460937 14.875-16.992187 17.136719zm0 0\"\r\n    fill=\"#f56d59\" />\r\n  <path\r\n    d=\"m442 300v120c-46.664062 49.332031-112.734375 80.117188-186 80.117188s-139.335938-30.785157-186-80.117188v-120c0-11.046875 8.953125-20 20-20h40v-130c0-11.046875 8.953125-20 20-20h212c11.046875 0 20 8.953125 20 20v130h40c11.046875 0 20 8.953125 20 20zm0 0\"\r\n    fill=\"#bb5335\" />\r\n  <path\r\n    d=\"m442 300v120c-46.664062 49.332031-112.734375 80.117188-186 80.117188-58.71875 0-112.808594-19.785157-156-53.027344v-147.089844c0-11.046875 8.953125-20 20-20h40v-130c0-11.046875 8.953125-20 20-20h182c11.046875 0 20 8.953125 20 20v130h40c11.046875 0 20 8.953125 20 20zm0 0\"\r\n    fill=\"#d25e3e\" />\r\n  <path\r\n    d=\"m382 300h-252v-100h252zm-312 110v21.882812c46.664062 49.332032 112.734375 80.117188 186 80.117188s139.335938-30.785156 186-80.117188v-21.882812zm0 0\"\r\n    fill=\"#ef586b\" />\r\n  <path\r\n    d=\"m165 215c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10c-1.824219 0-3.527344-.496094-5-1.347656v66.347656h222v-100h-222v16.347656c1.472656-.851562 3.175781-1.347656 5-1.347656zm175 15c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10-10-4.476562-10-10 4.476562-10 10-10zm-50-20c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10-10-4.476562-10-10 4.476562-10 10-10zm-42.5 220c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10-10-4.476562-10-10 4.476562-10 10-10zm-47.5-215c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10-10-4.476562-10-10 4.476562-10 10-10zm-100 195v20c5.523438 0 10 4.476562 10 10s-4.476562 10-10 10v8.972656c43.191406 33.246094 97.28125 53.027344 156 53.027344 73.265625 0 139.335938-30.785156 186-80.117188v-21.882812zm80 40c-5.523438 0-10-4.476562-10-10s4.476562-10 10-10 10 4.476562 10 10-4.476562 10-10 10zm90 30c-5.523438 0-10-4.476562-10-10s4.476562-10 10-10 10 4.476562 10 10-4.476562 10-10 10zm70-20c-5.523438 0-10-4.476562-10-10s4.476562-10 10-10 10 4.476562 10 10-4.476562 10-10 10zm40-10c-5.523438 0-10-4.476562-10-10s4.476562-10 10-10 10 4.476562 10 10-4.476562 10-10 10zm0 0\"\r\n    fill=\"#f78d9a\" />\r\n  <path\r\n    d=\"m120 140v-10c0-11.046875 8.953125-20 20-20h232c11.046875 0 20 8.953125 20 20v10c0 11.046875-8.953125 20-20 20h-12c-5.523438 0-10 4.476562-10 10v25c0 11.289062-9.351562 20.390625-20.730469 19.988281-10.835937-.386719-19.269531-9.621093-19.269531-20.46875v-.128906c0-5.328125-4.425781-9.457031-9.753906-9.390625-1.433594.015625-2.90625-.117188-4.398438-.433594-9.339844-1.96875-15.847656-10.492187-15.847656-20.035156 0-2.503906-2.027344-4.53125-4.53125-4.53125h-135.46875c-11.046875 0-20-8.953125-20-20zm312 125h-352c-11.046875 0-20 8.953125-20 20v10c0 11.046875 8.953125 20 20 20h220c5.523438 0 10 4.476562 10 10v44.527344c0 10.839844 8.429688 20.074218 19.265625 20.460937 11.375.402344 20.722656-8.695312 20.722656-19.980469v-45.007812c0-5.523438 4.476563-10 10-10h72.011719c11.046875 0 20-8.953125 20-20v-10c0-11.046875-8.953125-20-20-20zm0 0\"\r\n    fill=\"#fccfc9\" />\r\n  <path\r\n    d=\"m120 130c0-11.046875 8.953125-20 20-20h100.359375c2.429687-16.960938 17.007813-30 34.640625-30 16.203125 0 29.828125 11.011719 33.8125 25.957031 4.363281-3.710937 10.011719-5.957031 16.1875-5.957031 8.179688 0 15.4375 3.929688 20 10h27c11.046875 0 20 8.953125 20 20 0 5.523438-4.476562 10-10 10h-252c-5.523438 0-10-4.476562-10-10zm312 135h-11c0-13.804688-11.191406-25-25-25s-25 11.195312-25 25h-20c0-13.804688-11.191406-25-25-25s-25 11.195312-25 25h-20c0-13.804688-11.191406-25-25-25s-25 11.195312-25 25h-20c0-13.804688-11.191406-25-25-25s-25 11.195312-25 25h-20c0-13.804688-11.191406-25-25-25s-25 11.195312-25 25h-11c-11.046875 0-20 8.953125-20 20 0 5.523438 4.476562 10 10 10h372c5.523438 0 10-4.476562 10-10 0-11.046875-8.953125-20-20-20zm0 0\"\r\n    fill=\"#fff5f5\" />\r\n</svg:g>"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardCorrectComponent {
    constructor() {
        this.option = AwardType.Correct;
    }
}
CustomAvatarAwardCorrectComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-correct]',
                template: "<svg:g transform=\"scale(1.15)\">\r\n  <path style=\"fill:#6AC259;\" d=\"M213.333,0C95.518,0,0,95.514,0,213.333s95.518,213.333,213.333,213.333\r\n\tc117.828,0,213.333-95.514,213.333-213.333S331.157,0,213.333,0z M174.199,322.918l-93.935-93.931l31.309-31.309l62.626,62.622\r\n\tl140.894-140.898l31.309,31.309L174.199,322.918z\"/>\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardIncorrectComponent {
    constructor() {
        this.option = AwardType.Incorrect;
    }
}
CustomAvatarAwardIncorrectComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-incorrect]',
                template: "<svg:g transform=\"scale(1.15)\">\r\n  <path style=\"fill:#F05228;\" d=\"M213.333,0C95.514,0,0,95.514,0,213.333s95.514,213.333,213.333,213.333\r\n\ts213.333-95.514,213.333-213.333S331.153,0,213.333,0z M330.995,276.689l-54.302,54.306l-63.36-63.356l-63.36,63.36l-54.302-54.31\r\n\tl63.356-63.356l-63.356-63.36l54.302-54.302l63.36,63.356l63.36-63.356l54.302,54.302l-63.356,63.36L330.995,276.689z\" />\r\n</svg:g>\r\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomAvatarAwardThumbUpComponent {
    constructor() {
        this._color = '';
        this._color2 = '';
        this.option = AwardType.ThumbUp;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor(value) {
        if (this._clotheColor !== value) {
            this._clotheColor = value;
            this._color = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor() {
        return this._clotheColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set clotheColor2(value) {
        if (this._clotheColor2 !== value) {
            this._clotheColor2 = value;
            this._color2 = clotheColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get clotheColor2() {
        return this._clotheColor2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set skinColor(value) {
        if (this._skinColor !== value) {
            this._skinColor = value;
            this._color3 = skinColorTranslation(value);
        }
    }
    /**
     * @return {?}
     */
    get skinColor() {
        return this._skinColor;
    }
    /**
     * @return {?}
     */
    get color() {
        return this._color;
    }
    /**
     * @return {?}
     */
    get color2() {
        return this._color2;
    }
    /**
     * @return {?}
     */
    get color3() {
        return this._color3;
    }
}
CustomAvatarAwardThumbUpComponent.decorators = [
    { type: Component, args: [{
                selector: '[kip-custom-avatar-award-thumb-up]',
                template: "<svg:g>\r\n  <path\r\n    d=\"m455.722656 280.414062c0 123.503907-100.132812 223.625-223.636718 223.625-30.296876 0-59.179688-6.023437-85.519532-16.945312-72.003906-29.824219-125.039062-96.175781-136.003906-175.945312-1.390625-10.042969-2.101562-20.308594-2.101562-30.734376 0-123.515624 100.121093-223.636718 223.625-223.636718 123.503906 0 223.636718 100.121094 223.636718 223.636718zm0 0\"\r\n    fill=\"#937de2\" />\r\n\r\n  <path\r\n    d=\"m483.640625 263.878906-127.703125 84.5625c-9.097656 6.027344-20.117188 8.417969-30.890625 6.695313-10.796875-1.71875-21.84375.640625-30.964844 6.679687l-17.089843 11.324219-95.707032-141.074219 23.480469-101.441406c1.828125-7.894531 2.730469-15.898438 2.730469-23.871094 0-20.625-6.03125-40.984375-17.601563-58.460937-2.84375-4.296875-4.203125-9.160157-4.203125-13.957031 0-8.207032 3.980469-16.253907 11.335938-21.125 9.914062-6.570313 23.054687-5.347657 31.589844 2.929687l15.210937 14.734375c17.398437 16.878906 30.816406 37.429688 39.246094 60.15625l8.25 22.207031 84.941406-56.121093c13.566406-8.980469 31.921875-5.054688 40.582031 8.839843 8.355469 13.386719 4.066406 31.074219-9.097656 39.789063-.160156.105468-.167969.273437-.117188.402344.074219.136718.234376.234374.414063.160156 3.355469-1.296875 6.867187-1.921875 10.351563-1.921875 5.558593 0 11.070312 1.601562 15.785156 4.648437 3.246094 2.101563 6.121094 4.894532 8.394531 8.320313 4.382813 6.625 5.691406 14.394531 4.257813 21.613281-2.253907 11.378906-10.519532 17.238281-12.144532 18.34375-.277344.191406-.351562.570312-.160156.859375 0 .011719.011719.019531.023438.019531.179687.257813.550781.332032.816406.160156 2.3125-.5625 4.667968-.828124 7.027344-.828124 5.75 0 11.472656 1.636718 16.335937 4.734374 3.289063 2.101563 6.199219 4.882813 8.449219 8.289063 8.832031 13.332031 5.179687 31.304687-8.164063 40.136719-.328125.222656-.65625.445312-.984375.65625-.191406.152344-.246094.394531-.148437.566406.019531.039062.0625.082031.105469.105469.148437.117187.382812.125.574218-.023438 8.289063-2.824219 17.3125-1.539062 24.574219 3.164063 3.34375 2.144531 6.304687 5.03125 8.648437 8.578125 8.832032 13.347656 5.183594 31.316406-8.148437 40.148437zm0 0\"\r\n    [attr.fill]=\"color3\" />\r\n  <path\r\n    d=\"m278.214844 399.914062-53.871094 35.675782-77.777344 51.507812c-72.003906-29.828125-125.039062-96.175781-136.003906-175.949218l90.261719-59.773438 54.945312-36.386719c6.324219-4.195312 14.859375-2.453125 19.050781 3.882813l107.277344 161.976562c4.195313 6.339844 2.453125 14.863282-3.882812 19.066406zm0 0\"\r\n    [attr.fill]=\"color\" />\r\n  <path\r\n    d=\"m278.214844 399.914062-53.871094 35.675782-123.519531-184.214844 54.945312-36.386719c6.324219-4.195312 14.859375-2.453125 19.050781 3.882813l107.277344 161.976562c4.195313 6.339844 2.453125 14.863282-3.882812 19.066406zm0 0\"\r\n    [attr.fill]=\"color2\" />\r\n  <g fill=\"#000000\">\r\n    <path\r\n      d=\"m434.183594 109.035156-42.492188 22.738282c-6.03125 3.21875-13.503906 1.539062-17.558594-3.949219l33.5-21.675781c.074219.140624.234376.234374.414063.160156 3.355469-1.296875 6.867187-1.921875 10.351563-1.921875 5.5625 0 11.070312 1.605469 15.785156 4.648437zm0 0\" />\r\n    <path\r\n      d=\"m458.734375 162.261719-41.566406 22.226562c-6.03125 3.226563-13.503907 1.550781-17.558594-3.9375l33.5-21.675781 1.445313-.679688c.179687.257813.550781.332032.816406.160157 2.316406-.5625 4.671875-.828125 7.027344-.828125 5.753906 0 11.476562 1.632812 16.335937 4.734375zm0 0\" />\r\n    <path\r\n      d=\"m483.140625 215.15625-36.613281 19.585938c-6.015625 3.214843-13.492188 1.539062-17.554688-3.949219l29.019532-18.777344c.148437.117187.382812.125.574218-.023437 8.289063-2.824219 17.3125-1.539063 24.574219 3.164062zm0 0\" />\r\n  </g>\r\n  <path fill=\"#000000\"\r\n    d=\"m498.429688 219.339844c-5.308594-8.015625-13.355469-13.539063-22.710938-15.632813 6.035156-11.542969 5.789062-25.945312-1.898438-37.550781-5.46875-8.261719-13.71875-13.597656-22.699218-15.617188 1.601562-3.054687 2.785156-6.351562 3.492187-9.828124 1.960938-9.667969.046875-19.519532-5.402343-27.742188-5.308594-8.019531-13.355469-13.542969-22.710938-15.632812 6.035156-11.542969 5.789062-25.945313-1.898438-37.554688-11.238281-16.972656-34.199218-21.640625-51.175781-10.398438l-36.757812 24.34375c-19.59375-9.9375-40.433594-16.988281-62.0625-21.003906-6.835938-10.378906-14.785157-20.027344-23.683594-28.652344l-15.207031-14.738281c-11.136719-10.796875-28.601563-12.417969-41.53125-3.851562-15.296875 10.128906-19.5 30.816406-9.371094 46.113281.398438.605469.789062 1.214844 1.175781 1.824219-49.847656 10.085937-95.277343 36.539062-128.902343 75.300781-36.488282 42.066406-56.585938 95.941406-56.585938 151.699219 0 10.6875.730469 21.394531 2.175781 31.816406 11.136719 81.019531 65.105469 150.839844 140.839844 182.21875 28.085937 11.640625 57.886719 17.546875 88.5625 17.546875 48.582031 0 95.085937-14.878906 134.488281-43.023438 38.546875-27.539062 67.386719-65.542968 83.40625-109.902343 1.496094-4.132813-.648437-8.699219-4.78125-10.191407-4.136718-1.492187-8.699218.648438-10.191406 4.785157-14.917969 41.308593-41.78125 76.699219-77.691406 102.351562-36.683594 26.207031-79.988282 40.058594-125.230469 40.058594-23.390625 0-46.230469-3.691406-68.089844-10.972656l64.773438-42.894531c.003906-.003907.007812-.003907.011719-.007813.003906 0 .003906-.003906.007812-.007813l53.832031-35.648437h.003907c4.832031-3.203125 8.132812-8.09375 9.289062-13.777344 1.15625-5.683593.03125-11.480469-3.171875-16.3125l-.710937-1.078125 10.457031-6.925781c7.460937-4.941406 16.433593-6.878906 25.269531-5.460937 12.792969 2.054687 25.785156-.757813 36.582031-7.910157l86.734375-57.4375c-.59375 7.523438-1.570312 15.003907-2.933594 22.359375-.804687 4.324219 2.050782 8.480469 6.375 9.28125.488282.09375.980469.136719 1.460938.136719 3.761719 0 7.105469-2.679687 7.816406-6.511719 2.207032-11.871094 3.476563-24.03125 3.804688-36.207031l24.441406-16.1875c8.222656-5.445313 13.835938-13.769531 15.796875-23.433594 1.964844-9.667969.046875-19.519531-5.398437-27.742187zm-177.21875-135.378906-24.324219 16.109374-4.789063-12.902343c-2-5.382813-4.292968-10.660157-6.832031-15.824219 12.339844 3.128906 24.355469 7.347656 35.945313 12.617188zm-252.097657 55.191406c32.316407-37.253906 76.335938-62.296875 124.492188-70.980469 7.726562 18.71875 9.578125 39.632813 4.960937 59.566406l-19.410156 83.855469c-3.050781-3.257812-7.011719-5.503906-11.472656-6.410156-5.6875-1.160156-11.480469-.03125-16.3125 3.171875l-54.980469 36.40625c-.003906 0-.003906 0-.007813.003906 0 0-.003906 0-.003906.003906l-79.296875 52.511719c-.433593-5.59375-.660156-11.230469-.660156-16.863281 0-51.921875 18.714844-102.09375 52.691406-141.265625zm207.191407 250.441406c-.308594 1.515625-1.191407 2.824219-2.484376 3.679688h.003907l-47.28125 31.308593-87.753907-130.871093c-2.449218-3.652344-7.394531-4.625-11.046874-2.175782-3.648438 2.449219-4.625 7.390625-2.175782 11.042969l87.699219 130.796875-67.496094 44.699219c-67.070312-29.335938-115.066406-91.289063-126.605469-163.378907l79.390626-52.402343 9.136718 13.632812c1.539063 2.289063 4.054688 3.527344 6.621094 3.527344 1.523438 0 3.066406-.433594 4.425781-1.347656 3.652344-2.449219 4.628907-7.394531 2.179688-11.046875l-9.074219-13.535156 48.320312-31.894532c1.285157-.855468 2.828126-1.152344 4.34375-.84375 1.515626.308594 2.824219 1.191406 3.679688 2.480469l107.273438 161.984375c.851562 1.285156 1.152343 2.828125.84375 4.34375zm211.921874-145.683594c-1.117187 5.5-4.308593 10.234375-8.988281 13.332032l-27.941406 18.503906c-.007813.003906-.015625.011718-.027344.015625l-99.730469 66.046875c-7.460937 4.941406-16.433593 6.882812-25.269531 5.460937-12.789062-2.050781-25.78125.757813-36.582031 7.910157l-10.457031 6.925781-87.859375-132.667969 22.710937-98.105469c5.847657-25.273437 2.765625-51.894531-8.375-75.085937-.101562-.242188-.210937-.476563-.335937-.707032-2.140625-4.382812-4.570313-8.636718-7.285156-12.738281-5.28125-7.976562-3.089844-18.761719 4.890624-24.046875 6.742188-4.464844 15.851563-3.621094 21.65625 2.007813l15.207032 14.742187c16.449218 15.949219 29.359375 35.730469 37.328125 57.207032l8.28125 22.308593c.015625.042969.03125.078125.046875.117188.019531.050781.042968.105469.0625.15625.058594.136719.113281.261719.171875.367187.160156.335938.335937.667969.546875.984375 2.429687 3.667969 7.367187 4.671875 11.03125 2.242188l84.910156-56.226563c9.65625-6.394531 22.714844-3.742187 29.109375 5.914063s3.742187 22.714843-5.914063 29.109375l-7.371093 4.882812s-.003907 0-.007813.003906l-16.441406 10.890626c-.023438.015624-.039062.03125-.0625.042968-.09375.066406-.183594.128906-.257812.191406-3.398438 2.496094-4.277344 7.242188-1.921876 10.796876 2.425782 3.667968 7.367188 4.671874 11.035157 2.242187l16.453125-10.898437c4.675781-3.089844 10.273437-4.179688 15.769531-3.0625 5.496094 1.117187 10.234375 4.308593 13.328125 8.988281 3.097656 4.675781 4.191406 10.28125 3.074219 15.777343-1.117188 5.5-4.308594 10.234376-8.988281 13.332032l-23.820313 15.777344c-3.667969 2.425781-4.671875 7.363281-2.242187 11.03125 1.53125 2.3125 4.0625 3.566406 6.644531 3.566406 1.507812 0 3.035156-.429688 4.386719-1.324219l3.6875-2.441406 12.757812-8.449219c9.660156-6.394531 22.714844-3.742188 29.109375 5.914062 6.394531 9.660157 3.742187 22.714844-5.914063 29.113282l-11.898437 7.878906c-.0625.039062-.125.082031-.1875.125l-11.734375 7.769531c-3.667969 2.425781-4.671875 7.367188-2.242188 11.035157 1.53125 2.3125 4.0625 3.566406 6.644532 3.566406 1.507812 0 3.035156-.429688 4.386718-1.324219l3.6875-2.441406s0-.003907.003907-.003907l12.757812-8.445312c4.675781-3.097656 10.277344-4.191406 15.777344-3.070312 5.5 1.113281 10.234375 4.308593 13.332031 8.984374 3.09375 4.675782 4.183594 10.28125 3.066406 15.777344zm0 0\" />\r\n</svg:g>\r\n"
            }] }
];
CustomAvatarAwardThumbUpComponent.propDecorators = {
    clotheColor: [{ type: Input }],
    clotheColor2: [{ type: Input }],
    skinColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgAvataaarsLibraryModule {
}
NgAvataaarsLibraryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    PickerTemplateDirective,
                    CustomAvatarPickerComponent,
                    CustomAvatarAwardComponent,
                    CustomAvatarColorPickerComponent,
                    CustomAvatarIconBackgroundComponent,
                    CustomAvatarIconTopComponent,
                    CustomAvatarIconEyeComponent,
                    CustomAvatarIconEyeBrowComponent,
                    CustomAvatarIconAccessoriesComponent,
                    CustomAvatarIconMouthComponent,
                    CustomAvatarIconFacialHairComponent,
                    CustomAvatarIconClothesComponent,
                    CustomAvatarIconPetComponent,
                    CustomAvatarIconAwardComponent,
                    CustomAvatarIconNoseComponent,
                    CustomAvatarAwardTrophyAComponent,
                    CustomAvatarAwardTrophyBComponent,
                    CustomAvatarAwardBirthdayAComponent,
                    CustomAvatarAwardBirthdayBComponent,
                    CustomAvatarAwardBirthdayCComponent,
                    CustomAvatarAwardBirthdayDComponent,
                    CustomAvatarAwardCorrectComponent,
                    CustomAvatarAwardIncorrectComponent,
                    CustomAvatarAwardThumbUpComponent,
                    CustomAvatarPetComponent,
                    CustomAvatarPetDogComponent,
                    CustomAvatarPetCatComponent,
                    CustomAvatarPetChickComponent,
                    CustomAvatarPetRabbitComponent,
                    CustomAvatarPetRatComponent,
                    CustomAvatarPetSnakeComponent,
                    CustomAvatarPetParrotComponent,
                    CustomAvatarPetTurtleComponent,
                    CustomAvatarPetBirdComponent,
                    CustomAvatarPetFleaComponent,
                    CustomAvatarPetSpiderComponent,
                    CustomAvatarPetHamsterComponent,
                    CustomAvatarPetFishComponent,
                    CustomAvatarComponent,
                    CustomAvatarBaseComponent,
                    CustomAvatarTopComponent,
                    CustomAvatarTopEyePatchComponent,
                    CustomAvatarTopLongHairFroComponent,
                    CustomAvatarTopLongHairBigHairComponent,
                    CustomAvatarTopLongHairBobComponent,
                    CustomAvatarTopLongHairBunComponent,
                    CustomAvatarTopLongHairCurlyComponent,
                    CustomAvatarTopLongHairCurvyComponent,
                    CustomAvatarTopLongHairDreadsComponent,
                    CustomAvatarTopLongHairFridaComponent,
                    CustomAvatarTopLongHairFroBandComponent,
                    CustomAvatarTopLongHairMiaWallaceComponent,
                    CustomAvatarTopLongHairNotTooLongComponent,
                    CustomAvatarTopLongHairShavedSidesComponent,
                    CustomAvatarTopLongHairStraightComponent,
                    CustomAvatarTopLongHairStraight2Component,
                    CustomAvatarTopLongHairStraightStrandComponent,
                    CustomAvatarTopNoHairComponent,
                    CustomAvatarTopShortHairDreads1Component,
                    CustomAvatarTopShortHairDreads2Component,
                    CustomAvatarTopShortHairFrizzleComponent,
                    CustomAvatarTopShortHairShaggyComponent,
                    CustomAvatarTopShortHairShaggyMulletComponent,
                    CustomAvatarTopShortHairShortCurlyComponent,
                    CustomAvatarTopShortHairShortFlatComponent,
                    CustomAvatarTopShortHairShortRoundComponent,
                    CustomAvatarTopShortHairShortWavedComponent,
                    CustomAvatarTopShortHairSidesComponent,
                    CustomAvatarTopShortHairTheCaesarComponent,
                    CustomAvatarTopShortHairTheCaesarSidePartComponent,
                    CustomAvatarTopHatComponent,
                    CustomAvatarTopHijabComponent,
                    CustomAvatarTopTurbanComponent,
                    CustomAvatarTopWinterHat1Component,
                    CustomAvatarTopWinterHat2Component,
                    CustomAvatarTopWinterHat3Component,
                    CustomAvatarTopWinterHat4Component,
                    CustomAvatarClothesComponent,
                    CustomAvatarClothesBlazerShirtComponent,
                    CustomAvatarClothesBlazerSweaterComponent,
                    CustomAvatarClothesCollarSweaterComponent,
                    CustomAvatarClothesGraphicShirtComponent,
                    CustomAvatarClothesHoodieComponent,
                    CustomAvatarClothesOverallComponent,
                    CustomAvatarClothesShirtCrewNeckComponent,
                    CustomAvatarClothesShirtScoopNeckComponent,
                    CustomAvatarClothesShirtVNeckComponent,
                    CustomAvatarClothesGraphicsComponent,
                    CustomAvatarClothesGraphicsSkullComponent,
                    CustomAvatarClothesGraphicsSkullOutlineComponent,
                    CustomAvatarClothesGraphicsIKipComponent,
                    CustomAvatarClothesGraphicsBatComponent,
                    CustomAvatarClothesGraphicsCumbiaComponent,
                    CustomAvatarClothesGraphicsDeerComponent,
                    CustomAvatarClothesGraphicsDiamondComponent,
                    CustomAvatarClothesGraphicsHolaComponent,
                    CustomAvatarClothesGraphicsSelenaComponent,
                    CustomAvatarClothesGraphicsPizzaComponent,
                    CustomAvatarClothesGraphicsResistComponent,
                    CustomAvatarClothesGraphicsBearComponent,
                    CustomAvatarEyesComponent,
                    CustomAvatarEyesCryComponent,
                    CustomAvatarEyesCloseComponent,
                    CustomAvatarEyesDefaultComponent,
                    CustomAvatarEyesDizzyComponent,
                    CustomAvatarEyesEyeRollComponent,
                    CustomAvatarEyesHappyComponent,
                    CustomAvatarEyesHeartsComponent,
                    CustomAvatarEyesSidesComponent,
                    CustomAvatarEyesSquintComponent,
                    CustomAvatarEyesSurprisedComponent,
                    CustomAvatarEyesWinkComponent,
                    CustomAvatarEyesWinkWackyComponent,
                    CustomAvatarEyebrowsComponent,
                    CustomAvatarEyebrowsAngryComponent,
                    CustomAvatarEyebrowsAngryNaturalComponent,
                    CustomAvatarEyebrowsDefaultComponent,
                    CustomAvatarEyebrowsDefaultNaturalComponent,
                    CustomAvatarEyebrowsFlatNaturalComponent,
                    CustomAvatarEyebrowsFrownNaturalComponent,
                    CustomAvatarEyebrowsRaisedExcitedComponent,
                    CustomAvatarEyebrowsRaisedExcitedNaturalComponent,
                    CustomAvatarEyebrowsSadConcernedComponent,
                    CustomAvatarEyebrowsSadConcernedNaturalComponent,
                    CustomAvatarEyebrowsUnibrowNaturalComponent,
                    CustomAvatarEyebrowsUpDownComponent,
                    CustomAvatarEyebrowsUpDownNaturalComponent,
                    CustomAvatarMouthComponent,
                    CustomAvatarMouthConcernedComponent,
                    CustomAvatarMouthDefaultComponent,
                    CustomAvatarMouthDisbeliefComponent,
                    CustomAvatarMouthEatingComponent,
                    CustomAvatarMouthGrimaceComponent,
                    CustomAvatarMouthSadComponent,
                    CustomAvatarMouthScreamOpenComponent,
                    CustomAvatarMouthSeriousComponent,
                    CustomAvatarMouthSmileComponent,
                    CustomAvatarMouthTongueComponent,
                    CustomAvatarMouthTwinkleComponent,
                    CustomAvatarMouthVomitComponent,
                    CustomAvatarNoseComponent,
                    CustomAvatarNoseDefaultComponent,
                    CustomAvatarNoseClownComponent,
                    CustomAvatarFaceComponent,
                    CustomAvatarAccessoriesComponent,
                    CustomAvatarAccessoriesPrescription01Component,
                    CustomAvatarAccessoriesPrescription02Component,
                    CustomAvatarAccessoriesKurtComponent,
                    CustomAvatarAccessoriesRoundComponent,
                    CustomAvatarAccessoriesSunglassesComponent,
                    CustomAvatarAccessoriesWayfarersComponent,
                    CustomAvatarFacialHairComponent,
                    CustomAvatarFacialHairBeardLightComponent,
                    CustomAvatarFacialHairBeardMajesticComponent,
                    CustomAvatarFacialHairBeardMediumComponent,
                    CustomAvatarFacialHairMoustacheFancyComponent,
                    CustomAvatarFacialHairMoustacheMagnumComponent
                ],
                exports: [CustomAvatarComponent, CustomAvatarBaseComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { tabIndexes, CustomAvatarComponent, NgAvataaarsLibraryModule, CustomAvatarBaseComponent as ɵbn, CustomAvatarAwardComponent as ɵc, CustomAvatarAwardBirthdayAComponent as ɵs, CustomAvatarAwardBirthdayBComponent as ɵt, CustomAvatarAwardBirthdayCComponent as ɵu, CustomAvatarAwardBirthdayDComponent as ɵv, CustomAvatarAwardCorrectComponent as ɵw, CustomAvatarAwardIncorrectComponent as ɵx, CustomAvatarAwardThumbUpComponent as ɵy, CustomAvatarAwardTrophyAComponent as ɵq, CustomAvatarAwardTrophyBComponent as ɵr, CustomAvatarClothesBlazerShirtComponent as ɵdb, CustomAvatarClothesBlazerSweaterComponent as ɵdd, CustomAvatarClothesBaseComponent as ɵdc, CustomAvatarClothesComponent as ɵda, CustomAvatarClothesCollarSweaterComponent as ɵde, CustomAvatarClothesGraphicShirtComponent as ɵdf, CustomAvatarClothesGraphicsBatComponent as ɵdq, CustomAvatarClothesGraphicsBearComponent as ɵdy, CustomAvatarClothesGraphicsCumbiaComponent as ɵdr, CustomAvatarClothesGraphicsDeerComponent as ɵds, CustomAvatarClothesGraphicsDiamondComponent as ɵdt, CustomAvatarClothesGraphicsBaseComponent as ɵdn, CustomAvatarClothesGraphicsComponent as ɵdl, CustomAvatarClothesGraphicsHolaComponent as ɵdu, CustomAvatarClothesGraphicsIKipComponent as ɵdp, CustomAvatarClothesGraphicsPizzaComponent as ɵdw, CustomAvatarClothesGraphicsResistComponent as ɵdx, CustomAvatarClothesGraphicsSelenaComponent as ɵdv, CustomAvatarClothesGraphicsSkullOutlineComponent as ɵdo, CustomAvatarClothesGraphicsSkullComponent as ɵdm, CustomAvatarClothesHoodieComponent as ɵdg, CustomAvatarClothesOverallComponent as ɵdh, CustomAvatarClothesShirtCrewNeckComponent as ɵdi, CustomAvatarClothesShirtScoopNeckComponent as ɵdj, CustomAvatarClothesShirtVNeckComponent as ɵdk, CustomAvatarEyebrowsAngryNaturalComponent as ɵeo, CustomAvatarEyebrowsAngryComponent as ɵen, CustomAvatarEyebrowsDefaultNaturalComponent as ɵeq, CustomAvatarEyebrowsDefaultComponent as ɵep, CustomAvatarEyebrowsComponent as ɵem, CustomAvatarEyebrowsFlatNaturalComponent as ɵer, CustomAvatarEyebrowsFrownNaturalComponent as ɵes, CustomAvatarEyebrowsRaisedExcitedNaturalComponent as ɵeu, CustomAvatarEyebrowsRaisedExcitedComponent as ɵet, CustomAvatarEyebrowsSadConcernedNaturalComponent as ɵew, CustomAvatarEyebrowsSadConcernedComponent as ɵev, CustomAvatarEyebrowsUnibrowNaturalComponent as ɵex, CustomAvatarEyebrowsUpDownNaturalComponent as ɵez, CustomAvatarEyebrowsUpDownComponent as ɵey, CustomAvatarEyesCloseComponent as ɵeb, CustomAvatarEyesCryComponent as ɵea, CustomAvatarEyesDefaultComponent as ɵec, CustomAvatarEyesDizzyComponent as ɵed, CustomAvatarEyesEyeRollComponent as ɵee, CustomAvatarEyesComponent as ɵdz, CustomAvatarEyesHappyComponent as ɵef, CustomAvatarEyesHeartsComponent as ɵeg, CustomAvatarEyesSidesComponent as ɵeh, CustomAvatarEyesSquintComponent as ɵei, CustomAvatarEyesSurprisedComponent as ɵej, CustomAvatarEyesWinkWackyComponent as ɵel, CustomAvatarEyesWinkComponent as ɵek, CustomAvatarFaceComponent as ɵfr, CustomAvatarMouthConcernedComponent as ɵfb, CustomAvatarMouthDefaultComponent as ɵfd, CustomAvatarMouthDisbeliefComponent as ɵfe, CustomAvatarMouthEatingComponent as ɵff, CustomAvatarMouthGrimaceComponent as ɵfg, MouthBaseComponent as ɵfc, CustomAvatarMouthComponent as ɵfa, CustomAvatarMouthSadComponent as ɵfh, CustomAvatarMouthScreamOpenComponent as ɵfi, CustomAvatarMouthSeriousComponent as ɵfj, CustomAvatarMouthSmileComponent as ɵfk, CustomAvatarMouthTongueComponent as ɵfl, CustomAvatarMouthTwinkleComponent as ɵfm, CustomAvatarMouthVomitComponent as ɵfn, CustomAvatarNoseClownComponent as ɵfq, CustomAvatarNoseDefaultComponent as ɵfp, CustomAvatarNoseComponent as ɵfo, CustomAvatarPetBirdComponent as ɵbi, CustomAvatarPetCatComponent as ɵbb, CustomAvatarPetChickComponent as ɵbc, CustomAvatarPetDogComponent as ɵba, CustomAvatarPetFishComponent as ɵbm, CustomAvatarPetFleaComponent as ɵbj, CustomAvatarPetHamsterComponent as ɵbl, CustomAvatarPetParrotComponent as ɵbg, CustomAvatarPetComponent as ɵz, CustomAvatarPetRabbitComponent as ɵbd, CustomAvatarPetRatComponent as ɵbe, CustomAvatarPetSnakeComponent as ɵbf, CustomAvatarPetSpiderComponent as ɵbk, CustomAvatarPetTurtleComponent as ɵbh, CustomAvatarAccessoriesBaseComponent as ɵfu, CustomAvatarAccessoriesComponent as ɵfs, CustomAvatarAccessoriesKurtComponent as ɵfw, CustomAvatarAccessoriesPrescription01Component as ɵft, CustomAvatarAccessoriesPrescription02Component as ɵfv, CustomAvatarAccessoriesRoundComponent as ɵfx, CustomAvatarAccessoriesSunglassesComponent as ɵfy, CustomAvatarAccessoriesWayfarersComponent as ɵfz, CustomAvatarTopEyePatchComponent as ɵbp, CustomAvatarFacialHairBeardLightComponent as ɵgb, CustomAvatarFacialHairBeardMajesticComponent as ɵgd, CustomAvatarFacialHairBeardMediumComponent as ɵge, CustomAvatarFacialHairBaseComponent as ɵgc, CustomAvatarFacialHairComponent as ɵga, CustomAvatarFacialHairMoustacheFancyComponent as ɵgf, CustomAvatarFacialHairMoustacheMagnumComponent as ɵgg, CustomAvatarTopHatComponent as ɵct, CustomAvatarTopHijabComponent as ɵcu, CustomAvatarTopLongHairBigHairComponent as ɵbs, CustomAvatarTopLongHairBobComponent as ɵbt, CustomAvatarTopLongHairBunComponent as ɵbu, CustomAvatarTopLongHairCurlyComponent as ɵbv, CustomAvatarTopLongHairCurvyComponent as ɵbw, CustomAvatarTopLongHairDreadsComponent as ɵbx, CustomAvatarTopLongHairFridaComponent as ɵby, CustomAvatarTopLongHairFroBandComponent as ɵbz, CustomAvatarTopLongHairFroComponent as ɵbr, CustomAvatarTopLongHairMiaWallaceComponent as ɵca, CustomAvatarTopLongHairNotTooLongComponent as ɵcb, CustomAvatarTopLongHairShavedSidesComponent as ɵcc, CustomAvatarTopLongHairStraightStrandComponent as ɵcf, CustomAvatarTopLongHairStraightComponent as ɵcd, CustomAvatarTopLongHairStraight2Component as ɵce, CustomAvatarTopNoHairComponent as ɵcg, CustomAvatarTopShortHairDreads1Component as ɵch, CustomAvatarTopShortHairDreads2Component as ɵci, CustomAvatarTopShortHairFrizzleComponent as ɵcj, CustomAvatarTopShortHairShaggyMulletComponent as ɵcl, CustomAvatarTopShortHairShaggyComponent as ɵck, CustomAvatarTopShortHairShortCurlyComponent as ɵcm, CustomAvatarTopShortHairShortFlatComponent as ɵcn, CustomAvatarTopShortHairShortRoundComponent as ɵco, CustomAvatarTopShortHairShortWavedComponent as ɵcp, CustomAvatarTopShortHairSidesComponent as ɵcq, CustomAvatarTopShortHairTheCaesarSidePartComponent as ɵcs, CustomAvatarTopShortHairTheCaesarComponent as ɵcr, CustomAvatarTopBaseComponent as ɵbq, CustomAvatarTopComponent as ɵbo, CustomAvatarTopTurbanComponent as ɵcv, CustomAvatarTopWinterHat1Component as ɵcw, CustomAvatarTopWinterHat2Component as ɵcx, CustomAvatarTopWinterHat3Component as ɵcy, CustomAvatarTopWinterHat4Component as ɵcz, CustomAvatarColorPickerComponent as ɵd, PickerTemplateDirective as ɵa, CustomAvatarPickerComponent as ɵb, CustomAvatarIconAccessoriesComponent as ɵj, CustomAvatarIconAwardComponent as ɵo, CustomAvatarIconBackgroundComponent as ɵe, CustomAvatarIconClothesComponent as ɵm, CustomAvatarIconEyeBrowComponent as ɵi, CustomAvatarIconEyeComponent as ɵh, CustomAvatarIconFacialHairComponent as ɵl, CustomAvatarIconBaseComponent as ɵf, CustomAvatarIconMouthComponent as ɵk, CustomAvatarIconNoseComponent as ɵp, CustomAvatarIconPetComponent as ɵn, CustomAvatarIconTopComponent as ɵg };

//# sourceMappingURL=ng-avataaars-library.js.map