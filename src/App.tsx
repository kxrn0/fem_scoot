import { Route, Switch } from "wouter";
import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PseudoFooter from "./components/PseudoFooter/PseudoFooter";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

function App() {
  return (
    <SCApp>
      <Navbar />
      <Switch>
        <Route path="/fem_scoot/">
          <Home />
        </Route>
        <Route path="/fem_scoot/about">
          <About />
        </Route>
      </Switch>
      <PseudoFooter />
      <Footer />
    </SCApp>
  );
}

export default App;
