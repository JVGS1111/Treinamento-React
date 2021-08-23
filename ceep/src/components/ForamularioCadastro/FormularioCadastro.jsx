import React, { Component } from "react"
import "./FormularioCadastro.css"

class FormularioCadastro extends Component {

    constructor() {
        super();
        this._titulo = "";
    }

    handleMudancaDeTitulo(event) {
        this._titulo = event.target.value;

        console.log(this._titulo);
    }

    render() {
        return (
            <form className="form-cadastro">
                <input
                    className="form-cadastro_input"
                    type='text'
                    placeholder="Título"
                    onChange={this.handleMudancaDeTitulo.bind(this)}
                >
                </input>
                <textarea
                    rows={15}
                    className="form-cadastro_input"
                    placeholder="escreva sua nota">
                </textarea>
                <button className="form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;
