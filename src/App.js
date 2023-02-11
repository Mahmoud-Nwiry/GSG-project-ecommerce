import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./ThemeContext";

// Style
import { GlobalStyle } from "./global/globalStyle";
import { lightTheme, darkTheme } from "./global/theme";

// Routes
import { routes } from "./routes";
import AuthContext from "./AuthContext";

function App() {

  const router = useRoutes(routes);

  const [theme, setTheme] = useState('light');
  const [isAuth, setIsAuth] = useState(false);
 
  useEffect(() => {
    const lsTheme = localStorage.getItem('ecommerce-theme');
    if(lsTheme) setTheme(lsTheme);

    const lsAuth = localStorage.getItem('ecommerce-auth');
    if(lsAuth) setIsAuth(true);
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
          <GlobalStyle />
          {router}
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App;
