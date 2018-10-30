export const SCROLL_MINUS_OFFSET = 80;

export const CONTAINER_IDS = {
  INTRO: "intro",
  DEMO: "demo",
  SIGN_UP: "signUp"
};

export const NAVIGATION_CONFIG = [
  {
    text: "Overview",
    containerId: CONTAINER_IDS.INTRO
  },
  {
    text: "Demo",
    containerId: CONTAINER_IDS.DEMO
  },
  {
    text: "Sign Up",
    containerId: CONTAINER_IDS.SIGN_UP,
    isCTA: true
  }
];
