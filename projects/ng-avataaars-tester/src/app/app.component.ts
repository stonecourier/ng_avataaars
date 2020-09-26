import { Component, OnInit } from '@angular/core';
import {
  AccessoriesColor, AccessoriesType, AvatarSelection, AvatarStyle, AwardType, BackgroundColor, ClotheColor,
  ClotheType, EarringColor, EarringType, EyebrowType, EyeType, FacialHairType, GraphicType, HairColor, HatColor,
  MouthType, NoseType, PetType, SaveAvatar, SkinColor, TopType
} from 'ng-avataaars-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  info = false;
  avatarSelection: AvatarSelection = {
    avatarStyle: AvatarStyle.Circle,
    topType: TopType.Hat,
    accessoriesType: AccessoriesType.Kurt,
    hairColor: HairColor.Black,
    facialHairType: FacialHairType.Blank,
    facialHairColor: HairColor.Black,
    clotheType: ClotheType.Overall,
    clotheColor: ClotheColor.Blue01,
    clotheColor2: ClotheColor.Blue02,
    clotheColor3: ClotheColor.Blue03,
    eyeType: EyeType.Happy,
    eyebrowType: EyebrowType.Default,
    eyebrowColor: HairColor.Black,
    mouthType: MouthType.Default,
    skinColor: SkinColor.Tanned,
    backgroundColor: BackgroundColor.ColorA,
    graphicType: GraphicType.Bat,
    petType: PetType.None,
    awardType: AwardType.None,
    hatColor: HatColor.Heather,
    accessoriesColor: AccessoriesColor.PastelBlue,
    noseType: NoseType.Default,
    earringType: EarringType.Blank,
    earringColor: EarringColor.Pink
  };

  onAvatarSaved(saveAvatar: SaveAvatar): void {
    localStorage.setItem('avatar', JSON.stringify(saveAvatar.avatarSelection));
  }

  ngOnInit(): void {
    const avatar = localStorage.getItem('avatar');
    if (avatar) {
      this.avatarSelection = JSON.parse(avatar) as AvatarSelection;
    }
  }
}
