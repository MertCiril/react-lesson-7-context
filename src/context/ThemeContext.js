import {  createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //local storage boş ise light al
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(()=>{
        //local storage a theme bilgisini kaydet
        localStorage.setItem("theme",theme);
    },[theme])

    const values ={
        theme,
        setTheme,
    };
  return <ThemeContext.Provider value={values}> {children}</ThemeContext.Provider>;
};
export default ThemeContext;
