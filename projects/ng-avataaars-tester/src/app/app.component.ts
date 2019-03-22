import { Component, OnInit } from '@angular/core';
import { SaveAvatar } from 'ng-avataaars-library';
import { AvatarSelection } from 'ng-avataaars-library/lib/custom-avatar/options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  info = false;
  avatarSelection: AvatarSelection;

  onAvatarSaved(saveAvatar: SaveAvatar) {
    localStorage.setItem('avatar', JSON.stringify(saveAvatar.avatarSelection));
  }

  ngOnInit() {
    const avatar = localStorage.getItem('avatar');
    if (avatar !== '') {
      this.avatarSelection = JSON.parse(avatar);
    }
  }
}
