import React from 'react'
import { Grid, Box, TextField, Typography } from '@mui/material';

const ShippingForm = () => {
    return (
        <>
            <Grid item container p={2} rowSpacing={3} lg={12} md={12} sm={12} xs={12}>
                <Grid item container spacing={1} lg={12} md={12} sm={12} xs={12}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            fullWidth
                            required
                            placeholder='First Name'
                            label='First Name'
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            fullWidth
                            required
                            placeholder='Last Name'
                            label='Last Name'
                        />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        fullWidth
                        required
                        placeholder='Street Address'
                        label='Street Address'
                    />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField
                        fullWidth
                        required
                        placeholder='Landmark'
                        label='Landmark'
                    />
                </Grid>
                <Grid item container lg={12} md={12} sm={12} xs={12} spacing={1}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            fullWidth
                            placeholder='Additional Information'
                            label='Additional Information'
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            fullWidth
                            required
                            placeholder='City'
                            label='City'
                        />
                    </Grid>
                </Grid>
                <Grid item container lg={12} md={12} sm={12} xs={12} spacing={1}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            fullWidth
                            required
                            placeholder='State'
                            label='State'
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <TextField
                            fullWidth
                            required
                            placeholder='Pin Code'
                            label='Pin Code'
                        />
                    </Grid>
                </Grid>                
            </Grid>
        </>
    );
}
export default ShippingForm;