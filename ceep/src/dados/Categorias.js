export default class Catergorias {

    constructor() {
        this.categorias = []
        this._inscritos = []
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias));
    }
    criarCategoria(categoria) {
        this.categorias.push(categoria);
        this.notificar();
    }

}