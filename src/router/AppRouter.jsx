import { BrowserRouter } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Footer from "../components/footer/Footer";
import { GlobalStyles } from "../styles/Global.style";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Navbar />
      <Card />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
