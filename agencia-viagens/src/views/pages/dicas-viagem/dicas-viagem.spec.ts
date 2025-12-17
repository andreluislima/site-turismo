import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasViagem } from './dicas-viagem';

describe('DicasViagem', () => {
  let component: DicasViagem;
  let fixture: ComponentFixture<DicasViagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DicasViagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DicasViagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
