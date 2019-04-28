import React from "react";
import './formStyles.css';
import { Button, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";

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
      <div className="SignUp kredit-form">
        
        <Container>
            <Row className="justify-content-md-center kredit-req">
                <Col md={8}>
                    <form onSubmit={this.handleSubmit}>
                    <h4 class="kredit-title">Ingresa tus datos y te contestaremos lo más pronto posible.</h4>
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
    );
  }
}

export default Form;