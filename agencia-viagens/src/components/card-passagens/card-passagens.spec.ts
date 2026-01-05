import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPassagens } from './card-passagens';

describe('CardPassagens', () => {
  let component: CardPassagens;
  let fixture: ComponentFixture<CardPassagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPassagens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPassagens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
