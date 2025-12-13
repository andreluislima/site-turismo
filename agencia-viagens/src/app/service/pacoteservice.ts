import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PacotesCard } from "../domain/cards.pacotes";
import { PACOTES } from "../data/data.pacotes";

@Injectable({providedIn:"root"})
export class PacotesService{

    listar():Observable<PacotesCard[]>{
        return of(PACOTES);
    }
}