import { createContext, useState, } from "react";

export const ThemeContext = createContext(null)


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') && localStorage.getItem('theme') == 'true' ? true : false)

    const changeTheme = () => {
        setTheme(!theme)
        localStorage.setItem('theme', !theme)
    }



    const themeInfo = {
        theme,
        changeTheme,
    }
    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;