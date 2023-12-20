import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { UserDetailsContext } from '../context/UserContext';

const pages = ['Home', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Logout'];

function Header() {


    const onHandleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload()
    }

    let { user } = useContext(UserDetailsContext)

    return (
        <AppBar position="static" sx={{ boxShadow: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>

                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <Typography marginRight={2}>
                            {user?.status ? user.username : null}
                        </Typography>
                        {
                            user?.status ?
                                <Button color='secondary' variant='outlined' onClick={onHandleLogout}>Logout</Button>
                                : null
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
