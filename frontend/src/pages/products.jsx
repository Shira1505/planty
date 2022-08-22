import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Container';
import ProductsJson from '/Users/shiracohen/Desktop/planty/frontend/src/productsDB.json';
import product1 from '/Users/shiracohen/Desktop/planty/frontend/src/assets/products/1.webp';
import product2 from '/Users/shiracohen/Desktop/planty/frontend/src/assets/products/2.webp';




function Products() {

const theme = createTheme();

const productPic = (productId) => {
  const pic = "product" + productId.toString();
  return pic;
}

const photos = [
  "/Users/shiracohen/Desktop/planty/frontend/src/assets/products/1.webp"
];



  return (
    <ThemeProvider theme={theme}>
        <Container sx={{ padding: 8 }}>
          <Grid container spacing={4}>
                <Grid container spacing={4}>
                  {ProductsJson.map(product => {
                    return (
                      <Grid item xs={12} sm={6} md={3} key={product.id}> 
                        <Card
                          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >   
                          <CardContent sx={{ flexGrow: 1 }}>
                            <CardMedia
                              component="img"
                              image={product1}
                              style={{ height: "270px" }}
                            ></CardMedia>
                            <Typography variant="h5" component="h6"
                              sx={{
                              mr: 2,
                              mt: 2,
                              mb: 2,
                              fontFamily: 'monospace',
                              fontSize: '1.2rem',
                              color: 'inherit',
                              textDecoration: 'none',
                            }}>
                              {product.productName}
                              <br />
                              {product.price}$
                            </Typography>
                            <Box style={{ justifyItems: "end", marginRight: "0px", paddingRight: "0px", width: "80%" }}>
                              <Button size="small" style={{ color:"#A4D074" }}>View</Button>
                              <Button size="small" style={{ color:"#A4D074"}}>Add to cart</Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                      )})}
                </Grid>
          </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Products;
