import {useEffect, useState, useContext } from 'react'
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
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import { NavbarProps } from '../../Helpers/interfaces';
import { ref, getDownloadURL } from "firebase/storage";
import { auth, storage } from '../../Helpers/firebaseConfig';
import { authContext } from '../../Helpers/authContext';


const pages = ['Home', 'Search'];

// 1. Stwórz stan profilePhoto, otypuj go tak żeby mógł przechowywać string albo undefined, wartość początkowa '/'
// 2. Wywołaj useEffect, będzie działać tylko na pierwszym renderze
// W UE:
// 3. Stwórz referencje do storage (taka sama jak w poprzednim zadaniu)
// 4. Wywołaj funkcję getDownloadURL, funkcja przyjmuje jako argument referenecje z poprzedniego punktu i importuje się ją z firebase/storage
// 5. Na getDownloadURL popednij thena, w tym thene wywołaj funkcję aktualizującą stan profilePhoto (pkt 1) i wrzuć do tego stanu to, co zostało ci zwrócone przez getDownloadURL
// 6. Dopisz catcha, console.error(err.message)
// 7. W Avatarze (u mnie linia 120), ustaw atrybut src na stan profilePhoto

const Navbar = () => {
  const loggedIn = useContext(authContext);
    const [profilePhoto, setProfilePhoto] = useState<string | undefined >('/');
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

    useEffect(() => {
      if (loggedIn && auth.currentUser) {
        const storageRef = ref(storage, `/users/${auth.currentUser.uid}/profilePhoto`);
        getDownloadURL(storageRef).then((url) => setProfilePhoto(url)).catch((err) => setProfilePhoto(undefined));
      }
    }, [loggedIn]);
  
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
                  <Avatar alt="Remy Sharp" src={profilePhoto} />
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