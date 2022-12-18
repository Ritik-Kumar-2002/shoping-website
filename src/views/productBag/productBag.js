import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';


const ProductBag = () => {

    const navigate= useNavigate();
    return (
        <>
            <Box fullWidth >
                <Grid container item lg={12} md={12} sm={12} xs={12} style={{ border: '1px solid red' }}>
                    <Typography variant="h3" fontWeight="bold"> Your Bag </Typography>
                </Grid>
                <Grid container item lg={12} md={12} sm={12} xs={12} style={{ border: '1px solid red' }}>
                    <Grid item lg={8} md={8} sm={10} xs={12} >
                        <Typography variant="body1"> Items in Your Bag is not reserved — check out now to make them yours. </Typography>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12} >
                        <Button variant='outlined' fullWidth
                            style={{ background: "black", color: 'white', fontWeight: 'bold', width: "60%", marginTop: "1rem" }}
                            onClick={() => {
                                navigate("/checkout")
                            }}
                        >  CHECK OUT &nbsp;  &nbsp;  &nbsp;→ </Button>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}
export default ProductBag;