import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import '../Footer/component/FooterDetail';
import { CompanyInfo, Product, Sports, Collections, Support } from "../Footer/component/FooterDetail";
const Footer = () =>{

    return(
        <>
            <Box>
                <Grid container item lg={10} md={10} sm={12} xs={12} style={{margin:'30px auto', display: 'flex', justifyContent:'space-around'}}>
                    <Grid item >
                    <Typography variant="h6" style={{fontWeight: 'bold'}}> PRODUCTS </Typography>
                       {Product.map((data)=>{
                        return (
                            <div key={Math.random()}>
                                <Typography variant="body2" style={{cursor:'pointer', padding:'3px'}} key={data.name}> {data.name} </Typography>
                            </div>
                        );
                       })}
                    </Grid>

                    <Grid item >
                    <Typography variant="h6" style={{fontWeight: 'bold'}}> SPORTS </Typography>
                       {Sports.map((data)=>{
                        return (
                            <div key={Math.random()}>
                                <Typography variant="body2" style={{cursor:'pointer', padding:'3px'}} key={data.name}> {data.name} </Typography>
                            </div>
                        );
                       })}
                    </Grid>

                    <Grid item >
                    <Typography variant="h6" style={{fontWeight: 'bold'}}> COLLECTIONS </Typography>
                       {Collections.map((data)=>{
                        return (
                            <div key={Math.random()}>
                                <Typography variant="body2" style={{cursor:'pointer', padding:'3px'}} key={data.name}> {data.name} </Typography>
                            </div>
                        );
                       })}
                    </Grid>

                    <Grid item >
                    <Typography variant="h6" style={{fontWeight: 'bold'}}> SUPPORTS </Typography>
                       {Support.map((data)=>{
                        return (
                            <div key={Math.random()}>
                                <Typography variant="body2" style={{cursor:'pointer', padding:'3px'}} key={data.name}> {data.name} </Typography>
                            </div>
                        );
                       })}
                    </Grid>

                    <Grid item >
                    <Typography variant="h6" style={{fontWeight: 'bold'}}> COMPANY INFO </Typography>
                       {CompanyInfo.map((data)=>{
                        return (
                            <div key={Math.random()}>
                                <Typography variant="body2" style={{cursor:'pointer', padding:'3px'}} key={data.name}> {data.name} </Typography>
                            </div>
                        );
                       })}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Footer;