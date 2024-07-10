import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

function Themebutton(props){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <>
          <button onClick={toggleTheme}>{theme}</button>
        </>
    )
}

export default Themebutton;