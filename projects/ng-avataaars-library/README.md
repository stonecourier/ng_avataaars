# ng-avataaars

ng-avataaars is an angular component you can include in your project to allow users to make their own avatars.

You can also use it here to get the generated svg for your own use.

Features        
  * Billions of permutations of avatars available.
  * Svgs are generated on client.
  * Can be localised into other languages
  * Unwanted options can be turned of
  * Can wire up your own services to save/load avatar. This example uses local storage.
  * Uses bootstrap for styling.

Angular component ported from the [React Component](https://github.com/fangpenlin/avataaars) developed by [Fang-Pen Lin](https://twitter.com/fangpenlin), based on the Sketch library [Avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley).

Free for personal and commercial use.

## Using the package

Navigate to the level of your package.json and type

```typescript
 npm install ng-avataaars --save
```

Import the module into your app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgAvataaarsLibraryModule } from 'ng-avataaars-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAvataaarsLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You can then use in one of your component html pages.

```
<kip-custom-avatar (avatarSaved)="onAvatarSaved($event)" [(avatarSelection)]="avatarSelection"></<kip-custom-avatar>
```

Options that can be passed in

avatarSelection - used for setting the current avatar.

```typescript
interface AvatarSelection {
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
```

avatarText - used for localizing.

```typescript
interface AvatarText {
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
```
avatarExclusion - used for disabling choices. Example

```typescript
avatarExclusion: AvatarExclusion = {
    mouthTypes: [MouthType.Vomit],
    graphicTypes: [GraphicType.Hola],
    topTypes: [TopType.Eyepatch],
    eyeTypes: [EyeType.Dizzy]
  };
```

Config options available

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| noNose | boolean | true | Turns on nose choices (being extended) |
| noEarring | boolean | true | Turns on earring choices (being extended) |
| noPet | boolean | true | Turns on pet choices (being extended) - appears bottom left |
| noAward | boolean | true | Turns on awards/birthday graphics (being extended) - appears bottom right |
| noFacialHair | boolean | true | Turns off ability to choose/see facial hair - could be used for children/women |
| noSvgOutput | boolean | true | Disables ability to see/use svg output button |
| noRandom | boolean | false | Disables ability to see/use random button |
| noColorBackground | boolean | false | Disables ability to choose the background/circle option |
| noSave | boolean | false | Disables ability to see/use save button |

Saving of the avatar can be achieved by wiring up the avatarSaved event.

Example using local storage.

```typescript

import { Component } from '@angular/core';
import { AccessoriesColor, AccessoriesType, AvatarSelection, AvatarStyle, AwardType, BackgroundColor, ClotheColor, ClotheType, EarringColor, EarringType, EyebrowType, EyeType, FacialHairType, GraphicType, HairColor, HatColor, MouthType, NoseType, PetType, SaveAvatar, SkinColor, TopType } from 'ng-avataaars-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  avatarSelection: AvatarSelection = {
    avatarStyle: AvatarStyle.Circle,
    topType: TopType.ShortHairShortFlat,
    accessoriesType: AccessoriesType.Blank,
    hairColor: HairColor.Black,
    facialHairType: FacialHairType.Blank,
    facialHairColor: HairColor.Black,
    eyebrowColor: HairColor.Black,
    clotheType: ClotheType.BlazerShirt,
    clotheColor: ClotheColor.Blue02,
    clotheColor2: ClotheColor.Blue01,
    clotheColor3: ClotheColor.Black,
    eyeType: EyeType.Default,
    eyebrowType: EyebrowType.Default,
    mouthType: MouthType.Smile,
    skinColor: SkinColor.Light,
    backgroundColor: BackgroundColor.ColorH,
    graphicType: GraphicType.Bat,
    petType: PetType.None,
    awardType: AwardType.None,
    hatColor: HatColor.Black,
    accessoriesColor: AccessoriesColor.Black,
    noseType: NoseType.Default,
    earringType: EarringType.Blank,
    earringColor: EarringColor.Black
  };

  onAvatarSaved(saveAvatar: SaveAvatar) {
    localStorage.setItem('avatar', JSON.stringify(saveAvatar.avatarSelection));
  }

  ngOnInit() {
    const avatar = localStorage.getItem('avatar');
    if (avatar) {
      this.avatarSelection = JSON.parse(avatar);
    }
  }
}
```

## Demo

A demo can be found [here](https://stonecourier.github.io/ng_avataaars/). 
