import React from "react";
import { Grid, Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { ShowPaperAction } from "../../../../../../store/action/ShowPaper";


const CommonCard = ({ HeadImage, bodyImage, BrandsOriginal }) => {     // PROPS RECEIVING FROM BRANDPAPER PAGE FILE
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            <Box>
                <Grid item lg={12} md={12} sm={12} xs={12} style={{ width: '100%', height: '100%' }}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <img src={HeadImage} style={{ width: '100%', objectFit: 'cover' }} />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <img src={bodyImage} style={{ width: '100%', objectFit: 'cover' }} />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        {BrandsOriginal.map((data) => {
                            return (
                                <Typography key={data}
                                    variant="subtitle2"
                                    onClick={() => {
                                        navigate("/")
                                        dispatch(ShowPaperAction(false))
                                    }}
                                    style={{ lineHeight: '1.5', cursor: 'pointer' }}> {data} </Typography>
                            );
                        })}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default CommonCard;