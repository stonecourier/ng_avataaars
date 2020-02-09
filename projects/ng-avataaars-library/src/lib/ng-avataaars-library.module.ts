import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomAvatarBaseComponent } from './custom-avatar/avatar/avatar.component';
import { PickerTemplateDirective } from './custom-avatar/custom-avatar-picker-template.directive';
import { CustomAvatarPickerComponent } from './custom-avatar/custom-avatar-picker.component';
import { CustomAvatarComponent } from './custom-avatar/custom-avatar.component';

import { CustomAvatarColorPickerComponent } from './custom-avatar/colors/color-picker.component';

import { CustomAvatarIconAccessoriesComponent } from './custom-avatar/icons/accessories.component';
import { CustomAvatarIconAwardComponent } from './custom-avatar/icons/award.component';
import { CustomAvatarIconBackgroundComponent } from './custom-avatar/icons/background.component';
import { CustomAvatarIconClothesComponent } from './custom-avatar/icons/clothes.component';
import { CustomAvatarIconEarringComponent } from './custom-avatar/icons/ear-ring.component';
import { CustomAvatarIconEyeBrowComponent } from './custom-avatar/icons/eye-brow.component';
import { CustomAvatarIconEyeComponent } from './custom-avatar/icons/eye.component';
import { CustomAvatarIconFacialHairComponent } from './custom-avatar/icons/facial-hair.component';
import { CustomAvatarIconMouthComponent } from './custom-avatar/icons/mouth.component';
import { CustomAvatarIconNoseComponent } from './custom-avatar/icons/nose.component';
import { CustomAvatarIconPetComponent } from './custom-avatar/icons/pet.component';
import { CustomAvatarIconTopComponent } from './custom-avatar/icons/top.component';

import { CustomAvatarClothesBlazerShirtComponent } from './custom-avatar/avatar/clothes/blazer-shirt.component';
import { CustomAvatarClothesBlazerSweaterComponent } from './custom-avatar/avatar/clothes/blazer-sweater.component';
import { CustomAvatarClothesComponent } from './custom-avatar/avatar/clothes/clothes.component';
import { CustomAvatarClothesCollarSweaterComponent } from './custom-avatar/avatar/clothes/collar-sweater.component';
import { CustomAvatarClothesGraphicShirtComponent } from './custom-avatar/avatar/clothes/graphic-shirt.component';
import { CustomAvatarClothesHoodieComponent } from './custom-avatar/avatar/clothes/hoodie.component';
import { CustomAvatarClothesOverallComponent } from './custom-avatar/avatar/clothes/overall.component';
import { CustomAvatarClothesShirtCrewNeckComponent } from './custom-avatar/avatar/clothes/shirt-crew-neck.component';
import { CustomAvatarClothesShirtScoopNeckComponent } from './custom-avatar/avatar/clothes/shirt-scoop-neck.component';
import { CustomAvatarClothesShirtVNeckComponent } from './custom-avatar/avatar/clothes/shirt-v-neck.component';

import { CustomAvatarClothesGraphicsBatComponent } from './custom-avatar/avatar/clothes/graphics/bat.component';
import { CustomAvatarClothesGraphicsBearComponent } from './custom-avatar/avatar/clothes/graphics/bear.component';
import { CustomAvatarClothesGraphicsCumbiaComponent } from './custom-avatar/avatar/clothes/graphics/cumbia.component';
import { CustomAvatarClothesGraphicsDeerComponent } from './custom-avatar/avatar/clothes/graphics/deer.component';
import { CustomAvatarClothesGraphicsDiamondComponent } from './custom-avatar/avatar/clothes/graphics/diamond.component';
import { CustomAvatarClothesGraphicsComponent } from './custom-avatar/avatar/clothes/graphics/graphics.component';
import { CustomAvatarClothesGraphicsHolaComponent } from './custom-avatar/avatar/clothes/graphics/hola.component';
import { CustomAvatarClothesGraphicsIKipComponent } from './custom-avatar/avatar/clothes/graphics/ikip.component';
import { CustomAvatarClothesGraphicsPizzaComponent } from './custom-avatar/avatar/clothes/graphics/pizza.component';
import { CustomAvatarClothesGraphicsResistComponent } from './custom-avatar/avatar/clothes/graphics/resist.component';
import { CustomAvatarClothesGraphicsSelenaComponent } from './custom-avatar/avatar/clothes/graphics/selena.component';
import { CustomAvatarClothesGraphicsSkullOutlineComponent } from './custom-avatar/avatar/clothes/graphics/skull-outline.component';
import { CustomAvatarClothesGraphicsSkullComponent } from './custom-avatar/avatar/clothes/graphics/skull.component';

