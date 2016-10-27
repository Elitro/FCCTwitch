import { Settings } from './../settings';
import { TwitchStatusService } from './../shared/twitch.service';
import { StreamCardsObject } from './Models/stream-cards';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail-scroll',
  templateUrl: './thumbnail-scroll.component.html',
  styleUrls: ['./thumbnail-scroll.component.css']
})
export class ThumbnailScrollComponent implements OnInit {

  cardArray: Array<StreamCardsObject> = new Array<StreamCardsObject>();

  tempArray: any = Settings.channelsArray;

  cardsPerRow: number = 12 / 3;

  constructor(private service: TwitchStatusService) { }

  ngOnInit() {
    //let response = this.service.getChannel(Settings.streamURL, 'freecodecamp');
    let response = this.service.getChannel(Settings.streamURL, 'BeyondTheSummit2');
    response.subscribe(response => console.log(response));
  }

}
