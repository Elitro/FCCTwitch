import { Settings } from './../settings';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TwitchStatusService {

    constructor(private http: Http) { }

    getChannel(endpoint: string, channelName: string): Observable<any> {
        let url = endpoint + channelName + Settings.clientID;
        return this.http.get(url)
            .catch((e: Response) => {
                console.log('Error getting channel:', e);
                return Observable.throw(e.json());
            })
            .map((response: Response) => {
                return response.json();
            });
    }

}