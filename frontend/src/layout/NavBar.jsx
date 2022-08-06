import './NavBar.css';
import { AppBar, Toolbar, Typography, Stack, Button, Input } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="sticky" style={{ background: 'black' }}>
      <Toolbar> 
        <Typography variant="h6" component="div">
          PLANTY
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button id="1" color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
          <Button color="inherit">Products</Button> 
          <Button color="inherit">Accessories</Button> 
          <Button color="inherit">Plant Care</Button>
          <Button color="inherit">Find My Match</Button> 
          <Button color="inherit">Cart</Button>
        </Stack>
        <Input type="search" placeholder="Search"></Input>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;