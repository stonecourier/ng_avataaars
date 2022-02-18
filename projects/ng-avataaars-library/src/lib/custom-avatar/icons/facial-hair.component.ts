import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-facial-hair',
  styleUrls: ['./icon-base.css'],
  templateUrl: './facial-hair.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconFacialHairComponent extends CustomAvatarIconBaseComponent {

}
