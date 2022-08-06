import './navBar.css';
import { AppBar, Toolbar, Typography, Stack, Button, Input } from '@mui/material';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="sticky" style={{ background: 'black' }}>
      <Toolbar> 
        <Typography variant="h6" component="div">
          PLANTY
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link to="/login" color="inherit">
              <button type="button">
                    Login
              </button>
          </Link>
          <Link to="/signup" color="inherit">
              <button type="button">
                    Sign Up
              </button>
          </Link>
          

          {/* <Button color="inherit">Products</Button> 
          <Button color="inherit">Accessories</Button> 
          <Button color="inherit">Plant Care</Button>
          <Button color="inherit">Find My Match</Button> 
          <Button color="inherit">Cart</Button> */}
        </Stack>
        <Input type="search" placeholder="Search"></Input>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;