import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("UserName"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "UserName")}
          {this.renderInput("email", "Email")}
          {/* first is name in input field and second is label name third is data type. */}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
