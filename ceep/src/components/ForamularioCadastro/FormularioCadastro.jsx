import React, { Component } from "react"
import "./FormularioCadastro.css"

class FormularioCadastro extends Component{

    render(){
        return(
        <form className="form-cadastro">
            <input 
                className="form-cadastro_input" 
                type='text' 
                placeholder="Título">     
            </input>
            <textarea 
                rows={15} 
                className="form-cadastro_input" 
                placeholder="escreva sua nota">
            </textarea>
            <button className="form-cadastro_submit">Criar Nota</button>
        </form> 
        );
    }
}

export default FormularioCadastro;
