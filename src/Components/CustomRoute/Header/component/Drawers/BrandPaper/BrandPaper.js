import { Box, Grid } from "@mui/material";
import React from "react";
import CommonCard from "../CommonCard/commonCard";
import { BrandImages } from "./BrandImages";
const BrandPaper = () => {

    const BrandsOriginal = ['Shoes', 'Clothing', 'Accessories', 'FORUM', 'superstar', 'Stan Smith', 'adicolor'];
    const AdidasSportWear = ['MenClothing', 'WomenClothing', 'Accessories', 'ZNE'];
    const Y3 = ['shoes', 'clothing', 'accessories']
    const AdidasRecycleList = ['Made with Recycle Material', 'Made with Vegan Material', 'PrimeBlue', 'PrimeGreen', 'Parle', 'Run For the Ocean'];
    return (
        <>
            <Box >
                <Grid container item lg={12} sm={12} md={12} xs={12} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonCard HeadImage={BrandImages.AdidasOriginal} bodyImage={BrandImages.Original} BrandsOriginal={BrandsOriginal} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonCard HeadImage={BrandImages.AdidasSportswear} bodyImage={BrandImages.sportwear} BrandsOriginal={AdidasSportWear} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonCard HeadImage={BrandImages.Y3} bodyImage={BrandImages.Y3Body} BrandsOriginal={Y3} />
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12} style={{margin: '1rem 2rem'}}>
                        < CommonCard HeadImage={BrandImages.HelpAndElasticWaste} bodyImage={BrandImages.AdidasRecycle} BrandsOriginal={AdidasRecycleList} />
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}
export default BrandPaper; 