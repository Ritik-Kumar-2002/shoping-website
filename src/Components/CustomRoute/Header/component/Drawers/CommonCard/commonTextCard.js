import { Typography, Grid, Box } from '@mui/material';
import React from 'react'
import { ShowPaperAction } from '../../../../../../store/action/ShowPaper';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CommonTextCard = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { heading, bodyImage, datalist } = props;
    return (
        <Box key={Math.random()}>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{ width: '100%', height: '100%' }}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> {heading} </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <img src={bodyImage} style={{ width: '100%', objectFit: 'cover' }} />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    {datalist.map((data) => {
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
    );
}
export default CommonTextCard;