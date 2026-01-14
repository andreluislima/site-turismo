export interface PacoteDetalhe{
    id:number;
    titulo:string;
    localizacao:string;

    imagens:{
        banner:string;
        galeria:string;
    };

    sobre:{
        descricao:string;
        observacoes?:string;
    };

    pontosProximos:{
        nome:string;
        distancia:string;
        referencia?:string;
    }[];

    informacoes:{
        acessibilidade:boolean;
        taxaLocal:{
            possui:boolean;
            descricacao?:string;
        }
    }
}