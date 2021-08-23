import { Component } from 'react';
import FormularioCadastro from './components/ForamularioCadastro/FormularioCadastro.jsx'
import ListaDeNotas from './components/ListaDeNotas/listaDeNotas.jsx'
import "./App.css" 
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
