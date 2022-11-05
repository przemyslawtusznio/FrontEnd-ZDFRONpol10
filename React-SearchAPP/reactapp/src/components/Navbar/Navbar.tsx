import {useState} from 'react'
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
import { Link } from 'react-router-dom'
import { NavbarProps } from '../../Helpers/interfaces';

const pages = ['Home', 'Search'];
const Navbar: React.FC<NavbarProps> = ({loggedIn}) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    // const handleCloseUserMenu = () => {
    //   setAnchorElUser(null);
    // };
  
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Link to='/' style={{textDecoration:"none", color:"black"}}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                <Link to='/search' style={{textDecoration:"none", color:"black"}}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Search</Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a" //może być p, h1 zależy czego chcemy użyć (a ma href dlateho mamy w następnej linijce)
              href=""
              sx={{ //służy do stylowania elementów
                mr: 2, //margin right (ml, mb, mt) - zapis CSS skrócony do 2 liter
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Roboto',
                fontWeight: 100,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SDA NEWS
            </Typography> 
            <Box sx={{ flexGrow: 0 }}>
              {/* W zależności od stanu loggedIn, ustaw atrybut "to" elementu <Link>. Jeżeli loggedIn jest równe true ustaw atrybut "to" na "/user", jeżeli loggedIn jest fałszywe ustaw "to" na "/login". Użyj turnary operator inlinowo w Linku*/}
              <Link to={loggedIn ? '/user' : '/login'} style={{textDecoration:"none"}}>
              {/* Jeżeli loggedIn jest równe true wyświetl IconButton z Avatarem, jeżeli loggedIn jest równe false, wyświetl Button (z MUI, w sx'ach: my: 2, color white, display block) textContent Log in */}
              {
                loggedIn ? (<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>) : <Button sx={{my: 2, color:"white", display:"block"}}>Log in</Button>
              }
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  export default Navbar;