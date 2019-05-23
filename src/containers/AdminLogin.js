import React from 'react';

import '../../src/App.css';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions/index';

import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

class AdminLogin extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    console.log(login);
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/ApprovalCard');
    });
  };

  render() {
    return (
      <Form className="login-form" onSubmit={this.login}>
        <h1 className="text-center">
          <span className="font-weight-bol">Authorize User </span>
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup 
        >
          <Label>UserName</Label>
          <Input 
            type="text"
            name="username"
            value={this.state.credentials.username} 
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
            type="password" 
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">
        {this.props.isLoggingIn ? (
            <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
        ) : (
              'Log in'
            )}
        </Button>
      </Form>
    );
  }
}

   

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(AdminLogin);