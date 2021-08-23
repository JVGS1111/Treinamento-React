import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro.jsx'
import ListaDeNotas from './components/ListaDeNotas/listaDeNotas.jsx'

class App extends Component{

  render(){
    return(
    <section>
      <FormularioCadastro></FormularioCadastro>
      <ListaDeNotas></ListaDeNotas>
    </section>
    );
  }
}

export default App;
