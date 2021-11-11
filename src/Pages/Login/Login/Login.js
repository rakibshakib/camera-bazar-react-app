import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Components/Hooks/useAuth';
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

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, loginWithGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 5 }}>
                    <Box sx={{ width: '45%' }}>
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: "white" }}>
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit} className='py-5 px-1 bg-white rounded-lg my-2'>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                
                                label="Your Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                variant="standard" />

                            <ColorButton sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</ColorButton>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Login successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </form>

                        <ColorButton sx={{ width: '75%', m: 1 }} onClick={() => loginWithGoogle(location, history)} variant="contained">Login With Google</ColorButton>

                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Login
