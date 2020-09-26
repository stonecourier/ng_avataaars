import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgAvataaarsLibraryModule } from 'ng-avataaars-library';
import { AppComponent } from './app.component';

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
