import { StreamCardsObject } from './../thumbnail-scroll/Models/stream-cards';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-stream-tiles',
  templateUrl: './stream-tiles.component.html',
  styleUrls: ['./stream-tiles.component.css']
})
export class StreamTilesComponent implements OnInit {

  @Input() receivedCard: StreamCardsObject = new StreamCardsObject();

  @Input() selected: Subject<number>;

  selectedCard: number;

  constructor() { }

  ngOnInit() {
    this.selected.subscribe(value => this.selectedCard = value);
  }

  getChannelImage(card: StreamCardsObject): string {

    if (card.Description === 'Stream does not exist') {
      return 'assets/Delete.png';
    } else if (card.Description === 'Stream is offline') {
      return 'assets/disconnected.png';
    } else {
      return card.PreviewImage;
    }
  }

}
