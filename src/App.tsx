import { Route, Switch, useLocation } from "wouter";
import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PseudoFooter from "./components/PseudoFooter/PseudoFooter";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import { useEffect } from "react";
import Locations from "./pages/Locations/Locations";

function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
        <Route path="/fem_scoot/careers">
          <Careers />
        </Route>
        <Route path="/fem_scoot/location">
          <Locations/>
        </Route>
      </Switch>
      <PseudoFooter />
      <Footer />
    </SCApp>
  );
}

export default App;
