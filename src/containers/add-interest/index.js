import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import CardContainer from "../../components/card-container";
import SubTitle from "../../components/sub-title";
import EmailSignUp from "../../components/email-sign-up";
import { withDatabase } from "../../libs/database";

class AddInterest extends Component {
  static propTypes = {
    database: PropTypes.object.isRequired
  };

  submitEmail = this.submitEmail.bind(this);

  async submitEmail({ email }) {
    console.log(this.props.database);
    const docRef = await this.props.database.addInterestedUser({ email });
    console.log(docRef);
  }

  render() {
    return (
      <CardContainer>
        <Typography variant="h2" gutterBottom>
          Want to know when we are ready?
        </Typography>
        <SubTitle>
          Sign up with your email and you will be in line to try us out!
        </SubTitle>

        <EmailSignUp onButtonClick={this.submitEmail} />
      </CardContainer>
    );
  }
}

export default withDatabase(AddInterest);
