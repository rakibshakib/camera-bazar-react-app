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
import AdminRoute from '../../Components/PrivateRoute/AdminRoute';
import AddReview from '../../Components/AddReview/AddReview'
import Payment from '../../Components/Payment/Payment';
import ManageAllOrders from '../../Components/ManageAllOrders/ManageAllOrders';
import AddCamera from '../../Components/AddCamera/AddCamera';
import ManageProduct from '../../Components/ManageProduct/ManageProduct';
import { FaUserAstronaut, HiOutlineMail } from "react-icons/all";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router-dom';


const drawerWidth = 250;

function Dashboard(props) {
    const { admin, logout, user } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const history = useHistory();

    const logoutHandler = () => {
        logout();
        history.push(`/home`);
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            {
                !admin && <List > <Link to={`${url}/my-order`}>
                    <ListItem sx={{ fontWeight: 600 }} button>
                        <ListItemIcon>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        My Order
                    </ListItem>
                </Link>

                    <Link to={`${url}/add-review`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            Review
                        </ListItem>
                    </Link>
                    <Link to={`${url}/payment`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <MonetizationOnIcon />
                            </ListItemIcon>
                            Pay
                        </ListItem>
                    </Link>
                </List>
            }
            <Divider />
            {
                admin && <List>
                    <Link to={`${url}/manageAllOrder`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            Manage All Orders
                        </ListItem>
                    </Link>
                    <Link to={`${url}/add-camera`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <AddAPhotoIcon />
                            </ListItemIcon>
                            Add Camera
                        </ListItem>
                    </Link>
                    <Link to={`${url}/makeAdmin`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            Add Admin
                        </ListItem>
                    </Link>

                    <Link to={`${url}/manage-product`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            Manage Products
                        </ListItem>
                    </Link>
                </List>
            }


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
                    py: 0.5
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
                    <Typography variant="p" noWrap component="button" sx={{ ml: 2, fontWeight: 500 }}>
                        <Link to='/'> <HomeIcon />  Home Page </Link>
                    </Typography>
                    <Typography variant="p" noWrap component="button" sx={{ ml: 3, fontWeight: 500, color: 'yellow' }} onClick={logoutHandler}>
                    <LogoutIcon /> Logout
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
                            <Box>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 py-5 justify-items-center md:border-2 rounded-3xl text-base md:text-xl font-semibold'>
                                    <h2 className='flex items-center'> <FaUserAstronaut className='inline-block mr-2' /> UserName: <span className=' md:ml-3'> {user?.displayName || "Admin Name"}</span></h2>
                                    <h2 className='flex items-center'> <HiOutlineMail className='inline-block mr-2' /> UserEmail: <span className=' md:ml-3'> {user?.email || "Admin Email"}</span></h2>
                                </div>
                            </Box>

                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <AddAdmin />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrder`}>
                            <ManageAllOrders />
                        </AdminRoute>
                        <AdminRoute path={`${path}/add-camera`}>
                            <AddCamera />
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-product`}>
                            <ManageProduct />
                        </AdminRoute>
                        <Route path={`${path}/add-review`}>
                            <AddReview />
                        </Route>
                        <Route path={`${path}/my-order`}>
                            <Myorder />
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment />
                        </Route>
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
