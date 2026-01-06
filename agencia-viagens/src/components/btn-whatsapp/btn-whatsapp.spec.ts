import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnWhatsapp } from './btn-whatsapp';

describe('BtnWhatsapp', () => {
  let component: BtnWhatsapp;
  let fixture: ComponentFixture<BtnWhatsapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnWhatsapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnWhatsapp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
