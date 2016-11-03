import { TwitchStatusService } from './../shared/twitch.service';
import { StreamCardsObject } from './../thumbnail-scroll/Models/stream-cards';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-fcc-status',
  templateUrl: './fcc-status.component.html',
  styleUrls: ['./fcc-status.component.css']
})
export class FccStatusComponent implements OnInit {

  previewCard: Subject<StreamCardsObject> = new Subject<StreamCardsObject>();

  myCard: StreamCardsObject = new StreamCardsObject();

  constructor(private service: TwitchStatusService) {
    this.previewCard = this.service.getPreviewCard();
  }

  ngOnInit() {
    this.previewCard.subscribe(response => this.myCard = response);
  }

  ledStatus(value: string): string {
    if (value) {
      return 'led-green';
    }
    return 'led-red';
  }

}