import { CustomAvatarFaceComponent } from './custom-avatar/avatar/face/face.component';

import { CustomAvatarEyesCloseComponent } from './custom-avatar/avatar/face/eyes/close.component';
import { CustomAvatarEyesCryComponent } from './custom-avatar/avatar/face/eyes/cry.component';
import { CustomAvatarEyesDefaultComponent } from './custom-avatar/avatar/face/eyes/default.component';
import { CustomAvatarEyesDizzyComponent } from './custom-avatar/avatar/face/eyes/dizzy.component';
import { CustomAvatarEyesEyeRollComponent } from './custom-avatar/avatar/face/eyes/eye-roll.component';
import { CustomAvatarEyesComponent } from './custom-avatar/avatar/face/eyes/eyes.component';
import { CustomAvatarEyesHappyComponent } from './custom-avatar/avatar/face/eyes/happy.component';
import { CustomAvatarEyesHeartsComponent } from './custom-avatar/avatar/face/eyes/hearts.component';
import { CustomAvatarEyesSidesComponent } from './custom-avatar/avatar/face/eyes/sides.component';
import { CustomAvatarEyesSquintComponent } from './custom-avatar/avatar/face/eyes/squint.component';
import { CustomAvatarEyesSurprisedComponent } from './custom-avatar/avatar/face/eyes/surprised.component';
import { CustomAvatarEyesWinkWackyComponent } from './custom-avatar/avatar/face/eyes/wink-wacky.component';
import { CustomAvatarEyesWinkComponent } from './custom-avatar/avatar/face/eyes/wink.component';

import { CustomAvatarEyebrowsAngryNaturalComponent } from './custom-avatar/avatar/face/eye-brows/angry-natural.component';
import { CustomAvatarEyebrowsAngryComponent } from './custom-avatar/avatar/face/eye-brows/angry.component';
import { CustomAvatarEyebrowsDefaultNaturalComponent } from './custom-avatar/avatar/face/eye-brows/default-natural.component';
import { CustomAvatarEyebrowsDefaultComponent } from './custom-avatar/avatar/face/eye-brows/default.component';
import { CustomAvatarEyebrowsComponent } from './custom-avatar/avatar/face/eye-brows/eye-brows.component';
import { CustomAvatarEyebrowsFlatNaturalComponent } from './custom-avatar/avatar/face/eye-brows/flat-natural.component';
import { CustomAvatarEyebrowsFrownNaturalComponent } from './custom-avatar/avatar/face/eye-brows/frown-natural.component';
import { CustomAvatarEyebrowsRaisedExcitedNaturalComponent } from './custom-avatar/avatar/face/eye-brows/raised-excited-natural.component';
import { CustomAvatarEyebrowsRaisedExcitedComponent } from './custom-avatar/avatar/face/eye-brows/raised-excited.component';
import { CustomAvatarEyebrowsSadConcernedNaturalComponent } from './custom-avatar/avatar/face/eye-brows/sad-concerned-natural.component';
import { CustomAvatarEyebrowsSadConcernedComponent } from './custom-avatar/avatar/face/eye-brows/sad-concerned.component';
import { CustomAvatarEyebrowsUnibrowNaturalComponent } from './custom-avatar/avatar/face/eye-brows/unibrow-natural.component';
import { CustomAvatarEyebrowsUpDownNaturalComponent } from './custom-avatar/avatar/face/eye-brows/up-down-natural.component';
import { CustomAvatarEyebrowsUpDownComponent } from './custom-avatar/avatar/face/eye-brows/up-down.component';

