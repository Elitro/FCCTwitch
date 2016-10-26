/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StreamTilesComponent } from './stream-tiles.component';

describe('StreamTilesComponent', () => {
  let component: StreamTilesComponent;
  let fixture: ComponentFixture<StreamTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
