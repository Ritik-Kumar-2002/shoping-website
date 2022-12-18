import React, { useState } from 'react'
import { Player } from 'video-react';
import { CardMedia, CardContent, CardActionArea, Typography, Grid, Box, Card, Button } from '@mui/material';
import MensCollections from './components/mensCollections';
// import '~video-react/dist/video-react.css';
import IsResponsive from '../../assets/Responsive/isResponsive';


const Men = () => {

    const isMobile = IsResponsive('down', 'sm');
    const [hover, setHover] = useState("UnHover");
    const Images = [
        {
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2e64ff06e41344c68607adf7013721f6_9366/Streetball_2.0_Shoes_White_GX0785_01_standard.jpg",
            hoverImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a43d30d7aaa4bf0901badf701377259_9366/Streetball_2.0_Shoes_White_GX0785_02_standard_hover.jpg",
            name: 'SNEAKER',
        },
        {
            image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e08d2bf1a2ae4befa7b7aeca005f3828_9366/m-stanfrd-tc-pt.jpg",
            hoverImage: "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b658bcd17ab445abbaeeac850003c955_9366/GT5568_21_model.jpg",
            name: 'PAINTS',
        },
        {
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3fb03fe18bc449909b08aebb0158370a_9366/CITY_ELEVATED_T_Grey_HG0311_21_model.jpg",
            hoverImage: "https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/b3cc1af4936e43afb556aebb015827bd_9366/city-elevated-t.jpg",
            name: 'HOODIES AND SWEET SHIRTS',
        },
        {
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce32872543894c45ba61acb6014b2a3f_9366/adidas_Sportswear_Loose_Fit_Woven_Track_Top_Black_GT6358_21_model.jpg",
            hoverImage: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f5169b408314642a618acb6014c0fab_9366/adidas_Sportswear_Loose_Fit_Woven_Track_Top_Black_GT6358_23_hover_model.jpg",
            name: 'TOPS',
        }
    ];
    return (
        <>
            <Box>
                <Grid item lg={6} md={5} sm={12} xs={12}>
                    {/* <Player
                        style={{ maxWidth: '50%', naxHeight: '40vh', objectFit: 'cover' }}
                        // playsInline
                        // poster="/assets/poster.png"
                        fluid={false}
                        // width={"480"}
                        // height={"272"}
                        src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss22-ultraboost-launch-hp-masthead-large-3d-t_ow4fcp.mp4" /> */}
                    {isMobile ?
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enIN/Images/football-fw22-x-speedportal-pre-launch-glp-m-mh-large-t_tcm209-906855.jpg" width={"100%"} style={{ objectFit: 'cover' }} />
                    :
                        <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/football-fw22-x-speedportal-pre-launch-glp-m-mh-large-d_tcm209-906853.jpg" width={"100%"} style={{ objectFit: 'cover' }} />
                    }

                </Grid>

                <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                    {Images.map((data) => {
                        return (
                            <>
                                <Grid item lg={2} md={3} sm={6} xs={12}
                                    className="HoverEffect"
                                    style={{ padding: '10px ', cursor: 'pointer' }}
                                    onMouseEnter={() => {
                                        console.log("running ")
                                        setHover("Hover")
                                        console.log("Hover effect om hover is ", hover)
                                    }}
                                    onMouseLeave={() => {
                                        console.log('not running ')
                                        setHover("UnHover")
                                        console.log("hover effect while removing ", hover)
                                    }}
                                >
                                    <Card elevation={0}>
                                        <CardMedia
                                            component='img'
                                            // image={data.image}
                                            image={hover === "UnHover" ? data.image : data.hoverImage}
                                            style={{ width: '100%', objectFit: 'cover' }}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" style={{ textAlign: 'center' }}> {data.name} </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </>
                        );
                    })}
                </Grid>
                <Grid >
                    <Grid item container lg={11} md={11} sm={10} xs={10} style={{ display: 'flex', margin: 'auto' }}>
                        <Grid item lg={11} md={11} sm={10} xs={10}>
                            <Typography variant="h4" fontWeight="bold"> MEN ORIGINALS </Typography>
                        </Grid>
                        <Grid item lg={1} md={1} sm={2} xs={2}>
                            <Button style={{ background: 'white', color: 'black', textDecoration: 'underline', fontWeight: 'bold' }}> shop Now </Button>
                        </Grid>
                        <Grid item container lg={10} md={10} sm={10} xs={10}>
                            {MensCollections.map((data, key) => {
                                return (
                                    <>
                                        <Grid item lg={3} md={3} sm={4} xs={12} style={{ padding: '10px ', height: '450px', cursor: 'pointer' }} key={key}>
                                            <Card elevation={0} className="HoverEffect">
                                                <CardMedia
                                                    component='img'
                                                    image={data.url}
                                                    style={{ width: '100%', objectFit: 'cover' }}
                                                />
                                                <CardContent>
                                                    <Typography variant="body2"> {data.price} </Typography>
                                                    <Typography variant="subheading2"> {data.name} </Typography>
                                                    <Typography variant="body2"> {data.category} </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>

                {/* ----------------    MENS CLOTHING SHOES  ----------------- */}

                <Grid container item lg={8} md={8} sm={12} xs={12} margin="auto">
                    <Grid item lg={12} md={12} sm={12} xs={12} mb={2}>
                        <Typography variant="h4" style={{ fontWeight: 'bold', textAlign: 'center' }}> MEN’S CLOTHING & SHOES </Typography>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="body1">
                            As a creator, you look for ways to excel and express yourself when and where you can, from reaching for that last rep to evolving your streetwear style. Log miles or tear down the baseline in men's shoes with responsive cushioning. Rep an athletic style off the field in lifestyle apparel born of sport heritage. From athletes to streetwear enthusiasts, adidas men’s clothing and shoes exist to let you go harder, dig deeper, and get the most out of yourself, from the pitch to the street to the road less traveled.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Men; 