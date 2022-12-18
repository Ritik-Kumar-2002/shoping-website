import { TextField, Grid, Button, InputAdornment, Typography } from "@mui/material";
import React,{ useState } from "react";
import { AccountCircle, Favorite, ShoppingBag, Search } from '@mui/icons-material';
import IsResponsive from "../../../../assets/Responsive/isResponsive";
import { useNavigate } from 'react-router-dom'
import Authenticate from "../../../Authentication/Authenticate";

const HeaderIcons = () => {

    const navigate = useNavigate();
    const isMobile = IsResponsive('down', 'md');

    const [openSignIn, setOpenSignIn] = useState(false);
    const LoginUser = () => {
        setOpenSignIn(true);
        console.log("login open is ", openSignIn)
    }
    return (
        <>
            <Grid container item lg={12} md={12} sm={12} xs={12}>
                {!isMobile && (<Grid item container lg={12} md={12} sm={12} xs={12} spacing={2}>
                    <Grid item >
                        <Typography
                            variant="body2"
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/help')}>
                            help
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography
                            variant="body2"
                            style={{ cursor: 'pointer' }}
                            onClickm={() => navigate('/return')}>
                            return
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body2" style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/ordertrack')}>
                            order track
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={() => LoginUser()}> sign up </Typography>
                        <Authenticate openSignIn={openSignIn} setOpenSignIn={setOpenSignIn}/>
                    </Grid>
                </Grid>)}

                {/* ----------------------------------------------- */}

                <Grid container item lg={12} md={12} sm={12} xs={12}>
                    {!isMobile && (
                        <Grid item lg={7} md={7} sm={7} xs={7} >
                            <TextField variant="outlined"
                                size={"small"}
                                style={{ width: '80%' }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                }} />
                        </Grid>
                    )}

                    <Grid item lg={5} md={5} sm={3} xs={3} style={{ display: 'flex' }}>
                        <Grid item p={1}>  <AccountCircle /> </Grid>
                        <Grid item p={1}>  {isMobile ? <Search /> : <Favorite onClick={() => navigate('/wishlist')} />}  </Grid>
                        <Grid item p={1}>  <ShoppingBag /> </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
export default HeaderIcons;