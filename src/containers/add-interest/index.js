import React, { Component } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import CardContainer from "../../components/card-container";
import SubTitle from "../../components/sub-title";
import ContainerTitle from "../../components/container-title";
import EmailSignUp from "../../components/email-sign-up";
import { withDatabase } from "../../libs/database";
import { CONTAINER_IDS } from "../../libs/navigation";

class AddInterest extends Component {
  static propTypes = {
    database: PropTypes.object.isRequired
  };

  state = {
    signUpSuccess: false
  };

  submitEmail = this.submitEmail.bind(this);
  handleSuccessMessageClose = this.handleSuccessMessageClose.bind(this);

  async submitEmail({ email }) {
    try {
      await this.props.database.addInterestedUser({ email });
      this.setState({ signUpSuccess: true, error: false });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  handleSuccessMessageClose() {
    this.setState({
      signUpSuccess: false,
      error: false
    });
  }

  render() {
    const message = this.state.error
      ? "Oops something went wrong! Try again!"
      : "Thank you! We'll be in touch with news!";

    return (
      <CardContainer id={CONTAINER_IDS.SIGN_UP}>
        <ContainerTitle>Want to know when we are ready?</ContainerTitle>
        <SubTitle>
          Sign up with your email and you will be in line to try us out!
        </SubTitle>

        <EmailSignUp onFormSubmit={this.submitEmail} />
        <Snackbar
          open={this.state.signUpSuccess}
          onClose={this.handleSuccessMessageClose}
          message={message}
        />
      </CardContainer>
    );
  }
}

export default withDatabase(AddInterest);
