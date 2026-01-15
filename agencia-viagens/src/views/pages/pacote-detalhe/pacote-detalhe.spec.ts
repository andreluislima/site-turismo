import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoteDetalhe } from './pacote-detalhe';

describe('PacoteDetalhe', () => {
  let component: PacoteDetalhe;
  let fixture: ComponentFixture<PacoteDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacoteDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacoteDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
