import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-tiles',
  templateUrl: './stream-tiles.component.html',
  styleUrls: ['./stream-tiles.component.css']
})
export class StreamTilesComponent implements OnInit {

  selected: number = 0;

  constructor() { }

  ngOnInit() {
  }

  selectThumbnail(item: number) {
    this.selected = item;
    console.log('item', item, 'selected:', this.selected);
  }

}
