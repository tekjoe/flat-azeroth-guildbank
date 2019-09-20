import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import axios from "axios";

const LoginForm = styled.form``;

export default class extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    axios
      .post("/users/login", user)
      .then(res => {
        localStorage.setItem("guild-bank-token", res.data.token);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <Input
          placeholder="Email Address"
          onChange={this.handleChange}
          value={email}
          name="email"
          type="email"
        />
        <Input
          placeholder="Password"
          onChange={this.handleChange}
          value={password}
          name="password"
          type="password"
        />
        <Button>Login</Button>
      </LoginForm>
    );
  }
}
