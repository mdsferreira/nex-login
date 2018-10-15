import React, { Component } from 'react'
import createHistory from "history/createBrowserHistory";
import { Row, Col, Container, Card, CardBody, Button, Label, Form, FormGroup } from 'reactstrap'
import '../css/Login.css';
import {Link} from 'react-router-dom';
import { auth } from '../firebase';

class Home extends Component {
  constructor(props) {
    super(props);
    this.isLoggedin = this.isLoggedin.bind(this);
    this.logout = this.logout.bind(this);
  }

  isLoggedin = () => {
    return sessionStorage.getItem("user");
  }

  componentWillMount() {
    // let history = createHistory();
     console.log("log")
    // if (this.isLoggedin());
    //   history.push("/");
  }

  logout(){
    auth.logOutFirebase();
    let history = createHistory();
    history.push("/");
  }

  render() {
    const {
      logar
    } = this.props;
    return (      
      <div>       
        <button type="button" onClick={this.logout} > LogOut 
        <Link to={"/login"} ><i className="fa fa-external-link"></i></Link>
        </button>
      </div>      
    )
  }
}
export default Home;