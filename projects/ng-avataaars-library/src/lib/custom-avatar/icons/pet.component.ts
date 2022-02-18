import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomAvatarIconBaseComponent } from './icon-base.component';

@Component({
  selector: 'kip-custom-avatar-icon-pet',
  styleUrls: ['./icon-base.css'],
  templateUrl: './pet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomAvatarIconPetComponent extends CustomAvatarIconBaseComponent {

}
