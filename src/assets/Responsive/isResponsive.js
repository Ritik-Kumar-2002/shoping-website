import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/system"

// -------------- THIS IS HELP TO MAKE RESPONSIVE IN DIFFERENT SCREEN SIZE ----------------


const IsResponsive = (query, screenSize) =>{

    const theme = createTheme();   // This is  the creation of the theme 

    const MediaUp =  useMediaQuery(theme.breakpoints.up(screenSize));    
     
    const MediaDown =  useMediaQuery(theme.breakpoints.down(screenSize));

    if(query === 'up'){
        return MediaUp;
    }
    if(query === 'down'){
        return MediaDown;
    }
    return false;
}
export default IsResponsive;