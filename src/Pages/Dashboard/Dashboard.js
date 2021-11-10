import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import useAuth from '../../Components/Hooks/useAuth';
import Myorder from '../../Components/Myorder/Myorder';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddAdmin from './AddAdmin/AddAdmin';
import AdminRoute from '../../Components/PrivateRoute/AdminRoute'


const drawerWidth = 250;

function Dashboard(props) {

    const { admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List >
            <Link to={`${url}/my-order`}>
                <ListItem sx={{ fontWeight: 600 }} button>
                    <ListItemIcon>
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                    My Order
                </ListItem>
            </Link>
                <ListItem sx={{ fontWeight: 600 }} button>
                    <ListItemIcon>
                        <RateReviewIcon />
                    </ListItemIcon>
                    Review
                </ListItem>
                <ListItem sx={{ fontWeight: 600 }} button>
                    <ListItemIcon>
                        <MonetizationOnIcon />
                    </ListItemIcon>
                    Pay
                </ListItem>
                <Divider />
                {
                    admin && <List> <ListItem sx={{ fontWeight: 600 }} button>
                        <ListItemIcon>
                            <MonetizationOnIcon />
                        </ListItemIcon>
                        Manage All Orders
                    </ListItem>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <MonetizationOnIcon />
                            </ListItemIcon>
                            Add A Product
                        </ListItem>

                        <Link to={`${url}/makeAdmin`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <MonetizationOnIcon />
                            </ListItemIcon>
                            Add Admin
                        </ListItem>
                        </Link>


                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <MonetizationOnIcon />
                            </ListItemIcon>
                            Manage Products
                        </ListItem>
                    </List>
                }


            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: 'black',
                    py: 1
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="p" noWrap component="button" sx={{ ml: 2, fontWeight: 600 }}>
                        <Link to='/'> Home Page </Link>
                    </Typography>
                    <Typography variant="p" noWrap component="button" sx={{ ml: 3, fontWeight: 600, color: 'yellow' }}>
                        Logout
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box >
                <Switch>
                        <Route exact path={path}>
                           <h2>This is DashBoard</h2>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <AddAdmin />
                        </AdminRoute>
                        <AdminRoute path={`${path}/my-order`}>
                            <Myorder />
                        </AdminRoute>
                    </Switch>

                </Box>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;