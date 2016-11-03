import { StreamCardsObject } from './../thumbnail-scroll/Models/stream-cards';
import { Settings } from './../settings';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TwitchStatusService {

    previewCard: Subject<StreamCardsObject> = new Subject<StreamCardsObject>();

    constructor(private http: Http) { }

    getChannel(endpoint: string, channelName: string): Observable<any> {
        let url = endpoint + channelName + Settings.clientID;
        return this.http.get(url)
            .map(response => response.json())
            .catch((e: any) => {
                console.log('Error getting channel:', e);
                return Observable.throw(e.json());
            });
    }

    getPreviewCard(): Subject<StreamCardsObject> {
        return this.previewCard;
    }

    updatePreviewCard(card: StreamCardsObject) {
        this.previewCard.next(card);
    }

}