import { Dialog, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import Registration from './registration/RegistrationForm';
import LogIn from './login/Login';


const Authenticate = (props) =>{        //  PROPS RECEIVE FROM HEADER ICONS FILE 
    const {openSignIn, setOpenSignIn} = props;

    const [formSelect, setFormSelect] = useState(1);
    // console.log('porps is ', props );
    return(
        <>
            <Dialog open={openSignIn} onClose={()=>{ setOpenSignIn(false) }} >
                {formSelect === 1 && <LogIn formSelect={formSelect} setFormSelect={setFormSelect} /> }
                {formSelect === 2 && <Registration formSelect={formSelect} setFormSelect={setFormSelect} />}
            </Dialog>
            
        </>
    );
}
export default Authenticate;