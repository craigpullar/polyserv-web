import { BREAKPOINT_SELECTORS } from "../../libs/responsive";

const styles = {
  containerTitle: {
    fontSize: "3rem",
    marginBottom: "2rem",
    [BREAKPOINT_SELECTORS.TABLET]: {
      fontSize: "3.5rem"
    }
  }
};

export default styles;
