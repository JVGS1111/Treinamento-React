import React, { Component } from "react"
import "./FormularioCadastro.css"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this._titulo = "";
        this._nota = "";
    }

    _handleMudancaDeTitulo(event) {
        event.stopPropagation();
        this._titulo = event.target.value;


    }

    _hanldeMudancaTexto(event) {
        event.stopPropagation();
        this._nota = event.target.value;

    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this._titulo, this._nota)
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input
                    className="form-cadastro_input"
                    type='text'
                    placeholder="Título"
                    onChange={this._handleMudancaDeTitulo.bind(this)}
                >
                </input>
                <textarea
                    rows={15}
                    className="form-cadastro_input"
                    placeholder="escreva sua nota"
                    onChange={this._hanldeMudancaTexto.bind(this)}
                >
                </textarea>
                <button className="form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;
