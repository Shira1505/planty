import './App.css';
import mainPic from './assets/greenWall.jpeg';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const intro = 'In Planty we believe in the power of plants. We supply  plants  and  accessories for any and all occasions as a way to treat yourself or to show love to your dear ones. We are delighted and grateful to be bringing the love of nature accross Israel.'
const products = 'We supply happy and healthy plants that were planted and grown under professional supervision.'

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

function App() {
  return (
    <div>
      <img src={mainPic} alt="BigCo Inc. logo" style={{ width: '100%'}}/>
      <Container>
      <Typography
        variant= 'subtitle1'
        align= 'center'
        style={{marginTop: 50}}
        paragraph="true"
        sx={{
          mr: 2,
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
        >
          <h1>PLANTY IS ABOUT BLENDING THE SCIENCE OF HORTICULTURE WITH THE ART OF NATURE</h1>      
        </Typography>
        </Container>
        <Container style={{ width: '48%', marginBottom: 50}} >
        {paragraphStyle(intro)}
        </Container>

        <Container style={{ width: '48%', marginBottom: 50}} >
        <Typography
        variant= 'subtitle1'
        align= 'center'
        fontSize= {21}
        paragraph="true"
        sx={{
          mr: 2,
          letterSpacing: '.2rem',
          fontWeight: 100,
          color: 'inherit',
          textDecoration: 'none',
        }}
        >
          <h4>PRODUCTS</h4>
        </Typography>
        {paragraphStyle(products)}
        </Container>
    </div>
  );
}

export default App;
