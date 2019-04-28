import React, { Component } from "react";
import { Button, Row, Col, FormGroup, FormControl, FormLabel, Container } from "react-bootstrap";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    if (this.state.email.length > 0 && this.state.password.length > 0)
        this.handleLogin()
    ;
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
      <div className="Login">
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <form onSubmit={this.handleSubmit}>
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
                    <Button
                        block
                        bsSize="large"
                        disabled={this.validateForm()}
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