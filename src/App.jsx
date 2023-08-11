import Tutorial from "./components/Tutorial";
import GlobalStyle from "./components/styles/Global.Styles";
import { ThemeProvider } from "styled-components";
export default function App() {
  return (
    <ThemeProvider theme={{bColor : "#f0f2f5", color :"#1e1d1d", CardBack: "#e0ebfb"}}>
      <Tutorial />
      <GlobalStyle />
    </ThemeProvider>
  );
}
