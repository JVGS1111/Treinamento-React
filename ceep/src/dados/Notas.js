export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    criarNota(titulo, texto, categoria) {

        let novaNota = new Nota(
            titulo,
            texto,
            categoria
        )

        this.notas.push(novaNota)
        this.notificar();
    }

    apagarNotas(indice) {
        this.notas.splice(indice, 1);
        this.notificar();
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func)
    }


    notificar() {
        this._inscritos.forEach(func => func(this.notas));
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this._titulo = titulo;
        this._texto = texto;
        this._categoria = categoria;
    }
}