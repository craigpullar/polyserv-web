import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

class EmailSignUp extends Component {
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
      <div>
        <TextField
          type="email"
          placeholder="Email address"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <Button color="primary" onClick={this.handleButtonClick}>
          Sign up!
        </Button>
      </div>
    );
  }
}

export default EmailSignUp;
