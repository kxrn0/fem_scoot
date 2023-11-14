import { Route, Switch } from "wouter";
import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <SCApp>
      <Navbar />
      <Switch>
        <Route path="/fem_scoot/">
          <Home />
        </Route>
      </Switch>
    </SCApp>
  );
}

export default App;
