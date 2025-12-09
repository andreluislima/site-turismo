import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-default-layout',
  imports: [Navbar],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss',
})
export class DefaultLayout {

}
