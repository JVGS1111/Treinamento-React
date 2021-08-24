import { Component } from 'react';
import FormularioCadastro from './components/ForamularioCadastro/'
import ListaDeNotas from './components/ListaDeNotas/'
import "./assets/App.css"

class App extends Component {

  criarNota(titulo, texto) {
    console.log(`${titulo}, ${texto}`);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
