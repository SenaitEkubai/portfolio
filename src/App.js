import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import NavLinks from "./Components/NavLinks";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

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
            <Route path="/projects">
              <Projects />
            </Route>
            {/*  <Route path="/blogs">
              <p>blogs</p>
            </Route> */}
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
