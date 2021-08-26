import { Component } from 'react';
import FormularioCadastro from './components/ForamularioCadastro/'
import ListaDeNotas from './components/ListaDeNotas/'
import ListaDeCategorias from './components/ListaDeCategorias/';
import "./assets/App.css"

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {

    let novaNota = { titulo, texto }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }

    this.setState(novoEstado);
  }

  deletarNota(indice) {

    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({
      notas: arrayNotas
    })
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
