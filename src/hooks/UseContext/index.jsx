import React, { useState } from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";

export const ThemeContext = React.createContext();

const UseContext = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionalContextComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default UseContext;
