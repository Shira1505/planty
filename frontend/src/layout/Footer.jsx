import Image from '/Users/shiracohen/Desktop/planty/frontend/src/components/BazarImage';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from '@mui/material/styles/styled';
import Link from '@mui/material/Link';

const StyledLink = styled('a')(({
    theme
}) => ({
    position: 'relative',
    display: 'block',
    padding: '0.3rem 0rem',
    color: theme.palette.grey[500],
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
        color: theme.palette.grey[100]
    }
}));

const Footer = () => {
    return (
        <footer>
            <Box bgcolor="#000000">
                <Container sx={{
                    p: '1rem',
                    color: 'white'
                }}>
                    <Box py={10} overflow="hidden">
                        <Grid container spacing={3}>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                                <a href="https://itsjuly.com"> 
                                    <Image mb={2.5} src={`${process.env.REACT_APP_BASENAME_NEW}/assets/images/logo-white.svg`} alt="logo" />
                                </a>
                            </Grid>
                            <Grid item lg={2} md={6} sm={6} xs={12}>
                                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white" fontFamily="Playfair Display">
                                    About Us
                                </Box>

                                <div>
                                    {aboutLinks.map(({text, url}, ind) => (
                                        <StyledLink href={url} key={ind}>{text}</StyledLink>
                                    ))}
                                </div>
                            </Grid>
                            <Grid item lg={3} md={6} sm={6} xs={12}>
                                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" color="white" fontFamily="Playfair Display">
                                    Contact Us
                                </Box>
                                <Box py={0.6} color="grey.500">
                                    Email: <Link href="mailto:planty@gmail.com" target="_blank" sx={{color:'green'}}>planty@gmail.com</Link>
                                </Box>
                                <Box py={0.6} color="grey.500">
                                    Phone: +972-526455123
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

const aboutLinks = [{
    text: 'Terms & Conditions & Privacy Policy',
    url: '//itsjuly.com/blank'
}, {
    text: 'About Us',
    url: '//itsjuly.com/about'
}];


export default Footer;
