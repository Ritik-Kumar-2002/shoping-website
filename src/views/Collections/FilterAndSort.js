
import React from 'react';
import {Button} from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Box, Slider } from '@mui/material';

const FilterSort = () => {
    return (

        <div className="filter-wrap-style">
            <Accordion>
                <AccordionSummary>
                    <h3 className='heading3'>Prize</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="heading4"> Enter a Prize range </p>
                    <Grid container item spacing={2}>
                        <Grid item>
                            <TextField placeholder='Minimum Prize' type='number' />
                        </Grid>
                        <Grid item>
                            <TextField placeholder='Maximum Prize' type='number' />
                        </Grid>
                    </Grid>

                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary>
                    <h3 className='heading3'> FOOTWEAR TYPES </h3>
                </AccordionSummary>
                <AccordionDetails>
                    <Box >
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox />} label="SNKEAERS" />
                            <FormControlLabel required control={<Checkbox />} label="RUNNING SHOE" />
                            <FormControlLabel required control={<Checkbox />} label="SANDALS" />
                            <FormControlLabel required control={<Checkbox />} label="ANKLE BOOTS" />
                            <FormControlLabel required control={<Checkbox />} label="CAFT BOOTS" />
                            <FormControlLabel required control={<Checkbox />} label="THIGH BOOTS" />
                            <FormControlLabel required control={<Checkbox />} label="KNEE BOOTS" />
                            <FormControlLabel required control={<Checkbox />} label="HIGH HEELS" />
                            <FormControlLabel required control={<Checkbox />} label="SPORT SHOES" />
                            <FormControlLabel required control={<Checkbox />} label="DERBY" />
                            <FormControlLabel required control={<Checkbox />} label="OXFORD" />
                            <FormControlLabel required control={<Checkbox />} label="LOAFER" />
                            <FormControlLabel required control={<Checkbox />} label="FLIP FLOPS" />
                        </FormGroup>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary>
                    <h3 className='heading3'>SELECT GENDER</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <Box>
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox />} label="MENS" />
                            <FormControlLabel required control={<Checkbox />} label="WOMENS" />
                            <FormControlLabel required control={<Checkbox />} label="KIDS" />
                        </FormGroup>
                    </Box>
                </AccordionDetails>
            </Accordion>
        
            <div style={{width:'100%', display:'flex', justifyContent:'space-evenly', marginTop:'1rem'}}> 
                <Button variant="contained" > Apply </Button> 
                <Button variant="contained" > Clear </Button> 
            </div>
            
        </div>
    );
}
export default FilterSort;