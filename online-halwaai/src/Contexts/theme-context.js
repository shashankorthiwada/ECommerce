import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: "white",
  color: "black",
};

const darkTheme = {
  backgroundColor: "black",
  color: "white",
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = (selectedTheme) => {
    if (selectedTheme === "dark") {
      return setTheme(darkTheme);
    }
    return setTheme(lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
