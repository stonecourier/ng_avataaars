import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgAvataaarsLibraryModule } from 'ng-avataaars-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAvataaarsLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
