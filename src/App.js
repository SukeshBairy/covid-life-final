import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BedList from "./Components/Hospital Reservation/BedList/BedList";
import Home from "./Home";
import { selectDarkmode, setDarkMode } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const darkmode = useSelector(selectDarkmode);
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    dispatch(setDarkMode(isDarkMode));
  }, [isDarkMode]);

  return (
    <div
      style={
        isDarkMode
          ? {
              background: "#0e0e0e",
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
        }}
      >
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
        />
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/bedlist" component={BedList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
