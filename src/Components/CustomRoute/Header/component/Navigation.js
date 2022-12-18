import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Box, Grid, InputAdornment, TextField, Input, Button, List, ListItem } from "@mui/material";
import HeaderNavigate from "../../RouteItem/HeaderNavigate";
import Authenticate from "./HeaderIcons";
import IsResponsive from "../../../../assets/Responsive/isResponsive";
import MainDrawer from "./Drawers/MainDrawer";
import { useDispatch } from "react-redux";
import { ShowPaper, ShowPaperAction } from "../../../../store/action/ShowPaper";

const Navigate = () => {
    const isMobile = IsResponsive('down', 'md')
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    return (
        <>
            <Box>
                <Grid item lg={12} md={12} sm={12} xs={12} >
                    {isMobile ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/2560px-Adidas_isologo.svg.png" style={{ width: '70px', margin: "auto" }} /> :
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            {HeaderNavigate.children.map((item) => {
                                return (
                                    <div key={Math.random()} style={{ padding: '0.8rem', fontWeight: 'bold' }}>
                                        <NavLink
                                            to={item.url}
                                            key={item.id}
                                            style={{color:'black'}}
                                        >
                                            <Grid item > {item.title} </Grid>
                                        </NavLink>
                                    </div>
                                );
                            })}
                            <Box
                                style={{
                                    padding: '0.8rem',
                                    fontSize: '1rem', display: 'flex',
                                    justifyContent: 'space-around',
                                    width: '40%', fontWeight: 'bold',
                                    cursor: 'pointer', color: 'grey'
                                }}
                            >
                                {/* <Grid 
                                    onClick={() => {
                                    setOpen(!open)
                                    disptach(ShowPaperAction(open))
                                }} > SPORTS </Grid>
                                <Grid 
                                    onClick={() => {
                                    setOpen(!open)
                                    disptach(ShowPaperAction(open))
                                }}> BRANDS </Grid>
                                <Grid 
                                    onClick={() => {
                                    setOpen(!open)
                                    disptach(ShowPaperAction(open))
                                }}> COLLECTIONS </Grid> */}

                                <Grid
                                    onMouseEnter={() => {
                                        dispatch(ShowPaper("SPORTS"))
                                        dispatch(ShowPaperAction(true))
                                    }}
                                onClick = {()=> {
                                    dispatch(ShowPaperAction(false))
                                }} 
                                > SPORTS </Grid>

                                <Grid   onMouseEnter={() => {
                                        dispatch(ShowPaper("BRANDS"))
                                        dispatch(ShowPaperAction(true))
                                    }}
                                    onClick = {()=> {
                                        dispatch(ShowPaperAction(false))
                                    }}> BRANDS </Grid>

                                <Grid   onMouseEnter={() => {
                                        // setOpen(true)
                                        dispatch(ShowPaper("COLLECTIONS"))
                                        dispatch(ShowPaperAction(true))
                                    }}
                                    onClick = {()=> {
                                        dispatch(ShowPaperAction(false))
                                    }}> COLLECTIONS </Grid>
                            </Box>
                            <NavLink
                                to={"/outlet"}
                                style={{ padding: '0.8rem', fontWeight: 'bold', color: 'black' }}
                            >
                                <Grid item > OUT-LET </Grid>
                            </NavLink>
                            {/* <MainDrawer open={open} CloseDrawer={ToggleDrawer} /> */}
                        </Box>
                    }
                </Grid>
            </Box>
        </>
    );
}
export default Navigate;