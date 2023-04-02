import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayfieldGridComponent } from './playfield-grid.component';

describe('PlayfieldGridComponent', () => {
  let component: PlayfieldGridComponent;
  let fixture: ComponentFixture<PlayfieldGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayfieldGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayfieldGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
