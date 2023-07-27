import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import {lightTheme, darktheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.style";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const {myTheme} = useThemeContext()
  const themes = myTheme === "light" ? lightTheme : darktheme
  return (
    <>
  <ThemeProvider theme = {themes}>
    <GlobalStyles/>
    <AppRouter/>
  </ ThemeProvider>
    </>

    );
}

export default App;
