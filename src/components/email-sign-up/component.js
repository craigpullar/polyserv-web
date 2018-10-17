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
  handleButtonClick = this.handleButtonClick.bind(this);

  handleInputChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleButtonClick() {
    this.props.onButtonClick({ email: this.state.email });
  }

  render() {
    return (
      <form className={this.props.classes.emailSignUpContainer}>
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
          onClick={this.handleButtonClick}
        >
          Sign up!
        </Button>
      </form>
    );
  }
}

export default EmailSignUp;