import { CustomAvatarMouthConcernedComponent } from './custom-avatar/avatar/face/mouth/concerned.component';
import { CustomAvatarMouthDefaultComponent } from './custom-avatar/avatar/face/mouth/default.component';
import { CustomAvatarMouthDisbeliefComponent } from './custom-avatar/avatar/face/mouth/disbelief.component';
import { CustomAvatarMouthEatingComponent } from './custom-avatar/avatar/face/mouth/eating.component';
import { CustomAvatarMouthGrimaceComponent } from './custom-avatar/avatar/face/mouth/grimace.component';
import { CustomAvatarMouthComponent } from './custom-avatar/avatar/face/mouth/mouth.component';
import { CustomAvatarMouthSadComponent } from './custom-avatar/avatar/face/mouth/sad.component';
import { CustomAvatarMouthScreamOpenComponent } from './custom-avatar/avatar/face/mouth/scream-open.component';
import { CustomAvatarMouthSeriousComponent } from './custom-avatar/avatar/face/mouth/serious.component';
import { CustomAvatarMouthSmileComponent } from './custom-avatar/avatar/face/mouth/smile.component';
import { CustomAvatarMouthTongueComponent } from './custom-avatar/avatar/face/mouth/tongue.component';
import { CustomAvatarMouthTwinkleComponent } from './custom-avatar/avatar/face/mouth/twinkle.component';
import { CustomAvatarMouthVomitComponent } from './custom-avatar/avatar/face/mouth/vomit.component';

import { CustomAvatarNoseClownComponent } from './custom-avatar/avatar/face/nose/clown.component';
import { CustomAvatarNoseDefaultComponent } from './custom-avatar/avatar/face/nose/default.component';
import { CustomAvatarNoseComponent } from './custom-avatar/avatar/face/nose/nose.component';

