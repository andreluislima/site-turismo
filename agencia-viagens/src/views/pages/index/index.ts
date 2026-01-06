import { Component } from '@angular/core';
import { DefaultLayout } from "../../../layout/default-layout/default-layout";
import { BtnWhatsapp } from "../../../components/btn-whatsapp/btn-whatsapp";

@Component({
  selector: 'app-index',
  imports: [DefaultLayout, BtnWhatsapp],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class Index {

}
