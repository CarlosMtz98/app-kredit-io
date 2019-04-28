<<<<<<< HEAD
import React from 'react';
import * as typeformEmbed from '@typeform/embed';
import './formStyles.css';
=======
import React from "react";
import { Button, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
>>>>>>> 3fb6032e1688b753acd5860bcdb3e4cd58b6fc09

export  class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        puntosSat: "",
        puntosBuro: "",
        dateRequest: "28-04-2019",
        salary: "",
        plazos: "",
        montoCredito: "",
    };
  }

    handleSubmit =  event => {
        event.preventDefault();

        const application = {
            SAT: this.state.puntosSat,
            BURO: this.state.puntosBuro,
            dateOfCreation: this.state.dateRequest,
            monthlyIncome: this.state.salary,
            monthsPay: this.state.plazo,
            quantity: this.state.montoCredito
        }

        console.log(application);

        // const res = await axios.post(`http://18.217.95.55:3000/api/auth`, { user });
        // console.log(res);
        // console.log(res.data);
    }

    handleChange = event => {
        this.setState({
        [event.target.id]: event.target.value
        });
    }

  render() {
    return (
<<<<<<< HEAD
        <div className="kredit-form">
        
            <div className="container kredit-req">
            <form class=" p-5">

                <p class="h4 mb-4 text-left kredit-title">{ props.title }</p>
                <div class="form-row">
                    <div class="col-md-5 mb-3">
                        <label for="validationServer01">Puntaje SAT</label>
                        <input type="text" class="form-control" id="validationServer01" placeholder="ej. 83" required/>
                    </div>
                    <div className="col-md-2"></div>
                    <div class="col-md-5 mb-3">
                        <label for="validationServer02">Puntaje Buró de Crédito</label>
                        <input type="text" class="form-control" id="validationServer02" placeholder="ej. 78"required/>
                    </div>
                </div>
                <div className="form-row">
                    <div class="col-md-5 mb-3">
                            <label for="validationServerUsername">Ingreso Mensual</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroupPrepend3">
                                        <i class="fas fa-dollar-sign"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" id="validationServerUsername" placeholder="ej. 50,000" aria-describedby="inputGroupPrepend3" required />
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div class="col-md-5 mb-3">
                        <label for="validationServerUsername">Monto del Crédito</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend3">
                                    <i class="fas fa-dollar-sign"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="validationServerUsername" placeholder="ej. 50,000" aria-describedby="inputGroupPrepend3" required />
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-5 mb-3">
                        <label for="validationServerUsername">Propuesta de Pagos en Meses</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupPrepend3">
                                    <i class="fas fa-calendar-day"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" id="validationServerUsername" placeholder="ej. 12" aria-describedby="inputGroupPrepend3" required />
                        </div>
                    </div>
                    
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="invalidCheck3" required/>
                    <label class="form-check-label" for="invalidCheck3">
                        Acepto los términos y condiciones
                    </label>
                    </div>
                </div>
                    <button class="btn btn-primary" type="submit">Solicitar</button>
                </form>
            </div>
        </div>
=======
      <div className="SignUp">
        
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <form onSubmit={this.handleSubmit}>
                    <h4>Ingresa tus datos y te contestaremos lo más rponto posible</h4>
                    <Row>
                        <Col>
                        <FormGroup controlId="puntosSat" bsSize="large">
                            <FormLabel>Puntos de SAT</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.puntosSat}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="puntosBuro" bsSize="large">
                            <FormLabel>Puntos de Buró de Crédito</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.puntosBuro}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <FormGroup controlId="montoCredito" bsSize="large">
                            <FormLabel>Monto del Credito</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.montoCredito}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="plazo" bsSize="large">
                            <FormLabel>Plazo de Prestamo en meses</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.plazo}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                    </Row>          
                    
                    <FormGroup controlId="salary" bsSize="large">
                            <FormLabel>Salario</FormLabel>
                            <FormControl
                            value={this.state.salary}
                            onChange={this.handleChange}
                            type="text"
                            />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                    >
                       Solicitar Prestamo
                    </Button>
                    </form>
                </Col>
            </Row>
        </Container>
      </div>
>>>>>>> 3fb6032e1688b753acd5860bcdb3e4cd58b6fc09
    );
  }
}

export default Form;