import React from "react";
import { Grid, Box } from "@mui/material";
import headerStyle from "./headerStyle";
import Navigate from "./component/Navigation";
import {Menu} from '@mui/icons-material';
import IsResponsive from "../../../assets/Responsive/isResponsive";
import HeaderIcons from "./component/HeaderIcons";

const useStyle = headerStyle;
const Header = () => {
    
    const isMobile = IsResponsive('down','md');
    return (
        <Box>
            <Grid container style={{dispay: 'flex', alignItem: 'center', justifyContent:'baseline' }} p={2} spacing={2}>
                <Grid item lg={1} md={1} sm={3} xs={3}>
                    {!isMobile ?  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/2560px-Adidas_isologo.svg.png" style={{width: '100px'}}/> : <Menu />}
                </Grid>
                <Grid item lg={7} md={7} sm={5} xs={5}>
                    <Navigate fontSize="large" />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    <HeaderIcons />
                </Grid>
            </Grid>
        </Box>
    );
}
export default Header;