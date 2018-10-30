import Red from "@material-ui/core/colors/red";
import Teal from "@material-ui/core/colors/teal";

const styles = {
  appBar: {
    flexDirection: "row",
    height: 60,
    backgroundColor: Teal["500"]
  },
  navContainer: {
    maxWidth: 1024,
    display: "flex",
    flexDirection: "row",
    margin: "0 auto"
  },
  menuItem: {
    height: 60,
    boxSizing: "border-box",
    paddingLeft: 25,
    paddingRight: 25,
    color: "white"
  },
  signUp: {
    backgroundColor: Red["500"],
    "&:hover": {
      backgroundColor: Red["500"]
    }
  }
};

export default styles;
