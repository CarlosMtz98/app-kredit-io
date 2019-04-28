import React, { Component } from "react";
import { Button, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import axios from 'axios';
import {Route, Redirect} from 'react-router-dom';
import cors from 'cors';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        const res = await axios.post(`http://18.217.95.55:3000/api/auth`, ( user ));
        const token = res.data

        if (token) {
            this.props.history.push('/solicitud');
            axios.defaults.headers.common['x-auth-token'] = res.data
        }
        

        console.log(res.data,axios.headers);
    }

    handleChange = event => {
        this.setState({
        [event.target.id]: event.target.value
        });
    }


  render() {
    return (
      <div className="Login kredit-form">
        <Container>
        <div className="kredit-header-ghost"></div>
            <Row className="justify-content-md-center kredit-req kredit-login">
                <Col md={4}>
                    <form onSubmit={this.handleSubmit}>
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
                        placeholder="**************"
                        type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                    
                        type="submit"
                    >
                        Iniciar Sesión
                    </Button>
                    </form>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
}

export default Login;