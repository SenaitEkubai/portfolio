import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import NavLinks from "./Components/NavLinks";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import MySkills from "./Components/MySkills";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="mainPage">
          <NavLinks />
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/Skills">
              <MySkills />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
