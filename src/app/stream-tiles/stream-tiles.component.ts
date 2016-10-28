import { StreamCardsObject } from './../thumbnail-scroll/Models/stream-cards';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-tiles',
  templateUrl: './stream-tiles.component.html',
  styleUrls: ['./stream-tiles.component.css']
})
export class StreamTilesComponent implements OnInit {

  //@Input() receivedCard: Subject<StreamCardsObject> = new Subject<StreamCardsObject>();
  @Input() receivedCard: StreamCardsObject = new StreamCardsObject();

  selected: number = 0;

  constructor() { }

  ngOnInit() {
    console.log('got card:', this.receivedCard);
  }

  selectThumbnail(item: number) {
    this.selected = item;
    console.log('item', item, 'selected:', this.selected);
  }

}
