## Information

ng-avataaars is an angular component you can include in your project to allow users to make their own avatars.

<p align="center"><img src='avataaar_example.png?raw=true' style='width: 300px' /></p>

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
 npm install ng-avataaars
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
| noNose | boolean | true | Turns on noses choices (being extended) |
| noPet | boolean | true | Turns on pet choices (being extended) - appears bottom left |
| noAward | boolean | true | Turns on awards/birthday graphics (being extended) - appears bottom right |
| noFacialHair | boolean | true | Turns of ability to choose/see facial hair - can be used for children/women |
| noSvgOutput | boolean | true | Disables ability to see/use svg output button |
| noRandom | boolean | false | Disables ability to see/use random button |
| noColorBackground | boolean | false | Disables ability to choose and background/circle option |
| noSave | boolean | false | Disables ability to see/use save button |

Saving of the avatar can be achieved by wiring up the avatarSavedEvent.

Example using local storage.

```typescript

interface SaveAvatar {
    avatarSelection: AvatarSelection;
    svg: string;
}

  onAvatarSaved(saveAvatar: SaveAvatar) {
    localStorage.setItem('avatar', JSON.stringify(saveAvatar.avatarSelection));
  }

  ngOnInit() {
    const avatar = localStorage.getItem('avatar');
    if (avatar !== '') {
      this.avatarSelection = JSON.parse(avatar);
    }
  }
```

## Demo

A demo can be found [here](https://stonecourier.github.io/ng_avataaars/). 
