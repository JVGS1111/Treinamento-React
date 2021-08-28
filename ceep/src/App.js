import { Component } from 'react';
import FormularioCadastro from './components/ForamularioCadastro/'
import ListaDeNotas from './components/ListaDeNotas/'
import ListaDeCategorias from './components/ListaDeCategorias/';
import "./assets/App.css"
import Catergorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Catergorias();
    this.notas = new ArrayDeNotas();

  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNotas.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
