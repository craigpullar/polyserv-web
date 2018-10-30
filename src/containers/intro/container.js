import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import CardContainer from "../../components/card-container";
import MainTitle from "../../components/main-title";
import SubTitle from "../../components/sub-title";
import { CONTAINER_IDS } from "../../libs/navigation";

class Intro extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <CardContainer id={CONTAINER_IDS.INTRO}>
        <MainTitle>PolyServ Api</MainTitle>

        <SubTitle>
          We are an api exposing polygon map data. Our aim is to make it as easy
          and quick as possible for companies and developers to use polygon data
          in their projects.
        </SubTitle>

        <SubTitle>
          We are currently not available to the public but feel free to checkout
          our demo below or sign up to our mailing list for news.
        </SubTitle>
      </CardContainer>
    );
  }
}

export default Intro;
