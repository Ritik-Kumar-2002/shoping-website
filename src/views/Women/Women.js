import { Grid } from '@mui/material';
import React from 'react'

const Women = () =>{
    return(
        <>
            <Grid container item lg={12} md={12} sm={12} xs={12} className={"Womens-page-wrapper"}>
                <Grid item lg={6} style={{margin:'auto'}}>
                    <h1 className={"Headings"}> WOMEN’S CLOTHING & SHOES </h1>
                    <p className={'Heading-description'}>In sport and in life, creators aren’t content on the sidelines. adidas women’s shoes and apparel are made for those who understand that rules can be negotiated; expectations, evolved. Reach for a new personal best in apparel made of specialized performance fabrics. Accentuate your personal style in sport-inspired sneakers for your day-to-day. Whether sport is your life or you’re an athleisure fashionista, women’s clothing and footwear from adidas exist to help you redefine what’s possible.</p>
                </Grid>
                
            </Grid>
            
        </>
    );
}
export default Women;