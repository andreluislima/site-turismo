import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucoesViagens } from './solucoes-viagens';

describe('SolucoesViagens', () => {
  let component: SolucoesViagens;
  let fixture: ComponentFixture<SolucoesViagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolucoesViagens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolucoesViagens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
