import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-nose',
  styleUrls: ['./icon-base.css'],
  templateUrl: './nose.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconNoseComponent extends CustomAvatarIconBaseComponent {

}
