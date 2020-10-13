import React from 'react';
import Confimado from '../formulario/Confimado'
import './Agregarcaso.css'


class Agregarcaso extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickfalse = this.handleClickfalse.bind(this);


    }

    handleClick() {
        this.setState(state => ({ isToggleOn: true }));
        console.log(this.state)
    }

    handleClickfalse() {
        this.setState(state => ({ isToggleOn: false }));
        console.log(this.state)
    }

    render() {
        
        const Agregarcaso = () => (
            <div  className="container">
            <a href='#' onClick={this.props.onclick}>
                back
                  </a>
            <h1>
                (?) Agregar caso
                        </h1>
            <p>  Selecciona el tipo de caso que quieres registrar</p>

            <ul>
                <li className='color'><a  href="#" onClick={this.handleClick} > Confimado</a></li>
                <li className='color1'><a  href="#"> Sintomas Relacionado</a></li>
                <li className='color2'><a  href="#">Recuperado/Descartad</a></li>
                <li className='color3'><a  href="#"> Fallecido</a></li>
            </ul>
            <div className='text'>
                <p>  Toda informacion registrada en este portal son con el fin de salvar màs vidas</p>
            </div>

        </div>
        )

        return (
          <div>
             {this.state.isToggleOn ?( <Confimado onclick={this.handleClickfalse}/>) : ( <Agregarcaso /> )}
          </div>

        )
    }
}

export default Agregarcaso;
