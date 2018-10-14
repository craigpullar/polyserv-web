import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Intro extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <Card className={this.props.classes.container}>
        <Typography variant="h1" className={this.props.classes.title}>
          Polyserv Api
        </Typography>

        <Typography variant="h5" className={this.props.classes.subTitle}>
          We are an api exposing polygon map data. Our aim is to make it
           as easy and quick as possible for companies and developers
           to use polygon data in their projects.
        </Typography>

        <Typography variant="h5" className={this.props.classes.subTitle}>
          We are currently not available to the public but feel free to checkout
           our demo below or sign up to our mailing list for news.
        </Typography>
      </Card>
    );
  }
}

export default Intro;
