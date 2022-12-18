import React from "react";
import { Grid, Button, Box, CardMedia, Card, CardContent, Typography, InputAdornment } from "@mui/material";
import Product from "./Components/Products";
import AdidasCollection from "./Components/Collections";
import { useState } from "react";
import About from "./Components/About";
import ShoeCategory from "./Components/ShoeCategory";
import { Slide } from 'react-slideshow-image';
import { useNavigate } from 'react-router-dom';
import { setCartData } from "../../store/action/CartActions";
import { useDispatch } from "react-redux";
import { Favorite } from '@mui/icons-material';
import Carousel from "react-multi-carousel";

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [category, setCategory] = useState("Men");
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1000, min: 900 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 900, min: 600 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 600, min: 400 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 1
          }
    };
    return (
        <>
            <Grid item lg={12} sm={12} md={12} xs={12} >
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/2880x1280Launch_tcm209-904346.jpg" width={"100%"} />
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/2880x1280_tcm209-905973.jpg" width={"100%"} />

                <Grid style={{ marginTop: "50px", padding: '10px 20px' }}>
                    <Box>
                        <Button style={{ color: 'gray' }} onClick={() => setCategory("Men")}> Men </Button>
                        <Button style={{ color: 'gray' }} onClick={() => setCategory("WOMEN")}> Women </Button>
                        <Button style={{ color: 'gray' }} onClick={() => setCategory("KIDS")}> Kids </Button>
                    </Box>
                    <Grid container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {/* {console.log("product is ", Product)} */}
                        {/* <Carousel responsive={responsive} container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}> */}
                        {Product.map((data, key) => {
                            // console.log("data is ", data);
                            return (
                                <div key={Math.random()}>
                                    {data.type === category && (<Card style={{ margin: '10px', width: '250px', cursor: 'pointer' }}>
                                        <CardMedia
                                            component="img"
                                            style={{ width: '100%', objectFit: 'cover' }}
                                            image={data.image} />
                                        <CardContent>
                                            <Typography style={{ fontSize: '1rem', fontWeight: 'bold' }}> {data.info} </Typography>
                                        </CardContent>
                                    </Card>)}
                                </div>
                            );
                        })}
                        {/* </Carousel > */}
                    </Grid>
                </Grid>

                {/* ------------------   NEW ARRIVAL ------------------ */}

                <Grid>
                    <Typography variant="h4" style={{ fontWeight: "bold", fontStyle: 'italic', padding: '20px 50px' }} > New Arrival </Typography>
                    <Grid container item lg={11} md={12} sm={12} xs={12} style={{ display: 'flex', padding: '20px 30px', margin: 'auto' }} >
                        {/* {console.log("shoe category is ", ShoeCategory)} */}
                        {/* <Slide> */}
                        {ShoeCategory.map((data) => {
                            // console.log("data is ", data);
                            return (
                                <>
                                    <Grid item lg={3} md={3} sm={4} xs={12}
                                        className="HoverEffect"
                                        style={{ padding: '10px ', height: '450px', cursor: 'pointer' }}
                                        onClick={() => {
                                            navigate('productDetail')
                                            dispatch(setCartData(data))
                                        }}>
                                      
                                        <Card elevation={0}>
                                        <div style={{position: 'absolute', paddingLeft: '12rem', paddingTop: '1rem' }} >
                                            <Favorite />
                                        </div>
                                            <CardMedia
                                                component='img'
                                                image={data.image}
                                                style={{ width: '100%', objectFit: 'cover' }}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Favorite />
                                                        </InputAdornment>
                                                    )
                                                }}
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
                        {/* </Slide> */}

                    </Grid>
                </Grid>

                {/* -------------------  WHAT'S HOTS  ------------------ */}

                <Grid>
                    <h1 style={{ fontStyle: 'italic', padding: '20px 50px' }}> WHAT'S HOTS </h1>
                    <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {/* {console.log("Adidas collections is ", AdidasCollection)} */}
                        {
                            AdidasCollection.map((data) => {
                                // console.log("data is ", data);
                                return (
                                    <div key={Math.random()}>
                                        <Card style={{ margin: '10px', width: '300px' }}>
                                            <CardMedia
                                                component={data.type === 'image' ? "img" : "video"}
                                                style={{ width: '100%', objectFit: 'fit' }}
                                                // video={data.url} 
                                                image={data.url}
                                            />
                                            <CardContent>
                                                <Typography style={{ fontSize: '1rem' }}>
                                                    <strong> {data.heading} </strong>
                                                    <p> {data.info} </p>

                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })
                        }
                    </Box>
                </Grid>

                {/* ------------- RENDERING OF THE ABOUT US PAGE IN THE HOME PAGE -------------- */}

                <Grid>
                    <About />
                </Grid>
            </Grid>
        </>
    );
}
export default Home;