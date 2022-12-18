import { Typography, Grid, Box } from '@mui/material';
import React from 'react'

const WishList = () =>{
    return(
        <>
            <Box>
                <Grid container item lg={8} md={8} sm={8} xs={12} style={{margin:'50px auto'}} spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}> 
                        <Typography variant='h4' fontWeight="bold"> MY WISHLIST </Typography>
                    </Grid>                    
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="body1"> 0 ITEMS </Typography> 
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>    
                        <Typography variant="body1"> You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist. </Typography> 
                    </Grid>
                   
                </Grid>
            </Box>
        </>
    );
}
export default WishList;