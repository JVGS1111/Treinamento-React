import React, { Component } from 'react';
import "./ListaDeCategorias.css"

class ListaDeCategorias extends Component {
    state = {}
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">categorias</li>
                    <li className="lista-categorias_item">categorias</li>
                    <li className="lista-categorias_item">categorias</li>
                    <li className="lista-categorias_item">categorias</li>
                </ul>
                <input type="text" placeholder="adicionar categoria"></input>
            </section>

        );
    }
}

export default ListaDeCategorias;