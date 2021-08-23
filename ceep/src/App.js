import ListaDeNotas from './components/listaDeNotas.jsx'
function App() {
  return (
    <section>
      <form>
        <input type='text' placeholder="Título"></input>
        <textarea placeholder="escreva sua nota"></textarea>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas></ListaDeNotas>
    </section>
    
  );
  
}

export default App;
