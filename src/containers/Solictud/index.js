import React, {Component} from "react";
import './formStyles.css';
import { Button, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import axios from 'axios';

class Solicitud extends React.Component {
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
    
        handleSubmit =  async event => {
            event.preventDefault();
    
            const application = {
                SAT: this.state.puntosSat,
                BURO: this.state.puntosBuro,
                dateOfCreation: this.state.dateRequest,
                monthlyIncome: this.state.salary,
                monthsToPay: this.state.plazo,
                quantity: this.state.montoCredito
            }
            const res = await axios.post('http://18.217.95.55:3000/api/applications', ( application ));
    
            const token = res.data
    
            if (token) {
                this.props.history.push(`/resultado/:${JSON.stringify(token)}`);
            }
            
            
        }
    
        handleChange = event => {
            this.setState({
            [event.target.id]: event.target.value
            });
        }
    
      render() {
    
        return (
            
          <div className="SignUp kredit-form">
    
            
            <Container>
            <div className="kredit-header-ghost"></div>
                <Row className="justify-content-md-center kredit-req">
                    <Col md={8}>
                        <form onSubmit={this.handleSubmit}>
                        <h4 className="kredit-title">Ingresa tus datos y te contestaremos lo más pronto posible.</h4>
                        <Row>
                            <Col>
                            <FormGroup controlId="puntosSat">
                                <FormLabel>Puntos de SAT</FormLabel>
                                <FormControl
                                autoFocus
                                type="text"
                                placeholder="ej. 85"
                                value={this.state.puntosSat}
                                onChange={this.handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup controlId="puntosBuro">
                                <FormLabel>Puntos de Buró de Crédito</FormLabel>
                                <FormControl
                                autoFocus
                                type="text"
                                placeholder="ej. 73"
                                value={this.state.puntosBuro}
                                onChange={this.handleChange}
                                />
                            </FormGroup>
                            </Col>
                        </Row>
    
                        <Row>
                            <Col>
                            <FormGroup controlId="montoCredito">
                                <FormLabel>Monto del Credito</FormLabel>
                                <FormControl
                                autoFocus
                                type="text"
                                placeholder="ej. 335,000"
                                value={this.state.montoCredito}
                                onChange={this.handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup controlId="plazo">
                                <FormLabel>Plazo de Prestamo en meses</FormLabel>
                                <FormControl
                                autoFocus
                                type="text"
                                placeholder="ej. 36"
                                value={this.state.plazo}
                                onChange={this.handleChange}
                                />
                            </FormGroup>
                            </Col>
                        </Row>          
                        
                        <FormGroup controlId="salary">
                                <FormLabel>Salario</FormLabel>
                                <FormControl
                                value={this.state.salary}
                                onChange={this.handleChange}
                                placeholder="ej. 35,000"
                                type="text"
                                />
                        </FormGroup>
                        <Button
                            block
                        
                            type="submit"
                        >
                           Solicitar Prestamo
                        </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
          </div>
        );
      }
}

export default Solicitud;