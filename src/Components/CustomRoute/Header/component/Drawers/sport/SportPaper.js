import React from "react";
import {Grid, Box } from '@mui/material'
import CommonTextCard from "../CommonCard/commonTextCard";
import { SportImage } from "./sportImages";
const SportPaper = () =>{

    const FootBall= ["Boot", "TrainingWear", "Jerseys", "All", "Accessories", "MeteoritPack", "Predator", "X", "Copa", "Tiro" ];
    const Running = ["Shoes", "Clothing", "Accessories", "Everyday", "Racing", "Ultraboost", "adidas Runner", 'shoe finder']
    const Outdoor = ["Shoes", "Clothing", "Terres"];
    const GymAndTraining = ["Shoes", "Clothing", "Accessories"];
    return(
        <>
            <Box >
                <Grid container item lg={12} sm={12} md={12} xs={12} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"FootBall"} bodyImage={SportImage.FootballImage} datalist={FootBall} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"Running"} bodyImage={SportImage.RunningImage} datalist={Running} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"Outdoor"} bodyImage={SportImage.Outdoor} datalist={Outdoor} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"GymAndTraining"} bodyImage={SportImage.GymAndTraining} datalist={GymAndTraining} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default SportPaper;