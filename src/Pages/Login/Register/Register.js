import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Components/Hooks/useAuth';
import cameraBg from '../../../images/cameraBg.jpg';
import BackToHome from '../../../Components/BackBtn/BackToHome';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[700],
    '&:hover': {
        backgroundColor: yellow[700],
    },
}));

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className='banner' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
rgba(0, 0, 0, 0.6)), url(${cameraBg})`
        }}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 5 }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: "white", pt: 5, fontSize: 25 }} variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit} className='bg-white py-5 px-2 rounded-2xl my-5'>
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <ColorButton sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Register</ColorButton>
                         <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Box>
                </Box>
            </Container>
            <BackToHome />
        </div>
    )
}

export default Register
