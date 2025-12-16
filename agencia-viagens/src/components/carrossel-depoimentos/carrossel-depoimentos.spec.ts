import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselDepoimentos } from './carrossel-depoimentos';

describe('CarrosselDepoimentos', () => {
  let component: CarrosselDepoimentos;
  let fixture: ComponentFixture<CarrosselDepoimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselDepoimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselDepoimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
