import { Typography, Box, Grid, Dialog, DialogTitle, Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
const AddToCartBox = (props) => {

    const open = useSelector((state) => state.AddToCartDialogReducer);
    const { OpenDialogBox, TotalData, setOpenDialogBox } = props;
    const navigate= useNavigate();
    // console.log("cart data ", TotalData+" and set dialogue box function ", setOpenDialogBox);
    // console.log("cart data is ", TotalData);
    return (
        <>
            <Dialog open={OpenDialogBox} onClose={() => setOpenDialogBox(false)}>
                <Box p={ 4}>
                    <Typography variant='h4' fontWeight="bold"> SUCCESSFULLY ADDED TO BAG! </Typography>
                    <Grid container item lg={12} sm={12} xs={12} md={12} spacing={2}>
                        <Grid item container lg={6} sm={6} xs={6} md={6} spacing={2}>
                            <Grid item lg={6} sm={6} xs={6} md={6}>
                                <img src={TotalData.image} width='100%' />
                            </Grid>
                            <Grid item lg={6} sm={6} xs={6} md={6}>
                                <Typography variant="body1" fontWeight="bold"> {TotalData.name} </Typography>
                                <Typography variant="body2" > {TotalData.price} </Typography>
                                <Typography variant="body2" fontWeight="bold"> Color </Typography>
                                <Typography variant="body2" > Size: &nbsp; {TotalData.shoeSize} </Typography>
                                <Typography variant="body2" > Quantity: {TotalData.Quantity} </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} sm={6} xs={6} md={6}>
                            <Typography variant="body1" fontWeight="bold"> Your Bag </Typography>
                            <Typography variant="body2" > Item </Typography>
                            <Typography variant="body2" fontWeight="bold"> Color </Typography>
                            <Typography variant="body2" > Total Product Cost </Typography>
                            <Typography variant="body2" > Total Delievery Cost  </Typography>
                            <div style={{ height: '0px ', margin: '10px 0px', width: "100%", border: '1px solid black' }}></div>
                            <Typography variant="body2" fontWeight="bold"> Total:   </Typography>
                            <Typography variant="body2" > ( Inclusive Of Tax )  </Typography>
                            <Button variant='outlined' fullWidth 
                                style={{ background: "black", color: 'white', fontWeight: 'bold', width: "100%",marginTop:"1rem" }}
                            onClick={ ()=> {
                                navigate("/viewbag") }}
                            >  VIEW BAG &nbsp;  &nbsp;  &nbsp;→ </Button>
                            <Button  fullWidth 
                                style={{ background: "white", color: 'black', fontWeight: 'bold', width: "100%", marginTop:'1rem',border:'1px solid black' }}
                                onClick={() => {
                                    navigate("/checkout")
                                }}
                            >  CHECK OUT &nbsp;  &nbsp;  &nbsp;→ </Button>
                        </Grid>

                    </Grid>
                </Box>
            </Dialog>
        </>
    );
}
export default AddToCartBox;