import colors from "tailwindcss/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-Thin.ttf") format("truetype");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-ExtraLight.ttf") format("truetype");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-Light.ttf") format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-ExtraBold.ttf") format("truetype");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Geist";
    src: url("/assets/fonts/Geist/Geist-Black.ttf") format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Geist", sans-serif;
  }
`;

export const Theme = {
  colors: {
    primary: colors.zinc,
    secondary: colors.blue,
    destructive: colors.red,
    success: colors.green,
    warning: colors.yellow,
    ...colors,
  },
};
