import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passeios } from './passeios';

describe('Passeios', () => {
  let component: Passeios;
  let fixture: ComponentFixture<Passeios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Passeios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Passeios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
