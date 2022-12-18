import { Typography, Grid, Box, TextField, InputAdornment, Button } from '@mui/material';
import React from 'react';
import { Email, Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik, Form, useFormik } from 'formik';
import logInValidation from '../../validationSchemas/loginSchema';


const LogIn = (props) => {
    const {formSelect, setFormSelect} = props;
    // console.log("props is login", formSelect, setFormSelect);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: logInValidation,
        onSubmit: (values) => {
            console.log('form submit  is ', values)
            formik.resetForm();
        }
    });
    // console.log("formik touch is ", formik.touched)
    //    console.log("form value is ", formik.values)
    return (
        <>

            <Box style={{ padding: '2rem' }}>
                <Formik >
                    <Form onSubmit={formik.handleSubmit}>
                        <Typography variant="h4" style={{ textAlign: 'center' }}> Welcome to Adidas </Typography>
                        <Grid container spacing={2} item lg={12} sm={12} md={12} xs={12}>
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <TextField
                                    label="Email"
                                    placeholder='Email'
                                    fullWidth
                                    name="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {formik.touched.email && formik.errors.email && <Typography variant='body2' style={{ color: 'red' }}> {formik.errors.email}</Typography>}
                            </Grid>
                            <Grid item lg={12} sm={12} md={12} xs={12}>
                                <TextField
                                    label="password"
                                    placeholder='password'
                                    fullWidth
                                    name="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <VisibilityOff />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {formik.touched.password && formik.errors.password && <Typography variant='body2' style={{ color: 'red' }}> {formik.errors.password}</Typography>}
                            </Grid>
                            <Grid item lg={12} sm={12} md={12} xs={12} >
                                <Button
                                    variant="contained"
                                    fullWidth
                                    style={{ background: '#5c5c63' }}
                                    type="submit"
                                > SignIn </Button>
                            </Grid>

                        </Grid>
                    </Form>
                </Formik>
                <Grid item lg={12} sm={12} md={12} xs={12}>
                    <Grid item container lg={6} sm={6} md={6} xs={6} margin="auto" spacing={2}>
                        <Grid item> <Typography variant="caption" style={{ cursor: "pointer" }}> Forgot Password ?</Typography> </Grid>
                        <Grid item> <Typography variant="caption" style={{ cursor: "pointer" }} onClick={()=> setFormSelect(2)}> Create Account </Typography> </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}
export default LogIn; 