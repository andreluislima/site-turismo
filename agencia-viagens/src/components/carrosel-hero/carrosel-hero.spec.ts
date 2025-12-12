import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselHero } from './carrosel-hero';

describe('CarroselHero', () => {
  let component: CarroselHero;
  let fixture: ComponentFixture<CarroselHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarroselHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
