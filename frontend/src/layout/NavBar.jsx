import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3, BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const pages = [
  {name: 'Login', route: "/login"},
  // {name: 'Sign up', route: "/signup"},
  {name: 'Products', route: "/products"},
  {name: 'Accessories', route: "/accessories"},
  {name: 'Plant Care', route: "/plant-care"},
  {name: 'Find My Match', route: "/find-my-match"},

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderNavBarLinks =  () => (
    pages.map((navBarLink) => 
      <MenuItem key={navBarLink.name} onClick={handleCloseNavMenu}>
        <Link to={navBarLink.route} style={{textDecoration: "none", color:"#748E81" }}>
          <Typography textAlign="center">{navBarLink.name.toUpperCase()}</Typography>
        </Link>
      </MenuItem>
    )
  )

  

  return (
    <AppBar position="sticky" style={{ color: '#748E81', background: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Button
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <GiHamburgerMenu sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            </Button>

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
              {renderNavBarLinks()}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO2
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {renderNavBarLinks()}
          </Box>
            TODO: add search and cart here 
            <BsCart3 />
            <VscAccount />
            <BsSearch />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;


