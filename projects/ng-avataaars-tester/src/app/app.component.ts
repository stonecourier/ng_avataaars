import { Component, OnInit } from '@angular/core';
import { SaveAvatar } from 'ng-avataaars-library';
import {
  AvatarSelection, AvatarStyle, TopType, AccessoriesType, HairColor, FacialHairType, ClotheType,
  ClotheColor, EyeType, EyebrowType, MouthType, SkinColor, BackgroundColor, GraphicType, PetType, AwardType,
  HatColor, AccessoriesColor, NoseType, EarringType, EarringColor
} from 'ng-avataaars-library/lib/custom-avatar/options';

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
