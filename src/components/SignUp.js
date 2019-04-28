import React, { Component } from "react";
import { Button, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        birthDate: new Date(),
        phone: "",
        postalCode: "",
        rfc: "",
        confirmPassword: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="SignUp">
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                        <FormGroup controlId="name" bsSize="large">
                            <FormLabel>Nombre(s)</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="lastName" bsSize="large">
                            <FormLabel>Apellidos</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="birthDate" bsSize="large">
                        <FormLabel>Fecha de Nacimiento</FormLabel>
                        <DatePicker
                            selected={this.state.birthDate}
                            onChange={this.handleChange}
                        />
                    </FormGroup>                 
                    
                    <FormGroup controlId="rfc" bsSize="large">
                            <FormLabel>RFC</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.rfc}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Row>
                        <Col>
                        <FormGroup controlId="postalCode" bsSize="large">
                            <FormLabel>Código Postal</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.postalCode}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="phone" bsSize="large">
                            <FormLabel>Celular</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="email" bsSize="large">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            />
                    </FormGroup>
                    <FormGroup controlId="confrimPassword" bsSize="large">
                        <FormLabel>Confirm Passwor</FormLabel>
                        <FormControl
                        value={this.state.confrimPassword}
                        onChange={this.handleChange}
                        type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                       Registrar
                    </Button>
                    </form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}