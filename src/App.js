import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Style
import { GlobalStyle } from "./global/globalStyle";
import { lightTheme, darkTheme } from "./global/theme";

// Routes
import { routes } from "./routes";

function App() {

  const router = useRoutes(routes)

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {router}
    </ThemeProvider>
  )
}

export default App;
