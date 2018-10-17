import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@material-ui/core";

class EmailSignUp extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    email: ""
  };

  handleInputChange = this.handleInputChange.bind(this);
  handleFormSubmit = this.handleFormSubmit.bind(this);

  handleInputChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onButtonClick({ email: this.state.email });
  }

  render() {
    return (
      <form
        className={this.props.classes.emailSignUpContainer}
        onSubmit={this.handleFormSubmit}
      >
        <TextField
          type="email"
          placeholder="Email address"
          onChange={this.handleInputChange}
          value={this.state.email}
          required
        />
        <Button
          color="primary"
          variant="raised"
          type="submit"
          className={this.props.classes.signUpButton}
        >
          Sign up!
        </Button>
      </form>
    );
  }
}

export default EmailSignUp;
