import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayfieldShellComponent } from './playfield-shell.component';

describe('PlayfieldShellComponent', () => {
  let component: PlayfieldShellComponent;
  let fixture: ComponentFixture<PlayfieldShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayfieldShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayfieldShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
