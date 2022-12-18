import { Grid, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import React from "react";
import { ExpandMore, ArrowRightAlt } from '@mui/icons-material';
import { useNavigate } from "react-router";

const Return = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box>
                <Grid container item lg={9} md={10} sm={12} xs={12} style={{ margin: 'auto', marginTop: '100px' }}>
                    <Accordion style={{ width: '100%' }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> FAQ.  RETURN TIME AND COST </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid item container lg={12} md={12} sm={12} xs={12} spacing={3}>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> How many days do I have to return my order? </Typography>
                                    <Typography variant="body2"> You can return your online order free of charge within 30 days of receiving your order (excluding hype products such as the YEEZY collection which have a 7-day return period - which we explicitly point out during checkout). Please note: personalised items are made uniquely for you, and cannot be returned unless there is a manufacturing fault.</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> How much does it cost to return? </Typography>
                                    <Typography variant="body2"> Good news. Returning products doesn't cost a thing!. </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> How long does the return process take? </Typography>
                                    <Typography variant="body2"> It takes 3-5 days for your package to reach our warehouse and we try to process your return within 48 hours after arriving. We keep you posted via email on the progress and your refund. You can also track it through the link above. </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> I have lost my return label, how do I create a new one? </Typography>
                                    <Typography variant="body2"> A new return label will be provided in your online account and automatically emailed to you after finishing your online return request. </Typography>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ width: '100%' }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> FAQ.  REFUNDS </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid item container lg={12} md={12} sm={12} xs={12} spacing={3}>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> When will I get my refund? </Typography>
                                    <Typography variant="body2"> Once we've received the item(s) at our warehouse, we will process your return. From the moment we refund you, your bank still needs to process it. The amount of time this takes differs per bank and payment method but it takes approximately 14 days.</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}> I have used a voucher on an item I returned. Can I request a new voucher?  </Typography>
                                    <Typography variant="body2"> If you used a voucher that gave you a percentage discount (e.g. 10% off), the voucher can be replaced if you return the order, or part of it by simply contacting us. </Typography>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                {/* CSS IMPORT FORM APP.CSS FILE  */}

                <Grid container item lg={8} md={8} sm={8} xs={12} style={{margin: 'auto', marginTop: '50px'}}>
                    <Grid item container 
                        lg={6} md={6} sm={5} xs={12} 
                        style={{border: '2px solid black', cursor: 'pointer'}} 
                        p={1.2}
                        className="TextHover" 
                        onClick={()=> navigate('/help')}
                        >
                        <Grid item lg={10} md={10} sm={10} xs={10}>
                            <Typography style={{fontWeight:"bold"}}> NEED MORE INFORMATION FOR HELP ?</Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2}>
                            <ArrowRightAlt />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item lg={8} md={8} sm={8} xs={12} style={{margin: 'auto', marginTop: '50px'}}>
                    <Grid item container 
                        lg={3} md={3} sm={5} xs={12} 
                        style={{border: '2px solid black', cursor: 'pointer'}} 
                        p={1.2}
                        className="TextHover" 
                        onClick={()=> navigate('/help')}>
                        <Grid item lg={10} md={10} sm={10} xs={10}>
                            <Typography style={{fontWeight:"bold"}}> RETURN POLICY </Typography>
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2}>
                            <ArrowRightAlt />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default Return;