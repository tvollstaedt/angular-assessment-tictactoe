import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSymbolComponent } from './game-symbol.component';

describe('GameSymbolComponent', () => {
  let component: GameSymbolComponent;
  let fixture: ComponentFixture<GameSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSymbolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
