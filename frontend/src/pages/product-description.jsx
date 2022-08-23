import mainPic from '../assets/greenWall.jpeg';
import productsPic from '../assets/products.jpg';
import accessoriesPic from '../assets/accessories.jpg';
import plantCarePic from '../assets/plantCare.jpg';
import lovePlantPic from '../assets/lovePlant.jpg';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
import StepConnector from '@mui/material/StepConnector';
import { useLocation } from 'react-router-dom';
import ProductsJson from '../dataBases/productsDB.json';


const paragraphStyle = (text) => (
  <Typography
  variant= 'subtitle1'
  align= 'center'
  fontSize= {21}
  paragraph="true"
  sx={{
    mr: 2,
    fontWeight: 100,
    color: 'inherit',
    textDecoration: 'none',
  }}
  >
    {text}
  </Typography>
)

const titleStyle = (title, titleType) => (
  <Typography
  variant= {titleType}
  align= 'center'
  style={{marginTop: 50}}
  paragraph="true"
  sx={{
    mr: 2,
    letterSpacing: '.2rem',
    fontWeight: '700',
    color: 'inherit',
    textDecoration: 'none',
  }}
  >
    {title}   
  </Typography>
)

function ProductDescription() {
    const { state } = useLocation();
    const { id } = state;
    console.log(ProductsJson[0]);

  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", padding: "40px", height: "600px"}}>
        <div style={{width: "50%"}} align="center">
          <img src={accessoriesPic} alt="BigCo Inc. logo" style={{width: "70%", height:"100%"}}/>
        </div>
        <div style={{width: "50%", marginLeft: "30px"}} align="center">
          {titleStyle("ACCESSORIES", "h6")}
          {/* {paragraphStyle(accessories)} */}
          <Button variant="outlined" style={{color: "#B7FD0B", borderColor: "#B7FD0B"}} href="/accessories">SHOP ACCESSORIES</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
