import React, { Component } from "react";
import { Button, FormCheck, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        lastName: "",
        email: "",
        password: "",
        birthDate: "",
        phone: "",
        postalCode: "",
        rfc: "",
        confirmPassword: ""
    };
  }

    handleSubmit =  async event => {
        event.preventDefault();

        const newUser = {
            name: this.state.name,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            zipcode: this.state.postalCode,
            birthdate: this.state.birthDate,
            monthlyIncome: this.state.rfc

        }

        const res = await axios.post(`http://18.217.95.55:3000/api/users`, ( newUser ));

        const token = res.data
        if (token) {
            this.props.history.push('/solicitud');
            axios.defaults.headers.common['x-auth-token'] = res.data
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
            <Row className="justify-content-md-center kredit-req kredit-sign">
                <Col md={6}>
                    <form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                        <FormGroup controlId="name">
                            <FormLabel>Nombre(s)</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            placeholder="ej. Dohn"
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="lastName">
                            <FormLabel>Apellidos</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            placeholder="ej. Joe"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="birthDate">
                        <FormLabel>Fecha de Nacimiento</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder="ej. 19-04-1994"
                            value={this.state.birthDate}
                            onChange={this.handleChange}
                            />
                    </FormGroup>                 
                    
                    <FormGroup controlId="rfc">
                            <FormLabel>RFC</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            placeholder="ej. DOJO0849HFDSR3"
                            value={this.state.rfc}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Row>
                        <Col>
                        <FormGroup controlId="postalCode">
                            <FormLabel>Código Postal</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            placeholder="ej. 09182"
                            value={this.state.postalCode}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="phone">
                            <FormLabel>Celular</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            placeholder="ej. (55) 6792 8123"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="email">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                            autoFocus
                            type="email"
                            placeholder="ej. aws-sucks@konfio.mx"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                    <FormGroup controlId="password">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="**************"
                            />
                    </FormGroup>
                    <FormGroup controlId="confrimPassword">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl
                        value={this.state.confrimPassword}
                        onChange={this.handleChange}
                        type="password"
                        placeholder="**************"
                        />
                    </FormGroup>
                    <FormGroup controlId="formBasicChecbox">
                        <FormCheck type="checkbox" label="Acepto términos y condiciones" />
                    </FormGroup>
                    <Button
                        block
                    
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