import React from 'react';
import RC from './dasboardimg/registar.png'
import CS from './dasboardimg/consultar.png'
import CC from './dasboardimg/casocerca.png'
import UCR from './dasboardimg/update.png'
import Agregarcaso from '../agregarcaso/Agregarcaso'
import './index.css'


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // Este enlace es necesario para hacer que `this` funcione en el callback    
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

          const Dashboard = () => (
            <div className='contenedor' id="toggle-1">
                            <h1>
                                (?)  Wellcome
                            </h1>
                            <p>  si has tenido algùn contacto con una persona contagiada, recuerda aislarte para salvaguardar
                                tu vida y la de los tuyos.</p>

                            <div className="cajas">
                                
                                <div  onClick={this.handleClick} className='caja'>
                                    <img  className="caja" src={RC} alt="registrarcaso" />
                                    <p>agregar caso</p>
                                </div>
                                <div className='caja'>
                                    <img className="caja" src={CS} alt="casoregistrado" />
                                    <p>consultal caso</p>
                                </div>
                                <div className='caja'>
                                    <img className="caja" src={CC} alt="casocerca" />
                                    <p>Casos Cerca de mi</p>
                                </div>
                                <div className='caja'>
                                    <img className="caja" src={UCR} alt="ultimocasoregistrado" />
                                    <p>Ultimo Casos Registrado</p>
                                </div>
                            </div>
                          
                        </div>
                       
          )

        return (
            <div className="modal-dialog text-center">
                <div className="col-sm-10 main-section">
                    <div className="modal-content">
                        
                    {this.state.isToggleOn ?( <Agregarcaso onclick={this.handleClickfalse}/>) : ( <Dashboard /> )}
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;
