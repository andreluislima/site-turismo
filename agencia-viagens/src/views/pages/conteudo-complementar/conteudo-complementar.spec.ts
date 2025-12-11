import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoComplementar } from './conteudo-complementar';

describe('ConteudoComplementar', () => {
  let component: ConteudoComplementar;
  let fixture: ComponentFixture<ConteudoComplementar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteudoComplementar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoComplementar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
