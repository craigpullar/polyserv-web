import Teal from "@material-ui/core/colors/teal";
import { BREAKPOINT_SELECTORS } from "../../libs/responsive";

const styles = {
  mainTitle: {
    marginBottom: "4rem",
    color: Teal[500],
    fontWeight: 500,
    fontSize: "4rem",
    [BREAKPOINT_SELECTORS.TABLET]: {
      fontSize: "7rem"
    }
  }
};

export default styles;
