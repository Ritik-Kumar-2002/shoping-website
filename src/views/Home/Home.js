import React, { useState } from "react";
import { Grid, Button, Box, CardMedia, Card, CardContent, Typography, InputAdornment } from "@mui/material";
import Products from "./Components/Products";
import AdidasCollection from "./Components/Collections";
import About from "./Components/About";
import ShoeCategory from "./Components/ShoeCategory";
import { useNavigate } from 'react-router-dom';
import { setCartData } from "../../store/action/CartActions";
import { useDispatch } from "react-redux";

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
            <Grid item lg={12} sm={12} md={12} xs={12} className={"home-style-container"} >
                <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/2880x1280Launch_tcm209-904346.jpg" width={"100%"} />
                <Grid className={"home-style-wrap1"}>
                    <div>
                        <button className="home-head-button" onClick={() => setCategory("Men")}> Men </button>
                        <button className="home-head-button" onClick={() => setCategory("WOMEN")}> Women </button>
                        <button className="home-head-button" onClick={() => setCategory("KIDS")}> Kids </button>
                    </div>
                    <Grid className={"Category-Cards-wrapper"}>
                        {Products.map((data, key) => {
                            return (
                                <div key={key}>
                                    {data.type === category && (<Card className={"Category-Card-Style"} >
                                        <CardMedia
                                            component="img"
                                            style={{ width: '100%', objectFit: 'cover' }}
                                            image={data.image} />
                                        <CardContent>
                                            <p className={"Category-Card-text"}> {data.info} </p>
                                        </CardContent>
                                    </Card>)}
                                </div>
                            );
                        })}

                    </Grid>
                </Grid>

                {/* ------------------   NEW ARRIVAL ------------------ */}

                <div >
                    <h2 variant="h4" className="heading-Style"> New Arrival </h2>
                    <div container className={"Card-Style-container"} >
                        {ShoeCategory.map((data) => {
                           
                            return (
                                <>
                                    <div className="Card-Style"
                                        onClick={() => {
                                            navigate('productDetail')
                                            dispatch(setCartData(data))
                                        }}>

                                        <Card elevation={5}>
                                            <div className="Card-Image-wrap">
                                                <img src= {data.image} className="Card-Image"/>
                                            </div>
                                            <CardContent >
                                                <p variant="body2"> {data.price} </p>
                                                <p variant="subheading2"> {data.name} </p>
                                                {/* <p variant="body2"> {data.description} </p> */}
                                            </CardContent>
                                        </Card>
                                    </div >
                                </>
                            );
                        })}

                    </div>
                </div>

                {/* -------------------  WHAT'S HOTS  ------------------ */}

                <Grid>
                    <h1 style={{ fontStyle: 'italic', padding: '20px 50px' }}> WHAT'S HOTS </h1>
                    <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                        {
                            AdidasCollection.map((data) => {

                                return (
                                    <div key={Math.random()}>
                                        <Card style={{ margin: '10px', width: '300px' }}>
                                            <CardMedia
                                                component={data.type === 'image' ? "img" : "video"}
                                                style={{ width: '100%', objectFit: 'fit' }}

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
            </Grid >
        </>
    );
}
export default Home;