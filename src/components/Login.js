import React, { Component } from 'react'
import createHistory from "history/createBrowserHistory";
import { Row, Col, Container, Card, CardBody,  Button, Label, FormGroup, Form} from 'reactstrap';
import {  AvForm, AvInput } from 'availity-reactstrap-validation';
import '../css/Login.css';
import { auth } from '../firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.isLoggedin = this.isLoggedin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.history = createHistory();  
  }
  

  isLoggedin = () => {
    return sessionStorage.getItem("token");
  }

  componentWillMount() {
    
    if (this.isLoggedin())
      this.history.push("/")
    else
    this.history.push("/home")
  }

  login(email, password){    
    auth.logInFirebase(email, password)
    .then((login)=>{
      sessionStorage.setItem("token", login.data.token);
      this.history.push("/home/")
    })
    .catch(()=>{
      alert('Usuario ou senha inválidos')  
    })    
  }

  handleSubmit(event, errors, values) {
    //#todo tratar erros
    this.login(values.email, values.password)
  }

  render() {
    const {
      logar
    } = this.props;
    return (
      
      <Container fluid >       
        <Row >
        <Col className="container-login">
        <Card>          
          <CardBody>  
            <AvForm  onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <img src={require('../img/logo.JPG')} />
              </Col>
            </Row>            
            <Row>
              <Col>
                <FormGroup className="text-left">
                  <Label size="md" for="email">Email</Label>
                  <AvInput className="input-login" type="text" name="email" id="email"  required />                    
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="text-left">
                  <Label size="md" for="password">Senha</Label>
                  <AvInput name="password"  id="password"  required  type="password" />                  
                </FormGroup>
              </Col>
            </Row>       
            <Row>
              <Col>
                <Button size="lg" className="botao-entrar" onSubmit={this.login} ><i className="fa fa-sign-in" aria-hidden="true"></i> Entrar</Button>
              </Col>
            </Row>     
            <Row>
              <Col>
                <a size="lg" className="btn btn-block btn-social btn-facebook" id="facebook" ><span className="fa fa-facebook" aria-hidden="true"></span> Facebook</a>
              </Col>
            </Row> 
            </AvForm>  
          </CardBody>
        </Card>
        </Col>
        </Row>
        </Container>      
    )
  }
}
export default Login;