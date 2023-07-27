import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useNavigate } from 'react-router-dom';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
export default function Sidebar() {
    const navigate =useNavigate();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key="sample" disablePadding>
                    <ListItemButton onClick={()=>navigate('/')}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home" primaryTypographyProps={{fontSize:"20px"}} />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem key="sa" disablePadding>
                    <ListItemButton onClick={()=>navigate('/customer')}>
                        <ListItemIcon>
                            <PeopleAltIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Customer support" primaryTypographyProps={{fontSize:"20px"}}/>
                    </ListItemButton>
                    
                </ListItem>
                <ListItem key="sampl" disablePadding>
                <ListItemButton onClick={()=>navigate('/safety')}>
                    <ListItemIcon>
                        <HealthAndSafetyOutlinedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Safety"primaryTypographyProps={{fontSize:"20px"}} />
                </ListItemButton>
                
            </ListItem>
            <ListItem key="samp" disablePadding>
            <ListItemButton onClick={()=>navigate('/about')}>
                <ListItemIcon>
                    <SupportAgentIcon/>
                </ListItemIcon>
                <ListItemText primary="About"primaryTypographyProps={{fontSize:"20px"}} />
            </ListItemButton>
            
        </ListItem>

            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <MenuIcon
                        sx={{ cursor: "pointer" }}
                        onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}