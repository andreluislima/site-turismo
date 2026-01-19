import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-title-pages',
  imports: [],
  templateUrl: './banner-title-pages.html',
  styleUrl: './banner-title-pages.scss',
})
export class BannerTitlePages {
  @Input() title!: string
  @Input() img!:string
}
