import React from "react";
import "./Confimado.css";

class Confimado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      edad: "",
      pais: "",
      sector: "",
      contagiados: "",
      hopistal: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.nombre +
        this.state.edad +
        this.state.pais +
        this.state.sector +
        this.state.contagiados +
        this.state.hopistal
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <a href="#" onClick={this.props.onclick}>
          back
        </a>
        <p> Complete los Siguientes Datos:</p>
        <form className="col-12" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="edad Aproximada"
              name="edad"
              value={this.state.edad}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="row">
            <div className="form-group">
              <select
                name="pais"
                value={this.state.pais}
                onChange={this.handleChange}
              >
                <option value="grapefruit">Republica dominicana</option>
                <option value="lime">EEUU</option>
                <option value="coconut">ECT</option>
                <option value="mango">ECTY</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="sector"
                value={this.state.sector}
                onChange={this.handleChange}
              >
                <option value="grapefruit">Districto nacional</option>
                <option value="lime">Santo domingo este</option>
                <option value="coconut">Santo domingo norte</option>
                <option value="mango">Santiago</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <select
              className="select"
              name="contagiados"
              value={this.state.contagiados}
              onChange={this.handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="hopistal (opcional)"
              name="hopistal"
              value={this.state.hopistal}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-sign-in-alt"></i> Continuar{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Confimado;
