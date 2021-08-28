import React, { Component } from 'react';
import "./ListaDeCategorias.css"

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] }

        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias })
    }

    _handlerEventoDeInput(event) {

        if (event.key === 'Enter') {
            this._criarCategoria(event.target.value)
            event.target.value = '';
        }

    }

    _criarCategoria(categoria) {
        this.props.criarCategoria(categoria);
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categoria_input"
                    placeholder="adicionar categoria"
                    onKeyUp={this._handlerEventoDeInput.bind(this)} />
            </section>

        );
    }
}

export default ListaDeCategorias;