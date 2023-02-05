import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./ThemeContext";

// Style
import { GlobalStyle } from "./global/globalStyle";
import { lightTheme, darkTheme } from "./global/theme";

// Routes
import { routes } from "./routes";

function App() {

  const router = useRoutes(routes)

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <GlobalStyle />
        {router}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App;
