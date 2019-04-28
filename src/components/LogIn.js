import React, { Component } from "react";
import { Button, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";
import axios from 'axios';

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
        email: "",
        password: ""
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);

        // axios.post(`http://18.217.95.55:3000/api/auth`, { user })
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })

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
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                        autoFocus
                        type="email"
                        placeholder="ej. aws-sucks@konfio.mx"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
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
                        bsSize="large"
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