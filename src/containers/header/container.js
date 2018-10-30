import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import { SCROLL_MINUS_OFFSET, CONTAINER_IDS } from "../../libs/navigation";

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  onItemClick = this.onItemClick.bind(this);

  onItemClick(event) {
    const offsetY =
      document.getElementById(event.target.getAttribute("scroll-to-id"))
        .offsetTop - SCROLL_MINUS_OFFSET;
    window.scroll(0, offsetY);
  }

  render() {
    return (
      <AppBar
        position="fixed"
        color="default"
        className={this.props.classes.appBar}
      >
        <nav className={this.props.classes.navContainer}>
          <MenuItem
            className={this.props.classes.menuItem}
            onClick={this.onItemClick}
            scroll-to-id={CONTAINER_IDS.INTRO}
          >
            Overview
          </MenuItem>
          <MenuItem
            className={this.props.classes.menuItem}
            onClick={this.onItemClick}
            scroll-to-id={CONTAINER_IDS.DEMO}
          >
            Demo
          </MenuItem>
          <MenuItem
            className={this.props.classes.menuItem}
            onClick={this.onItemClick}
            scroll-to-id={CONTAINER_IDS.SIGN_UP}
          >
            Sign up
          </MenuItem>
        </nav>
      </AppBar>
    );
  }
}

export default Header;
