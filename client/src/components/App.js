import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AppRouter from "../routers/AppRouter";
import Wrapper from "./templates/Wrapper";

const theme = {
  colors: {
    primary500: "#352C25",
    primary900: "#1F1812",
    white: "#FFFFFF",
    green: "#32FF11",
    blue: "#0070DD",
    purple: "#A335EE",
    yellow: "#FFD100",
    gold: "#B4910F",
    silver: "#B4B5BA",
    bronze: "#A35B33"
  },
  typography: {
    small: "0.8rem",
    paragraph: "1rem",
    h6: "1.25rem",
    h5: "1.563rem",
    h4: "1.953rem",
    h3: "2.441rem",
    h2: "3.052rem",
    h1: "3.815rem"
  },
  spacing: {
    small: "1rem",
    medium: "2rem",
    large: "3rem"
  }
};

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body {
    font-size: 1rem;
    font-family: Arial;
    background: ${theme.colors.primary500};
    color: ${theme.colors.white};
  };
  p {
    font-size: ${theme.typography.paragraph}
  }
  h1 {
    font-size: ${theme.typography.h1}
  }
  h2 {
    font-size: ${theme.typography.h2}
  }
  h3 {
    font-size: ${theme.typography.h3}
  }
  h4 {
    font-size: ${theme.typography.h4}
  }
  h5 {
    font-size: ${theme.typography.h5}
  }
  h6 {
    font-size: ${theme.typography.h6}
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Wrapper>
          <AppRouter></AppRouter>
        </Wrapper>
      </>
    </ThemeProvider>
  );
};

export default App;