import { CustomAvatarTopEyePatchComponent } from './custom-avatar/avatar/top/eye-patch.component';
import { CustomAvatarTopHatComponent } from './custom-avatar/avatar/top/hat.component';
import { CustomAvatarTopHijabComponent } from './custom-avatar/avatar/top/hijab.component';
import { CustomAvatarTopLongHairBigHairComponent } from './custom-avatar/avatar/top/long-hair-big-hair.component';
import { CustomAvatarTopLongHairBobComponent } from './custom-avatar/avatar/top/long-hair-bob.component';
import { CustomAvatarTopLongHairBunComponent } from './custom-avatar/avatar/top/long-hair-bun.component';
import { CustomAvatarTopLongHairCurlyComponent } from './custom-avatar/avatar/top/long-hair-curly.component';
import { CustomAvatarTopLongHairCurvyComponent } from './custom-avatar/avatar/top/long-hair-curvy.component';
import { CustomAvatarTopLongHairDreadsComponent } from './custom-avatar/avatar/top/long-hair-dreads.component';
import { CustomAvatarTopLongHairFridaComponent } from './custom-avatar/avatar/top/long-hair-frida.component';
import { CustomAvatarTopLongHairFroBandComponent } from './custom-avatar/avatar/top/long-hair-fro-band.component';
import { CustomAvatarTopLongHairFroComponent } from './custom-avatar/avatar/top/long-hair-fro.component';
import { CustomAvatarTopLongHairMiaWallaceComponent } from './custom-avatar/avatar/top/long-hair-mia-wallace.component';
import { CustomAvatarTopLongHairNotTooLongComponent } from './custom-avatar/avatar/top/long-hair-not-too-long.component';
import { CustomAvatarTopLongHairShavedSidesComponent } from './custom-avatar/avatar/top/long-hair-shaved-sides.component';
import { CustomAvatarTopLongHairStraightStrandComponent } from './custom-avatar/avatar/top/long-hair-straight-strand.component';
import { CustomAvatarTopLongHairStraightComponent } from './custom-avatar/avatar/top/long-hair-straight.component';
import { CustomAvatarTopLongHairStraight2Component } from './custom-avatar/avatar/top/long-hair-straight2.component';
import { CustomAvatarTopNoHairComponent } from './custom-avatar/avatar/top/no-hair.component';
import { CustomAvatarTopShortHairDreads1Component } from './custom-avatar/avatar/top/short-hair-dreads1.component';
import { CustomAvatarTopShortHairDreads2Component } from './custom-avatar/avatar/top/short-hair-dreads2.component';
import { CustomAvatarTopShortHairFrizzleComponent } from './custom-avatar/avatar/top/short-hair-frizzle.component';
import { CustomAvatarTopShortHairShaggyMulletComponent } from './custom-avatar/avatar/top/short-hair-shaggy-mullet.component';
import { CustomAvatarTopShortHairShaggyComponent } from './custom-avatar/avatar/top/short-hair-shaggy.component';
import { CustomAvatarTopShortHairShortCurlyComponent } from './custom-avatar/avatar/top/short-hair-short-curly.component';
import { CustomAvatarTopShortHairShortFlatComponent } from './custom-avatar/avatar/top/short-hair-short-flat.component';
import { CustomAvatarTopShortHairShortRoundComponent } from './custom-avatar/avatar/top/short-hair-short-round.component';
import { CustomAvatarTopShortHairShortWavedComponent } from './custom-avatar/avatar/top/short-hair-short-waved.component';
import { CustomAvatarTopShortHairSidesComponent } from './custom-avatar/avatar/top/short-hair-sides.component';
import { CustomAvatarTopShortHairTheCaesarSidePartComponent } from './custom-avatar/avatar/top/short-hair-the-caesar-side-part.component';
import { CustomAvatarTopShortHairTheCaesarComponent } from './custom-avatar/avatar/top/short-hair-the-caesar.component';
import { CustomAvatarTopComponent } from './custom-avatar/avatar/top/top.component';
import { CustomAvatarTopTurbanComponent } from './custom-avatar/avatar/top/turban.component';
import { CustomAvatarTopWinterHat1Component } from './custom-avatar/avatar/top/winter-hat1.component';
import { CustomAvatarTopWinterHat2Component } from './custom-avatar/avatar/top/winter-hat2.component';
import { CustomAvatarTopWinterHat3Component } from './custom-avatar/avatar/top/winter-hat3.component';
import { CustomAvatarTopWinterHat4Component } from './custom-avatar/avatar/top/winter-hat4.component';

import { CustomAvatarEarringBothComponent } from './custom-avatar/avatar/face/ear-ring/both.component';
import { CustomAvatarEarringComponent } from './custom-avatar/avatar/face/ear-ring/ear-ring.component';
import { CustomAvatarEarringLeftComponent } from './custom-avatar/avatar/face/ear-ring/left.component';
import { CustomAvatarEarringRightComponent } from './custom-avatar/avatar/face/ear-ring/right.component';

import { CustomAvatarAccessoriesComponent } from './custom-avatar/avatar/top/accessories/accessories.component';
import { CustomAvatarAccessoriesKurtComponent } from './custom-avatar/avatar/top/accessories/kurt.component';
import { CustomAvatarAccessoriesPrescription01Component } from './custom-avatar/avatar/top/accessories/prescription-01.component';
import { CustomAvatarAccessoriesPrescription02Component } from './custom-avatar/avatar/top/accessories/prescription-02.component';
import { CustomAvatarAccessoriesRoundComponent } from './custom-avatar/avatar/top/accessories/round.component';
import { CustomAvatarAccessoriesSunglassesComponent } from './custom-avatar/avatar/top/accessories/sunglasses.component';
import { CustomAvatarAccessoriesWayfarersComponent } from './custom-avatar/avatar/top/accessories/wayfarers.component';

