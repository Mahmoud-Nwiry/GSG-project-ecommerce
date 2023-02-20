// hooks
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

// Style
import { GlobalStyle } from "./global/globalStyle";
import { lightTheme, darkTheme } from "./global/theme";

// Routes
import { routes } from "./routes";

// components
import Alert from "./components/Alert";

// contexts and providers
import { ThemeProvider } from "styled-components";
import AuthContext from "./AuthContext";
import { AlertContext } from "./AlertContext";
import ThemeContext from "./ThemeContext";

function App() {

  const router = useRoutes(routes);

  const [theme, setTheme] = useState('light');
  const [isAuth, setIsAuth] = useState(false);
  const [alert, setAlert] = useState({isOpen : false, type : '', message : ''});

  useEffect(() => {
    if(alert.isOpen) setTimeout(() => {
      setAlert({isOpen : false, type : '', message : ''});
    }, 5000);
  }, [alert.isOpen]);
 
  useEffect(() => {
    const lsTheme = localStorage.getItem('ecommerce-theme');
    if(lsTheme) setTheme(lsTheme);
  }, [])

  useEffect(() => {  
    const lsAuth = localStorage.getItem('ec-user');
    if(lsAuth) setIsAuth(true);
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
          <AlertContext.Provider value={{alert, setAlert}}>
            <GlobalStyle />
            <Alert message={alert.message} type={alert.type} isOpen={alert.isOpen} />
            {router}
          </AlertContext.Provider>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App;
