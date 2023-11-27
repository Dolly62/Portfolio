import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header/Navbar";
import Theme from "./Components/Theme/Theme";
import { Redirect } from "react-router-dom";
import Loader from "./Components/UI/Loader";

const Home = React.lazy(() => import("./Components/Home/Home"));
const About = React.lazy(() => import("./Components/About/About"));
const Portfolio = React.lazy(() => import("./Components/Portfolio/Portfolio"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Theme />
      <Switch>
        <Route path="/home">
          <React.Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  width: "100vw",
                }}
              >
                <Loader />
              </div>
            }
          >
            <Home />
          </React.Suspense>
        </Route>
        <Route path="/about">
          <React.Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  width: "100vw",
                }}
              >
                <Loader />
              </div>
            }
          >
            <About />
          </React.Suspense>
        </Route>
        <Route path="/portfolio">
          <React.Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  width: "100vw",
                }}
              >
                <Loader />
              </div>
            }
          >
            <Portfolio />
          </React.Suspense>
        </Route>
        <Route path="/contact">
          <React.Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  width: "100vw",
                }}
              >
                <Loader />
              </div>
            }
          >
            <Contact />
          </React.Suspense>
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
