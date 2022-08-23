import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StepConnector from '@mui/material/StepConnector';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Container';
import Container from '@mui/material/Container';


function ProductDescription() {

    const { state } = useLocation();
    const { id, name, price, quantity, description } = state;
    // The product's ids that will be suggested as a "you may also like".
    const suggestions = [];
    const theme = createTheme();


    for(let i=0; i<4; i++) {
      let number = Math.floor(Math.random()*15)+1;
      while ( number == id || suggestions.includes(number) ) {
        number = Math.floor(Math.random()*16);
      }
      suggestions[i] = number;
    }

  return (
    <div>
      <Typography
        variant= 'h5'
        align= 'center'
        style={{marginTop: 50}}
        paragraph="true"
        
        sx={{
          mr: 2,
          letterSpacing: '.2rem',
          fontFamily: 'monospace',
          textDecoration: 'none',
          color: '#4C5B54',
        }}
        >
          {name.toUpperCase()} <tab />  
          {price}$
      </Typography>
      <StepConnector orientation="vertical" style={{marginRight: "100px", marginLeft: "170px"}}></StepConnector>
      <div style={{display: "flex", flexDirection: "row", padding: "30px", paddingBottom: "70px"}}>
        <div style={{width: "50%"}} align="center">
          <img src={require("../assets/products/"+id.toString()+".webp")} alt="plant picture" style={{width: "400px", height: "550px"}}/>
        </div>
        <div style={{width: "50%", marginLeft: "30px"}} align="center">
            <Typography
                variant= 'body2'
                align= 'center'
                fontSize= {21}
                paragraph="true"
                sx={{
                    mr: 2,
                    width: 450,
                    fontWeight: 3,
                    padding: 10,
                    paddingBottom:3,
                    paddingTop: 0,
                    paddingLeft: 0,
                    fontFamily: 'monospace',
                    // paddingBottom: 3,
                    // fontFamily: 'monospace',
                    // color: '#758A7F',
                    color:'#5F6B65',
                    textDecoration: 'none',
                }}
                >
                  <h3 style={{ margin: 10 }}>OVERVIEW</h3>
                  {description}
            </Typography>
          <Button variant="outlined" style={{color: "#B7FD0B", borderColor: "#B7FD0B"}} href="/accessories">Add to Cart TODO quantity</Button>
        </div>
      </div>
      <StepConnector orientation="vertical" style={{marginRight: "100px", marginLeft: "170px"}}></StepConnector>
      <ThemeProvider theme={theme}>
        <Container sx={{ padding: 8, width: 1000 }}>
          <Grid container spacing={4}>
          <Typography
                fontSize= {21}
                paragraph="true"
                sx={{
                    mr: 2,
                    margin: 0,
                    width: 450,
                    paddingLeft: 1,
                    fontFamily: 'monospace',
                    color:'#5F6B65',
                    textDecoration: 'none',
                }}
                >
                  <h3>You May Also Like</h3>
        </Typography>
                <Grid container spacing={4}>
                  {suggestions.map(product => {
                    console.log("got here")
                    // setProductId(5);
                    // productId = product.id;
                    return (
                      <Grid item xs={12} sm={6} md={3} key={product.id}> 
                        <Card
                          sx={{ height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '0px' }}
                        >   
                          <CardContent sx={{ flexGrow: 1 }}>
                            <img src={require("../assets/products/"+product.toString()+".webp")} alt="plant picture" style={{height: "200px", width: "100%"}}/>
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
                            <Box style={{ justifyItems: "end", marginRight: "0px", paddingRight: "0px", width: "84%" }}>
                              <Button size="small" style={{ color:"#A4D074" }}>View</Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                      )})}
                </Grid>
          </Grid>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default ProductDescription;
