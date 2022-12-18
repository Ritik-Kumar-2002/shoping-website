import React from 'react'
import { Grid, Box, Typography, TextField } from '@mui/material';
import ShippingForm from './shippingform';
import Login from './loginform';
import {QuestionMark} from '@mui/icons-material';

const Checkout = () => {
    return (
        <>
            <Box>
                <Grid container item lg={10} md={10} sm={12} xs={12} style={{ margin: 'auto' }}>
                    <Typography variant="h4" fontWeight="bold"> SHIPPING ADDRESS </Typography>

                    <Grid container spacing={2} item lg={12} md={12}  sm={12} xs={12}style={{marginTop:"1rem"}}>
                        <Grid item lg={8} md={8} sm={8} xs={12}>
                            <ShippingForm />
                            <div style={{display:'flex'}}>
                                <Typography variant="h4" fontWeight={"bold"}> ARRIVING </Typography>
                                <QuestionMark size="large"/>
                            </div>
                           
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Login />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Checkout;