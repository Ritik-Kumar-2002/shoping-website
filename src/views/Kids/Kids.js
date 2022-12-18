import React from 'react'
import { Grid, Box, Typography } from '@mui/material';

const Kids = () =>{
    return(
        <>
            <Box>
                <Grid container item lg={12} sm={12} md={12} xs={12}> 
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/adidas-lego-originals-ss22-flex-launch-clp-masthead-d_tcm209-823156.jpg" alt="loading..." width="100%" />
                    <Grid item lg={7} md={10} sm={10} xs={12} style={{textAlign:'center', margin:'auto'}}>
                        <Typography variant="h4" fontWeight="bold" p={2}> ADIDAS KIDS’ CLOTHING & KIDS’ SHOES</Typography>
                        <Typography variant="subtitle1"> Whether they’re big kids playing in a weekend tournament or little ones mastering the monkey bars, being a young creator is all about having fun while playing hard. Find girls’ and boys’ shoes to support both their game and their style. Boys’ and girls’ clothing and shoes from adidas are built to give kids of every age and stage comfort and confidence for everything from first steps to personal bests.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Kids;