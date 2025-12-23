import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseioDetalhe } from './passeio-detalhe';

describe('PasseioDetalhe', () => {
  let component: PasseioDetalhe;
  let fixture: ComponentFixture<PasseioDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasseioDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasseioDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
