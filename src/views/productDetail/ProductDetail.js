import React, { useState } from "react";
import { Box, Grid, Typography, Button, InputAdornment, TextField } from '@mui/material'
import { useSelector } from "react-redux";
import { kidShoeSize, womenShoeSize, menShoeSize } from "./components/showSizes";
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { FavoriteBorder } from '@mui/icons-material';
import { ReactImageZoomer } from 'react-image-zoomer-ch'
import { useDispatch } from "react-redux";
import AddToCartBox from "./AddToCart";


const ProductDetail = () => {

    const dispatch = useDispatch();
    const [OpenDialogBox, setOpenDialogBox] = useState(false);
    const cartData = useSelector((state) => state.CartReducer)
    const [shoeSize, setShoeSize] = useState(0);
    // console.log("cart datam  is ", cartData);
    const TotalData = {...cartData, shoeSize: shoeSize, Quantity: 1 }
    console.log("Total Data is ", TotalData);
    var url = cartData.zoomImage;
    return (
        <>
            <div>
                {cartData === null && (<Box>
                    <Grid
                        container item
                        lg={11} md={10} sm={10} xs={12}
                        style={{ margin: 'auto' }}>
                        <Typography variant="h5"> You have not show now </Typography>
                    </Grid>
                </Box>)}
                {cartData !== null && (<Grid
                    container item
                    lg={11} md={10} sm={10} xs={12}
                    style={{ margin: 'auto' }}
                >

                    {/* <InnerImageZoom src={cartData.image} hideCloseButton='0' hideHint='0' style={{width:'100%'}} /> */}
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <div >
                            <InnerImageZoom src={url} hideCloseButton='0' hideHint='0' />
                            {/* <ReactImageZoomer 
                                imgUrl={url}
                                zoomSize='300px' 
                                // imgUrl='https://i.ibb.co/h1C0vFX/ngoc-trinh.jpg'
                                positionRelated='original'/> */}
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12} >
                        <Grid container spacing={2} width="70%" margin="auto">
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <Typography variant="subtitle1" fontSize='1.2rem' > {cartData.type.toUpperCase()} Originals </Typography>
                                <Typography variant="h4" style={{ fontWeight: 'bold', fontStyle: 'italic' }}> {cartData.name} </Typography>
                                <Typography variant="body2" fontWeight={"bold"}>  MRP:  {cartData.price} </Typography>
                                <Typography variant="subtitle1" style={{ fontWeight: "bold", fontSize: '1.2rem' }}>  sizes </Typography>
                            </Grid>
                            <Grid item >

                                {cartData.productType === 'shoe' && cartData.type === 'women' && <Grid container mt={2}>
                                    {womenShoeSize.map((womenSize, key) => {
                                        // console.log('women is ', womenSize)
                                        return (
                                            <Grid item border="1px solid black" key={womenSize.size} style={{ cursor: 'pointer' }} onClick={() => setShoeSize(womenSize.size)}>
                                                <Typography variant="body1" style={{ padding: '1.5rem 1.5rem' }}> {womenSize.size} </Typography>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                                }
                                {cartData.productType === 'shoe' && cartData.type === 'men' && <Grid container mt={2}>
                                    {menShoeSize.map((menSize, key) => {
                                        return (
                                            <>
                                                <Grid item border="1px solid black" key={menSize.size} style={{ cursor: 'pointer' }} onClick={() => setShoeSize(menSize.size) }>
                                                    <Typography variant="body1" style={{ padding: '1.5rem 1.5rem' }}> {menSize.size} </Typography>
                                                </Grid>
                                            </>
                                        );
                                    })}
                                </Grid>}
                                {cartData.productType === 'shoe' && cartData.type === 'kid' && <Grid container mt={2}>
                                    {kidShoeSize.map((kidSize) => {
                                        return (
                                            <Grid item border="1px solid black" key={kidSize.size} style={{ cursor: 'pointer' }} onClick={() => setShoeSize(kidSize.size)}>
                                                <Typography variant="body1" style={{ padding: '1.5rem 1.5rem' }}> {kidSize.size} </Typography>
                                            </Grid>
                                        );
                                    })}
                                </Grid>}
                            </Grid>
                            <Grid container item lg={12} sm={12} md={12} xs={12} spacing={2}>
                                <Grid item lg={10} sm={10} md={10} xs={9} p={2}>
                                    <Button variant='outlined' fullWidth
                                        style={{ background: "black", color: 'white', fontWeight: 'bold', width: "100%" }}
                                        onClick={()=> {
                                            // dispatch(OpenAddToCartDialog(true))
                                            setOpenDialogBox(true)
                                        }
                                        }>  Add to Cart &nbsp;  → </Button>
                                         <AddToCartBox setOpenDialogBox={setOpenDialogBox}  OpenDialogBox={OpenDialogBox} TotalData={TotalData}/> 
                                </Grid>
                                <Grid item lg={2} md={2} sm={2} xs={3} p={2}>
                                    <div>
                                        <FavoriteBorder />
                                    </div>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>)}
            </div>
        </>
    );
}
export default ProductDetail;