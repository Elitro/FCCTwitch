import { Settings } from './../settings';
import { TwitchStatusService } from './../shared/twitch.service';
import { StreamCardsObject } from './Models/stream-cards';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/throw';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-thumbnail-scroll',
  templateUrl: './thumbnail-scroll.component.html',
  styleUrls: ['./thumbnail-scroll.component.css']
})
export class ThumbnailScrollComponent implements OnInit {

  cardSelected: Subject<number> = new Subject<number>();

  cardArray: Array<StreamCardsObject> = new Array<StreamCardsObject>();

  tempArray: Array<string> = Settings.channelsArray;

  // set here how many cards you want per row
  cardsPerRow: number = 3;

  columnWidth: number = 12 / this.cardsPerRow;

  carouselWidth: number = this.tempArray.length / this.cardsPerRow;

  carouselArray: Array<Array<StreamCardsObject>> = new Array<Array<StreamCardsObject>>();

  constructor(private service: TwitchStatusService) { }

  ngOnInit() {

    // Get channel online status
    for (let i = 0; i < this.tempArray.length; i++) {
      this.getChannelCard(this.tempArray[i]);
    }

    // this.carouselArray = this.buildCarouselArray(this.cardArray, this.cardsPerRow);

    // let response = this.service.getChannel(Settings.streamAPIURL, 'freecodecamp');
    // let response = this.service.getChannel(Settings.streamAPIURL, 'BeyondTheSummit2');
    // response.subscribe(response => console.log(response));
  }

  buildCarouselArray(cardArray: any, numberOfRows: number): any[][] {
    let i, k;
    let carouselArray: Array<Array<StreamCardsObject>> = new Array<Array<StreamCardsObject>>();

    for (i = 0, k = -1; i < cardArray.length; i++) {
      if (i % numberOfRows === 0) {
        k++;
        carouselArray[k] = [];
      }
      carouselArray[k].push(cardArray[i]);
    }

    // console.log('carousel:', carouselArray);
    return carouselArray;
  }

  addCardToArray(card: StreamCardsObject, response: any) {

    card = this.fillCardObject(card, response);

    card.Id = this.cardArray.length;
    this.cardArray.push(card);
    // console.log('name:', card.Name, 'cardArray:', this.cardArray);
    if (this.cardArray.length === this.tempArray.length) {
      this.carouselArray = this.buildCarouselArray(this.cardArray, this.cardsPerRow);
    }
  }

  getChannelCard(name: string): void {

    let card: StreamCardsObject = new StreamCardsObject();
    card.Name = name;

    this.service.getChannel(Settings.streamAPIURL, name)
      .subscribe(response => {
        this.addCardToArray(card, response);

      }, error => {
        this.addCardToArray(card, error);
        console.log('error:', error);
      });
    // console.log('channel name:', name, 'response:', response);

  }

  fillCardObject(card: StreamCardsObject, response: any): StreamCardsObject {

    // console.log('fillCardObject', response);

    if (response.error) {
      card.Description = 'Stream does not exist';
    } else if (!response.stream) {
      card.Description = 'Stream is offline';
      card.link = Settings.streamURL + name;
    } else {
      card.Description = response.stream.channel.status;
      card.PreviewImage = response.stream.channel.logo;
      card.link = Settings.streamURL + name;
    }
    return card;
  }

  fillArray(targetLength: number): Array<any> {
    if (targetLength) {
      return Array(targetLength).fill(0);
    }
    return [];
  }

  selectThumbnail(item: number) {
    this.cardSelected.next(item);
  }

}
