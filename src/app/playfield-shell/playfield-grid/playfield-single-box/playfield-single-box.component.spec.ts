import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayfieldSingleBoxComponent } from './playfield-single-box.component';

describe('PlayfieldSingleBoxComponent', () => {
  let component: PlayfieldSingleBoxComponent;
  let fixture: ComponentFixture<PlayfieldSingleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayfieldSingleBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayfieldSingleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
