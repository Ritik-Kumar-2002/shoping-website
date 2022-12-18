import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import RegistrationSchema from '../../validationSchemas/RegistrationSchema';


const Registration = (props) => {

    const {formSelect, setFormSelect} = props;
    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
         }, 
         validationSchema: RegistrationSchema,
         onSubmit: (values)=> { 
            console.log("value is ", values)
            formik.resetForm();
        }
    })
    console.log("formik error is  ", formik.errors);
    return (
        <>
            <Box style={{ padding: '2rem' }}>

                <Formik>
                    <Form onSubmit={formik.handleSubmit}>
                        <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '1rem' }}>Create Account </Typography>
                        <Grid container item lg={12} md={12} sm={12} xs={12} spacing={1}>
                            <Grid item container lg={12} md={12} sm={12} xs={12} spacing={2}>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <TextField
                                        label="First Name"
                                        placeholder='First Name'
                                        name="firstName"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        fullWidth />
                                        {formik.errors != null && <p style={{color:'red'}}>{formik.errors.firstName} </p> }
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <TextField
                                        label="Last Name"
                                        placeholder='Last Name'
                                        name="lastName"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        fullWidth />
                                        {formik.errors != null && <p style={{color:'red'}}>{formik.errors.lastName} </p> }
                                </Grid>
                            </Grid>

                            {/* ------------------------------------ */}
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField
                                    label="Phone"
                                    placeholder='Phone'
                                    name="phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    fullWidth
                                />
                                {formik.errors != null && <p style={{color:'red'}}>{formik.errors.phone} </p> }
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField
                                    label="Email"
                                    placeholder='Email'
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    fullWidth
                                />
                                {formik.errors != null && <p style={{color:'red'}}>{formik.errors.email} </p> }
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField
                                    label="Password"
                                    placeholder='Password'
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    fullWidth
                                />
                                {formik.errors != null && <p style={{color:'red'}}>{formik.errors.password} </p> }
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField
                                    label="Retype Password"
                                    placeholder='Retype Password'
                                    name="confirmPassword"
                                    onChange={formik.handleChange}
                                    value={formik.values.confirmPassword}
                                    fullWidth
                                />
                                {formik.errors != null && <p style={{color:'red'}}>{formik.errors.confirmPassword} </p> }
                            </Grid>
                            <Grid item lg={12} sm={12} md={12} xs={12} >
                               <Button 
                                    variant="contained"
                                    fullWidth
                                    style={{ background: '#5c5c63' }}
                                    type="submit
                                "> Create Account </Button> 
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>

                {/* ------------------------------------------------ */}

                <Grid item lg={12} sm={12} md={12} xs={12} mt={2}>
                    <Grid item container lg={8} sm={8} md={8} xs={8} style={{ margin: "auto" }}>
                        <Grid item lg={10} sm={10} md={10} xs={10} >
                            <Typography> Already have an account ? </Typography>
                        </Grid>
                        <Grid item lg={2} sm={2} md={2} xs={2} >
                            <Typography style={{cursor: 'pointer'}} onClick={()=> setFormSelect(1)}> Sign in </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}
export default Registration;