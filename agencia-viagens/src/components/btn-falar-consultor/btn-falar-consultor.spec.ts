import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFalarConsultor } from './btn-falar-consultor';

describe('BtnFalarConsultor', () => {
  let component: BtnFalarConsultor;
  let fixture: ComponentFixture<BtnFalarConsultor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnFalarConsultor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnFalarConsultor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
