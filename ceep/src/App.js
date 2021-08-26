import { Component } from 'react';
import FormularioCadastro from './components/ForamularioCadastro/'
import ListaDeNotas from './components/ListaDeNotas/'
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

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
