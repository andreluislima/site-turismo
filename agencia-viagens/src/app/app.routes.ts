import { Routes } from '@angular/router';
import { Pacotes } from '../views/pages/pacotes/pacotes';
import { SolucoesViagens } from '../views/pages/solucoes-viagens/solucoes-viagens';
import { Passagens } from '../views/pages/passagens/passagens';
import { Passeios } from '../views/pages/passeios/passeios';
import { Sobre } from '../views/pages/sobre/sobre';
import { Index } from '../views/pages/index';
import { PasseioDetalhe } from '../views/pages/passeio-detalhe/passeio-detalhe';
import { PacoteDetalhe } from '../views/pages/pacote-detalhe/pacote-detalhe';

export const routes: Routes = [
    {path:'home', component:Index},
    {path:'pacotes', component:Pacotes},
    {path:'soluções de viagem', component:SolucoesViagens},
    {path:'passagens', component:Passagens},
    {path:'passeios', component:Passeios},

    // {path:'passeios/:id', component:PasseioDetalhe},
    {path:'pacotes/:id', component:PacoteDetalhe},


    {path:'sobre', component:Sobre},
    {path:'', redirectTo:'home', pathMatch:'full'}


];


// Pacotes, Solucoes Viagem, passagens, passeios, sobre