import { Component, signal } from '@angular/core';
import { DefaultLayout } from "../layout/default-layout/default-layout";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [DefaultLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agencia-viagens');
}
