import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import CardContainer from "../../components/card-container";
import EmailSignUp from "../../components/email-sign-up";
import { withDb, addInterestedUser } from "../../libs/db";

class AddInterest extends Component {
  static propTypes = {
    database: PropTypes.object.isRequired
  };

  submitEmail = this.submitEmail.bind(this);

  async submitEmail({ email }) {
    console.log(this.props.database);
    const docRef = await addInterestedUser({ db: this.props.database, email });
    console.log(docRef);
  }

  render() {
    return (
      <CardContainer>
        <Typography variant="h2">Want to know when we are ready?</Typography>
        <Typography variant="p">
          Sign up with your email and you will be in line to try us out!
        </Typography>

        <EmailSignUp onButtonClick={this.submitEmail} />
      </CardContainer>
    );
  }
}

export default withDb(AddInterest);
