export class Aluno {
    private nome: string;
    private matricula: number;
    public passou: boolean = true;

    constructor(nome: string, matriula: number){
        this.nome = nome;
        this.matricula = matriula;
    }

    aprovado(media: number){
        if(media >= 7 ){
            this.passou = true;
        }else{
            this.passou = false;
        }
        return this.passou;
     }
}

export interface Nota{
    cadeira: string;
    ponto: number;
    aluno: Aluno;
}