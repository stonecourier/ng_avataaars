import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-background',
  styleUrls: ['./icon-base.css'],
  templateUrl: './background.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconBackgroundComponent extends CustomAvatarIconBaseComponent {

}
