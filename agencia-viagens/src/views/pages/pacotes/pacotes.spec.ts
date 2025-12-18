import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pacotes } from './pacotes';

describe('Pacotes', () => {
  let component: Pacotes;
  let fixture: ComponentFixture<Pacotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pacotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pacotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
