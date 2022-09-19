import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { login } from "../../services/authService";
class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: api_token } = await login(data.email, data.password);
      localStorage.setItem("token", data.api_token);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {/* first is name in input field and second is label name third is data type. */}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
