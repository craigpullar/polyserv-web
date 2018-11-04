import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import { SCROLL_MINUS_OFFSET, NAVIGATION_CONFIG } from "../../libs/navigation";

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  onItemClick = this.onItemClick.bind(this);
  renderMenuItem = this.renderMenuItem.bind(this);

  onItemClick(event) {
    const containerId = event.target.getAttribute("scroll-to-id");
    const offsetY =
      document.getElementById(containerId).offsetTop - SCROLL_MINUS_OFFSET;
    window.scroll(0, offsetY);
  }

  renderMenuItem({ text, containerId, isCTA }) {
    const classes = [
      this.props.classes.menuItem,
      isCTA && this.props.classes.signUp
    ];

    return (
      <MenuItem
        className={classes.join(" ")}
        onClick={this.onItemClick}
        scroll-to-id={containerId}
        key={containerId}
      >
        {text}
      </MenuItem>
    );
  }

  render() {
    return (
      <AppBar
        position="fixed"
        color="default"
        className={this.props.classes.appBar}
      >
        <nav className={this.props.classes.navContainer}>
          {NAVIGATION_CONFIG.map(this.renderMenuItem)}
        </nav>
      </AppBar>
    );
  }
}

export default Header;
