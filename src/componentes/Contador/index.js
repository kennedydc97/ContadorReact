import React, {Component} from 'react';

import { Button } from 'reactstrap';

import './contador.css'



class Contador extends Component{
    state = {
        numero: 0
      }
    
      aumentar = () => {
        let novoNumero = this.state.numero
    
        novoNumero++
    
        this.setState({numero: novoNumero})
    }
    
      diminuir = () => {
        let novoNumero = this.state.numero
    
        novoNumero--
    
        if(this.state.numero > 0){
          this.setState({numero: novoNumero})
        }else{
          alert("hoje não faro!")
        }
      }
    
    
      render() {
        return (
          <div>
            <h1 className="contador-titulo">
              {this.state.numero}
            </h1>
            <Button className="mr-2" color="success" outline onClick={this.aumentar}>
                Aumentar
            </Button>
            <Button color="danger" outline onClick={this.diminuir}>
                Diminuir
            </Button>
            {/* <button className="contador-aumentar" type="button" onClick={this.aumentar}>Aumentar</button>
            <button className="contador-diminuir" type="button" onClick={this.diminuir}>Diminiur</button> */}
          </div>
        )
      }
}

export default Contador;