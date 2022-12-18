import { Typography, Grid, TextField, Button } from '@mui/material';
import React from 'react'
import { Visibility, VisibilityOff,ArrowRightAlt } from '@mui/icons-material';

const Login = () => {
    return (
        <>
            <Grid container p={2} item lg={12} md={12} sm={12} xs={12} style={{ border: '2px solid lightgrey' }}>
                <Typography variant="h4" fontWeight={"bold"}> LOG IN </Typography>
                <Grid container rowSpacing={3} lg={12} md={12} sm={12} xs={12} >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            placeholder='Email' />
                        <div style={{ position: 'relative', float: "right" }}>
                            <Visibility />
                        </div>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            fullWidth
                            placeholder='Password' />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Button 
                            variant='outlined' 
                            fullWidth
                            style={{ background: "black", color: 'white', fontWeight: 'bold', height:"50px", marginTop: "1rem" }}
                        >  LOG IN &nbsp;  &nbsp;  &nbsp;→ </Button>

                        <Typography p={1}>OR</Typography> 
                        <Button 
                            variant='outlined'
                            fullWidth
                            style={{ color:'black', fontWeight: 'bold', height:"50px" }}> FACEBOOK </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
export default Login; 