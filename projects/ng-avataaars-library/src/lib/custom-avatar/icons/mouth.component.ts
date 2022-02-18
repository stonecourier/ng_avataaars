import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-mouth',
  styleUrls: ['./icon-base.css'],
  templateUrl: './mouth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconMouthComponent extends CustomAvatarIconBaseComponent {

}
