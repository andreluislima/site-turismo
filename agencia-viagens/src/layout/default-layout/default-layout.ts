import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/hero";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-default-layout',
  imports: [Navbar, Hero, Footer],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss',
})
export class DefaultLayout {

}
