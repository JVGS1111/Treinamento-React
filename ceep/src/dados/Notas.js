export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    criarNota(titulo, texto, categoria) {

        console.log(titulo, texto, categoria);
        let novaNota = new Nota(
            titulo,
            texto,
            categoria
        )
        console.log(novaNota);
        this.notas.push(novaNota)
    }

    apagarNotas(indice) {
        this.notas.splice(indice, 1);
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias));
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this._titulo = titulo;
        this._texto = texto;
        this._categoria = categoria;
    }
}