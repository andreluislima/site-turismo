export type VitrineTipo = 'PACOTE' | 'PASSEIO'

export interface VitrineItemBase{
    id:number;
    titulo:string;
}

export interface VitrineOpenEvent{
    id:number;
    tipo: VitrineTipo;
}