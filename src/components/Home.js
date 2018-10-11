import React, { Component } from 'react'
import createHistory from "history/createBrowserHistory";
import { Row, Col, Container, Card, CardBody, Button, Label, Form, FormGroup } from 'reactstrap'
import '../css/Login.css';

import { auth } from '../firebase';

class Home extends Component {
  constructor(props) {
    super(props);
    this.isLoggedin = this.isLoggedin.bind(this);
    this.logout = this.logout.bind(this);
  }

  isLoggedin = () => {
    return sessionStorage.getItem("token");
  }

  componentWillMount() {
    let history = createHistory();
    if (this.isLoggedin());
      history.push("/");
  }

  logout(){
    auth.doSignOut();
    let history = createHistory();
    history.push("/");
  }

  render() {
    const {
      logar
    } = this.props;
    return (      
      <div>       
        <button type="button" onClick={this.logout} > LogOut </button>
      </div>      
    )
  }
}
export default Home;