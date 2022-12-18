import React from 'react';
import { List, ListItem, Drawer, Paper, Grid, Select } from '@mui/material';
import { useDispatch } from 'react-redux/es/exports';
import { ShowPaperAction } from '../../../../../store/action/ShowPaper';
import BrandPaper from './BrandPaper/BrandPaper';
import OutletPaper from './outlet/outletPaper';
import SportPaper from './sport/SportPaper';
import CollectionPaper from './Collection/CollectionPaper';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MainDrawer = (props) => {
    const { open, CloseDrawer } = props
    const dispatch = useDispatch()
    const SelectedPageIs = useSelector((store)=> store.ShowSlectedPaperReducer);

    // console.log("open is and close drawer is ", open, CloseDrawer);
    // console.log('props is ', props);
    return (
        <>
            <Paper elevation={2} style={{ position: 'fixed', width: '100%' }}>
                <Grid>
                    {SelectedPageIs === "SPORTS" &&  <SportPaper />}
                    {SelectedPageIs === "BRANDS" && <BrandPaper />}
                    {SelectedPageIs === "COLLECTIONS" && <CollectionPaper />}
                    {/* <OutletPaper /> */}
                    
                </Grid>
            </Paper>
        </>
    );
}

export default MainDrawer;