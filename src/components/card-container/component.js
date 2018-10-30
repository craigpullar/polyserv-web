import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

class CardContainer extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    id: PropTypes.string
  };

  static defaultProps = {
    id: ""
  };

  render() {
    return (
      <Card className={this.props.classes.container} id={this.props.id}>
        {this.props.children}
      </Card>
    );
  }
}

export default CardContainer;
