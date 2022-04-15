import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhotoComponent } from './photo/photo.component';
import { TitleComponent } from './title/title.component';
import { InputRangeComponent } from './input-range/input-range.component';
import { ButtonsPlayerComponent } from './buttons-player/buttons-player.component';

@NgModule({
  declarations: [AppComponent, PhotoComponent, TitleComponent, InputRangeComponent, ButtonsPlayerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
