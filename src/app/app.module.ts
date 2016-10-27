import { TwitchStatusService } from './shared/twitch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { FccStatusComponent } from './fcc-status/fcc-status.component';
import { StreamTilesComponent } from './stream-tiles/stream-tiles.component';
import { ThumbnailScrollComponent } from './thumbnail-scroll/thumbnail-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FccStatusComponent,
    StreamTilesComponent,
    ThumbnailScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TwitchStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
