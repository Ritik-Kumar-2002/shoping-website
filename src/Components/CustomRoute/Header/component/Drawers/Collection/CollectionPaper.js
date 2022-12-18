import React from "react";
import {Grid, Box } from '@mui/material'
import CommonTextCard from "../CommonCard/commonTextCard";
import { CollectionsImages } from "./collectionImags";
const CollectionPaper = () =>{

    const Whatnew= ["Impossible is Nothing", "New Arrival", "Stories", "Adi club", "Sport bra guide"];
    const Collaborations = ["Pharrell", "karlie klos", "spiezal ", "Human Made", "Ninja", "Steela Mc", "Yeezy", 'Y3']
    const Sports = ["Adizer", "4g", "ultraboost", "Predator", "Copa", "X", "Supernova"];
    const Original = ["Superstar", "FORUM", "ZX","NMD", "Stan Smith", "Continental 80"];
    return(
        <>
            <Box >
                <Grid container item lg={12} sm={12} md={12} xs={12} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"What's New ?"} bodyImage={CollectionsImages.Whatnew} datalist={Whatnew} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"Collaborations"} bodyImage={CollectionsImages.Collaborations} datalist={Collaborations} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"Sports"} bodyImage={CollectionsImages.Sports} datalist={Sports} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonTextCard heading={"Original"} bodyImage={CollectionsImages.Original} datalist={Original} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default CollectionPaper;