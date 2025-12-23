import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTitlePages } from './banner-title-pages';

describe('BannerTitlePages', () => {
  let component: BannerTitlePages;
  let fixture: ComponentFixture<BannerTitlePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerTitlePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerTitlePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
