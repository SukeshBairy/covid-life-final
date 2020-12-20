import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { selectDarkmode, setDarkMode } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

import DarkModeToggle from "react-dark-mode-toggle";

import "./App.css";
import Header from "./Header";
import Loading from "./Loading";
import Heatmap from "./Heatmap";
import About from "./About";
import Contact from "./Contact";

function App() {
  const darkmode = useSelector(selectDarkmode);
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  console.log(loading);

  useEffect(() => {
    dispatch(setDarkMode(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <div>
      {loading === true ? (
        <Loading />
      ) : (
        <div
          style={
            isDarkMode
              ? {
                  background: "#363636",
                  position: "relative",
                }
              : {
                  background: "white",
                  position: "relative",
                }
          }
        >
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "40px",
              zIndex: 200,
            }}
          >
            <div id="wave" className="wave"></div>
            <DarkModeToggle
              className="toggle"
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={80}
            />
          </div>
          <BrowserRouter>
            <div className="container">
              <div className="container__left">
                <Header />
              </div>
              <div className="container__right">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/heatmap" component={Heatmap} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
