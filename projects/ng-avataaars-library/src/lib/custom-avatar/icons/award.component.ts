import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-award',
  styleUrls: ['./icon-base.css'],
  templateUrl: './award.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconAwardComponent extends CustomAvatarIconBaseComponent {

}