import { CustomAvatarFacialHairBeardLightComponent } from './custom-avatar/avatar/top/facial-hair/beard-light.component';
import { CustomAvatarFacialHairBeardMajesticComponent } from './custom-avatar/avatar/top/facial-hair/beard-majestic.component';
import { CustomAvatarFacialHairBeardMediumComponent } from './custom-avatar/avatar/top/facial-hair/beard-medium.component';
import { CustomAvatarFacialHairComponent } from './custom-avatar/avatar/top/facial-hair/facial-hair.component';
import { CustomAvatarFacialHairMoustacheFancyComponent } from './custom-avatar/avatar/top/facial-hair/moustache-fancy.component';
import { CustomAvatarFacialHairMoustacheMagnumComponent } from './custom-avatar/avatar/top/facial-hair/moustache-magnum.component';

import { CustomAvatarPetBirdComponent } from './custom-avatar/avatar/pet/bird.component';
import { CustomAvatarPetCatComponent } from './custom-avatar/avatar/pet/cat.component';
import { CustomAvatarPetChickComponent } from './custom-avatar/avatar/pet/chick.component';
import { CustomAvatarPetDogComponent } from './custom-avatar/avatar/pet/dog.component';
import { CustomAvatarPetFishComponent } from './custom-avatar/avatar/pet/fish.component';
import { CustomAvatarPetFleaComponent } from './custom-avatar/avatar/pet/flea.component';
import { CustomAvatarPetHamsterComponent } from './custom-avatar/avatar/pet/hamster.component';
import { CustomAvatarPetParrotComponent } from './custom-avatar/avatar/pet/parrot.component';
import { CustomAvatarPetComponent } from './custom-avatar/avatar/pet/pet.component';
import { CustomAvatarPetRabbitComponent } from './custom-avatar/avatar/pet/rabbit.component';
import { CustomAvatarPetRatComponent } from './custom-avatar/avatar/pet/rat.component';
import { CustomAvatarPetSnakeComponent } from './custom-avatar/avatar/pet/snake.component';
import { CustomAvatarPetSpiderComponent } from './custom-avatar/avatar/pet/spider.component';
import { CustomAvatarPetTurtleComponent } from './custom-avatar/avatar/pet/turtle.component';

import { CustomAvatarAwardComponent } from './custom-avatar/avatar/award/award.component';
import { CustomAvatarAwardBirthdayAComponent } from './custom-avatar/avatar/award/birthday-a.component';
import { CustomAvatarAwardBirthdayBComponent } from './custom-avatar/avatar/award/birthday-b.component';
import { CustomAvatarAwardBirthdayCComponent } from './custom-avatar/avatar/award/birthday-c.component';
import { CustomAvatarAwardBirthdayDComponent } from './custom-avatar/avatar/award/birthday-d.component';
import { CustomAvatarAwardCorrectComponent } from './custom-avatar/avatar/award/correct.component';
import { CustomAvatarAwardIncorrectComponent } from './custom-avatar/avatar/award/incorrect.component';
import { CustomAvatarAwardThumbUpComponent } from './custom-avatar/avatar/award/thumb-up.component';
import { CustomAvatarAwardTrophyAComponent } from './custom-avatar/avatar/award/trophy-a.component';
import { CustomAvatarAwardTrophyBComponent } from './custom-avatar/avatar/award/trophy-b.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PickerTemplateDirective,
    CustomAvatarEarringComponent,
    CustomAvatarEarringLeftComponent,
    CustomAvatarEarringRightComponent,
    CustomAvatarEarringBothComponent,
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
    CustomAvatarIconEarringComponent,
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
})
export class NgAvataaarsLibraryModule { }
