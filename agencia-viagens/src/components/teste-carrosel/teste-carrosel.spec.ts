import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCarrosel } from './teste-carrosel';

describe('TesteCarrosel', () => {
  let component: TesteCarrosel;
  let fixture: ComponentFixture<TesteCarrosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteCarrosel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteCarrosel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
